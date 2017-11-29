---
author: Adam Watt
authorTwitter: https://twitter.com/InTechMansTerms
authorFacebook: none
title: "Going Serverless: how to run your first AWS Lambda function in the cloud"
subTitle: "A decade ago, cloud servers abstracted away physical servers. And now, “Serverless” is abstracting away cloud servers...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*PxgWkgtWcOBFUyPHiwv96w.jpeg
url: https://medium.freecodecamp.org/going-serverless-how-to-run-your-first-aws-lambda-function-in-the-cloud-d866a9b51536
id: going-serverless-how-to-run-your-first-aws-lambda-function-in-the-cloud-d866a9b51536
date: 2017-06-07T20:49:36.692Z
tags: [
  "AWS",
  "JavaScript",
  "Technology",
  "Web Development",
  "Startup"
]
---
# Going Serverless: how to run your first AWS Lambda function in the cloud



![](https://cdn-images-1.medium.com/max/1600/1*PxgWkgtWcOBFUyPHiwv96w.jpeg)



A decade ago, cloud servers abstracted away physical servers. And now, “Serverless” is abstracting away cloud servers.

Technically, the servers are still there. You just don’t need to manage them anymore.

Another advantage of going serverless is that you no longer need to keep a server running all the time. The “server” suddenly appears when you need it, then disappears when you’re done with it. Now you can think in terms of functions instead of servers, and all your business logic can now live within these functions.

In the case of AWS Lambda Functions, this is called a trigger. Lambda Functions can be triggered in different ways: an HTTP request, a new document upload to S3, a scheduled Job, an AWS Kinesis data stream, or a notification from AWS Simple Notification Service (SNS).

In this tutorial, I’ll show you how to set up your own Lambda Function and, as a bonus, show you how to set up a REST API all in the AWS Cloud, while writing minimal code.

Note that the Pros and Cons of Serverless depend on your specific use case. So in this article, I’m not going to tell you whether Serverless is right for your particular application — I’m just going to show you how to use it.

First, you’ll need an AWS account. If you don’t have one yet, start by opening a free AWS account [here](https://aws.amazon.com/free). AWS has a free tier that’s more than enough for what you will need for this tutorial.

We’ll be writing the function isPalindrome, which checks whether a passed string is a palindrome or not.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7d0021c5bb2001be25429efe9407ec22?postId=d866a9b51536" data-media-id="7d0021c5bb2001be25429efe9407ec22" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F20860228%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Above is an example implementation in JavaScript. Here is the [link](https://gist.github.com/AWattNY/1fae83d8de8756c9d9b946e36307e8fc85695ae4458c4c2239558c) for gist on Github.

A palindrome is a word, phrase, or sequence that reads the same backward as forward, for the sake of simplicity we will limit the function to words only.

As we can see in the snippet above, we take the string, split it, reverse it and then join it. if the string and its reverse are equal the string is a Palindrome otherwise the string is not a Palindrome.

### Creating the isPalindrome Lambda Function

In this step we will be heading to the AWS Console to create the Lambda Function:



![](https://cdn-images-1.medium.com/max/1600/1*X1zvZPTbNqf0Rq8eNRzO4A.png)



In the AWS Console go to Lambda.



![](https://cdn-images-1.medium.com/max/1600/1*InZiSTx4EkPmnU7MTYFdCA.png)



And then press “Get Started Now.”



![](https://cdn-images-1.medium.com/max/1600/1*v3jOWwns_L-lOAIw57681Q.png)



For runtime select Node.js 6.10 and then press “Blank Function.”



![](https://cdn-images-1.medium.com/max/1600/1*yttJpvtjhSxZ_v6pD3fpig.png)



Skip this step and press “Next.”



![](https://cdn-images-1.medium.com/max/1600/1*sPQEC7nW-TKo-hSerjZlMg.png)



For Name type in isPalindrome, for description type in a description of your new Lambda Function, or leave it blank.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/1ada6a83976d127f9a9baf16ae1404df?postId=d866a9b51536" data-media-id="1ada6a83976d127f9a9baf16ae1404df" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F20860228%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





As you can see in the [gist](https://gist.github.com/AWattNY/1b4eda8b807702c0fa9700c4a130fbf7) above a Lambda function is just a function we are exporting as a module, in this case, named handler. The function takes three parameters: event, context and a callback function.

The callback will run when the Lambda function is done and will return a response or an error message.For the Blank Lambda blueprint response is hard-coded as the string ‘Hello from Lambda’. For this tutorial since there will be no error handling, you will just use Null. We will look closely at the event parameter in the next few slides.



![](https://cdn-images-1.medium.com/max/1600/1*y1anI0TWRKPJJ8-6-w69Cw.png)



Scroll down. For Role choose “Create new Role from template”, and for Role name use isPalindromeRole or any name, you like.

For Policy templates, choose “Simple Microservice” permissions.



![](https://cdn-images-1.medium.com/max/1600/1*qzWhNvjuhgxVSzZKyrqTuw.png)



For Memory, 128 megabytes is more than enough for our simple function.

As for the 3 second timeout, this means that — should the function not return within 3 seconds — AWS will shut it down and return an error. Three seconds is also more than enough.

Leave the rest of the advanced settings unchanged.



![](https://cdn-images-1.medium.com/max/1600/1*J99U-snM3CEdoUxRFrfwJg.png)



Press “Create function.”



![](https://cdn-images-1.medium.com/max/1600/1*xeO4D25rwD2jrD0wlyWFig.png)



Congratulations — you’ve created your first Lambda Function. To test it press “Test.”



![](https://cdn-images-1.medium.com/max/1600/1*tAfq6s_0RfWp100ILkmXEQ.png)



As you can see, your Lambda Function returns the hard-coded response of “Hello from Lambda.”



![](https://cdn-images-1.medium.com/max/1600/1*zD0WI6ysj8ejQZg3wXzi_w.png)



Now add the code from isPalindrome.js to your Lambda Function, but instead of `return result` use `callback(null, result)`. Then add a hard-coded string value of `abcd` on line 3 and press “Test.”



![](https://cdn-images-1.medium.com/max/1600/1*Du_fuYYkirD8FsxBSaZI6g.png)



The Lambda Function should return “abcd is not a Palindrome.”



![](https://cdn-images-1.medium.com/max/1600/1*AVUDU79JgxwseK7Bgq5j3g.png)



For the hard-coded string value of “racecar”, The Lambda Function returns “racecar is a Palindrome.”



![](https://cdn-images-1.medium.com/max/1600/1*e1x97cP2R4qa1EgrfsTIpA.png)



So far, the Lambda Function we created is behaving as expected.

In the next steps, I’ll show you how to trigger it and pass it a string argument using an HTTP request.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/aecd9dd76744e8a6ff0f4cb7c98f9274?postId=d866a9b51536" data-media-id="aecd9dd76744e8a6ff0f4cb7c98f9274" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F20860228%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





If you’ve built REST APIs from scratch before using a tool like Express.js, the [snippet](https://gist.github.com/AWattNY/50741f8601289b5b6d560d4776fb6162) above should make sense to you. You first create a server, and then define all your routes one-by-one.

In this section, I’ll show you how to do the same thing using the AWS API Gateway.

### Creating the API Gateway



![](https://cdn-images-1.medium.com/max/1600/1*ZclBoLSJm0mOx1-U_46J6w.png)



Go to your AWS Console and press “API Gateway.”



![](https://cdn-images-1.medium.com/max/1600/1*JmFWNloht1UGnrR2p_tJCg.png)



And then press “Get Started.”



![](https://cdn-images-1.medium.com/max/1600/1*cUdB6sbEmXljuOh6xA2CkA.png)



In Create new API dashboard select “New API.”



![](https://cdn-images-1.medium.com/max/1600/1*BtMmOdLCJH3mOOwu1iqdbg.png)



For API name, use “palindromeAPI.” For description, type in a description of your new API or just leave it blank.



![](https://cdn-images-1.medium.com/max/1600/1*v0ONd5gjG7_2GD53hf2R-g.png)



Our API will be a simple one, and will only have one GET method that will be used to communicate with the Lambda Function.

In the Actions menu, select “Create Method.” A small sub-menu will appear. Go ahead and select GET, and click on the checkmark to the right.



![](https://cdn-images-1.medium.com/max/1600/1*-hBon4l3x8Djqe8gkP8FaQ.png)



For Integration type, select Lambda Function.



![](https://cdn-images-1.medium.com/max/1600/1*b2ZLauodGV0PhAGMfuqS-Q.png)



Then press “OK.”



![](https://cdn-images-1.medium.com/max/1600/1*enal7klPDe2YUgVgNv3GyQ.png)



In the GET — Method Execution screen press “Integration Request.”



![](https://cdn-images-1.medium.com/max/1600/1*xESNRDWg8-YRdp4O4n3J9g.png)



For Integration type, make sure Lambda Function is selected.



![](https://cdn-images-1.medium.com/max/1600/1*tqZ6DaWFuWELN_CuexvAyg.png)



For request body passthrough, select “When there are no templates defined” and then for Content-Type enter “application/json”.



![](https://cdn-images-1.medium.com/max/1600/1*Wrxe17v1TwC9VsmhoO3bzQ.png)



In the blank space add the JSON object shown below. This JSON object defines the parameter “string” that will allow us to pass through string values to the Lambda Function using an HTTP GET request. This is similar to using `req.params` in Express.js.

In the next steps, we’ll look at how to pass the string value to the Lambda Function, and how to access the passed value from within the function.



![](https://cdn-images-1.medium.com/max/1600/1*h5ToO2kS-L7omHU38zkZKQ.png)



The API is now ready to be deployed. In the Actions menu click “Deploy API.”



![](https://cdn-images-1.medium.com/max/1600/1*ZW43YsKKFY6W1J949ma9DQ.png)



For Deployment Stage select “[New Stage]”.



![](https://cdn-images-1.medium.com/max/1600/1*O8eS2Pnka9DxLkgGnttcxQ.png)



And for Stage name use “prod” (which is short for “production”).



![](https://cdn-images-1.medium.com/max/1600/1*X1tQG72coTJkxTOt4VIDmQ.png)



The API is now deployed, and the invoke URL will be used to communicate via HTTP request with Lambda. If you recall, in addition to a callback, Lambda takes two parameters: event and context.

To send a string value to Lambda you take your function’s invoke URL and add to it `?string=someValue` and then the passed value can be accessed from within the function using `event.string`.

Modify code by removing the hard-coded string value and replacing it with `event.string` as shown below.



![](https://cdn-images-1.medium.com/max/1600/1*DnkdYgHUaTKOmRfvFwUSVg.png)



Now in the browser take your function’s invoke URL and add `?string=abcd` to test your function via the browser.



![](https://cdn-images-1.medium.com/max/1600/0*BFphcVCa21NOehuL.png)



As you can see Lambda replies that abcd is not a Palindrome. Now do the same for racecar.



![](https://cdn-images-1.medium.com/max/1600/0*m78OHG2PLRqpudhA.png)



If you prefer you can use Postman as well to test your new isPalindrome Lambda Function. Postman is a great tool for testing your API endpoints, you can learn more about it [here](https://www.getpostman.com/).

To verify it works, here’s a Palindrome:



![](https://cdn-images-1.medium.com/max/1600/1*bX9E0bUCMgMLJaxVGMTgKQ.png)



And here’s a non-palindrome:



![](https://cdn-images-1.medium.com/max/1600/1*9K9rmcnTwbXD9FtrmBr-yA.png)



Congratulations — you have just set up and deployed your own Lambda Function!

Thanks for reading!








