---
author: Kyle Galbraith
authorTwitter: https://twitter.com/kylegalbraith
authorFacebook: https://facebook.com/10213871265802124
title: "How to Host a Website on S3 Without Getting Lost in the Sea"
subTitle: "In this post you are going to learn more about Amazon Web Services (AWS) via a practical example, hosting a static website on Amazon Simp..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*cvOIcjSaimo5u0oouQ3Nwg.jpeg
url: https://medium.freecodecamp.org/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38
id: how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38
date: 2017-07-28T21:10:01.490Z
tags: [
  "AWS",
  "Tech",
  "Technology",
  "DevOps",
  "Programming"
]
---
# How to Host a Website on S3 Without Getting Lost in the Sea







![](https://cdn-images-1.medium.com/max/2000/1*cvOIcjSaimo5u0oouQ3Nwg.jpeg)







In this post you are going to learn more about Amazon Web Services (AWS) via a practical example, hosting a static website on Amazon Simple Storage Service (S3) . In five simple and easy steps you can have a static website hosted on S3.

While there are many cloud providers available, I use AWS because:

*   They have the “Free Tier” which is a huge benefit when combined with already low costs.
*   Their services offer unmatched scale, elasticity, performance, and security.
*   It is one of the easiest to learn when you use it for practical examples.

There are other cloud platforms out there such as Microsoft Azure, Google Cloud Platform, and IBM Cloud Computing. They each have a similar service to S3, so the concepts in this post apply to these other providers as well.

Most websites are becoming static websites which means they run zero server side code and consist of only HTML, CSS and JavaScript. With no server side code to run, there is no reason to host them on a traditional server.

By using the static website hosting feature on an S3 bucket, we host static websites for one to two dollars a month and scale to handle millions of users.

I am a huge believer in learning by doing. The first service I learned from AWS was S3\. I learned it by going through the process of hosting my [personal site](https://www.kylegalbraith.com/) on it. This jump started my passion for all things Amazon Web Services. It is what led me to becoming a certified AWS Solutions Architect.

With the background out of the way, are you hungry to learn more about AWS by completing a practical example? Then let’s jump in.

### A Bit Of History

In November 2004, Amazon announced their first service for AWS, Simple Queue Service (SQS). That was the first inkling at what we often call the cloud, but it wasn’t viewed as a big disruption to the status quo.

In Spring 2006, Amazon introduced Simple Storage Service (S3). Unlike SQS, S3 would not only disrupt status quo, but would go on to be the foundational service of AWS.

S3 consists of buckets which are storage containers for files. A bucket is a high availability and high durability flat object store with no hierarchy.

Since 2006, the service has evolved to be much more. S3 is a foundational building block for other AWS services in the eco-system. Don’t believe me? Look at the event log for when S3 in Virginia went offline earlier this year.

As you can see from this graphic there were a lot of AWS services affected by the outage. This is because several AWS services rely on S3 internally as well.



![](https://cdn-images-1.medium.com/max/1600/1*28Zx7SaU3twFDC1U-LgUAg.jpeg)

Source: [https://regmedia.co.uk/2017/02/28/awsoutageboard.jpg](https://regmedia.co.uk/2017/02/28/awsoutageboard.jpg)



In fact, the [AWS Health Dashboard](https://status.aws.amazon.com/) is hosted out of S3\. Hey what a segue right?



![](https://cdn-images-1.medium.com/max/1600/1*xVhHKrplvA6U99BPSyRocA.png)



### 1\. Naming Your S3 Bucket

Before you begin hosting your awesome static website out of S3, you need a bucket first. For this blog post, it is **critical** that your bucket has the same name as your domain name.

If your website domain is www.my-awesome-site.com, then your bucket name must be www.my-awesome-site.com.

The reasoning for this has to do with how requests are routed to S3\. The request comes into the bucket, and then S3 uses the Host header in the request to route to the appropriate bucket.

Host: [www.my-awesome-site.com](http://www.my-awesome-site.com)



![](https://cdn-images-1.medium.com/max/1600/1*FqIAlrVzlFWYzBL0-6MaXw.png)



### 2\. Configuring Your S3 Bucket for Static Website Hosting

Alright, you have your bucket. It has the same name as your domain name, yes? Time to configure the bucket for static website hosting.

Guess what? Turning on static website hosting for your bucket is as simple as a few clicks in the AWS Console.

*   Navigate to S3 in the AWS Console.
*   Click into your bucket.
*   Click the “Properties” section.
*   Click the “Static website hosting” option.
*   Select “Use this bucket to host a website”.
*   Enter “index.html” as the Index document.

Or if you are all about command lines and would rather not have a graphical user interface (GUI) in your way, this [AWS CLI](https://aws.amazon.com/cli/) command turns website hosting on for your bucket.

<pre name="1af5" id="1af5" class="graf graf--pre graf-after--p">aws s3 website s3://www.my-awesome-site.com/ --index-document index.html --error-document error.html</pre>

Your bucket is configured for static website hosting, and you now have an S3 website url like this `http://www.my-awesome-site.com.s3-website-us-east-1.amazonaws.com/`.

Your bucket serves your static website, so it must be accessible to anyone in the world. This is referred to as anonymous access to the bucket.

To do this, you must update the Bucket Policy of your bucket to have public read access to anyone in the world. The steps to update the policy of your bucket in the AWS Console are as follows:

*   Navigate to S3 in the AWS Console.
*   Click into your bucket.
*   Click the “Permissions” section.
*   Select “Bucket Policy”.
*   Add the following Bucket Policy and then Save

<pre name="7f9f" id="7f9f" class="graf graf--pre graf-after--li">{  
    "Version": "2008-10-17",  
    "Id": "PolicyForPublicWebsiteContent",  
    "Statement": [  
        {  
            "Sid": "PublicReadGetObject",  
            "Effect": "Allow",  
            "Principal": {  
                "AWS": "*"  
            },  
            "Action": "s3:GetObject",  
            "Resource": "arn:aws:s3:::[www.my-awesome-site.com/*](http://www.ultimatefantasysupercross.com/*)"  
        }  
    ]  
}</pre>

Or for the command line fans out there, if `policy.json` is the above bucket policy, then use:

<pre name="615a" id="615a" class="graf graf--pre graf-after--p">aws s3api put-bucket-policy --bucket [www.my-awesome-site.com](http://www.my-awesome-site.com) --policy file://policy.json</pre>

It is important to note the `"Principal": { "AWS": "*" }`section of the bucket policy. This part of the policy opens up your bucket to anyone in the world. Any object in this bucket is available to the public via the S3 website url. **Don’t put anything in this bucket that you’re not willing to share with the world.**



![](https://cdn-images-1.medium.com/max/1600/1*DwS-jbsz3ErXX7GqAXAw8w.png)



### 3\. Adding A CNAME Record For Your Bucket Url

You have a bucket that is configured for static website hosting. It has an S3 website url. You understand that this bucket is accessible to the world? You are cruising right through this.

In order for a user to load your S3 website you’ll need to provide mapping from your domain name [www.my-awesome-site.com,](http://www.my-awesome-site.com,) to your S3 website url [www.my-awesome-site.com.s3-website-us-east-1.amazonaws.com.](http://www.my-awesome-site.com.s3-website-us-east-1.amazonaws.com.) This mapping is often referred to as a CNAME record inside of your Domain Name Servers (DNS) records.

<pre name="830d" id="830d" class="graf graf--pre graf-after--p">www.my-awesome-site.com CNAME `www.my-awesome-site.com.s3-website-us-east-1.amazonaws.com`</pre>

The process to complete this step varies depending on who your DNS provider is. In general this is what you are looking for within your DNS provider:

*   Create a record for a host like `www`
*   The record type must be `CNAME (Canonical name)`
*   The value must be your S3 website url `www.my-awesome-site.com.s3-website-us-east-1.amazonaws.com`



![](https://cdn-images-1.medium.com/max/1600/1*Br5bHMQcZkkflbfZdTWZ5Q.png)



### 4\. Uploading Your Static Website

Your bucket is configured for static website hosting. You have a CNAME record in your DNS records that resolves to the S3 website url? Awesome, it’s showtime then.

Remember S3 is a flat object store, which means each object in the bucket represents a key without any hierarchy. While the AWS S3 Console makes you believe there is a directory structure, there isn’t. Everything stored in S3 is keys with prefixes.

This is important to note because if you have a website structure like this:

<pre name="f428" id="f428" class="graf graf--pre graf-after--p">about/  
   index.html  
contact/  
   index.html  
css/  
   styles.min.css  
...  
...  
index.html</pre>

It is easy to assume that this is a traditional directory structure. In fact, the AWS S3 Console makes you believe this as well.







![](https://cdn-images-1.medium.com/max/2000/1*hcMqoj6NtnGTPFJL-EIJCw.png)

The AWS S3 Console







But in actuality `about` is not a directory. It is a _prefix_ for the `index.html` key.

With that out of the way, let’s upload your static website into your newly configured S3 website bucket!

If you are a GUI person, then you upload your static website to S3 via the AWS Console by completing these steps:

*   Navigate to S3 in the AWS Console.
*   Click into your bucket.
*   Click the “Upload” button.
*   Drag and drop or select “Add files”, and add the entire static website directory.
*   Click “Next”.
*   Leave the default permissions S3 offers.
*   Click “Next”.
*   Leave the default permissions for “Set properties”.
*   Click “Next”.
*   Click “Upload”.

For the command line gurus out there, those 10 steps are reduced to one command line operation.

<pre name="ea57" id="ea57" class="graf graf--pre graf-after--p">aws s3 cp personal-blog/src/_site/ s3://www.my-awesome-site.com/ --recursive</pre>

### 5\. Validate That It Worked

Your static website has been uploaded to your S3 website bucket. You can go to `www.my-awesome-site.com` and your static website loads from your S3 bucket.



![](https://cdn-images-1.medium.com/max/1600/1*k7rpwiLB6KKh3j5YTHXg1Q.png)



### Benefits

In five simple and easy steps you have learned how to host your static website out of AWS S3\. Not to mention you scored some benefits from moving your static website to S3.

**Low cost** — Hosting a website in S3 does not incur extra charges. You are paying standard S3 prices on GET requests and Data Transfer out of the bucket when a user visits your site.

*   GET Requests cost $0.004 per 10,000 requests
*   Data Transfer Out cost $0.090 per GB (up to 10 TB / month)

A Cost breakdown example: Let’s say that [www.my-awesome-site.com](http://www.my-awesome-site.com) loads 20 resources. The total size of those resources per visit is 1MB. The average total monthly visits is 20,000\. Then we estimate the total cost of S3 on a monthly basis at around **$1.96** per month.

Not long ago, you paid $10/month, so $2 is worth it.

**Maintenance** — Your static website now resides in S3\. There is no longer any server side code to maintain and no web servers to configure and keep up to date.

**Scale** — S3 is a high availability and durable service that AWS maintains. If your website goes from 10 users a day to 10 million, S3 scales your website automatically.

**Security** — There is no server running that you maintain. Thus you avoid making configuration errors that make you vulnerable to attacks. You are still responsible for the security of your bucket**. Remember your website bucket is public!**

Those are some serious wins under your belt. With an S3 website setup, you have a foundation to build on to extend and leverage even more of AWS.



![](https://cdn-images-1.medium.com/max/1600/1*lAk337rCVdJBsCe13Szmwg.png)



### Conclusion

There is a lot of information out there about AWS and the wide range of services they offer. It is difficult to find the information you need to learn and make quick progress.

It is my hope that this post helped you cut through all the information and accomplish something practical. In my honest opinion the best way to learn AWS is to learn by doing. So in five simple and easy to understand steps you were able to learn how to host your static website out of AWS S3.

Did you find this post helpful in learning more about AWS? If you have any questions or are blocked somewhere along the line, please [reach out to me](https://www.kylegalbraith.com/). I am more then happy to help out.

#### Hungry To Learn More?



![](https://cdn-images-1.medium.com/max/1600/1*2rUDhw8grg9RjGmkzkIe7Q.png)



If you enjoyed this post and are hungry to learn even more about AWS, I have started putting together a small book! You can learn about AWS services and techniques through the practical example of hosting, delivering, and securing static websites using Amazon Web Services. Stay updated on the progress of the book [here](https://www.kylegalbraith.com/learn-aws/).

#### If you enjoyed this, don’t forget to hit that green ❤ to show your support!








