---
author: Avner Sorek
authorTwitter: https://twitter.com/AvnerSo
authorFacebook: none
title: "How I cut my AWS bill by 90% by going serverless"
subTitle: "In short, I was able to move my side project — an Express.JS application — from AWS Elastic Beanstalk to Lambda+APIG. It took me less tha..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*xJn9adGp0wgU4INAtwFxMA.jpeg
url: https://medium.freecodecamp.org/how-i-cut-my-aws-bill-by-90-35c937596f0c
id: how-i-cut-my-aws-bill-by-90-35c937596f0c
date: 2017-07-30T09:41:04.152Z
tags: [
  "Serverless",
  "Startup",
  "AWS",
  "Tech",
  "Web Development"
]
---
# How I cut my AWS bill by 90% by going serverless



![](https://cdn-images-1.medium.com/max/1600/1*xJn9adGp0wgU4INAtwFxMA.jpeg)



In short, I was able to move my side project — an Express.JS application — from AWS Elastic Beanstalk to Lambda+APIG. It took me less than a day and it resulted in a ~90% reduction of costs.

This could be beneficial for any non-mission critical application (or environment), and I believe that it could be a game-changer for side projects and small endeavors.

First of all, for full disclosure — the application in question is a **side project** and not subject to any service-level agreement or performance requirements. It is a web site called [libhive](https://www.libhive.com). libhive scans the code in the [npm](https://www.npmjs.com/) registry and finds examples of packages using other packages. It is built in Node.JS with ExpressJS, and backed by DynamoDB.

libhive gets a modest 50–150 visits daily. A couple of months ago, after I decided not to pursue this project any longer, I still wanted to keep it alive — but to minimize the maintenance costs. The site was running on Elastic Beanstalk running 2 micro instances, which were on 24/7 for redundancy.

I was able to make a very quick transition to AWS Lambda and API Gateway. This was mostly due to [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) by AWS labs, which fits ExpressJS apps to lambda almost effortlessly. Admittedly I do have some experience with Lambda and APIG, but setup did not take long, and it barely required any code changes. It took me less than a full day’s work.









<iframe data-width="800" data-height="450" width="980" height="551" src="https://medium.freecodecamp.org/media/381223cc5562766bcac707782cc2590d?postId=35c937596f0c" data-media-id="381223cc5562766bcac707782cc2590d" data-thumbnail="https://i.embed.ly/1/image?url=http%3A%2F%2Fd3ugvbs94d921r.cloudfront.net%2F597899c99973d2927a920496.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>









The graph above shows AWS costs (in USD) across three months — April was still 100% Elastic Beanstalk, I made the change during May and June was all serverless. April’s costs were mostly Elastic Compute — specifically 18$ for two t2.micro instances and 20$ for a “classic” load balancer — all running 24/7\. Those costs were reduced completely (still paying a little for some EBS volumes). During June I’ve had 631,187 requests to APIG — which came to 2.21$, and the same amount of requests to Lambda, resulting in 386,731 GB-seconds, which fall entirely under the Lambda free tier — so no cost was incurred.

#### Costs down with little work — too good to be true?

Of course. Moving to Lambda has its price — the service is slower, and “cold starts” do occur sometimes. This is also due to my Lambda architecture — I’m running a small monolith in a single Lambda function, that gets data from Dynamo and renders HTML views. This made the migration super-easy, but is far from an ideal serverless setup.











* * *







### What this means for you?

If you’re considering this for the business you’re working for (or running) — I would **not** recommend moving any production applications to Lambda, especially not like this. However — if you are running multiple development/test environments on Elastic Beanstalk or EC2, you might be able to significantly reduce your costs for these **non-production** environments, and in larger teams/companies — you might have a lot of those, and those costs can add up.

#### Good news for the little guy

If you are like me — a developer with a side-project — these reduced costs could make a huge difference. The ability of having more than a static website up and running, at a tenth of the cost, can be a true game changer. **Entry barriers for software products are getting lower — and I believe this is good news for everyone.**











* * *







_Have a similar story? A question? Would you like me to write a more technical piece about the details of the migration process? Let me know about it in the comments below. Thanks for reading._








