---
author: Adam Watt
authorTwitter: https://twitter.com/InTechMansTerms
authorFacebook: none
title: "How to setup Continuous Deployment to AWS S3 using CircleCI in just 30 minutes"
subTitle: "Continuous Deployment might seem complicated at first, but don’t be intimidated. In this tutorial, I’ll show you how to implement Continu..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*iEPDwncshci0-coGQn96Cg.jpeg
url: https://medium.freecodecamp.org/how-to-set-up-continuous-deployment-to-aws-s3-using-circleci-in-under-30-minutes-a8e268284098
id: how-to-set-up-continuous-deployment-to-aws-s3-using-circleci-in-under-30-minutes-a8e268284098
date: 2017-04-28T18:01:39.669Z
tags: [
  "AWS",
  "Circleci",
  "Web Development",
  "Programming",
  "DevOps"
]
---
# **How to setup Continuous Deployment to AWS S3 using CircleCI in just 30 minutes**







![](https://cdn-images-1.medium.com/max/2000/1*iEPDwncshci0-coGQn96Cg.jpeg)







Continuous Deployment might seem complicated at first, but don’t be intimidated. In this tutorial, I’ll show you how to implement Continuous Deployment to AWS S3 for a static website using CircleCI in less than 30 minutes.

You’ll need both an AWS account and a CircleCI account. If you don’t have these yet, start by opening a free account for AWS [here](https://aws.amazon.com/free) and a free CircleCI account [here](https://circleci.com/signup/) . Both AWS and CircleCI have a free tier that’s more than enough for what you will need for this tutorial.

### Getting the code

First you will start by forking and cloning the following project repo on Github: [S3ContinuousDeploy](https://github.com/AWattNY/S3ContinuousDeploy) or if you prefer you can try this tutorial with one of your own repos as long as it’s a static site.

Next you will add the project to your CircleCI account.



![](https://cdn-images-1.medium.com/max/1600/1*rpHcpF4I7W0mDu1H0WvgUg.png)



Next select the S3ContinuousDeploy repo you just cloned and click build project.



![](https://cdn-images-1.medium.com/max/1600/1*_dnV50_unj8H9RODMVQQYg.png)

Choose the S3ContinuousDeploy repo and click build project



At this point the build will run, but you will be getting an error message warning you that the settings for your project couldn’t be detected. Which is normal since we don’t have a circle.yml configuration file in place, which is what you will be doing next.



![](https://cdn-images-1.medium.com/max/1600/1*PDeB4RAPCc2_kmD3dBS92g.png)



Looking at the docs at CircleCI you can get an idea of what the circle.yml should look like. Unfortunately the circle.yml file example provided will not work as is and will need some tweaking, so let’s do that.

Below is the modified circle.yml file you will be using:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d570a7115b33f4942c6cc2ed82121e16?postId=a8e268284098" data-media-id="d570a7115b33f4942c6cc2ed82121e16" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F20860228%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Basically CircleCI creates the build within a Docker container, and the override under dependencies property (line 3) that I added instructs CircleCI to install the AWS command line interface (awscli) that will be used in this case to help manage and facilitate deployment to AWS S3.

So make sure you add the file and commit it to your repo. Finally make sure you push this and other commits you might have made before you proceed to the next step.

As per CircleCI documentation the command for deploying is:



![](https://cdn-images-1.medium.com/max/1600/1*ZUGQqjk7ozjUk6pnXu-LOg.png)



The path-to-file was a bit tricky to figure out but by looking at the error logs I was able to finally get it right: home\ubuntu\projectName. So just replace projectName with the name of your project, in my case that will be S3ContinuousDeploy.

The S3://bucket-URL on the other hand is not correct and should be S3://bucket-Name. Right now we don’t have a bucket name, so let’s get ourselves a bucket.

### Creating the S3 bucket

In this step we will be heading to the AWS Console to create the S3 bucket for this project:



![](https://cdn-images-1.medium.com/max/1600/1*09G_AT9IHbI6tNiLGew1Sg.png)

In Your Console go to Storage and then to S3





![](https://cdn-images-1.medium.com/max/1600/1*R1EUamf6tJuw1mdjTOXAbg.png)

Press Create bucket



Enter the bucket name you would like to use for this project as well as the region. (The best practice is to use the region nearest to your site’s audience.)



![](https://cdn-images-1.medium.com/max/1600/1*gs2tyd8N7P3N8LRAbfvzoQ.png)



You will skip the other steps for now so press “Next” and then press “Create bucket” on the review screen.

At this point if you go back to CircleCI and try to run the build again CircleCI will return a fatal error: Unable to locate credentials. So why don’t we fix that next.



![](https://cdn-images-1.medium.com/max/1600/1*vfzxm4Ob1NzwGbFLu9MNZg.png)



We need to first get the credentials from AWS and then provide them to CircleCI in order to allow the AWS cli to access and manage the S3 bucket. Best practice for this is to create a new Identity and Access Management (IAM) user specifically for CircleCI.

On the AWS console go to Security, Identity & Compliance and press IAM and then Add user.



![](https://cdn-images-1.medium.com/max/1600/1*5URhjWCf_Cva14j10iC9lQ.png)



In the Add User window type in CircleCI for User name, I already have an IAM user named CircleCI setup, So for the purposes of this tutorial and to illustrate these steps I will be using CircleCI2\. Make sure you check Programmatic access for Access type.



![](https://cdn-images-1.medium.com/max/1600/1*8E2Zq-4Rf6zayOnXlu0xiw.png)



For permissions choose Attach existing policies directly, and under Policy name check ‘AdministratorAccess’ and then click Create policy. This will provide your IAM user full access to your AWS S3 bucket.



![](https://cdn-images-1.medium.com/max/1600/1*mSW3jMhrBXujFE1RbfcdnA.png)



After creating the IAM user, make sure you keep both the Access key ID and the Secret access key, as we will need them in the next step.



![](https://cdn-images-1.medium.com/max/1600/1*N58N_nM1aeh2TV2K0nB1EA.png)



Now back to CircleCI, click on the settings button next to your project name to reveal the project settings menu then click on AWS Permissions. This is where you will paste the ID and Key from the previous step and then click “Save AWS keys.”



![](https://cdn-images-1.medium.com/max/1600/1*nL8EUSt2c0udyOdQQ-NC0A.png)



Now our CircleCI Container has both the AWS Command Line Interface tool and the credentials to access the AWS S3 bucket. The following steps will show you how to reveal your static site to the world.

In the AWS console go to Storage and then click on S3 and then click on the bucket we created earlier in this tutorial.



![](https://cdn-images-1.medium.com/max/1600/1*2HqAqD8aNKhIrJlKuT25nw.png)



You will notice that the code from the repo has already been successfully deployed.



![](https://cdn-images-1.medium.com/max/1600/1*IVZMtV4e7Txu4l6FFW0SOg.png)



Now before you can access this static site you need to configure your S3 bucket for website hosting.

On the same screen click on Properties and then on Static website hosting.



![](https://cdn-images-1.medium.com/max/1600/1*cdQFxfsKAfLu3pUqb-bUGw.png)



In the following screen select Use this bucket to host a website and make sure you type in index.html for Index document.



![](https://cdn-images-1.medium.com/max/1600/1*YbdCVHxvWBpxyA-Q6B8eTQ.png)



By the way, the HTTP address provided above is your access endpoint. But if you try it in the browser unfortunately it won’t work and you will get an access denied error message. But that’s normal you still have one step to do: Set up your bucket policy.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/08185a505b6a123202edc9d509240103?postId=a8e268284098" data-media-id="08185a505b6a123202edc9d509240103" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F20860228%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This Bucket policy will allow access to the AWS S3 bucket to anyone via a browser.

You can read up [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) on bucket policies and examples if you want to learn more.



![](https://cdn-images-1.medium.com/max/1600/1*CJ0YNFnZWV3WA4wrP-uwKQ.png)



Now you can copy the code snippet above and paste it in your Bucket policy Editor and Voila!



![](https://cdn-images-1.medium.com/max/1600/1*gD8DcazPynHucGTlBGu5dg.png)



If you see the screen above, then Congratulations! You have successfully set up Continuous Deployment to an AWS S3 bucket using CircleCI.

Now every time you push changes to your Github repo, CircleCI will automatically deploy the changes to your AWS S3 bucket.

You might have noticed that even though the deployment was successful CircleCI shows you a red NO TESTS warning.







![](https://cdn-images-1.medium.com/max/2000/1*QPWUzhV3CetGhRarc2HEaQ.png)







This is normal because in a Test Driven Development (TDD) environment you would write tests first, and then before going to production your code needs to pass all the tests. An example with tests is beyond the scope of this tutorial, but suffice it to say that had we written tests, CircleCI would only have deployed if all our tests passed.

Using your own domain name to access this static site is also beyond the scope of this tutorial, but feel free to look [here](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/setting-up-route-53.html) for instructions on how to configure Amazon Route 53 to route Internet traffic to your new site.

I am hoping to do a tutorial involving a Continuous Integration/Deployment example with a full battery of tests sometimes in the future. Meanwhile, if you have a moment, answer a short survey about this tutorial [here](https://goo.gl/forms/aJl610F4ltAvMDBv1), like it on [LinkedIn](https://www.linkedin.com/pulse/how-set-up-continuous-deployment-aws-s3-using-circleci-adam-watt) or post a comment in the comments section.

Thanks for reading!








