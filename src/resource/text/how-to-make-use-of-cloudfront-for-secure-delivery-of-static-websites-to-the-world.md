---
author: Kyle Galbraith
authorTwitter: https://twitter.com/kylegalbraith
authorFacebook: https://facebook.com/10213871265802124
title: "How to use Cloudfront for Secure Delivery of Static Websites Around the World"
subTitle: "In this post you are going to learn how to leverage another Amazon Web Services (AWS) offering, CloudFront. In five simple and easy steps..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*b0G5oiJZqt8AltRT0D_TSQ.png
url: https://medium.freecodecamp.org/how-to-make-use-of-cloudfront-for-secure-delivery-of-static-websites-to-the-world-d2f54e8b096
id: how-to-make-use-of-cloudfront-for-secure-delivery-of-static-websites-to-the-world-d2f54e8b096
date: 2017-08-19T20:15:02.394Z
tags: [
  "AWS",
  "Tech",
  "Technology",
  "Programming",
  "DevOps"
]
---
# How to use Cloudfront for Secure Delivery of Static Websites Around the World







![](https://cdn-images-1.medium.com/max/2000/1*b0G5oiJZqt8AltRT0D_TSQ.png)

Photo by [chuttersnap](https://unsplash.com/photos/kyCNGGKCvyw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







In this post you are going to learn how to leverage another Amazon Web Services (AWS) offering, CloudFront. In five simple and easy steps you can leverage CloudFront for low latency, security, and simple delivery of your static website.

[Last time](https://medium.com/@kyle.galbraith/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38) we configured AWS Simple Storage Service (S3) to host our static websites. Today, we expand on our practical example of hosting and delivering a static website. By taking advantage of AWS CloudFront you can gain the following advantages:

*   **Free SSL**  
    Yes zero cost SSL (Secure Sockets Layer) for your static website in a few clicks of a button
*   **Simple delivery**  
    Gain the advantages of CloudFront without changing any of your current hosting setup
*   **Improved latency**  
    CloudFront is a content delivery network (CDN). By leveraging the service for caching you can decrease the load time of your site for everyone in the world

I enjoy learning new things by working with them via solving a real problem. This post is a guide to solving the problem of improving the delivery and security of a static website. It is one of the first problems I solved in becoming a Certified AWS Solutions Architect.

A static website is by no means the only use case for CloudFront. It can be used for dynamic sites, streaming content, and even routing to different API’s. For today we will focus on the use case of improving the delivery and security of a static website.

Are you ready to dive deeper into CloudFront? Do you want to improve the security and delivery of your static website? Let’s get started.



![](https://cdn-images-1.medium.com/max/1600/1*jmKQLZdjvAZVzzGqHKv4KQ.png)



### Important Terminology

When you are first learning CloudFront the terminology can take a minute to set in. Thus, it is worth a minute or two to define some terms**:**

*   **Behaviors** A behavior defines how traffic gets routed based on the requested url. Each behavior consists of two parts. First is the regex pattern to match in the url. Second is the origin to route the request to if there is a pattern match. Behaviors get evaluated by a hierarchy when there is more than one behavior defined. The first pattern the url matches is the origin that will receive the traffic.
*   **Origins** These are your content sources. They can be AWS origins like S3 buckets or Elastic Load Balancers. As well as custom origins that live outside of your AWS account.
*   **Edge** These are cache locations located across the world. They can cache responses from origins for quick retrieval. This is useful for loading content based on the location of your users.
*   **Invalidation** When caching data returned from an origin, you need to be able to invalidate the cache. In CloudFront you bust the cache with invalidation requests that specify regex patterns. This ensures that your users receive the latest and greatest content.

### Prerequisites

You should have these two things on hand when configuring your initial distribution. Having these handy will make your initial origin setup a breeze:

*   The S3 website url for your static website that you configured in the previous post: `http://www.my-awesome-site.com.s3-website-us-west-2.amazonaws.com`
*   Have your DNS records easily accessible as we will be needing to update that CNAME record again

### 1\. Create Your Initial Distribution

In this post we are creating a **web distribution**. This type of distribution matches our use case. It will allow us to provide low latency, secure and simple delivery of our static website.

You should have your S3 website url handy for setting up your initial distribution. Got it? Awesome, let’s go ahead and get the initial web distribution setup.

**Note:** For the initial creation of your web distribution we are going to leave the defaults selected. We will revisit a lot of these settings in upcoming steps:

1.  Navigate to CloudFront in the AWS Console
2.  Click “Create Distribution”
3.  Click “Get Started” under the Web distribution
4.  Enter your S3 website url [http://www.my-awesome-site.com.s3-website-us-west-2.amazonaws.com](http://www.my-awesome-site.com.s3-website-us-west-2.amazonaws.com) in **Origin Domain Name**
5.  Under “Distribution Settings” enter your website url [www.my-awesome-site.com](http://www.my-awesome-site.com) in **Alternate Domain Names** (CNAMES).
6.  Leave everything else set to the defaults for now. We will revisit these settings in upcoming steps.
7.  Click “Create Distribution”

### 2a. Update Your CNAME Record To Use Your CloudFront Url

You created your initial CloudFront distribution with large number of defaults. It has a **default origin** that is pointing to your S3 website url. You are a CloudFront guru already. Time to update your DNS (Domain Name System) records.

For a user to gain the advantages of your new CloudFront distribution you need to provide a mapping from your domain name to your CloudFront domain name . This mapping is done with a CNAME record within your DNS records.

<pre name="add9" id="add9" class="graf graf--pre graf-after--p">www.my-awesome-site.com CNAME d31wyoururl.cloudfront.net</pre>

You can find your CloudFront domain name by navigating to CloudFront in the AWS Console. There you will see the “Domain Name” for your configured distribution. This is the url you will want to use when configuring your CNAME record within your DNS provider.

### **2b. Validate Your CNAME Record**

I confirm changes to my DNS records by utilizing [Dig](https://toolbox.googleapps.com/apps/dig/) in the G Suite Toolbox. This is a web based version of the Unix based `dig` command. To confirm the CNAME record change:

1.  Enter `www.my-awesome-site.com` in the Name input
2.  Hit Enter
3.  Click CNAME

You should see something like the following if your CNAME record is correct.

<pre name="65a9" id="65a9" class="graf graf--pre graf-after--p">id 40593   
opcode QUERY   
rcode NOERROR   
flags QR RD RA   
;QUESTION   
www.my-awesome-site.com. IN CNAME   
**;ANSWER   
www.my-awesome-site.com. 3599 IN CNAME d32myawesomedistribution.cloudfront.net.** ;AUTHORITY   
;ADDITIONAL</pre>



![](https://cdn-images-1.medium.com/max/1600/1*fSCRzT3QRj5xajDq6W3FCQ.png)



### 3\. Configure Your Default Behavior

You have a default web distribution. You updated and validated that your DNS records have a CNAME record that maps your website domain name to your distribution domain name. You are ready to turn some dials and leverage the power of AWS CloudFront.

In Step 1 you filled in the Origin Domain Name with your S3 website url. The **default caching behavior** handles routing traffic to this origin.

This default behavior is your fall through behavior. You will notice the path pattern is a wildcard `*` regex. This means everything is a match for this behavior. If evaluated the request gets routed to the associated origin.

1.  Navigate to CloudFront in the AWS Console
2.  Click the “ID” of your web distribution
3.  Click the “Behaviors” tab
4.  Click your “Default” behavior
5.  Click “Edit”

Wham! There is enough drop downs, input boxes, and radio buttons to make a UX designers head spin. Fear not, there is great definitions available for each setting. If you click the information icon to the right of a setting you will get a definition.

Sticking to our example. We are going to configure the default cache behavior to have the following settings:

1.  **Viewer Protocol Policy**: Select “HTTP and HTTPS”
2.  **Allowed HTTP Methods**: Select “GET, HEAD, OPTIONS”
3.  **Forward Headers**: Select “None”
4.  **Object Caching**: Select “Customize”
5.  **Minimum TTL**: Enter “0”
6.  **Maximum TTL**: Leave the default “31536000” (one year)
7.  **Default TTL**: Enter “86400” (one day)
8.  **Forward Cookies**: Select “None”
9.  **Query String Forwarding**: Select “None”
10.  **Smooth Streaming**: Select “No”
11.  **Restrict Viewer Access**: Select “No”
12.  **Compress Objects Automatically**: Select “Yes”
13.  Click “**Yes, Edit**”

OK, what in the world did we just do? We actually didn’t change much, so I will touch on just the things we did change and why.

*   **Allowed HTTP Methods** We changed this to white list GET, HEAD, and OPTIONS requests. This is assuming that **all** requests on your static website will be one of these three methods. CloudFront blocks a request that does not use a white listed HTTP method. If you need to make a POST, PUT, PATCH, or DELETE you will need to update this setting.
*   **Object Caching** We changed this to customized caching for the default behavior. For our example we made this very broad and simple by caching everything for a default time to live (TTL) of one day. It is advisable to use origin cache headers instead. Doing so allows the origin to control how CloudFront should cache responses.
*   **Compress Objects Automatically** We changed the setting to allow CloudFront to do this. Turning this on allows us to leverage the Accept-Encoding request header. When leveraged CloudFront can return the content compressed. Enabling quicker rendering times and reduced sizes of our responses.



![](https://cdn-images-1.medium.com/max/1600/1*m7ROgKMuRg2qG-qa8SQPqA.png)



### 4\. Add SSL to Your Distribution For Free

You have created a default distribution, updated your DNS records, and configured your Default Behavior. You now get to have more fun by changing a few settings on your distribution.

Are you ready to get free, as in costs you zilch, SSL on your static website? Let’s learn about ACM (AWS Certificate Manager).

Currently your static website is using the **Default CloudFront Certificate**. This is a certificate for **only**the CloudFront domain. Your site can load over https if you use the CloudFront url. If you use your normal domain name url, your connection cannot be https.

So how do we get https for `www.my-awesome-site.com`? We must create a **Custom SSL Certificate** via ACM.

To add a Custom SSL Certificate to your distribution you can follow the steps listed below:

1.  Navigate to **Certificate Manager** in the AWS Console
2.  Click “Request a Certificate”
3.  In the Domain Name enter “*.my-awesome-site.com”
4.  Click “Review and request”
5.  Click “Confirm and request”

**Important:** The owner of the domain must approve the request. ACM will deliver the certificate request via email. The certificate is not available to CloudFront until the approval of the request.

After approval you can update your distribution to use your new certificate.

1.  Navigate to CloudFront in the AWS Console
2.  Click the “ID” of your web distribution
3.  Click “Edit”
4.  Select “Custom SSL Certificate”
5.  Choose “*.my-awesome-site.com”
6.  Click “Yes, Edit”

Voila! You now have a SSL connection for your static website. When users navigate to your site via https they will now be on a secured connection. Secure connections is becoming very important for all websites. Chrome is beginning to flag websites that are [not serving content over SSL](https://plus.google.com/+GoogleWebmasters/posts/iDUi5pCNuLZ).

#### 5\. Validate That It Worked

You have now configured CloudFront to serve your static website hosted in S3\. You can confirm by entering in your url `https://www.my-awesome-site.com`. Verify your static website loads via CloudFront over a trusted https connection.



![](https://cdn-images-1.medium.com/max/1600/1*93JhM4ZXDFvCBoMRzjtVbw.png)



### Benefits

Congratulations on learning another AWS Service! By going through this guide you gained some awesome benefits that puts you ahead of the pack.

**Low Latency** CloudFront is a CDN (Content Delivery Network). It can leverage caches all around the world to quickly serve content to users. We implemented a first pass caching mechanism on our default behavior. You could expand on this further in the future by having your S3 origin return its own cache headers.

**Improved Security**   
ACM allowed us to create free SSL certificates for our domain. This means we have improved the security of our website as now users are always on https connections. This is critical for static websites that are taking users information like passwords, usernames, and even emails.

**Extensible**   
We have demonstrated one use case of CloudFront.

Here is a range of other improvements you could make:

*   Zero client side CORS requests by routing all traffic through your distribution
*   Leverage AWS Web Application Firewall (WAF) on your distribution. You can setup a few Lambda functions to block malicious IP addresses or bad bots



![](https://cdn-images-1.medium.com/max/1600/1*ibjmh98TttHmWT3I_i1wlg.png)



### Conclusion

Learning new skill sets like AWS is a marathon, not a sprint. I am learning new things about existing services and how to take advantage of new ones on a daily basis. There is a lot of information out there that can make learning overwhelming.

I hope that this post helped you slice through the information. You learned a new service today by completing something practical. Most of my background in AWS has come from doing as you have done today.

In ten minutes you have improved the latency and security of your static website. By doing something practical you have learned about AWS CloudFront as well.

Did you find this post helpful in learning more about AWS? Do you have other problems you think would make for a great post? Let me know in the comments. If you have any questions or need some help please [reach out to me](https://www.kylegalbraith.com/). I am more then happy to help out.

### Hungry To Learn More?



![](https://cdn-images-1.medium.com/max/1600/1*2rUDhw8grg9RjGmkzkIe7Q.png)



If you enjoyed this post and are hungry to learn even more about AWS, I have started putting together a small book! You can learn about AWS services and techniques through the practical example of hosting, delivering, and securing static websites using Amazon Web Services. Stay updated on the progress of the book [here](https://www.kylegalbraith.com/learn-aws/).

#### If you enjoyed this, don’t forget to offer claps to show your support!








