---
author: Lauren Stephanian
authorTwitter: https://twitter.com/lstephanian
authorFacebook: none
title: "From “What is Blockchain?” to building a blockchain in less than an hour"
subTitle: "A blockchain is a digital ledger of records that’s arranged in chunks of data called blocks. These blocks then link with one another thro..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*6d-HZ7Z2_m2vOZvxOLJvOg.jpeg
url: https://medium.freecodecamp.org/from-what-is-blockchain-to-building-a-blockchain-within-an-hour-4e738efc819d
id: from-what-is-blockchain-to-building-a-blockchain-within-an-hour-4e738efc819d
date: 2017-03-29T12:06:04.271Z
tags: [
  "Startup",
  "Tech",
  "Finance",
  "Technology",
  "Programming"
]
---
# From “What is Blockchain?” to building a blockchain in less than an hour







![](https://cdn-images-1.medium.com/max/2000/1*6d-HZ7Z2_m2vOZvxOLJvOg.jpeg)







A blockchain is a digital ledger of records that’s arranged in chunks of data called blocks. These blocks then link with one another through a cryptographic validation known as a [hashing function](https://medium.com/@ConsenSys/blockchain-underpinnings-hashing-7f4746cbd66b?source=linkShare-8eb38184a6d9-1490786601). Linked together, these blocks form an unbroken chain — a **blockchain**.

The reason that this type of data structure is useful for things like cryptocurrencies is **decentralization**, meaning the records inside this chain aren’t stored in any single location, are accessible by everyone, and are immutable by any one party.



![](https://cdn-images-1.medium.com/max/1600/1*QkoWWTUFpMdYJTmMAW4zIQ.png)

Centralized Structure Vs. Decentralized Structure, Source: [SoftwareAdvice](http://www.softwareadvice.com/resources/it-org-structure-centralize-vs-decentralize/)



### Applications

Although blockchain is most commonly associated with Bitcoin, there are many uses for this technology. There are several broad categories of blockchain applications, a couple of which include:

#### **Currency and Digital Assets**

TheBlockchain that makes up Bitcoin sends money globally to individuals and merchants. But Blockchains can also create digital assets like stocks and bonds.

#### **Verifiable Data and Contracts**

ABlockchain can create a verifiable record of any data, file, or contract. This can be useful in any industry that uses big data, like the medical industry or government.

### Understanding the Code

Before you begin, I should note that this article assumes you have a basic understanding of programming and some understanding of computer science theory.

This article isn’t meant to be all-encompassing, but rather to serve as an introduction to blockchain programming for those looking to expand their technical knowledge.

I believe that the best way to truly understand a concept is to put it into practice. If you are interested in learning how to implement a blockchain contract, I’ve put together an easy-to-follow, step-by-step tutorial below.

You will be using [Ethereum](https://www.ethereum.org/) to make a smart contract. Ethereum is a blockchain with a built in Turing-complete programming language, meaning that it can run applications modeling any computable problem (as long as runtime and memory allows). Be sure to familiarize yourself with the following Ethereum terms before you begin:

**Accounts** are the basic unit or object in Ethereum. The blockchain tracks the state of every account. There are two types of accounts: **Externally Owned Accounts (EOA)**, which are controlled by human users, and **Contract Accounts**, which are controlled by their internal contract code and can be activated by an Externally Owned Account.

A “Smart Contract” or “Decentralized Application (DApp)” is determined by code in a Contract Account which will be activated when an EOA sends a transaction to the Contract Account. The Contract Accounts are triggered by an external EOA to produce an answer that can be agreed upon by all nodes that see it.

Each account contains at most four fields:

*   Nonce (a counter used to make sure each transaction occurs only once)
*   Ether Balance
*   Contract Code
*   Storage

A **transaction** is a signed data packet which stores messages sent from account to account. It contains the following data fields:

*   Recipient
*   Signature
*   Amount of Ether transferred
*   Data

**Ether** is Ethereum’s cryptocurrency (ETH/USD = ~$50, as of today) which is exchanged as a fee whenever an action runs in Ethereum.



![](https://cdn-images-1.medium.com/max/1600/1*WXVBbeO4toDmYP69nyL9tg.png)

Source: [EtherScan](http://etherscan.io/)



In order to reduce risk of malicious transactions, like [Distributed Denial of Service (DDoS)attacks](http://www.digitalattackmap.com/understanding-ddos/), Ethereum charges a fee for every transaction done through it.

So who’s collecting these fees? There are nodes called **miners** which collect the fees in order to verify and execute all transactions. The miners group the transactions into **blocks** which can then be added to the **blockchain**.

Now that you’ve got a basic understanding of how Etherium works, it’s time to get started.

Note that I used [Ubuntu](https://www.ubuntu.com/download/desktop) Linux, but this will also work on other Linux distributions, as well as on MacOS (with [Homebrew](https://brew.sh)) and Windows 10 (using your terminal and the [latest stable binary](http://geth.ethereum.com/downloads/)). A full list of command line tools and installation techniques can be found [here](http://ethereum.org/cli).

### Making a Blockchain

#### **Installing geth**

First you need to install Ethereum from PPA. In your terminal, run the following:

<pre name="a488" id="a488" class="graf graf--pre graf-after--p">sudo apt-get install -y software-properties-common  
sudo add-apt-repository -y ppa:ethereum/ethereum  
sudo apt-get update  
sudo apt-get install -y ethereum</pre>

Now you can make a genesis block by creating a new directory and writing to a json file:

<pre name="9fd6" id="9fd6" class="graf graf--pre graf-after--p">cd  
mkdir eth-new  
cd eth-new  
nano genesis.json</pre>

Next, paste the following code into the json file to make the genesis block:

<pre name="6c35" id="6c35" class="graf graf--pre graf-after--p">{  
    "nonce": "0x0000000000000042",  
    "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",  
    "difficulty": "0x4000",  
    "alloc": {},  
    "coinbase": "0x0000000000000000000000000000000000000000",  
    "timestamp": "0x00",  
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",  
    "extraData": "Custem Ethereum Genesis Block",  
    "gasLimit": "0xffffffff"  
}</pre>

Save this new genesis block file by hitting Ctrl+X, Y, Enter.

#### **Creating a Blockchain**

Now, execute the following commands to create the blockchain. The maxpeers command is set to 0 to disable the network.

    mkdir eth-datageth --datadir eth-new genesis.json init eth-new/genesis.json --networkid 123 --nodiscover --maxpeers 0 console

In the geth console, type the following to make a new account and create a new password by typing in whatever you want. You will have to type your new password twice.

    personal.newAccount()

The output after this should be a string of letters and numbers — an address of your account.



![](https://cdn-images-1.medium.com/max/1600/1*F1wouadMbHQjSWRPV2oGjA.png)



Save this address somewhere and exit by typing “exit” and hitting Enter.

#### **Sending Ether to Your Account**

You need to reopen the genesis block file. Type the following:

    nano genesis.json

In the “alloc” brackets, paste your account address you saved earlier. You should go ahead and give yourself an Ether balance as well. The amount shown next to “balance” below is equal to 10 Ether.

    {    "nonce": "0x0000000000000042",    "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",    "difficulty": "0x4000",    "alloc": {    "0x09c7b615a1c5b3016ff6b521723364aa9382ec6e": {        "balance": "10000000000000000000"   		}   	},    "coinbase": "0x0000000000000000000000000000000000000000",    "timestamp": "0x00",    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",    "extraData": "Custem Ethereum Genesis Block",    "gasLimit": "0xffffffff"}

Once you are done updating it, save the file with Ctrl+X, Y, Enter.

#### **Deleting Your Old Blockchain and Creating a New One**

Execute these commands to clear out the old blockchain data and restart geth:

    cd eth-datarm -rf chaindata dapp history nodekeycd ..geth --datadir eth-new genesis.json --networkid 123 --nodiscover --maxpeers 0 console

In the geth console, type these commands:

    > primary = eth.accounts[0]> web3.fromWei(eth.getBalance(primary), "ether")

Your address will appear, as well as your balance of 10 Ether.



![](https://cdn-images-1.medium.com/max/1600/1*l-IlW1y2Yu-G2Se13s3cnw.png)



#### **Starting Mining**

In order to have a working blockchain, you need to create miners. To do this, exit the geth console by typing “exit” and hitting Enter.

To start mining, execute this command:

    geth --mine --datadir eth-data --networkid 123 --nodiscover --> maxpeers 0 console 2>>geth.log

Geth will now start. You’ve created a miner which, as I mentioned earlier, collects ether fees. Type the below command to check your balance now:

    > primary = eth.accounts[0]> balance = web3.fromWei(eth.getBalance(primary), "ether")

You should now have more Ether than you had before.

#### **Installing Solc**

The Ethereum contract you are working with will be written in Solidity. You have to install the Solc compiler in order to use Solidity. To do this, open a new terminal and type the following:

    bashsudo add-apt-repository ppa:ethereum/ethereum

A message appears saying “Press ENTER to continue.” Press Enter and then type the following:

    sudo apt-get updatesudo apt-get install solc -ywhich solc

This will output a path to Solc, which you will need to remember. Return to the Terminal window showing the geth console. Execute these commands, changing <path> to the path that was returned to you:

    admin.setSolc("<path>")eth.getCompilers()

The response to the second command is [“Solidity”] which tells us that you now have Solc and can use Solidity.

#### **Understanding the Greeter Contract**

Below is the code for a simple contract with added comments, taken and modified from [Sams Class](https://samsclass.info/141/proj/pEth1.htm). It contains two types of contracts. The first, a mortal contract, specifies a contract that can be killed by the person who wrote it and it needs to be declared as such, as contracts are immortal by default. The second is a greeter contract which will print out a little greeting.

    contract mortal {    /* Define var owner of the type address*/    address owner;

        /* this function sets the owner of the contract */    function mortal() { owner = msg.sender; }

        /* Function to recover fees */    function kill() { if (msg.sender == owner) selfdestruct(owner); }}

    contract greeter is mortal {    /* define variable greeting type*/    string greeting;

        /* this runs when the contract is executed */    function greeter(string _greeting) public {        greeting = _greeting;    }

        /* main*/    function greet() constant returns (string) {        return greeting;    }}

#### **Unlocking your Account**

Starting a contract takes Ether fees, so you will need to unlock your account. You can do this by typing the following:

    primary = eth.accounts[0]personal.unlockAccount(primary)

and entering your password. Once you see an output of “true” you will know that you have successfully unlocked your account.

#### **Compiling your Contract**

In the geth console, copy and paste the whole source code of your contract from earlier in one line without the comments:

    var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) suicide(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; } }'

This will return “undefined.”

In the geth console, type the following:

`_> var greeterCompiled = web3.eth.compile.solidity(greeterSource)_`

The reply is “undefined” again, as shown below.

#### **Preparing your Contract for Deployment**

Now that you have your mortal contract and your greeter contract, you will need to define the greeting and instantiate your account objects. This will require some more Ether.

In the geth console, paste in these commands:

    var _greeting = "Hello World!"var greeterContract = web3.eth.contract(greeterCompiled.greeter.info.abiDefinition);

    var greeter = greeterContract.new(_greeting, {from: eth.accounts[0], data: greeterCompiled.greeter.code, gas: 1000000}, function(e, contract){  if(!e) {

        if(!contract.address) {      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

        } else {      console.log("Contract mined! Address: " + contract.address);      console.log(contract);    }

      }})

A “Contract transaction send” message appears, and after a few seconds, you will see a message saying “Contract mined!”

#### **Testing the Contract**

The following commands will return first a long address and then your greeting.

    eth.getCode(greeter.address)greeter.greet()



![](https://cdn-images-1.medium.com/max/1600/1*hVr1J5b6j15HJrDdbYmr7A.png)



So there you have it, you’ve created your first baby Blockchain program. Good work!

### Other Resources

For more helpful information on this subject, try the below:

*   [Ethereum Stack Exchange](http://ethereum.stackexchange.com/) contains many answered questions — you will probably find the answers to yours there as well.
*   [Ethereum Block Chain Explorer](http://etherscan.io) allows you to view current pending contracts as well as great Ethereum statistics.
*   [Lightgrains Ethereum Tutorial](https://lightrains.com/blogs/setup-local-ethereum-blockchain-private-testnet) will show you how to set up a local test environment for Ethereum blockchain
*   [Github Ethereum Go](https://github.com/ethereum/go-ethereum/wiki) has great Ethereum Go documentation
*   ConsenSys’ [“Noob Tutorial”](https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4) is a great start for Ethereum beginners
*   “[Building a Smart Contract Using the Command Line](https://www.ethereum.org/greeter)” is Ethereums Own Greeter Tutorial
*   [Ethereum Frontier Guide](https://ethereum.gitbooks.io/frontier-guide/content/managing_accounts.html) contains a lot of great detailed information on Ethereum

### Sources

*   When I first started learning about Blockchain, I relied heavily on Portia Burton’s presentation, “[Python, Blockchain, and Byte-Sized Change](https://www.slideshare.net/PortiaBurton/python-blockchain-and-bytesize-change)”
*   Much of the latter half of this tutorial is based off of Sam’s Class “[Making an Ethereum Contract](https://samsclass.info/141/proj/pEth1.htm)” by Sam Bowne
*   Orielly’s [Bitcoin and the Blockchain](https://conferences.oreilly.com/bitcoin-blockchain-2015) has a great step by step online course for [Mastering Bitcoin](http://chimera.labs.oreilly.com/books/1234000001802/ch07.html#_introduction_2)
*   Digging a little deeper, I found a lot of great information from Pawel Lachowicz on his site [Quant at Risk](http://www.quantatrisk.com)











* * *







_If you enjoyed this and want to read more articles by Lauren, visit_ [_http://lstephanian.com_](http://lstephanian.com) _or follow her on_ [_Twitter_](https://twitter.com/lstephanian)_._








