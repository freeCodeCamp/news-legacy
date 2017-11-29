---
author: Gitter
authorTwitter: https://twitter.com/gitchat
authorFacebook: none
title: "MongoDB point-in-time recoveries"
subTitle: "At Gitter, a small startup, we work hard every day to provide the best chat for communities (have you checked Ping Pong Wars?), while kee..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*OD8s07RZ8po8hMY7q0Y2LQ.png
url: https://medium.freecodecamp.org/mongodb-point-in-time-recoveries-or-how-we-saved-600-dollars-a-month-and-got-a-better-backup-55466b7d714
id: mongodb-point-in-time-recoveries-or-how-we-saved-600-dollars-a-month-and-got-a-better-backup-55466b7d714
date: 2016-04-18T15:10:12.514Z
tags: [
  "Mongodb",
  "DevOps",
  "Database",
  "Web Development",
  "Programming"
]
---
# **MongoDB point-in-time recoveries**







![](https://cdn-images-1.medium.com/max/2000/1*OD8s07RZ8po8hMY7q0Y2LQ.png)

Image by Russel Alton via [choplogik.org](http://choplogik.org/)







### (…or how we saved 600 dollars a month and got a better backup solution)

At [Gitter](http://gitter.im), a small startup, we work hard every day to provide the best chat for communities (have you checked [Ping Pong Wars](https://gitter.im/dexterneo/ping_pong_wars)?), while keeping costs low. So when I found that we were paying $600 every month for a basic backup service for our databases instead of Rubik’s cubes and craft beer, I thought there was room for an easy win.

Point-in-time recoveries are state of the art when it comes to backing up your databases. That is, being able to pinpoint a particular transaction, often catastrophic, and fully recover the state of your dataset up to that point. Our solution only provided hourly backups, which isn’t quite enough for our needs. And yet we were paying a lot of money for that. Bah.

At Gitter, we use MongoDB on EC2 instances with EBS volumes to store our datasets. This solution is very convenient when it comes to architecting an in-house backup system that supports point-in-time recoveries and it’s surprisingly easier than it may seem. I’ll show you how we do it.

### The snapshot

First, the snapshot part. We take snapshots regularly using [a script I wrote](https://github.com/omame/mongodb-tools/blob/master/mongodb-ebs-snapshot). It’s based on [the official tutorial](https://docs.mongodb.org/ecosystem/tutorial/backup-and-restore-mongodb-on-amazon-ec2/) from MongoDB so nothing too surprising here. Snapshots are also very handy when you want to spin up a new replica node: just create a new instance using a data volume based on the latest snapshot, add it to the replica set and MongoDB will only replay less than one hour of oplog, which is a lot faster than a full resync.

You want to store both the data files and the journal on the same EBS volume: most of times it doesn’t impact I/O performance and achieving consistency can be tricky otherwise.

Then you need to take a snapshot of the EBS volume. You can use your favourite AWS interface to do so. Remember that taking a snapshot is an instantaneous operation: once AWS receives the api call the volume will be “photographed” at its current state so you can safely resume your write operations. Nevertheless, it’s recommended to perform this operation on a secondary node.

The advantage of taking EBS snapshots is that AWS compresses the blocks and only stores differentials in S3, which represents a further saving in terms of cost.

The whole “freeze mongo; take snapshot; unfreeze mongo” takes about 1.4 seconds for us, so it’s an affordable tradeoff given the great convenience it gives us. Also, the advantage of the EBS snapshot solution is that AWS compresses the blocks and only stores differentials in S3, which represents a further saving in terms of cost.

Job done, you’re a cost saving hero! Close all those expensive accounts and chip in for a pay raise. But is it enough?

### The recovery

Having EBS snapshots of your MongoDB dataset is only granular up to the frequency that you’re taking them, say every 30 minutes or even one hour. This may not be enough and taking a snapshot every minute can be an overkill (and you’ll still have one minute granularity). No matter how you put it, some data will be lost even if it’s just little. To avoid this, you can use the MongoDB oplog to replay the transactions from the snapshot time up to the rogue one and fill in the time gap. Note that this only works if your oplog window is wide enough so be very careful sizing your oplog. You can keep an eye on it by using [this statsd emitter](https://github.com/omame/mongodb-tools/blob/master/mongodb-oplog-window-size).

Also, the oplog must be available on a replica node, even if the whole dataset is gone. Worst case scenario, the transaction that destroyed your dataset was such a nasty one that you’ll end up recovering up to the snapshot time, which considering the magnitude of the disaster isn’t such a bad perspective.

So where can you get the oplog from? A secondary node again is generally a good choice. You can dump the oplog with mongodump but there’s a caveat: you want to only dump transactions that happened after the last one in the snapshot you’re recovering. The reason is that, for instance, replaying insertions when a unique index constraint is present will fail your restore. So you want to trim your oplog on both sides: after the snapshot and before the catastrophic event.



![](https://cdn-images-1.medium.com/max/1600/0*EojnbKGrfoXPN-ZD.)



To do this you need to find the timestamp of the last transaction in the snapshot. Create an EBS volume using the snapshot taken prior to the catastrophic event and mount it on an instance. Start mongod binding to localhost and a temporary port, say 27272\. Then run this query:

<pre name="7e9f" id="7e9f" class="graf graf--pre graf-after--p">$ mongo —-port 27272 local  
> db.oplog.rs.find({}, {ts: 1,}).sort({ts: -1}).limit(1)  
{"ts" : Timestamp(1459850401, 11)}</pre>

Dump the oplog from a secondary replica node using the timestamp just calculated for the query. This creates a directory called oplog with the oplog collection bson file and collection metadata, which we will ignore. Don’t be afraid of dumping the oplog: it isn’t a very heavy operation and it will only take a few seconds if you have reasonable bandwidth.

<pre name="f7de" id="f7de" class="graf graf--pre graf-after--p">$ mongodump -h sendondary-node \  
--db local \  
--collection oplog.rs \  
--out oplog \  
--query '{"ts": { "$gt": { "$timestamp": {"t": 1459850401, "i": 11}}}}'</pre>

Convert the bson data into json so that it becomes readable by humans:

<pre name="c9e1" id="c9e1" class="graf graf--pre graf-after--p">$ bsondump oplog/local/oplog.rs.bson > oplog.json</pre>

Find the timestamp of the bogus transaction, which represents the point until you want to replay the oplog:

<pre name="3531" id="3531" class="graf graf--pre graf-after--p">$ grep "Hello. My name is Inigo Montoya. You killed my father. Prepare to die." oplog.json  
{"ts":{"$timestamp":{"t":1459852199,"i":1}},"h":{"$numberLong":"-6882763316726998947"},"v":2,"op":"i","ns":"quotes.movies","o":{"_id":{"$oid":"570393abf5d634897f2360a3"},"quote":"Hello. My name is Inigo Montoya. You killed my father. Prepare to die.","character":"Inigo Montoya","title":"The Princess Bride"}</pre>

In this case your timestamp is 1459852199:1.

Next, move the oplog where mongorestore will look for it:

<pre name="6b10" id="6b10" class="graf graf--pre graf-after--p">mv oplog/local/oplog.rs.bson oplog/oplog.bson</pre>

Now you’re ready to replay the oplog using — oplogLimit to set the delimiter:

<pre name="014a" id="014a" class="graf graf--pre graf-after--p">$ mongorestore -h localhost:27272 --oplogReplay --oplogLimit 1459852199:1 oplog</pre>

Time to verify your database but there shouldn’t be any problems if you carefully followed the instructions.

You’re now ready to restart the instance in production. Well done!











* * *







_This post was written by_ [_Daniele Valeriani_](https://twitter.com/escociao)_._








