---
author: Kangze Huang
authorTwitter: none
authorFacebook: none
title: "The Complete AWS Web Boilerplate"
subTitle: "Build powerful scalable web apps by leveraging Amazon Cloud"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*AD9ZSLXKAhZ-_WomszsmPg.png
url: https://medium.freecodecamp.org/the-complete-aws-web-boilerplate-d0ca89d1691f
id: the-complete-aws-web-boilerplate-d0ca89d1691f
date: 2016-12-05T21:56:09.523Z
tags: [
  "AWS",
  "JavaScript",
  "Web Development",
  "Cloud Computing",
  "DevOps"
]
---
# The Complete AWS Web Boilerplate

## Build powerful scalable web apps by leveraging Amazon Cloud



![](https://cdn-images-1.medium.com/max/1600/1*AD9ZSLXKAhZ-_WomszsmPg.png)



### Table of Contents

> **Part 0:** [Introduction to the Complete AWS Web Boilerplate](https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.3eqpvcjsy)

> **Part 1:** [User Authentication with AWS Cognito](https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.cbkz7b2jp) (3 parts)

> **Part 2:** [Saving File Storage Costs with Amazon S3](https://medium.com/@kangzeroo/amazon-s3-cloud-file-storage-for-performance-and-cost-savings-8f38d7769619#.l9so2hk00) (1 part)

> **Part 3:** [Sending Emails with Amazon SES](https://medium.com/@kangzeroo/sending-emails-with-amazon-ses-7617e83327b6#.5nhcrr609) (1 part)

> Part 4: Manage Users and Permissions with AWS IAM **[Coming Soon]**

> Part 5: Cloud Server Hosting with AWS EC2 and ELB**[Coming Soon]**

> Part 6: The MongoDB Killer: AWS DynamoDB **[Coming Soon]**

> Part 7: Painless SQL Scaling using AWS RDS **[Coming Soon]**

> Part 8: Serverless Architecture with Amazon Lambda **[Coming Soon]**

### Hello 2017

You want to build scalable production-ready apps but don’t have the resources to hire a multi-person team to manage all the code necessary for the big leagues. You’ve heard about 2 person wonder-teams that create fantastically efficient apps on a fraction of the thousand dollar budgets of traditional teams. Your wallet would love you if you could pay for just the services you need, without any of the fixed overhead costs. So you do your research and arrive at Amazon Web Services, the world’s largest and most comprehensive cloud services provider. But after an hour after investigating, you are overwhelmed by the sheer size and variety of solutions available. “Damn”, you say, “where do I even begin?”

If you’ve ever looked into the documentation on AWS and tried to wrap your head around how all the pieces connect together, you’ll know that it’s no easy task. When you try to implement something simple like S3, you’ll wander into IAM for security and from there potentially stumble into AWS STS, AWS Cognito… the list goes on. How about EC2? Security Groups? AWS Lambda? It’s just one rabbit hole after another.



![](https://cdn-images-1.medium.com/max/1600/1*U4RqTBdoZ4Sbic4J10Kh3w.png)

An intimidating look at Amazon Web Services





![](https://cdn-images-1.medium.com/max/1600/1*L8abnt1YoymDdaqZxdH2rA.png)

The new homepage still looks intimidating



Now you don’t necessarily have to use Amazon for everything. If you already know how to integrate user authentication using an existing means, then that’s probably your best option. No need to add extra complexity. But how about scaling databases? Ok sure, maybe you don’t need to scale YET, so no problem. But are you managing your app secrets securely? Are you saving server bandwidth by hosting your large files elsewhere on the cloud? Maybe you as a business would benefit from collecting lots of user data, but you’re not sure if your main database could handle the extra load. There’s so many things you COULD do to grow your product, but DON’T do because it’s just too much work.

Introducing Kangzeroo’s Complete AWS Web Boilerplate — A starter app that fully integrates Amazon into every tedious infrastructure task and scales automatically. By leveraging AWS in your apps from the very beginning, your business can hit the ground running and focus your precious resources on refining your product. This is truly a modern stack that will let you wield the power of an entire team of developers at a fraction of the cost and time. We won’t be covering every single Amazon service, just the core ones you will likely use. If you’re excited and ready to get started, continue reading. Although this is an advanced tutorial series, don’t be scared to follow along, even if you aren’t coding — the knowledge is invaluable. So let’s begin!

### A Overview of the AWS Infrastructure



![](https://cdn-images-1.medium.com/max/1600/1*hfqR3jziBI7J4I1vkyhpbw.png)

The 8 Amazon services we will be using



The previous screenshot of all AWS services was super intimidating. To be honest, I was just trying to scare you. These are the 8 services we will actually be using. Let’s go over each service and what it’s used for, as well as the potential free tier options. In order to use AWS, you must sign up for an account which requires a credit card. The good news is that you won’t necessarily have to pay, as every new AWS account gets free usage tier for one year.

#### Identity & Access Management (IAM)

Amazon IAM is used for managing permissions throughout your Amazon account. One Amazon account may have several users, such as one for deploying apps and another for purely analyzing data. Since you do not want the analyst to be able to modify anything, we need a separate “account” for the analyst. We can use IAM to create and manage that separate “account” (via IAM users or roles) and contain our paranoia. Thank heavens! IAM can also be used to grant specific permissions to certain services, such as an IAM role specifically for sending emails or accessing an S3 bucket. IAM is completely free.

#### Elastic Cloud Compute (EC2)

Amazon EC2 is used for hosting your apps on virtual cloud servers. It is the most commonly used Amazon service and probably the cheapest and most reliable cloud hosting you can get. You may have heard of EC2 competitors such as DigitalOcean, Linode and A Small Orange which seem very user friendly. It’s true they are very user friendly, but why not stay within the Amazon ecosystem? Keep everything in Amazon and you don’t have to learn multiple different systems. The best part is, the free tier is very generous! You can keep your server running 24/7 and still be within the free tier limits.



![](https://cdn-images-1.medium.com/max/1600/1*OlIq7dx7vg_flsTbwxkucQ.png)



#### Cognito

AWS Cognito is a user authentication and management service. With Cognito, you do not need to keep track of secret keys used for hashing passwords nor implement hardcore security. It’s all handled by Amazon, and you even get advanced features such as two-factor authentication and “forgot my password” functionality. Using Cognito also makes it really easy to restrict public access to other AWS services, such as S3, by associating an IAM role with a Cognito login and giving access permission to only that role. Cognito is very generous, with up to 50,000 free active monthly users even after the free tier expires.



![](https://cdn-images-1.medium.com/max/1600/1*Z_DXSKpPIvuUkEV3OHFAQQ.png)



#### Simple Scalable Storage (S3)

AWS S3 is cloud file storage. It is a very popular Amazon service that allows us to store any type of file of any size on a file system that is separate from our servers. From a performance standpoint this is great because servers don’t need to waste computing power and bandwidth on transferring files. From a financial standpoint, S3 is also a bargin because S3 bandwidth/storage is a lot cheaper than EC2 bandwidth/storage. Instead of sending an image file, you send a url string and your app client fetches the image from S3\. Amazon S3 also has a free tier, but even without it it’s ridiculously cheap. To store 10GB of images with 30GB data transfer-out and 1 million GET requests comes out to a monthly total of… $1.89 USD.



![](https://cdn-images-1.medium.com/max/1600/1*PKeQ64AlIYhj3fnab4Inxw.png)



#### Relational Database Service (RDS)

AWS RDS (what a mouthful) is a cloud managed relational database service. Although Amazon offers its own proprietary relational database, called Amazon Aurora, you can choose to use a variety of existing well known databases. Options include MySQL, PostgreSQL, Oracle and Microsoft SQL Server. The great thing about RDS is that it auto-scales for you, saving you expensive labor/expertise hours.



![](https://cdn-images-1.medium.com/max/1600/1*Xh_v3akZwW6IjI2mxwr9ew.png)



#### DynamoDB

AWS DynamoDB is a proprietary noSQL database managed and auto-scaled by Amazon. It is great for storing your misc unstructured data, or as an “approximate alternative” to AWS Redshift if you can’t afford it. DynamoDB has really matured over the years. A few years ago it was only a key-value store (as in no nested objects or arrays), but today it is extremely flexible. You can nest objects up to 16 layers deep and query on multiple indexes. That also makes it an “approximate alternative” to MongoDB, granted that you have your own data structure checking in place. The best part is that the 25GB of free storage does not expire after your free trial!



![](https://cdn-images-1.medium.com/max/1600/1*zYqr8UO71HFW8YQJ4NAelA.png)



#### Simple Email Service (SES)

Why bother setting up your own email server when you can use AWS SES? If your product uses emails for sending receipts, newsletters or as a log of activity, you can use SES to affordably manage those communications. Email sending is a pretty standard cloud service, and you could go with providers such as MailChimp and SendGrid, but again, being contained in the Amazon ecosystem has many benefits! While MailChimp gives you 12,000 free emails a month, AWS SES gives you 62,000\. That’s economies of scale for you!



![](https://cdn-images-1.medium.com/max/1600/1*Nef5Mflp26LSajKKUlyhdw.png)



#### Lambda

AWS Lambda is a very unique service offered by Amazon. One of the major benefits of staying in the Amazon ecosystem is that you can use AWS Lambda to trigger events or actions from one service to another without running your own server. An example is if you wanted to create a user folder in your S3 bucket every time a user signs up. Or maybe you want to trigger an email if someone deletes certain content from your database. Or maybe you want to set up data pipelines to stream your user data to be processed and routed in real time. The possibilities are flexible and endless! AWS Lambda is also free after your trial period ends.



![](https://cdn-images-1.medium.com/max/1600/1*Vme_kv5oh7z1X1vY1ssA6w.png)



### Conclusion

After seeing that high level overview of the Amazon services we will be using, you’re probably really hyped. That’s great because I believe you should love the technology you are using. Amazon is both powerful and affordable, allowing you to be a 10x developer (accomplishes the work of 10 other programmers) in mind and practice. Do you feel the power running through your veins? Are you excited to learn this stack? Are you ready to scale from Day 1? If so, let’s get started.

### Table of Contents

> **Part 0:** [Introduction to the Complete AWS Web Boilerplate](https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.3eqpvcjsy)

> **Part 1:** [User Authentication with AWS Cognito](https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.cbkz7b2jp) (3 parts)

> **Part 2:** [Saving File Storage Costs with Amazon S3](https://medium.com/@kangzeroo/amazon-s3-cloud-file-storage-for-performance-and-cost-savings-8f38d7769619#.l9so2hk00) (1 part)

> **Part 3:** [Sending Emails with Amazon SES](https://medium.com/@kangzeroo/sending-emails-with-amazon-ses-7617e83327b6#.5nhcrr609) (1 part)

> Part 4: Manage Users and Permissions with AWS IAM **[Coming Soon]**

> Part 5: Cloud Server Hosting with AWS EC2 and ELB**[Coming Soon]**

> Part 6: The MongoDB Killer: AWS DynamoDB **[Coming Soon]**

> Part 7: Painless SQL Scaling using AWS RDS **[Coming Soon]**

> Part 8: Serverless Architecture with Amazon Lambda **[Coming Soon]**








