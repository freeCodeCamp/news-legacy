---
author: Haseeb Qureshi
authorTwitter: https://twitter.com/hosseeb
authorFacebook: none
title: "A hacker stole $31M of Ether — how it happened, and what it means for Ethereum"
subTitle: "Yesterday, a hacker pulled off the second biggest heist in the history of digital currencies...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*8yCGP72sL36SzFYmZfPkaA.png
url: https://medium.freecodecamp.org/a-hacker-stole-31m-of-ether-how-it-happened-and-what-it-means-for-ethereum-9e5dc29e33ce
id: a-hacker-stole-31m-of-ether-how-it-happened-and-what-it-means-for-ethereum-9e5dc29e33ce
date: 2017-07-20T23:59:31.432Z
tags: [
  "Ethereum",
  "Blockchain",
  "Security",
  "Technology",
  "Startup"
]
---
# A hacker stole $31M of Ether — how it happened, and what it means for Ethereum







![](https://cdn-images-1.medium.com/max/2000/1*8yCGP72sL36SzFYmZfPkaA.png)







Yesterday, a hacker pulled off the second biggest heist in the history of digital currencies.

Around 12:00 PST, an unknown attacker exploited a critical flaw in the Parity multi-signature wallet on the Ethereum network, draining three massive wallets of over $31,000,000 worth of Ether in a matter of minutes. Given a couple more hours, the hacker could’ve made off with over $180,000,000 from vulnerable wallets.

But someone stopped them.

Having sounded the alarm bells, a group of benevolent white-hat hackers from the Ethereum community rapidly organized. They analyzed the attack and realized that there was no way to reverse the thefts, yet many more wallets were vulnerable. Time was of the essence, so they saw only one available option: **hack the remaining wallets before the attacker did.**

By exploiting the same vulnerability, the white-hats [hacked all of the remaining at-risk wallets](https://etherscan.io/address/0x1dba1131000664b884a1ba238464159892252d3a) and drained their accounts, effectively preventing the attacker from reaching any of the remaining $150,000,000.

_Yes, you read that right._

To prevent the hacker from robbing any more banks, the white-hats wrote software to rob all of the remaining banks in the world. Once the money was safely stolen, they began the process of returning the funds to their respective account holders. The people who had their money saved by this heroic feat are now in the process of retrieving their funds.

It’s an extraordinary story, and it has significant implications for the world of cryptocurrencies.

**It’s important to understand that this exploit was not a vulnerability in Ethereum or in Parity itself.** Rather, it was a vulnerability in the default smart contract code that the Parity client gives the user for deploying multi-signature wallets.

This is all pretty complicated, so to make the details of this clear for everyone, this post is broken into three parts:

1.  **What exactly happened?** An explanation of Ethereum, smart contracts, and multi-signature wallets.
2.  **How did they do it?** A technical explanation of the attack (specifically for programmers).
3.  **What now?** The attack’s implications about the future and security of smart contracts.

If you are familiar with Ethereum and the crypto world, you can skip to the second section.

### 1\. What exactly happened?

There are three building blocks to this story: **Ethereum**, **smart contracts**, and **digital wallets**.



![](https://cdn-images-1.medium.com/max/1600/1*J_yJEaeQXUZ_Wk2w5sQXuQ.png)



[Ethereum](https://www.ethereum.org/) is a digital currency invented in 2013 — a full 4 years after the release of Bitcoin. It has since grown to be the second largest digital currency in the world by market cap — $20 billion, compared to Bitcoin’s $40 billion.

Like all cryptocurrencies, Ethereum is a descendant of the Bitcoin protocol, and improves on Bitcoin’s design. But don’t be fooled: though it is a digital currency like Bitcoin, Ethereum is much more powerful.

While Bitcoin uses its blockchain to implement a ledger of monetary transactions, Ethereum uses its blockchain to record state transitions in a gigantic distributed computer. Ethereum’s corresponding digital currency, ether, is essentially a side effect of powering this massive computer.

To put it another way, _Ethereum is literally a computer that spans the entire world_. Anyone who runs the Ethereum software on their computer is participating in the operations of this world-computer, the Ethereum Virtual Machine (EVM). Because the EVM was designed to be [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) (ignoring gas limits), it can do almost anything that can be expressed in a computer program.

Let me be emphatic: _this is crazy stuff_. The crypto world is ebullient about the potential of Ethereum, which has seen its value skyrocket in the last 6 months.



![](https://cdn-images-1.medium.com/max/1600/1*cGo4ezL9EPH_jGqsj3QS_Q.png)



The developer community has rallied behind it, and there’s a lot of excitement about what can be built on top of the EVM — and this brings us to smart contracts.

**Smart contracts** are simply computer programs that run on the EVM. In many ways, they are like normal contracts, except they don’t need lawyers or judges to interpret them. Instead, they are compiled to bytecode and interpreted unambiguously by the EVM. With these programs, you can (among other things) programmatically transfer digital currency based solely on the rules of the contract code.

Of course, there are things normal contracts do that smart contracts can’t — smart contracts can’t easily interact with things that aren’t on the blockchain. But smart contracts can also do things that normal contracts can’t, such as enforce a set of rules entirely through unbreakable cryptography.

This leads us to the notion of **wallets**. In the world of digital currencies, wallets are how you store your assets. You gain access to your wallet using essentially a secret password, also known as your private key ([simplified a bit](http://searchsecurity.techtarget.com/definition/asymmetric-cryptography)).

There are many different types of wallets that confer different security properties, such as withdrawal limits. One of the most popular types is the multi-signature wallet.

In a multi-signature wallet, there are several private keys that can unlock the wallet, but just one key is not enough to unlock it. If your multi-signature wallet has 3 keys, for example, you can specify that at least 2 of the 3 keys must be provided to successfully unlock it.

This means that if you, your father, and your mother are each signatories on this wallet, even if a criminal hacked your mother and stole her private key, they could still not access your funds. This leads to much stronger security guarantees, so multi-sigs are a standard in wallet security.

This is the type of wallet the hacker attacked.

So what went wrong? Did they break the private keys? Did they use a quantum computer, or some kind of cutting-edge factoring algorithm?

Nope, all the cryptography was sound. The exploit was almost laughably simple: they found a programmer-introduced bug in the code that let them re-initialize the wallet, almost like restoring it to factory settings. Once they did that, they were free to set themselves as the new owners, and then walk out with everything.

### 2\. How did this happen?

What follows is a technical explanation of exactly what happened. If you’re not a developer, feel free to skip to the next section, since this is going to be programming-heavy.

Ethereum has a fairly unique programming model. On Ethereum, you write code by publishing contracts (which you can think of as objects), and transactions are executed by calling methods on these objects to mutate their state.

In order to run code on Ethereum, you need to first deploy the contract (the deployment is itself a transaction), which costs a small amount of Ether. You then need to call methods on the contract to interact with it, which costs more Ether. As you can imagine, this incentivizes a programmer to optimize their code, both to minimize transactions and minimize computation costs.

One way to reduce costs is to use libraries. By making your contract call out to a shared library that was deployed at a previous time, you don’t have to re-deploy any shared code. In Ethereum, keeping your code DRY will directly save you money.

The default multi-sig wallet in Parity did exactly this. It held a reference to a shared external library which contained wallet initialization logic. This shared library is referenced by the public key of the library contract.

    // FIELDSaddress constant _walletLibrary = 0xa657491c1e7f16adb39b9b60e87bbb8d93988bc3;

The library is called in several places, via an EVM instruction called `DELEGATECALL`, which does the following: for whatever method that calls `DELEGATECALL`, it will call the same method on the contract you're delegating to, but using the context of the current contract. It's essentially like a `super` call, except without the inheritance part. (The equivalent in JavaScript would be `OtherClass.functionName.apply(this, args)`.)

Here’s an example of this in their multi-sig wallet: the `isOwner` method just delegates to the shared wallet library's `isOwner` method, using the current contract's state:

    function isOwner(address _addr) constant returns (bool) {    return _walletLibrary.delegatecall(msg.data);}

This is all innocent enough. The multi-sig wallet itself contained all of the right permission checks, and they were sure to rigorously enforce authorization on all sensitive actions related to the wallet’s state.

But they made one critical mistake.

Solidity allows you to define a “fallback method.” This is the method that gets called when there’s no method that matches a given method name. You define it by not giving it a name:

    function() {    // do stuff here for all unknown methods}

The Parity team decided to let any unknown method that sent Ether to the contract just default to depositing the sent Ether.

    function() payable {    // payable is just a keyword that means this method can receive/pay Ether

    if (msg.value > 0) {    // just being sent some cash?    Deposit(msg.sender, msg.value);    } else {    throw;  }}

But they took it a step further, and herein was their critical mistake. Below is the _actual code that was attacked_.

    function() payable {    // just being sent some cash?  if (msg.value > 0)    Deposit(msg.sender, msg.value);  else if (msg.data.length > 0)    _walletLibrary.delegatecall(msg.data);}

Basically:

*   If the method name is not defined on this contract…
*   And there’s no ether being sent in the transaction…
*   And there is some data in the message payload…

Then it will call the exact same method if it’s defined in `_walletLibrary`, but in the context of this contract.

Using this, the attacker called a method called `initWallet()`, which was not defined on the multisig contract _but was_ defined in the shared wallet library:

    function initWallet(address[] _owners, uint _required, uint _daylimit) {    initDaylimit(_daylimit);  initMultiowned(_owners, _required);}

Which calls the `initMultiowned` method...

    function initMultiowned(address[] _owners, uint _required) {    m_numOwners = _owners.length + 1;  m_owners[1] = uint(msg.sender);  m_ownerIndex[uint(msg.sender)] = 1;  for (uint i = 0; i < _owners.length; ++i)  {    m_owners[2 + i] = uint(_owners[i]);    m_ownerIndex[uint(_owners[i])] = 2 + i;  }  m_required = _required;}

Do you see what just happened there? The attacker essentially **reinitialized the contract** by delegating through the library method, overwriting the owners on the original contract. They and whatever array of owners they supply as arguments will be the new owners.

Given that they now control the entire wallet, they can trivially extract the remainder of the balance. And that’s precisely what they did.

The initWallet: [https://etherscan.io/tx/0x707aabc2f24d756480330b75fb4890ef6b8a26ce0554ec80e3d8ab105e63db07](https://etherscan.io/tx/0x707aabc2f24d756480330b75fb4890ef6b8a26ce0554ec80e3d8ab105e63db07)

The transfer:   
[https://etherscan.io/tx/0x9654a93939e98ce84f09038b9855b099da38863b3c2e0e04fd59a540de1cb1e5](https://etherscan.io/tx/0x9654a93939e98ce84f09038b9855b099da38863b3c2e0e04fd59a540de1cb1e5)

So what was ultimately the vulnerability? You could argue there were two. First, the `initWallet` and `initMultiowned` in the wallet library were not marked as `internal` (this is like a `private` method, which would prevent this delegated call), and those methods did not check that the wallet wasn't already initialized. Either check would've made this hack impossible.

The second vulnerability was the raw `delegateCall`. You can think of this as equivalent to a raw `eval` statement, running on a user-supplied string. In an attempt to be succinct, this contract used metaprogramming to proxy potential method calls to an underlying library. The safer approach here would be to whitelist specific methods that the user is allowed to call.

The trouble, of course, is that this is more expensive in gas costs (since it has to evaluate more conditionals). But when it comes to security, we probably have to get over this concern when writing smart contracts that move massive amounts of money.

_So that was the attack._

It was a clever catch, but once you point it out, it seems almost elementary. The attacker then jumped on this vulnerability for three of the largest wallets they could find — but judging from the transaction times, they were doing this entirely manually.

The white-hat group was doing this at scale using scripts, and that’s why they were able to beat the attacker to the punch. Given this, it’s unlikely that the attacker was very sophisticated in how they planned their attack.

You might ask the question though — why don’t they just roll back this hack, like they did with the [DAO hack](https://www.cryptocompare.com/coins/guides/the-dao-the-hack-the-soft-fork-and-the-hard-fork/)?

Unfortunately that’s not really possible. The DAO hack was unique in that when the attacker drained the DAO into a child DAO, the funds were frozen for many days inside a smart contract before they could be released to the attacker.

This prevented any of the stolen funds from going into circulation, so the stolen Ether was effectively siloed. This gave the Ethereum community plenty of time to conduct a public quorum about how to deal with the attack.

In this attack, the attacker immediately stole the funds and could start spending them. A hard fork would be impractical–what do you do about all of the transactions that occur downstream? What about the people who innocently traded assets with the attacker? Once the ether they’ve stolen gets laundered and enters general circulation, it’s like counterfeit bills circulating in the economy — it’s easy to stop when it’s all in one briefcase, but once everyone’s potentially holding a counterfeit bill, you can’t really turn back the clock anymore.

So the transaction won’t get reversed. The $31M loss stands. It’s a costly, but necessary lesson.

So what should we take away from this?

### 3\. What does this attack mean for Ethereum?

There are several important takeaways here.

**First, remember, this was not a flaw in Ethereum or in smart contracts in general. Rather, it was a developer error in a particular contract.**

So who were the crackpot developers who wrote this? They should’ve known better, right?

[The developers here](https://blog.parity.io/the-multi-sig-hack-a-postmortem/) were a cross-collaboration between the Ethereum foundation (literally the creators of Ethereum), the Parity core team, and members of the open-source community. It underwent extensive peer review. This is basically the highest standard of programming that exists in the Ethereum ecosystem.

These developers were human. They made a mistake. And so did the reviewers who audited this code.

I’ve read some comments on Reddit and HackerNews along the lines of: “What an obvious mistake! How was it even possible they missed this?” (Ignoring that the “obvious” vulnerability was introduced in January and only now discovered.)

When I see responses like this, I know the people commenting are not professional developers. For a serious developer, the reaction is instead: _damn, that was a dumb mistake. I’m glad I wasn’t the one who made it._

Mistakes of this sort are **routinely** made in programming. All programs carry the risk of developer error. We have to throw off the mindset of “if they were just more careful, this wouldn’t have happened.” At a certain scale, carefulness is not enough.

As programs scale to non-trivial complexity, you have to start taking it as a _given_ that programs are probably not correct. No amount of human diligence or testing is sufficient to prevent all possible bugs. Even organizations like Google or NASA make programming mistakes, despite the extreme rigor they apply to their most critical code.

We would do well to take a page from site reliability practices at companies like Google and Airbnb. Whenever there’s a production bug or outage, they do a postmortem analysis and distribute it within the company. In these postmortems, there is always a principle of _never blaming individuals_.

Blaming mistakes on individuals is pointless, because all programmers, no matter how experienced, have a nonzero likelihood of making a mistake. Instead, the purpose of a postmortem is to identify what in the process allowed that mistake to get deployed.

The problem was not that the developer forgot to add `internal` to the wallet library, or that they did a raw `delegateCall` without checking what method was being called.

**The problem is that their programming toolchain allowed them to make these mistakes.**

As the smart contract ecosystem evolves, it has to evolve in the direction of making these mistakes harder, and that means making contracts secure by default.

This leads me to my next point.

**Strength is a weakness** when it comes to programming languages. The stronger and more expressive a programming language is, the more complex its code becomes. Solidity is a very complex language, modeled to resemble Java.

_Complexity is the enemy of security_. Complex programs are more difficult to reason about and harder to identify edge cases for. I think that languages like [Viper](https://github.com/ethereum/viper) (maintained by Vitalik Buterin) are a promising step in this direction. Viper includes by default basic security mechanisms, such as bounded looping constructs, no integer overflows, and prevents other basic bugs that developers shouldn’t have to reason about.

The less the language lets you do, the easier it is to analyze and prove properties of a contract. Security is hard because the only way to prove a positive statement like “this contract is secure” is to disprove every possible attack vector: “this contract cannot be re-initialized,” “its funds cannot be accessed except by the owners,” etc. The fewer possible attack vectors you have to consider, the easier it is to develop a secure contract.

A simpler programming model also allows things like [formal verification](https://en.wikipedia.org/wiki/Formal_verification) and automatic test generation. These are areas under active research, but just as smart contracts have incorporated cutting-edge cryptography, they also should start incorporating the leading edge of programming language design.

There is a bigger lesson here too.

Most of the programmers who are getting into this space, myself included, come from a web development background, and the blockchain toolchain is designed to be familiar for web developers. Solidity has achieved tremendous adoption in the developer community because of its familiarity to other forms of programming. In a way, this may end up being its downfall.

The problem is, **blockchain programming is fundamentally different from web development**.

Let me explain.

Before the age of the client-server web model, most programming was done for packaged consumer software or on embedded systems. This was before the day of automatic software updates. In these programs, a shipped product was final — you released one form of your software every 6 months, and if there was a bug, that bug would have to stand until the next release. Because of this longer development cycle, all software releases were rigorously tested under all conceivable circumstances.

Web development is far more forgiving. When you push bad code to a web server, it’s not a big deal if there’s a critical mistake — you can just roll back the code, or roll forward with a fix, and all is well because you control the server. Or if the worst happens and there’s an active breach or a data leak, you can always stop the bleeding by shutting off your servers and disconnecting yourself from the network.

_These two development models are fundamentally different._ It’s only out of something like web development that you can get the motto “move fast and break things.”

Most programmers today are trained on the web development model. Unfortunately, the blockchain security model is more akin to the older model.

In blockchain, code is intrinsically unrevertible. Once you deploy a bad smart contract, anyone is free to attack it as long and hard as they can, and there’s no way to take it back if they get to it first. Unless you build intelligent security mechanisms into your contracts, if there’s a bug or successful attack, there’s no way to shut off your servers and fix the mistake. Being on Ethereum by definition means _everyone_ owns your server.

A common saying in cybersecurity is “attack is always easier than defense.” Blockchain sharply multiplies this imbalance. It’s far easier to attack because you have access to the code of every contract, know how much money is in it, and can take as long as you want to try to attack it. And once your attack is successful, you can potentially steal _all of the money_ in the contract.

Imagine that you were deploying software for vending machines. But instead of a bug allowing you to simply steal candy from one machine, the bug allowed you to simultaneously steal candy from every machine in the world that employed this software. Yeah, that’s how blockchain works.

In the case of a successful attack, defense is extremely difficult. The white-hats in the Parity hack demonstrated how limited their defense options were — there was no way to secure or dismantle the contracts, or even to hack back the stolen money; all they could do was hack the remaining vulnerable contracts before the attacker did.

This might seem to spell a dark future.

_But I don’t think this is a death knell for blockchain programming._ Rather, it confirms what everyone already knows: this ecosystem is young and immature. It’s going to take a lot of work to develop the training and discipline to treat smart contracts the way that banks treat their ATM software. But we’re going to have to get there for blockchain to be successful in the long run.

This means not just programmers maturing and getting more training. It also means developing tools and languages that make all of this easier, and give us rigorous guarantees about our code.

It’s still early. Ethereum is a work in progress, and it’s changing rapidly. You should not treat Ethereum as a bank or as a replacement for financial infrastructure. And certainly you should not store any money in a [hot wallet](https://en.bitcoin.it/wiki/Hot_wallet) that you’re not comfortable losing.

But despite all that, I still think Ethereum is going to win in the long run. And here’s why: **the developer community in Ethereum is what makes it so powerful**.

Ethereum will not live or die because of the money in it. It will live or die based on the developers who are fighting for it.

The league of white-hats who came together and defended the vulnerable wallets didn’t do it for money. They did it because they believe in this ecosystem. They want Ethereum to thrive. They want to see their vision of the future come true. And after all the speculation and the profiteering, it’s ultimately these people who are going to usher the community into its future. They are fundamentally why Ethereum will win in the long run—or if they abandon Ethereum, their abandonment will be why it loses.

This attack is important. It will shake people up. It will force the community to take a long, hard look at security best practices. It will force developers to treat smart contract programming with far more rigor than they currently do.

But this attack hasn’t shaken the strength of the builders who are working on this stuff. So in that sense it’s a temporary setback.

In the end, attacks like this are good for the community to grow up. They call you to your senses and force you to keep your eyes open. It hurts, and the press will likely make a mess of the story. But every wound makes the community stronger, and gets us closer to really deeply understanding the technology of blockchain — both its dangers, and its amazing potential.

P.S. If you’re a dev and you want to learn more about smart contract security, [this is a really good resource.](https://github.com/ConsenSys/smart-contract-best-practices#known-attacks)

_Errata: This article originally said that Gavin Wood was the developer of the contract, which is incorrect. Gavin is the founder of Parity and pushed the fix to the contract, but was not the original developer. It also originally claimed that $77M additional funds were vulnerable, but this doesn’t count all of the ERC20 (ICO) tokens that were vulnerable._ [_The total amount is actually $150,000,000+ if you include all ERC20 tokens._](https://etherscan.io/address/0x1dba1131000664b884a1ba238464159892252d3a) _As of the time of writing this (July 21st 4PM EST), the total value of the assets saved by the white-hats was $_179,704,659.








