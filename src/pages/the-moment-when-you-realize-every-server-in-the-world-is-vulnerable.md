---
author: Carl Tashian
authorTwitter: https://twitter.com/tashian
authorFacebook: https://facebook.com/639395244
title: "The moment when you realize every server in the world is vulnerable"
subTitle: "Hash tables. Dictionaries. Associative arrays. Whatever you like to call them, they are everywhere in software. They are core. And when s..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*5zyXTnmx_s0WcmlArJ-LPQ.jpeg
url: https://medium.freecodecamp.org/the-moment-when-you-realize-every-server-in-the-world-is-vulnerable-8e4371fc5261
id: the-moment-when-you-realize-every-server-in-the-world-is-vulnerable-8e4371fc5261
date: 2016-08-24T18:23:43.455Z
tags: [
  "Security",
  "Data Structures",
  "Programming",
  "Tech",
  "Software Development"
]
---
# The moment when you realize every server in the world is vulnerable

Hash tables. Dictionaries. Associative arrays. Whatever you like to call them, they are _everywhere_ in software. They are core. And when someone finds a vulnerability in such a low-level data structure, almost all software is implicated.

This is a story of one of those core vulnerabilities, and how it took a decade to uncover and resolve. The story is pretty amazing. But for context, let’s review what hash tables are.

#### **Hash Tables 101**

Hash tables are incredibly convenient and fast. They let you put labels on things and throw them into memory buckets, and later on you can pull them back out and use them for whatever you want. They were invented in the 1950s and their underlying mechanics haven’t changed much over the years.

Let’s create a hash table and put some stuff in it:

<pre name="9a72" id="9a72" class="graf graf--pre graf-after--p">h = {}</pre>

<pre name="ca38" id="ca38" class="graf graf--pre graf-after--pre">h[‘a’] = 6  
h[‘b’] = 3  
h[‘f’] = 9</pre>

<pre name="9ad2" id="9ad2" class="graf graf--pre graf-after--pre">print h[‘a’]</pre>

<pre name="d710" id="d710" class="graf graf--pre graf-after--pre">>>> 6</pre>

Each key and value will be stored in a bucket in memory. Lets say we start out with 5 empty buckets.



