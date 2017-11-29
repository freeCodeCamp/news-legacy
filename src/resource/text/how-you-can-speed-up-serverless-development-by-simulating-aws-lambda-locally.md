---
author: John McKim
authorTwitter: https://twitter.com/johncmckim
authorFacebook: none
title: "How you can speed up serverless development by simulating AWS Lambda locally"
subTitle: "Designing AWS Lambda functions can be a frustrating experience. Each time you make a change, you have to deploy your code to AWS before y..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*E980zTsgOV5Cpc5JdmXs2A.jpeg
url: https://medium.freecodecamp.org/how-you-can-speed-up-serverless-development-by-simulating-aws-lambda-locally-41c61a60fbae
id: how-you-can-speed-up-serverless-development-by-simulating-aws-lambda-locally-41c61a60fbae
date: 2017-02-28T19:41:14.251Z
tags: [
  "AWS",
  "Serverless",
  "Tech",
  "Software Development",
  "Programming"
]
---
# How you can speed up serverless development by simulating AWS Lambda locally







![](https://cdn-images-1.medium.com/max/2000/1*E980zTsgOV5Cpc5JdmXs2A.jpeg)







Designing [AWS Lambda](https://aws.amazon.com/lambda/) functions can be a frustrating experience. Each time you make a change, you have to deploy your code to AWS before you can test it. Well, [my friend](https://twitter.com/gertjvr81) and I finally decided to do something about this.

The end result is the [Serverless Simulate Plugin](https://github.com/gertjvr/serverless-plugin-simulate). This plugin is an AWS Lambda and API Gateway simulator for the Serverless Framework.

I’m going to walk you through how we built this and how you can start using it when you develop serverless apps.



![](https://cdn-images-1.medium.com/max/1600/1*V29jx931qxByVNtYUOoUGA.png)



### Simulating API Gateway

API Gateway provides HTTP endpoints that invoke Lambda functions in response to requests.

API Gateway maps the incoming HTTP request to an event payload for Lambda. When the Lambda function returns a result, the result is mapped to a HTTP response.



![](https://cdn-images-1.medium.com/max/1600/1*muv-Ksm6yw-OzfxZsF-g0w.png)



While API Gateway has a lot of features, most developers only use a few of them. We chose to only implement the features commonly used by Serverless developers.

#### HTTP Server

To simulate API Gateway the plugin creates a HTTP server with [express](http://expressjs.com/). The plugin reads the [Serverless config file](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/) and creates endpoints from the [HTTP events](https://serverless.com/framework/docs/providers/aws/events/apigateway/).

If the endpoint has enabled CORS, the plugin will add [CORS Middleware](https://github.com/expressjs/cors) to the endpoint.

#### Custom Authorizers

API Gateway can Authorize endpoints in a few different ways. A common approach is to use a [Custom Authorizer](https://aws.amazon.com/blogs/compute/introducing-custom-authorizers-in-amazon-api-gateway/).

To simulate Custom Authorizers, we created an express js middleware function. The middleware creates the Lambda event with authorization information from the request. The Authorizer function is then invoked locally.

Custom Authorizers allow or deny requests based on a [policy document](http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html). The middleware reads the policy document returned by the Authorizer. If the request is not allowed to access an endpoint, the middleware will return an Unauthorized response.

#### Lambda Integration

API Gateway has two integrations with AWS Lambda. The original [Lambda integration](http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html) and the newer [Lambda Proxy](https://aws.amazon.com/blogs/aws/api-gateway-update-new-features-simplify-api-development/).

Both integrations map HTTP requests to a Lambda event. When Lambda returns a result, the integration maps the result to a HTTP response.

We developed two mapping functions that mimic Lambda and Lambda Proxy. The server selects the integration based on the HTTP event configuration in `[serverless.yml](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)`.

When a request is received, the server performs the same mapping process as API Gateway. A simplified version of the code is below.

<pre name="5ea9" id="5ea9" class="graf graf--pre graf-after--p">function(req, res) {  
  integration.event(req)  
    .then(event => lambda.invoke(context, event))  
    .then(result => integration.response(req, result))  
    .then(response => respond(res, response))  
}</pre>

The end result is an express server that behaves like API Gateway.







![](https://cdn-images-1.medium.com/max/2000/1*escLiZ18OoQOTfHbD5e9XA.png)







#### Using the API Gateway Simulator

To use the API Gateway simulator you need to install the plugin into your Serverless project. Please [read the docs](https://github.com/gertjvr/serverless-docker) for instructions.

To start the API Gateway simulator run the following command:

`sls simulate apigateway -p 5000`

This will start a HTTP server that you can use to test your endpoints and functions locally.







![](https://cdn-images-1.medium.com/max/2000/1*o_mtWduF79Whajwze_BvjA.png)

Running the simulator on our example project







The API Gateway simulation is similar to other offline plugins for the Serverless Framework. The real difference with [Serverless Simulate](https://github.com/gertjvr/serverless-plugin-simulate) is how we simulate Lambda locally.

### Simulating AWS Lambda

AWS Lambda is powered by a HTTP API. Functions are invoked through a HTTP request to the Lambda API.

When the Invoke API is called, the Lambda service runs your code inside a container. For more details see [the docs](http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html).



![](https://cdn-images-1.medium.com/max/1600/1*AQFe1LCHYuACfKv7pqYeqQ.png)



While AWS Lambda is a complex service, the core elements are reasonably easy to simulate. To simulate it locally we implemented three services, function runtimes, a function registry and HTTP API.

#### Function Runtimes

We use a [Docker image](https://hub.docker.com/r/lambci/lambda/~/dockerfile/) created by [Michael Hart](https://medium.com/@hichaelmart) to create the function runtime. Using Docker allows us to control the environment and enforce memory limits and timeouts.

#### Function Registry

The Function Registry is a local JSON database powered by [lowdb](https://github.com/typicode/lowdb). The registry stores information about the function configuration and location.

This allows the server to lookup the details of a function when a request is received by the API.

#### HTTP API

The HTTP API provides a registration endpoint for clients. The registration endpoint is used by the plugin to register functions.

The HTTP API also provides an endpoint to invoke functions. The invoke endpoint mimics the AWS Lambda API. This allows clients to use an AWS SDK to invoke functions.







![](https://cdn-images-1.medium.com/max/2000/1*yWatcA3sRMVvD6lDBGM6Kw.png)







#### Why use the Lambda Simulator

The Lambda simulator allows you to invoke Lambda functions locally from other services. That might include another Lambda function in a different Serverless service. Or it could include a completely different application.

This is useful if you are chaining Lambda functions or migrating an existing application to AWS Lambda.

For example, this function invokes another Lambda function locally. Without the Lambda Simulator, the second function would be invoked in AWS.

<pre name="5474" id="5474" class="graf graf--pre graf-after--p">// If offline use the local registry  
const endpoint = process.env.SERVERLESS_SIMULATE ?  
  process.env.SERVERLESS_SIMULATE_LAMBDA_ENDPOINT :  
  undefined</pre>

<pre name="b47e" id="b47e" class="graf graf--pre graf-after--pre">// configure the AWS SDK to use the local endpoint  
const lambda = new AWS.Lambda({ endpoint })</pre>

<pre name="5d0c" id="5d0c" class="graf graf--pre graf-after--pre">const handler = (event, context, callback) => {  
  const params = {  
    FunctionName: 'my-other-function',  
    Payload: JSON.stringify({ foo: 'bar' })  
  }</pre>

<pre name="a18b" id="a18b" class="graf graf--pre graf-after--pre">lambda.invoke(params, (err, result) => {  
    if (err) {  
      return callback(err)  
    }  

    callback(null, {  
      statusCode: 200,  
      body: result.Payload  
    })    
  })  
}</pre>

#### Using the Lambda Simulator

To use the Lambda simulator you need to install the plugin into your Serverless project. Please [read the docs](https://github.com/gertjvr/serverless-docker) for instructions.

To start the Lambda simulator run the following command:

`sls simulate lambda -p 4000`







![](https://cdn-images-1.medium.com/max/2000/1*sVFHZ-bHbsASXNTbiBJcbg.png)

Start the Lambda Simulator







To use the Lambda Simulator with the API Gateway, run the API Gateway command with `--lambda-port` argument.

`sls simulate apigateway -p 5000 --lambda-port`

When using the `--lambda-port` argument, the API Gateway simulator invokes functions via the HTTP API.







![](https://cdn-images-1.medium.com/max/2000/1*NX-MOCl9zp15ltMT427PRQ.png)

Registered 10 functions with the Lambda Simulator







This allows you to simulate complex architectures locally before deploying to the cloud.

### Comparison to Other Plugins

[Serverless Offline](https://github.com/dherault/serverless-offline) is the most popular plugin for the Serverless Framework. Unfortunately, the design of Serverless Offline limits the quality of the simulation.

This plugin simulates API Gateway and executes functions in the plugin process. The downsides of this decision include:

*   No Python support
*   It uses whatever NodeJS version you are running, which may not be the same NodeJS version as AWS Lambda
*   It does not enforce memory limits or timeouts
*   There is no way to chain Lambda function calls

We designed Serverless Simulate to solve these problems.

### Go forth and build

This plugin will help solve a big problem for myself and the team at [A Cloud Guru](https://medium.com/@acloudguru). Unit tests and local executions reduce the time we spend waiting for deployments to the cloud.

The Serverless Framework and Serverless Simulate are both Open Source projects. If you want to get involved, you can help by creating issues or submitting a pull request.

I hope that it will help you save time when you are testing Lambda functions locally.

If you have any questions about this project or Serverless in general you can contact me on Medium or [Twitter](https://twitter.com/johncmckim). I’ll be running a workshop at [ServerlessConf Austin](http://austin.serverlessconf.io/) if you want to meet me in person.








