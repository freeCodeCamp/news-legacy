---
author: Haseeb Qureshi
authorTwitter: https://twitter.com/hosseeb
authorFacebook: none
title: "That time I had to crack my own Reddit password"
subTitle: "(Kinda.)"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ZAFlM8eSiuGVRo9P-8L6MQ.jpeg
url: https://medium.freecodecamp.org/the-time-i-had-to-crack-my-own-reddit-password-a6077c0a13b4
id: the-time-i-had-to-crack-my-own-reddit-password-a6077c0a13b4
date: 2017-04-06T07:04:21.889Z
tags: [
	"Web Development",
	"Security",
	"Humor",
	"Tech",
	"Ruby"
]
---
# That time I had to crack my own Reddit password

## (Kinda.)











![](https://cdn-images-1.medium.com/max/2000/1*ZAFlM8eSiuGVRo9P-8L6MQ.jpeg)






Hack the planet, everybody.







I have no self-control.

Luckily, I know this about myself. This allows me to consciously engineer my life so that despite having the emotional maturity of a heroin-addicted lab rat, I’m occasionally able to get things done.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FgOH54eiriYIwM%2Fgiphy.gif&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="500" data-height="281" width="500" height="281" data-src="https://medium.freecodecamp.org/media/408c6e77705a7bba3ae26bf5bcf5afd1?postId=a6077c0a13b4" data-media-id="408c6e77705a7bba3ae26bf5bcf5afd1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FgOH54eiriYIwM%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






Mm, a waste of time!



I waste a lot of time on Reddit. If I want to procrastinate on something, I’ll often open a new tab and dive down a Reddit-hole. But sometimes you need to turn on the blinders and dial down distractions. 2015 was one of these times — I was singularly focused on improving as a programmer, and Redditing was becoming a liability.

I needed an abstinence plan.

So it occurred to me: how about I lock myself out of my account?

**Here’s what I did:**














I set a random password on my account. Then I asked a friend to e-mail me this password on a certain date. With that, I’d have a foolproof way to lock myself out of Reddit. (Also changed the e-mail for password recovery to cover all the bases.)

This should have worked.

Unfortunately it turns out, friends are very susceptible to social engineering. The technical terminology for this is that they are “nice to you” and will give you back your password if you “beg them.”





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FuB6rsQFg5yPzW%2F200.gif&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="435" data-height="326" width="435" height="326" data-src="https://medium.freecodecamp.org/media/8ccfe8f832a8c9c67a077fb06cd9d217?postId=a6077c0a13b4" data-media-id="8ccfe8f832a8c9c67a077fb06cd9d217" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FuB6rsQFg5yPzW%2F200.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






Don’t look at me like that.



After a few rounds of this failure mode, I needed a more robust solution. A little Google searching, and I came across this:

























Looks legit.



Perfect — an automated, friend-less solution! (I’d alienated most of them by now, so that was a big selling point.)

A bit sketchy looking, but hey, any port in a storm.














For a while I set this up this routine — during the week I’d e-mail myself my password, on the weekends I’d receive the password, load up on internet junk food, and then lock myself out again once the week began. It worked quite well from what I remember.

Eventually I got so busy with programming stuff, I completely forgot about it.

### **Cut to two years later.**

I’m now gainfully employed at Airbnb. And Airbnb, it so happens, has a large test suite. This means waiting, and waiting of course means internet rabbit holes.

I decide to scrounge up my old account and find my Reddit password.














Oh no.That’s not good.

I didn’t remember doing this, but I must have gotten so fed up with myself that **I locked myself out until 2018**. I also set it to “hide,” so I couldn’t view the contents of the e-mail until it’s sent.

What do I do? Do I just have to create a new Reddit account and start from scratch? But that’s _so much work._

I could write in to LetterMeLater and explain that I didn’t mean to do this. But they would probably take a while to get back to me. We’ve already established I’m wildly impatient. Plus this site doesn’t look like it has a support team. Not to mention it would be an embarrassing e-mail exchange. I started brainstorming elaborate explanations involving dead relatives about why I needed access to the e-mail…

All of my options were messy. I was walking home that night from the office pondering my predicament, when suddenly it hit me.

**The search bar.**

I pulled up the app on my mobile phone and tried it:














Hmm.

Okay. So it’s indexing the subject for sure. What about the body?














I try a few letters, and voila. It’s definitely got the body indexed. Remember: the body consisted entirely of my password.

_Essentially, I’ve been given an interface to perform substring queries._ By entering in a string into the search bar, the search results will confirm whether my password contains this substring.

**We’re in business.**

I hurry into my apartment, drop my bag, and pull out my laptop.

Algorithms problem: you are given a function `substring?(str)`, which returns true or false depending on whether a password contains any given substring. _Given this function, write an algorithm that can deduce the hidden password._

### The Algorithm

So let’s think about this. A few things I know about my password: I know it was a long string with some random characters, probably something along the lines of `asgoihej2409g`. I _probably_ didn’t include any upper-case characters (and Reddit doesn’t enforce that as a password constraint) so let’s assume for now that I didn’t — in case I did, we can just expand the search space later if the initial algorithm fails.

We also have a subject line as part of the string we’re querying. And we know the subject is “password”.














Let’s pretend the body is 6 characters long. So we’ve got six slots of characters, some of which may appear in the subject line, some of which certainly don’t. So if we take all of the characters that aren’t in the subject and try searching for each of them, we know for sure we’ll hit a unique letter that’s in the password. Think like a game of Wheel of Fortune.



![](https://cdn-images-1.medium.com/max/1600/1*LOzh--_Ujutrh_OKhjfNaw.png)



We keep trying letters one by one until we hit a match for something that’s not in our subject line. Say we hit it.














Once I’ve found my first letter, I don’t actually know where in this string I am. But I know I can start building out a bigger substring by appending different characters to the end of this until I hit another substring match.

We’ll potentially have to iterate through every character in our alphabet to find it. Any of those characters could be correct, so on average it’ll hit somewhere around the middle, so given an alphabet of size `A`, it should average out to `A/2` guesses per letter (let’s assume the subject is small and there are no repeating patterns of 2+ characters).














I’ll keep building this substring until it eventually hits the end and no characters can extend it further.














But that’s not enough — most likely, there will be a prefix to the string that I missed, because I started in a random place. Easy enough: all I have to do is now repeat the process, except going backwards.














Once the process terminates, I should be able to reconstruct the password. In total, I’ll need to figure out`L` characters(where `L` is the length), and need to expend on average `A/2` guesses per character (where `A` is the alphabet size), so total guesses = `A/2 * L`.

To be precise, I also have to add another `2A` to the number of guesses for ascertaining that the string has terminated on each end. So the total is `A/2 * L + 2A`, which we can factor as `A(L/2 + 2)`.

Let’s assume we have 20 characters in our password, and an alphabet consisting of `a-z` (26) and `0–9` (10), so a total alphabet size of 36\. So we’re looking at an average of `36 * (20/2 + 2) = 36 * 12 = 432` iterations.

Damn.

This is actually doable.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F119cVU19ICcAKc%2Fgiphy.gif&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="435" data-height="433" width="435" height="433" data-src="https://medium.freecodecamp.org/media/cf2c01e9e9ff78a095663ad17f69c6a1?postId=a6077c0a13b4" data-media-id="cf2c01e9e9ff78a095663ad17f69c6a1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F119cVU19ICcAKc%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






Programming IRL



### The Implementation

First things first: I need to write a client that can programmatically query the search box. This will serve as my substring oracle. Obviously this site has no API, so I’ll need to scrape the website directly.

Looks like the URL format for searching is just a simple query string, `www.lettermelater.com/account.php?**qe=#{query_here}**`. That’s easy enough.

Let’s start writing this script. I’m going to use the Faraday gem for making web requests, since it has a simple interface that I know well.

I’ll start by making an API class.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/36596f46d8262ccacdfa09d2158a128e?postId=a6077c0a13b4" data-media-id="36596f46d8262ccacdfa09d2158a128e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Of course, we don’t expect this to work yet, as our script won’t be authenticated into any account. As we can see, the response returns a 302 redirect with an error message provided in the cookie.

<pre name="a2a0" id="a2a0" class="graf graf--pre graf-after--p">[10] pry(main)> Api.get(“foo”)</pre>

<pre name="fdce" id="fdce" class="graf graf--pre graf-after--pre">=> #<Faraday::Response:0x007fc01a5716d8</pre>

<pre name="cf8c" id="cf8c" class="graf graf--pre graf-after--pre">...</pre>

<pre name="6642" id="6642" class="graf graf--pre graf-after--pre">{“date”=>”Tue, 04 Apr 2017 15:35:07 GMT”,</pre>

<pre name="a4a3" id="a4a3" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“server”=>”Apache”,</pre>

<pre name="156a" id="156a" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“x-powered-by”=>”PHP/5.2.17",</pre>

<pre name="8cc6" id="8cc6" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“set-cookie”=>**”msg_error=You+must+be+signed+in+to+see+this+page.**”,</pre>

<pre name="1cd2" id="1cd2" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“location”=>”.?pg=account.php”,</pre>

<pre name="67ac" id="67ac" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“content-length”=>”0",</pre>

<pre name="f616" id="f616" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“connection”=>”close”,</pre>

<pre name="4e65" id="4e65" class="graf graf--pre graf--startsWithDoubleQuote graf-after--pre">“content-type”=>”text/html; charset=utf-8"},</pre>

<pre name="127e" id="127e" class="graf graf--pre graf-after--pre">**status=302**></pre>

So how do we sign in? We need to send in our [cookies](http://stackoverflow.com/questions/17769011/how-does-cookie-based-authentication-work) in the header, of course. Using Chrome inspector we can trivially grab them.














(Not going to show my real cookie here, obviously. Interestingly, looks like it’s storing `user_id` client-side which is always a great sign.)

Through process of elimination, I realize that it needs both `code` and `user_id` to authenticate me… sigh.

So I add these to the script. (This is a fake cookie, just for illustration.)





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/a4e98d75030aa2609ca07fe2b32fa92c?postId=a6077c0a13b4" data-media-id="a4e98d75030aa2609ca07fe2b32fa92c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








<pre name="4900" id="4900" class="graf graf--pre graf-after--figure">[29] pry(main)> Api.get(“foo”)  
=> “\n<!DOCTYPE HTML PUBLIC \”-//W3C//DTD HTML 4.01//EN\” \”[http://www.w3.org/TR/html4/strict.dtd\](http://www.w3.org/TR/html4/strict.dtd%5C)">\n<html>\n<head>\n\t<meta http-equiv=\”content-type\” content=\”text/html; charset=UTF-8\” />\n\t<meta name=\”Description\” content=\”LetterMeLater.com allows you to send emails to anyone, with the ability to have them sent at any future date and time you choose.\” />\n\t<meta name=\”keywords\” content=\”schedule email, recurring, repeating, delayed, text messaging, delivery, later, future, reminder, date, time, capsule\” />\n\t<title>LetterMeLater.com — Account Information</title>…</pre>

<pre name="6983" id="6983" class="graf graf--pre graf-after--pre">[30] pry(main)> _.include?(“Haseeb”)  
=> true</pre>

It’s got my name in there, so we’re definitely logged in!

We’ve got the scraping down, now we just have to parse the result. Luckily, this pretty easy — we know it’s a hit if the e-mail result shows up on the page, so we just need to look for any string that’s unique when the result is present. The string “password” appears nowhere else, so that will do just nicely.


















![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/27b7a2af717f603f7a98161484ebcc4a?postId=a6077c0a13b4" data-media-id="27b7a2af717f603f7a98161484ebcc4a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








That’s all we need for our API class. We can now do substring queries entirely in Ruby.

<pre name="dcf0" id="dcf0" class="graf graf--pre graf-after--p">[31] pry(main)> Api.include?('password')</pre>

<pre name="43ef" id="43ef" class="graf graf--pre graf-after--pre">=> true</pre>

<pre name="3288" id="3288" class="graf graf--pre graf-after--pre">[32] pry(main)> Api.include?('f')</pre>

<pre name="5c3b" id="5c3b" class="graf graf--pre graf-after--pre">=> false</pre>

<pre name="fc66" id="fc66" class="graf graf--pre graf-after--pre">[33] pry(main)> Api.include?('g')</pre>

<pre name="47b1" id="47b1" class="graf graf--pre graf-after--pre">=> true</pre>

Now that we know that works, let’s stub out the API while we develop our algorithm. Making HTTP requests is going to be really slow and we might trigger some rate-limiting as we’re experimenting. If we assume our API is correct, once we get the rest of the algorithm working, everything should just work once we swap the real API back in.

So here’s the stubbed API, with a random secret string:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/382d8610d09db7c99b989a8d27f2ed07?postId=a6077c0a13b4" data-media-id="382d8610d09db7c99b989a8d27f2ed07" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








We’ll inject the stubbed API into the class while we’re testing. Then for the final run, we’ll use the real API to query for the real password.

So let’s get started with this class. From a high level, recalling my algorithm diagram, it goes in three steps:

1.  First, find the first letter that’s not in the subject but exists in the password. This is our starting off point.
2.  Build those letters forward until we fall off the end of the string.
3.  Build that substring backwards until we hit the beginning of the string.

Then we’re done!

Let’s start with initialization. We’ll inject the API, and other than that we just need to initialize the current password chunk to be an empty string.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/1fcdf8f2ecda54dce8295b5573128fa6?postId=a6077c0a13b4" data-media-id="1fcdf8f2ecda54dce8295b5573128fa6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Now let’s write three methods, following the steps we outlined.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/2c9414647b265cb67e7d0536a995d0d0?postId=a6077c0a13b4" data-media-id="2c9414647b265cb67e7d0536a995d0d0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Perfect. Now the rest of the implementation can take place in private methods.

For finding the first letter, we need to iterate over each character in the alphabet that’s not contained in the subject. To construct this alphabet, we’re going to use `a-z` and `0–9`. Ruby allows us to do this pretty easily with ranges:

<pre name="acfe" id="acfe" class="graf graf--pre graf-after--p">ALPHABET = ((‘a’..’z’).to_a + (‘0’..’9').to_a).shuffle</pre>

I prefer to shuffle this to remove any bias in the password’s letter distribution. This will make our algorithm query A/2 times on average per character, even if the password is non-randomly distributed.

We also want to set the subject as a constant:

<pre name="edcb" id="edcb" class="graf graf--pre graf-after--p">SUBJECT = ‘password’</pre>

That’s all the setup we need. Now time to write `find_starting_letter`. This needs to iterate through each candidate letter (in the alphabet but not in the subject) until it finds a match.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/e7cb6eb525d5a7d4843feff70a685124?postId=a6077c0a13b4" data-media-id="e7cb6eb525d5a7d4843feff70a685124" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








In testing, looks like this works perfectly:

<pre name="73a5" id="73a5" class="graf graf--pre graf-after--p">PasswordCracker.new(ApiStub).send(:find_starting_letter!) # => 'f'</pre>

Now for the heavy lifting.

I’m going to do this recursively, because it makes the structure very elegant.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/198715f5ef600ea045466a25379a292a?postId=a6077c0a13b4" data-media-id="198715f5ef600ea045466a25379a292a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








The code is surprisingly straightforward. Let’s see if it works with our stub API.

<pre name="adf4" id="adf4" class="graf graf--pre graf-after--p">[63] pry(main)> PasswordCracker.new(ApiStub).crack!</pre>

<pre name="ce5d" id="ce5d" class="graf graf--pre graf-after--pre">f</pre>

<pre name="5f66" id="5f66" class="graf graf--pre graf-after--pre">fj</pre>

<pre name="594a" id="594a" class="graf graf--pre graf-after--pre">fjp</pre>

<pre name="ee9e" id="ee9e" class="graf graf--pre graf-after--pre">fjpe</pre>

<pre name="3bd8" id="3bd8" class="graf graf--pre graf-after--pre">fjpef</pre>

<pre name="7661" id="7661" class="graf graf--pre graf-after--pre">fjpefo</pre>

<pre name="5438" id="5438" class="graf graf--pre graf-after--pre">fjpefoj</pre>

<pre name="7750" id="7750" class="graf graf--pre graf-after--pre">fjpefoj4</pre>

<pre name="a580" id="a580" class="graf graf--pre graf-after--pre">fjpefoj49</pre>

<pre name="f814" id="f814" class="graf graf--pre graf-after--pre">fjpefoj490</pre>

<pre name="c4d4" id="c4d4" class="graf graf--pre graf-after--pre">fjpefoj490r</pre>

<pre name="8ae3" id="8ae3" class="graf graf--pre graf-after--pre">fjpefoj490rj</pre>

<pre name="4a2b" id="4a2b" class="graf graf--pre graf-after--pre">fjpefoj490rjg</pre>

<pre name="05cc" id="05cc" class="graf graf--pre graf-after--pre">fjpefoj490rjgs</pre>

<pre name="8b98" id="8b98" class="graf graf--pre graf-after--pre">fjpefoj490rjgsd</pre>

<pre name="0dd5" id="0dd5" class="graf graf--pre graf-after--pre">=> “fjpefoj490rjgsd”</pre>

Awesome. We’ve got a suffix, now just to build backward and complete the string. This should look very similar.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/037eca1a170408ebfad7c871b8751460?postId=a6077c0a13b4" data-media-id="037eca1a170408ebfad7c871b8751460" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








In fact, there’s only two lines of difference here: how we construct the `guess`, and the name of the recursive call. There’s an obvious refactoring here, so let’s do it.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/a307fa52c7c0a94582080d0b23614ab9?postId=a6077c0a13b4" data-media-id="a307fa52c7c0a94582080d0b23614ab9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








Now these other calls simply reduce to:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/53292ffb6bd86296136c8a14eb1647a8?postId=a6077c0a13b4" data-media-id="53292ffb6bd86296136c8a14eb1647a8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








And let’s see how it works in action:

<pre name="1ff0" id="1ff0" class="graf graf--pre graf-after--p">Apps-MacBook:password-recovery haseeb$ ruby letter_me_now.rb</pre>

<pre name="9841" id="9841" class="graf graf--pre graf-after--pre">Current password: 9</pre>

<pre name="faed" id="faed" class="graf graf--pre graf-after--pre">Current password: 90</pre>

<pre name="928a" id="928a" class="graf graf--pre graf-after--pre">Current password: 90r</pre>

<pre name="b175" id="b175" class="graf graf--pre graf-after--pre">Current password: 90rj</pre>

<pre name="27c3" id="27c3" class="graf graf--pre graf-after--pre">Current password: 90rjg</pre>

<pre name="6c6a" id="6c6a" class="graf graf--pre graf-after--pre">Current password: 90rjgs</pre>

<pre name="e68e" id="e68e" class="graf graf--pre graf-after--pre">Current password: 90rjgsd</pre>

<pre name="eec7" id="eec7" class="graf graf--pre graf-after--pre">Current password: 90rjgsd</pre>

<pre name="2003" id="2003" class="graf graf--pre graf-after--pre">Current password: 490rjgsd</pre>

<pre name="4a59" id="4a59" class="graf graf--pre graf-after--pre">Current password: j490rjgsd</pre>

<pre name="93bb" id="93bb" class="graf graf--pre graf-after--pre">Current password: oj490rjgsd</pre>

<pre name="6acd" id="6acd" class="graf graf--pre graf-after--pre">Current password: foj490rjgsd</pre>

<pre name="923c" id="923c" class="graf graf--pre graf-after--pre">Current password: efoj490rjgsd</pre>

<pre name="48de" id="48de" class="graf graf--pre graf-after--pre">Current password: pefoj490rjgsd</pre>

<pre name="443f" id="443f" class="graf graf--pre graf-after--pre">Current password: jpefoj490rjgsd</pre>

<pre name="8570" id="8570" class="graf graf--pre graf-after--pre">Current password: fjpefoj490rjgsd</pre>

<pre name="3897" id="3897" class="graf graf--pre graf-after--pre">Current password: pfjpefoj490rjgsd</pre>

<pre name="c77b" id="c77b" class="graf graf--pre graf-after--pre">Current password: hpfjpefoj490rjgsd</pre>

<pre name="e6ff" id="e6ff" class="graf graf--pre graf-after--pre">Current password: 0hpfjpefoj490rjgsd</pre>

<pre name="6473" id="6473" class="graf graf--pre graf-after--pre">Current password: 20hpfjpefoj490rjgsd</pre>

<pre name="f700" id="f700" class="graf graf--pre graf-after--pre">Current password: 420hpfjpefoj490rjgsd</pre>

<pre name="bd54" id="bd54" class="graf graf--pre graf-after--pre">Current password: g420hpfjpefoj490rjgsd</pre>

<pre name="5bf4" id="5bf4" class="graf graf--pre graf-after--pre">g420hpfjpefoj490rjgsd</pre>

Beautiful. Now let’s just add some more print statements and a bit of extra logging, and we’ll have our finished `PasswordCracker`.





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/deb13dae52829c211208210896e97571?postId=a6077c0a13b4" data-media-id="deb13dae52829c211208210896e97571" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10965087%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








And now… the magic moment. Let’s swap the stub with the real API and see what happens.

### The Moment of Truth

Cross your fingers…

`PasswordCracker.new(Api).crack!`












(Sped up 3x)



Boom. 443 iterations.

Tried it out on Reddit, and login was successful.

Wow.

It… actually worked.

Recall our original formula for the number of iterations: `A(N/2 + 2)`. The true password was 22 characters, so our formula would estimate `36 * (22/2 + 2) = 36 * 13 = 468` iterations. Our real password took 443 iterations, so our estimate was within 5% of the observed runtime.

**Math.**





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F26xBI73gWquCBBCDe%2Fgiphy.gif&key=4fce0568f2ce49e8b54624ef71a8a5bd&width=40)


<iframe data-width="435" data-height="267" width="435" height="267" data-src="https://medium.freecodecamp.org/media/0b662180e1d701cf9053c53992241531?postId=a6077c0a13b4" data-media-id="0b662180e1d701cf9053c53992241531" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F26xBI73gWquCBBCDe%2Fgiphy.gif&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>






tfw wtf ftw



**It works.**

Embarrassing support e-mail averted. Reddit rabbit-holing restored. It’s now confirmed: programming is, indeed, magic.

(The downside is I am now going to have to find a new technique to lock myself out of my accounts.)

And with that, I’m gonna get back to my internet rabbit-holes. Thanks for reading, and give it a like if you enjoyed this!

_—Haseeb_








