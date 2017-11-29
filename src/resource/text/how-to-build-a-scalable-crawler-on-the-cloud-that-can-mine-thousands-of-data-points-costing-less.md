---
author: Marcello Lins
authorTwitter: none
authorFacebook: none
title: "How I built a serverless web crawler to mine Vancouver real estate data at scale"
subTitle: "I recently moved from Rio de Janeiro, Brazil to Vancouver, Canada. The first thing that hits you right in the face, aside from the beauti..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*6PzbAGogRZ7eluH7lI17fA.png
url: https://medium.freecodecamp.org/how-to-build-a-scalable-crawler-on-the-cloud-that-can-mine-thousands-of-data-points-costing-less-a9825331eef5
id: how-to-build-a-scalable-crawler-on-the-cloud-that-can-mine-thousands-of-data-points-costing-less-a9825331eef5
date: 2017-08-23T04:42:21.616Z
tags: [
  "Serverless",
  "Programming",
  "Data Science",
  "Tech",
  "Startup"
]
---
# How I built a serverless web crawler to mine Vancouver real estate data at scale







![](https://cdn-images-1.medium.com/max/2000/1*6PzbAGogRZ7eluH7lI17fA.png)







I recently moved from Rio de Janeiro, Brazil to Vancouver, Canada. The first thing that hits you right in the face, aside from the beautiful scenery, are the rental prices. Vancouver is currently ranked among the top 5 [most expensive cities](http://uk.businessinsider.com/the-most-expensive-cities-to-live-in-around-the-world-in-2017-2017-1/#2-sydney-sydney-had-a-median-multiple-of-122-9) to live in the world. The rental price of a property is indicative of how [expensive](https://betterdwelling.com/canadian-real-estate-prices-will-drop-or-rents-will-soar-show-oecd-numbers/) it is to actually own and mortgage that same property.

I decided to start a side-project that could mine a decent number of housing listings and crunch the data. I wanted to come up with my own conclusions about the current real state market in Vancouver. There’s a bunch of well formatted data living on these listing websites on the web, so why not go ahead and grab it? This is how this project was born.

This article will walk you through the architecture, costs, pros and cons and more about the first crawler I’ve built using no servers at all. It is living 100% on the cloud, using only AWS (Amazon Web Services).

### Wait, did you say “No Server”?

Sure enough, everything you run on the cloud, is backed up by servers at the end of the day. What I meant by Server-less is that you won’t have to actually maintain any server or virtual machine yourself.

The trick is to build your architecture around cloud-native services such as [AWS Lambda](https://aws.amazon.com/lambda/), [DynamoDB](https://aws.amazon.com/dynamodb/), [RDS MySQL](https://aws.amazon.com/rds/mysql/) and [Cloudwatch](https://aws.amazon.com/cloudwatch/). Then make them work together in a clever way.

Shall we start?

### Project Architecture







![](https://cdn-images-1.medium.com/max/2000/0*BJaSEQzm07Obgw2J.png)







In case you’re not familiar with these services, I will summarize them for you:

*   [AWS Lambda](https://aws.amazon.com/lambda/):  
    Short lived functions that run on the cloud  
    Whenever these are invoked or triggered they will spin up, run the code you wrote into it, and shutdown as soon as its done running. You’ll only pay for the seconds each function is actually doing something.
*   [DynamoDB](https://aws.amazon.com/dynamodb/):  
    Fully managed NoSQL database on the cloud  
    You can feed it with JSON records and they will be stored on a server you won’t have to maintain. You can scale your read and write throughput in seconds. As of early 2017, they started supporting a [TTL](https://aws.amazon.com/about-aws/whats-new/2017/02/amazon-dynamodb-now-supports-automatic-item-expiration-with-time-to-live-ttl/) (Time To Live) mechanism. This allows your objects to be deleted automatically after reaching its TTL.
*   [RDS MySQL](https://aws.amazon.com/rds/):   
    Fully managed RDS (Relational Database Service) MySQL database on the cloud  
    Scale up or down, take backups as you wish. We recently announced a new [Start and Stop](https://aws.amazon.com/about-aws/whats-new/2017/06/amazon-rds-supports-stopping-and-starting-of-database-instances/) feature. It allows you to keep your instance stopped for up to 7 days in a row. You’re only paying for the instance volume, instead of paying for its instance hours as well.
*   [CloudWatch](https://aws.amazon.com/cloudwatch/):  
    Monitors and logs your resources on the cloud  
    You get this for free since every “.log” message ran from Python on Lambda logs it straight to a CloudWatch stream.

### Project Goals

When starting this project I had a few goals in mind. Then I started improvising as I went along. The ideal project to me would have to:

*   Be fully managed by AWS on the Cloud and require no server
*   Be elastic to scale up and down according to load
*   Capable of processing tens of thousands of listings to start with
*   Be inexpensive

### Costs Breakdown

You can rely on Lambda and CloudWatch for this project. They are free unless you’re running this constantly and non-stop. Then the bill will come.

For the storage layers of DynamoDB and RDS MySQL you will be paying under 3 bucks a month. You can stop your RDS database for up to 7 days in a row. And you can scale your DynamoDB tables down to 1 read + 1 write units when you’re not using them.

This brings your total costs to an estimate of $2.40 a month. Check [my documentation](https://github.com/MarcelloLins/ServerlessCrawler-VancouverRealState/wiki) for a more detailed breakdown.

### The Journey

From start to finish the whole project took me about 19 hours of work. Your mileage may vary according to your previous knowledge of AWS and Python. I am familiar with both, but not Dynamo and Lambda services.

The setup of Lambda functions takes time to get used to. It’s definitely sub-par with other AWS services when it comes to usability and metrics.

Once you get used to the whole Lambda developing dance: `edit Python files locally` -> `create a .zip package` -> `upload that` to replace your Lambda Function -> `Save and Test`, it gets better.

The integration with CloudWatch is definitely a plus. It is free, and comes in handy when you’re trying to understand why your lambda failed after that HTTP Request, or during that other loop you forgot to indent.

Making use of [Environment Variables](http://docs.aws.amazon.com/lambda/latest/dg/env_variables.html), adjusting function resources and timeouts, and enabling and disabling triggers for testing works smoothly and blends in really well. It doesn’t require you to redeploy your functions. Also, I’ve noticed that the spin-up of the Lambda functions works fast, having almost unnoticeable delay. I assume they’re using some sort of smart-cached [ECS](https://aws.amazon.com/ecs/) under the hood, but I wouldn’t know.

Setting up DynamoDB tables couldn’t be easier. We’re talking about a one prompt setup, where you only have to fill 2 boxes, your table name and the partition key for your table. Configuring TTL for each table works fine. But you can’t do and undo it often. It will prevent you from toggling it on and off, since it deletes your records without charging you for these operations. Inserting dynamoDB records manually on each table for testing purposes works perfectly. Each insert or batch triggers the lambda functions with little to no delay. Tweaking each table’s capacity up and down with read and write units is a breeze. It allows you to adjust them with only a few seconds of delay to apply the new configuration.

Getting to configure RDS MySQL is definitely easier than Lambda, but has more steps then DynamoDB. You also get more options. You can pick instance type, volume sizes and types, redundancy, maintenance windows, and backup retention periods. Once you set it up, you’ll have your shiny MySQL instance in about 10 minutes, ready to rock.

After the setup and test phase ends, I’ve had a contemplation moment as the listings were making their way to MySQL. I could sit back, relax and have a beer while the capture was happening. Or 3 beers. Take a nap? _This thing is slow!_

### Rough Edges

Performance was never my goal. Tinkering with the technologies available and building something cool was. But I didn’t expect it to be this slow. In the end, it was able to capture around 11.000 listings every 6 hours which translates to about one listing every ~2 seconds. I’ve written distributed crawlers with rates easily thirty-fold faster then this. They may not have been as exciting, though.

Each HTTP Request for a page takes between 0.7 and 1.1 seconds to return on average. Factor in the time it takes to spin up each lambda container, plus connecting to MySQL across the wire and inserting each record, you have 2 seconds. Each lambda receives a batch or stream of 5 DynamoDB records. The average life-span of each lambda function was of about 7 seconds for the parsing lambdas.

A few optimizations that could be done would be to perform the HTTP requests for each batch in parallel and perform batch inserts in MySQL.

Speaking of parallelism, the coldest bucket of water for me was the fact that Lambda will not scale horizontally very well_._ In my head, every stream inserted into Dynamo would immediately trigger one lambda function to process it. This meant that Lambda would always be catching up with the pace of inserts on Dynamo. So I would have tens of Lambda functions running at any given time, all in parallel, and beautiful. **I was wrong**_._

What actually happens is that Lambda has a limit of [concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html) that’s tied to how many shards the DynamoDB table has. Since my table had only one shard, there was only one Lambda Function Running at all times. What happened is that even though the inserts on one of the dynamoDB table took a couple minutes, the second layer of Lambda was being triggered slowly, one after the other. There was an internal queue storing my dynamo streams and feeding them to Lambda by serializing my execution instead of parallelizing it.

Every change on a DynamoDB table’s content will trigger your Lambda functions set to trigger. The catch is that these changes may not be only Insertsbut also updates, and some deletes triggered when the TTL collector kicks in and starts wiping your set-to-expire records. Luckily enough, each DynamoDB stream contains for each record in the stream, an attribute that you can use to tell whether that object was inserted, updated or deleted. I was receiving everything because there’s no way to set Lambda otherwise, but only processing the inserts.

### Pros and Cons

**Pros**:

*   Cheap
*   Fully Managed / Serverless
*   Bleeding-Edge Technology
*   Flexible Infrastructure
*   If you find a bug, you can change your lambdas immediately to fix every following batch

**Cons:**

*   Slow
*   Once it starts, you can’t pause it and restart from where it left
*   Only possible to tweak so far (code-wise changes)
*   Testing specific parts requires you to constantly disable and enable Lambda triggers

### Final Verdict

Despite the initial appeal, I wouldn’t recommend this architecture for something that requires performance and flexibility to change architecture easily and tweak more than the code that’s running. But, this setup is cheap and for something small, it works fine. It may not be the easiest to setup, but once you’re past that part, the maintenance is roughly zero.

I’ve had fun writing this and gluing all these pieces together to build this small Frankenstein. I would do it again. I still checked the boxes of all my initial goals for this project, but yes, performance could be better.

In the end, I’ve managed to download data of over 40k listings by running this process a few times. With that in hand, I plan on writing the code to crunch this data, but, for now, this is still a WIP.

I can only thank you if you made it this far. I’ve put together a guide on how to [set up your own AWS Account](https://github.com/MarcelloLins/ServerlessCrawler-VancouverRealState/wiki/How-do-I-set-this-up-On-My-Own-AWS-Account%3F). Since the code is [open-source](https://github.com/MarcelloLins/ServerlessCrawler-VancouverRealState) anyway, go hack it !

The code is open on [GitHub](https://github.com/MarcelloLins/ServerlessCrawler-VancouverRealState) if you want to check it out. The original article was posted [on my blog](https://techflow.me/). Stop by if you want to see what else I’m working on.

Feel free to reach out to me through any contact at my [personal page](http://about.me/marcellolins), in case you have any questions or simply want to chat.

See you on the next one :)








