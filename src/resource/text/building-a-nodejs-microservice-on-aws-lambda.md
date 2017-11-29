---
author: Paul Matthew Jaworski
authorTwitter: https://twitter.com/onlypauljay
authorFacebook: https://facebook.com/10156875079455112
title: "How to build a serverless NodeJS microservice on AWS Lambda"
subTitle: "Unfortunately, since I wrote this article, v1.0 of the Serverless Framework has been released, along with some breaking changes. I believ..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*foHs8AleRqNMimdXsK9hAA.png
url: https://medium.freecodecamp.org/building-a-nodejs-microservice-on-aws-lambda-6adb6da53cbb
id: building-a-nodejs-microservice-on-aws-lambda-6adb6da53cbb
date: 2016-09-18T17:12:29.822Z
tags: [
  "Web Development",
  "AWS Lambda",
  "Programming",
  "AWS",
  "Software Development"
]
---
# How to build a serverless NodeJS microservice on AWS Lambda



![](https://cdn-images-1.medium.com/max/1600/1*foHs8AleRqNMimdXsK9hAA.png)



### **DEPRECATED**

Unfortunately, since I wrote this article, v1.0 of the [Serverless Framework](https://serverless.com/) has been released, along with some breaking changes. I believe that you can migrate to the new version simply by adding:

<pre name="c463" id="c463" class="graf graf--pre graf-after--p"> integration: lambda</pre>

to each of your resources. For example:

<pre name="c311" id="c311" class="graf graf--pre graf-after--p">createPet:  
    handler: handler.create  
    events:  
      - http:  
          path: pets  
          method: POST  
          cors: true  
          integration: lambda</pre>

However, I have decided to move on from Serverless for now, mainly due to issues with authentication, authorization, and frustrations with DynamoDB, so I won’t be updating this post. I will explore these issues and my decision to switch back to a “traditional” REST API in a later story.

For now, I would recommend referencing [the official Serverless docs on API Gateway](https://serverless.com/framework/docs/providers/aws/events/apigateway/#api-gateway) to get started, and possibly using the rest of this post as a reference, bearing in mind that any information in the Serverless docs takes precedence over anything written here.

### Proceed from here with caution:

In this article, I’ll share my experience going “serverless” and building a CRUD API “microservice” using AWS Lambda, API Gateway, and DynamoDB. This will function as a guide for you to make your own microservices with these tools.

### **Getting Started**

I’m going to assume you have an AWS account and NodeJS installed. If not, handle that now.

Next you’ll need to install the Serverless npm package, which provides a way to easily create, edit, and deploy microservices as AWS Lambda functions:

<pre name="a594" id="a594" class="graf graf--pre graf-after--p">npm install -g serverless</pre>

Then follow Amazon’s [instructions on creating an IAM user and configuring Serverless](https://github.com/serverless/serverless/blob/master/docs/02-providers/aws/01-setup.md) to use those credentials.

Navigate to the directory where you want to store your new project and run:

<pre name="c479" id="c479" class="graf graf--pre graf-after--p">serverless create --template aws-nodejs --path pets-service</pre>

Now’s a good time to set up linting in your project. Since this is not an intro to ESLint, I won’t go into full detail, but I’d recommend installing that now and setting up your **.eslintrc** like this:

<pre name="10cb" id="10cb" class="graf graf--pre graf-after--p">{  
  “plugins”: [“node”],  
  “extends”: [“eslint:recommended”, “plugin:node/recommended”],  
  “env”: {  
    “node”: true,  
    “mocha”: true  
  },  
  “rules”: {  
    “no-console”: 0,  
    “node/no-unsupported-features”: [2, {“version”: 4}]  
  }  
}</pre>

The important thing to note here is the “no-unsupported-features” rule from the node plugin. AWS Lambda uses Node v4.3, and knowing which ES6 features are available can be a pain in the ass. This makes it easy.

### **Creating the Handler**

Install the aws-sdk and lodash with npm:

<pre name="57a1" id="57a1" class="graf graf--pre graf-after--p">npm i -S aws-sdk lodash</pre>

Now head over to **handler.js** and add those dependencies to the top of your file:

<pre name="94e0" id="94e0" class="graf graf--pre graf-after--p">const aws = require(‘aws-sdk’);  
const _ = require(‘lodash/fp’);</pre>

Note that we’re using the “functional programming” variant of lodash because its merge function won’t mutate the original object.

Below that, set up your document client for communicating with DynamoDB:

<pre name="d1c0" id="d1c0" class="graf graf--pre graf-after--p">const dynamo = new aws.DynamoDB.DocumentClient();</pre>

Now let’s make our **create()** function to make a new Pet in the database:

<pre name="5ea9" id="5ea9" class="graf graf--pre graf-after--p">exports.create = function(event, context) {  
  const payload = {  
    TableName: 'Pets',  
    Item: event.body  
  };</pre>

<pre name="c461" id="c461" class="graf graf--pre graf-after--pre">  const cb = (err, data) => {  
    if (err) {  
      console.log(err);  
      context.fail(‘Error creating pet’);  
    } else {  
      console.log(data);  
      context.succeed(data);  
    }  
  }</pre>

<pre name="a4fa" id="a4fa" class="graf graf--pre graf-after--pre">  dynamo.put(payload, cb);  
};</pre>

It’s pretty easy to see what’s going on here for the most part:

We get an **event** object passed in with a key **body** that contains the data we want to store. The DocumentClient requires at minimum an object with the keys **TableName** and **Item** to be passed into put().

We also provide a callback that does two important things:

If there is an error, we run **context.fail()**, which is basically just an onError callback provided by AWS.

If the item creation is successful, we run **context.succeed()**, passing in the data to be returned as the result of our Lambda function.

An important caveat with DynamoDB is that we must provide the primary key ourselves on creation. In this case, we have to include **petId** as a key in our event.body object.

Why is such a basic feature missing from DynamoDB? Your guess is as good as mine.

I’m fortunate enough in my application to have a unique ID generated for me by Auth0, which I’m using for my auth/user management. You’ll have to solve this problem some other way if you’re not.

We’ll follow this same basic pattern for the rest of our CRUD operations:

<pre name="2efd" id="2efd" class="graf graf--pre graf-after--p">exports.show = function(event, context) {  
  const payload = {  
    TableName: 'Pets',  
    Key: {  
      petId: event.params.path.petId  
    }  
  }</pre>

<pre name="2983" id="2983" class="graf graf--pre graf-after--pre">  const cb = (err, data) => {  
    if (err) {  
      console.log(err);  
      context.fail('Error retrieving pet');  
    } else {  
      console.log(data);  
      context.done(null, data);  
    }  
  }</pre>

<pre name="dfbc" id="dfbc" class="graf graf--pre graf-after--pre">  dynamo.get(payload, cb);  
};</pre>

<pre name="c570" id="c570" class="graf graf--pre graf-after--pre">exports.list = function(event, context) {  
 const payload = {  
  TableName: 'Pets'  
 }</pre>

<pre name="9e4a" id="9e4a" class="graf graf--pre graf-after--pre">  const cb = (err, data) => {  
    if (err) {  
      console.log(err);  
      context.fail('Error getting pets');  
    } else {  
      console.log(data);  
      context.done(null, data);  
    }  
  }</pre>

<pre name="0404" id="0404" class="graf graf--pre graf-after--pre">  dynamo.scan(payload, cb);  
}</pre>

<pre name="1451" id="1451" class="graf graf--pre graf-after--pre">exports.update = function(event, context) {  
  const payload = {  
    TableName: 'Pets',  
    Key: {  
      petId: event.params.path.petId  
    }  
  };</pre>

<pre name="c85e" id="c85e" class="graf graf--pre graf-after--pre">  dynamo.get(payload, (err, data) => {  
    if (err) {  
      console.log(err);  
      context.fail('No pet with that id exists.');  
    } else {  
      const item = _.merge(data.Item, event.body);  
      payload.Item = item;</pre>

<pre name="6458" id="6458" class="graf graf--pre graf-after--pre">      dynamo.put(payload, (putErr, putData) => {  
        if (putErr) {  
          console.log('Error updating pet.');  
          console.log(putErr);  
          context.fail('Error updating pet.');  
        } else {  
          console.log('Success!');  
          console.log(putData);  
          context.done(null, item);  
        }  
      });  
    }  
  });  
}</pre>

<pre name="8ab2" id="8ab2" class="graf graf--pre graf-after--pre">exports.delete = function(event, context) {  
  const payload = {  
    TableName: 'Pets',  
    Key: {  
      petId: event.params.path.petId  
    }  
  };</pre>

<pre name="a410" id="a410" class="graf graf--pre graf-after--pre">  const cb = (err, data) => {  
    if (err) {  
      console.log(err);  
      context.fail('Error retrieving pet');  
    } else {  
      console.log(data);  
      context.done(null, data);  
    }  
  }</pre>

<pre name="d672" id="d672" class="graf graf--pre graf-after--pre">  dynamo.delete(payload, cb);  
}</pre>

There are just a couple things to note here:

We want to be able to do partial updates, meaning you don’t need to send the entire Pet object with its changes, you can just send the changes. To accomplish this, we’re calling a **get** first in the **update()** function, then merging our changes into the result of that operation.

Our **petId** is passed in as a parameter to API Gateway and then provided to us in Lambda via event.params.path.petId. You could also use query strings if you prefer.

### **Configuring Serverless**

We’re almost done here, so now let’s get our Serverless config files set up. Open up **serverless.yml** and edit it to look like this:

<pre name="9292" id="9292" class="graf graf--pre graf-after--p">service: pets-service</pre>

<pre name="c4fb" id="c4fb" class="graf graf--pre graf-after--pre">provider:  
  name: aws  
  runtime: nodejs4.3</pre>

<pre name="664f" id="664f" class="graf graf--pre graf-after--pre">defaults:  
  stage: dev  
  region: us-west-2</pre>

<pre name="0e3a" id="0e3a" class="graf graf--pre graf-after--pre">functions:  
  createPet:  
    handler: handler.create  
    events:  
      - http:  
          path: pets  
          method: POST  
  showPet:  
    handler: handler.show  
    events:  
      - http:  
          path: pets/{petId}  
          method: GET  
  listPets:  
    handler: handler.list  
    events:  
      - http:  
          path: pets  
          method: GET  
  updatePet:  
    handler: handler.update  
    events:  
      - http:  
          path: pets/{petId}  
          method: PUT  
  deletePet:  
    handler: handler.delete  
    events:  
      - http:  
          path: pets/{petId}  
          method: DELETE</pre>

This is pretty easy to understand, I think. We’re just specifying the names of our Lambda functions, then mapping them to our **handler.js** functions and the HTTP methods and paths we want them to respond to.

I’ve changed defaults to use ‘us-west-2’ as my region, and kept ‘dev’ as my stage. Setting up different stages with Serverless is not something I have fully explored.

The documentation is _very_ lacking right now, but this configuration will result in an API Gateway named “dev-pets-service” being created, even though that’s not really what we want.

API Gateways shouldn’t have the environment referenced in their name at all, since they can hold multiple environments or “stages.”

Hopefully I’ll find a fix for this and publish it in a future edit ;)

### **Deploying and Testing Our Service**

Now we’re ready to deploy! All it takes is running:

<pre name="7a3a" id="7a3a" class="graf graf--pre graf-after--p">serverless deploy</pre>

In a minute or so, your Lambda functions should be deployed, and your API Gateway created.

Create a DynamoDB table named ‘Pets’ (or whatever you’re calling your resource). Then head to API Gateway. Find your ‘dev-pets-service’, and navigate to the POST method.

Test your API by clicking on the “TEST” button with the lightning bolt and using the following data:

<pre name="ce08" id="ce08" class="graf graf--pre graf-after--p">{ petId: "029340", name: "Fido", type: "dog" }</pre>

You should have successfully created a new item in your database!

### **What’s Next?**

Your next steps might be enabling CORS for your resources, using a custom domain name for your API, and setting up your front end app to talk to these endpoints.

This is all beyond the scope of the article, and should be pretty simple, but let me know in the comments if you have questions.

**EDIT**

User jcready on Reddit has suggested an improvement to our update method:

<pre name="c9c8" id="c9c8" class="graf graf--pre graf-after--p">exports.update = function(event, context) {  
  const payload = _.reduce(event.body, (memo, value, key) => {  
    memo.ExpressionAttributeNames[`#${key}`] = key  
    memo.ExpressionAttributeValues[`:${key}`] = value  
    memo.UpdateExpression.push(`#${key} = :${key}`)  
    return memo  
  }, {  
    TableName: 'Pets',  
    Key: { petId: event.params.path.petId },  
    UpdateExpression: [],  
    ExpressionAttributeNames: {},  
    ExpressionAttributeValues: {}  
  })  
  payload.UpdateExpression = 'SET ' + payload.UpdateExpression.join(', ')  
  dynamo.update(payload, context.done)  
}</pre>

The issue with our current implementation is that a user could overwrite another’s changes if two update requests are sent at once.

DocumentClient provides us with an **update** method that allows us to specify the fields we want to update, but the syntax is a little odd and requires generating an “UpdateExpression” to achieve these changes.

This code builds that expression based on the keys passed in and solves the problem of overwriting updates in an application where resources are shared between users.








