---
author: Nik Custodio
authorTwitter: https://twitter.com/nik5ter
authorFacebook: none
title: "Smart Contracts for Dummies"
subTitle: "If you still don’t get what the heck a Smart Contract is…"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*lsZWlQRE0lWRLzx-BpxR8A.jpeg
url: https://medium.freecodecamp.org/smart-contracts-for-dummies-a1ba1e0b9575
id: smart-contracts-for-dummies-a1ba1e0b9575
date: 2017-05-26T12:01:00.752Z
tags: [
  "Blockchain",
  "Ethereum",
  "Tech",
  "Technology",
  "Startup"
]
---
# Smart Contracts for Dummies

## **If you still don’t get what the heck a Smart Contract is…**



![](https://cdn-images-1.medium.com/max/1600/1*lsZWlQRE0lWRLzx-BpxR8A.jpeg)



Ok, you know a bit about Bitcoin (see: [Explain Bitcoin Like I’m Five](https://medium.com/@nik5ter/explain-bitcoin-like-im-five-73b4257ac833)). You’ve been seeing the blockchain on the news.

But what’s this new [**Ethereum**](https://www.nytimes.com/2017/02/27/business/dealbook/ethereum-alliance-business-banking-security.html)thing? Apparently it’s this new crypto-currency you can use to build “smart contracts”. Sounds impressive. So, uh… what are they again? _(Spoiler: They’re not that smart. And they’re not really contracts!)_

Instead of a one line definition, let’s try to get an intuition. First, we’ll revisit the _blockchain_ and the word “trust”. Then, we’ll talk about the word “contract”. Understanding both words is the secret.

### Part I: What we mean by “Trust(less)”

Most of the time, when we think Bitcoin (or Ethereum), we have a mental image of, well…_coins_.

Aren’t these _crypto-currencies_ after all? Isn’t that the whole point? In our minds we see objects — digital gold, or silver (or tulips for the skeptics). Things we pass around.

Because these images are easy to understand, we forget a bit about that _thing_ that’s underneath it all. So, I say we start thinking about this in a different way.

### **_Digital Stone_**



![](https://cdn-images-1.medium.com/max/1600/1*iU2aL8uUyDD5Sqg66Bo9Tw.jpeg)



Ugh, really? Digital rocks? Actually, rocks are pretty useful.

We have this idiom in the english language that goes something like this: “set it in **stone**.”

> “I’ve reviewed the contract Bob. Looks good. Let’s set this in stone!”

> “Don’t get too excited Alice, nothing’s in stone yet.”

> “This is God. I’ve written my 10 commandments on these two stone tablets. You know. Just in case ya'll start getting any funny ideas.”

This metaphor continues to have meaning in a modern world because in the physical (ancient) world, stone had some interesting properties:

1.  When you carve something on stone there is a physical **_finality and permanence_** to it. You can’t make changes just like that.
2.  If you try to “erase” something later on, it’ll be obvious. Any changes you make to it are quite **_transparent and tamper proof (provable)_**.
3.  These rules apply equally to all. Stone is **_neutral_**. It obeys the laws of physics, not men. It doesn’t care if you’re a powerful king or a peasant — it behaves exactly the same for everyone.

Because of all these properties, we have a pretty **_high level of trust_** in stone.

I mean — there’s a reason why we never say “let’s set this agreement in **_sand_**_.”_ Stone is the kind of thing I can point to in the future for evidence. Stone equals solid proof — not just any material will do!



![](https://cdn-images-1.medium.com/max/1600/1*8sfxhyikasLgeiUpNBa1iw.jpeg)

[The Economist](http://www.economist.com/news/leaders/21677198-technology-behind-bitcoin-could-transform-how-economy-works-trust-machine) agrees!



When it comes down to it, ablockchainis really just the above: _a kind of material that, through a special mix of cryptography and decentralization, has the properties of permanence, transparency, and neutrality — whatever you put on it._

Whether it’s a list of how many apples you sent to Joe. Or the words “I love Jenny.” It doesn’t matter. When you put it on a blockchain — it’s _on_.

> **Setting something on a blockchain is like setting something in stone. It makes trust easier.**

Except now we can do it _digitally_. And that’s pretty special.

Thinking about a blockchain as a piece of stone you can write things on (instead of a piece of currency) also helps us understand its broad potential. Which leads us to…contracts!











* * *







### Part II: What we mean by “Contracts”

The word “contract” has a lot of baggage. We start thinking: legal documents and lawyers.

The go-to description used in the news is a bit better: things that _self-execute_ or _execute automatically_. That seems vaguely familiar though. After all, there’s really nothing new about _automation_ or _execution._

#### The great grandfather of smart contracts

Take your good ol’ office [**vending machine**](https://perma.cc/V6AZ-7V8W)for example. It’s a “stupid” machine that does what it’s told, andexecutes things automatically. It’s been around for decades!



![](https://cdn-images-1.medium.com/max/1600/1*U73m4z7Tl3fQVtAThldjGg.png)

Behold, the magical machine that spits out high-fructose sustenance.



Let’s pretend one afternoon you find yourself in front of this machine. It says: **“If you give me $2.50, and press this button, you will get a Diet Coke.”**

It might not actually _say_ those wordsanywhere. But that’s the promise of this little interaction. One might even call this a kind of simple [**_agreement_**](http://internetofagreements.com/files/InternetOfAgreements.pdf)_._ (You can guess where this is going.)

You feed in the money. Press the button. Presto! Bottle in hand, you forget this meaningless event in your life 2 seconds later and start worrying again about those darn TPS reports you forgot to do.











* * *







Well, you didn’t notice, but this whole thing was actually a small program(“contract”) coded(“written”) into the machine beforehand that ran when you hit the button(“signed off on it”). Something like:

<pre name="7089" id="7089" class="graf graf--pre graf-after--p">> **if** money received == $2.50   
>     && the button pressed is "Diet Coke"  
> **then** release Diet__Coke</pre>

Computer code, as you see, is _kind of_ like a **_contract_**.

It’s making statements and declarations. There are terms (if you do this…then…). And just like someone you trust — it even fulfills its end of the bargain!

Voila. Contracts are just code. But unlike a “contract” in English, this is something both humans _and_ machines can read. Extra fun!

#### Ok, but…

Now you’re more confused about this smart contract business. As we said, this is nothing special. In fact, as the vending machine demonstrates, this kind of code _is_ already everywhere in our daily lives. If a smart contract is just “if…then” code (or _any_ code for that matter), then what’s the hoopla? What’s actually _new?_

### Vending Machines 2.0



![](https://cdn-images-1.medium.com/max/1600/1*fhtPA_xZNCEwq1SMzYS2rw.jpeg)



One sunny day, you spot a vending machine sitting on the corner. You’ve never seen this one before!

You walk over and take a look. This machine says: “**If you put in $1,000 this machine will give you $5,000.”**

Whoa! Whoever put this machine together must be very rich and generous.(Or insanely stupid…). Either way. 1k for 5k? No brainer — that’s a deal you’ll take any day! Right?

This is exactly like our good old Diet Coke machine. Same logic. Same if-then process.

Except now the stakes are different. You reach for your pocket but suddenly, you feel hesitant. Who the hell put this machine together anyway? And what if it eats your money? $1,000 isn’t a small amount — you were saving that for months. You didn’t think twice about that Diet Coke. But now? Now you realize that maybe vending machines aren’t that simple.

You start thinking about **trust.**

> **_How do we know it has enough funds to spit out the promised $5,000?_**

> **_How do we know the code is going to_ run_?_**

> **_Is there any way to publicly and transparently verify this code?_**











* * *







### Conclusion

The $5,000 vending machine is an extreme, theoretical example but it does hint at the problem with _scaling_ trust. In an expanding, digital world where people can connect anonymously — trust becomes a tricky thing. We usually rely on third-parties and other middle men for that reason. We have to. Especially if we’re moving things way more valuable than Diet Cokes. You know, like newfangled financial stuff. Or [the very idea of “value” and “ownership”](http://nikcustodio.tumblr.com/post/150500263430/why-blockchains-an-eli21) itself.

Hmmm. If only you could marry the automation of traditional programming **_and_** the trust-worthy properties of _digital stone…._

Well, that is exactly what a smart contract is! It’s just code — with a very special kind of backing.

> Keep in mind, we’ve had both computation and execution before. _But never one that was finalized in a neutral, provable, trustable way on (digital) stone._

#### **How about the real world? A few ideas.**

**Online Gaming:** Fight [fraud on gambling sites](http://money.cnn.com/2012/07/31/technology/online-poker-settlement/). Are the odds of that dice roll you just did _actually_ 1 in 6? How do we know they’re going to pay out? Well, why not “set the code in stone” and prove it? A live [example](https://etheroll.com/#tab7).

**Supply Chains:** Maybe [track and verify where and how things are made?](https://www.provenance.org/whitepaper)

**Voting:** Maybe a tamper proof [voting](http://www.govtech.com/blogs/lohrmann-on-cybersecurity/can-blockchain-technology-secure-your-vote.html) process?

**Decentralized and Autonomous Companies:** Sci-fi time.

Throughout history, automation has always been applied to the _bottom_ of companies_._ The assembly line. The factory worker. But if organizational rules are just a bunch of steps — then isn’t it possible to flip the pyramid and instead [automate the _top_](https://blog.ethereum.org/2014/05/06/daos-dacs-das-and-more-an-incomplete-terminology-guide/)?











* * *











<iframe data-width="640" data-height="480" width="980" height="735" src="https://medium.freecodecamp.org/media/beb6f8a17cf5c10247ee886475e88bff?postId=a1ba1e0b9575" data-media-id="beb6f8a17cf5c10247ee886475e88bff" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6Wkx60XgMIs%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



A “Tooth Fairy” smart contract. Coming soon to a sophisticated child near you.







These are only a few examples of what you could code on a blockchain using Ethereum’s [Turing complete programming language](https://www.wikiwand.com/simple/Turing_complete). We’re only at the beginning. If you dream it, you might be able to code it.

And in many ways, that’s what makes this whole thing exciting. We have some guesses, but honestly — we have no idea what will be built in the years and decades to come.

All we know is that the building blocks are here. And it is open to all. The rest is up to you.











* * *







#### **Ready to go down the rabbit hole?**

*   [A Beginner’s Guide to Ethereum](https://blog.coinbase.com/a-beginners-guide-to-ethereum-46dd486ceecf)
*   [The Quiet Master of Cryptocurrency _(Tim Ferris_](http://tim.blog/2017/06/04/nick-szabo/)_)_
*   [App Coins and the Dawn of the Decentralized Business Model](https://medium.com/the-coinbase-blog/app-coins-and-the-dawn-of-the-decentralized-business-model-8b8c951e734f#.hboxfmq6d) _(_[_Fred Ehrsam_](https://medium.com/@FEhrsam)_)_
*   [Crypto-Tokens: A Breakthrough in Open Network Design _(_](https://medium.com/@cdixon/crypto-tokens-a-breakthrough-in-open-network-design-e600975be2ef)[_Chris Dixon_](https://medium.com/@cdixon)[_)_](https://medium.com/@cdixon/crypto-tokens-a-breakthrough-in-open-network-design-e600975be2ef)
*   [The Internet of Agreements _(Vinay Gupta)_](http://internetofagreements.com/files/WorldGovernmentSummit-Dubai2017.pdf)
*   [Fat Protocols _(USV)_](https://www.google.com/search?client=safari&rls=en&q=fat+protocols&ie=UTF-8&oe=UTF-8)
*   [The Idea of Smart Contracts](https://perma.cc/V6AZ-7V8W), [The God Protocols ](https://web.archive.org/web/20160413224152/http://web.archive.org/web/20061230075325/http://www.theiia.org/ITAudit/index.cfm?act=itaudit.archive&fid=216), [Wet Code and Dry _(Nick Szabo)_](http://unenumerated.blogspot.com/2006/11/wet-code-and-dry.html)
*   [An Introduction to Solidity](https://solidity.readthedocs.io/en/develop/)