![](https://cdn-images-1.medium.com/max/1600/1*ICkZRFGLq3IlxkSZdmjKdQ.png)



When we add the key ‘a’, which bucket should it go into? We want to be able to find it easily later. This is where the _hashing function_ comes in. Every hash table is backed by a deterministic hashing function that turns any key into to a large, fixed-length number, which we call the hash. So the hash for ‘a’ might be 12416037344.

Because it’s deterministic, if we run the hash function on ‘a’ again sometime later, we’ll still get 12416037344\. Now that we have the hash for our key, we need to reduce that hash into a bucket number (0–4 in our case). The simplest way to do this is to modulo by the number of buckets:



![](https://cdn-images-1.medium.com/max/1600/1*Hzto0yWXnOL0QT6V8ttARQ.png)



Great. So ‘a’ goes into bucket #4.

Now, if we keep going and hash ‘b’, we get 12544037731\. And (12544037731 % 5) is 1\. So ‘b’ goes into bucket #1.



![](https://cdn-images-1.medium.com/max/1600/1*28cBaKeOYYPjBYOGgUZlsA.png)



Now let’s add ‘f’ to the table.

Hashing ‘f’ yields 13056039271\. And (13056039271 % 5) is 1\. But we already have something in bucket #1! What now?

We have a collision. Hash table collisions happen pretty often. One of the simplest ways to resolve collisions is to set each bucket up as a list, and just keep adding to that list whenever a collision occurs. This is known as a chained hash table. Here’s what it might look like:



![](https://cdn-images-1.medium.com/max/1600/1*mxSbtogBBGjPrpR8xW363w.png)



As we add more keys, it’s fine to grow these lists for a while. When we are looking up a key, we simply look through the target bucket’s list for the key we’re interested in.

Why not just add more buckets to the table? Well, it’s possible to do that, but when we do that the entire table has to be rehashed, so it should only be done occasionally. Adding to a list is, overall, much faster.

Usually.

Unfortunately, collisions open the door to the biggest weakness in hash tables. As soon as we have collisions, the time required for accessing an element starts creeping up because we have to loop through the list within the bucket.

When hash tables were invented, the selection of a great hash function came down to two things:

*   Performance. It must be fast as hell. Of course.
*   Uniform density output. A great hash function should consistently, uniformly distribute arbitrary keys nicely across the hash table, because we want to avoid collisions as much as possible.

And that was it. Security was not in the picture. Some very simple, very fast general purpose hash functions were developed over the years, and they worked well for several decades.











* * *







#### A vulnerability is discovered

An international community of mathematicians and computer scientists is constantly hunting for the next vulnerability. We don’t hear much about them outside of Internet security circles, but the people who find and fix these vulnerabilities are heroes and, as much as any military, they are keeping us safe.

In 2003, [a paper](http://static.usenix.org/event/sec03/tech/full_papers/crosby/crosby_html/) by Scott A. Crosby and Dan S. Wallach of Rice University described such a vulnerability. They found a theoretical class of attacks called algorithmic complexity attacks.

The idea was simple: If we have an algorithm that is normally a superfast O(1) in time complexity, but that has an obscure, unlikely corner case where a huge O(n²) nested loop can happen, our algorithm might be vulnerable to attack. Specifically, if an attacker can force an application into the corner through carefully crafted inputs, then they can overwhelm our CPU.

The paper describes hash tables as a possible attack vector and it even reproduces the attack on several open source projects. But no one seemed to notice that this was a widespread problem affecting nearly all hash table implementations until 2011 when, at the 28th Chaos Communication Congress, Alexander Klink and Julian Wälde [demoed an attack](https://www.youtube.com/watch?v=R2Cq3CLI6H8) on a much broader set of programming languages and servers.

Attacking the complexity of the hash table algorithm is known as a hash-flooding attack, and Klink and Wälde showed that nearly every web application written in PHP, Ruby, Python, Java, ASP.NET, and v8 was implicated. The attackers used a common web application platform feature that converts HTTP POST parameters into a hash. As Klink and Wälde point out in the demo, this feature would be present even in the most simple “Hello World” PHP program.

<pre name="cab3" id="cab3" class="graf graf--pre graf-after--p"><html>  
  <body>  
    <?php echo ‘<p>Hello World</p>’; ?>   
  </body>  
</html></pre>

This was bad news. Because it attacked the PHP platform code, this attack could take down a server that was running even the most basic “Hello World” script!

The attack works by figuring out in advance which hash keys could trigger collisions. With the hash functions in use at the time, it was easy enough to invert the hash function and generate a ton of keys, then use them for an attack. For most web applications, the attack involved sending a large (1MB) HTTP POST request that would build a hash table on the server with 10k or 100k collisions. And as more collisions happen, the insertion time for each element in the table begins to rise to O(n²) and the CPU goes to 99% utilization.











* * *







#### **The response**

That was 2011\. In response to Klink and Wälde’s findings, most languages switched to a hashing function that incorporates a secret randomized seed value that is reset every time a new program is run. This way, an attacker couldn’t just invert the same generic hash function on their machine and get a list of keys that would result in collisions. They would need to know the secret seed value.

And that worked.

For a year or so, anyway.

Then in 2012, at 29c3, this new method was exploited using a more complex collision attack that used [differential cryptanalysis](https://en.wikipedia.org/wiki/Differential_cryptanalysis). Without going into too much detail, it turned out that the random seed value didn’t really introduce quite enough of a difference into the output of the hash function, and it could again be attacked by using some specially crafted values.

[The 29c3 talk](https://www.youtube.com/watch?v=wGYj8fhhUVA), given by Daniel J. Bernstein, Jean-Philippe Aumasson, and Martin Boßlet, includes a demo of the attack.

All of the common general purpose hash functions were now broken.











* * *







To understand what happened next, we have to talk about cryptographic vs. non-cryptographic hash functions. A cryptographic hash function is a kind of hash function that is computationally very difficult to invert. This “one-way” nature is how it differs from general-purpose hash functions. It’s commonly used to store encrypted passwords in such a way that cannot be read by an attacker (or anyone) but that can be tested against the input from a user who is trying to log in: Just encrypt whatever the user types using the one-way function, and compare it to the encrypted value we stored when we originally set the password. This is technically why the bank can’t tell anyone their password — they don’t know it! — but they can allow customers to reset it.

The issue with cryptographic hash functions is that they tend to be very slow. Much slower than general-purpose functions. So programming languages traditionally avoided using them in performance-sensitive scenarios — like hash tables.

As part of their 29c3 talk, Bernstein and Aumasson introduced [SipHash](https://131002.net/siphash/), a cryptographic hash function they developed that’s a lot faster than previous algorithms. While still slower than non-cryptographic hashes, it’s fast enough to back hash tables. It hits all the right tradeoffs between security, performance, and uniformity of output values. In fact, there are even different versions of SipHash that allow developers to find their own sweet spot between performance and security. (Because, after all, security is just a matter of degrees of difficulty of an attack. Nothing is truly secure.)

SipHash is a great invention, and it’s just one example of the tireless behind-the-scenes work that the security community does to keep the planet’s servers safe from attacks. Not only did Bernstein and Aumasson find and exploit the vulnerability, they designed and built an elegant fix for it. And by 2013, many programming languages had adopted it as their primary hash function.

SipHash is safe. At least, so far. While no one has found a way to quickly generate lots of collisions with SipHash, it has also not been proven impossible to do so.

The next Chaos Communication Congress, 33c3, is coming up this winter and who knows? Maybe someone will announce a clever new exploit, and a safer or faster hash function. And the cycle continues.











* * *







#### If you made it this far, you should [join my mailing list](http://tashian.com/superstack) about technology and humanity.








