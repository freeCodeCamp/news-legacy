---
author: Rick Mak
authorTwitter: https://twitter.com/rickmak
authorFacebook: https://facebook.com/10154571208592812
title: "Want to make the deployment process less scary? Build ChatOps in Slack."
subTitle: "In a company that makes mobile and web products, developers shouldn’t be the only ones who can launch the latest version of an app. You n..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*C-h4AY4jHHPv9AEyND0JWQ.jpeg
url: https://medium.freecodecamp.org/want-to-make-the-deployment-process-less-scary-build-chatops-in-slack-b2accc72e2a9
id: want-to-make-the-deployment-process-less-scary-build-chatops-in-slack-b2accc72e2a9
date: 2017-09-12T05:06:44.869Z
tags: [
  "Tech",
  "Programming",
  "Startup",
  "Chatbots",
  "Web Development"
]
---
# Want to make the deployment process less scary? Build ChatOps in Slack.







![](https://cdn-images-1.medium.com/max/2000/1*C-h4AY4jHHPv9AEyND0JWQ.jpeg)

Photo by [Jamison McAndie](https://unsplash.com/@jamomca) via Unsplash







In a company that makes mobile and web products, developers shouldn’t be the only ones who can launch the latest version of an app. You need proper testing beyond getting colleagues to give ad hoc feedback by clicking through the app.  

At [Oursky](http://www.oursky.com/), our QA built an [automatic testing pipeline](https://medium.freecodecamp.org/4-steps-to-build-an-automated-testing-pipeline-with-gitlab-ci-24ccab95535e). But testing needs to be coordinated and the report needs to go to the relevant people. The QA team needs to know when to test the latest version of the app. The PM needs to check the latest progress. And the designer needs to support and fine-tune the details. While building command line tools is the obvious go-to for developers, we wanted to find a tool that everyone in the company uses.   

**We created our deployment ChatOp on** [**Slack**](https://slack.com/)**. Read on to see how you can do it with your chat service. You can automate your deployment, which saves everyone time and reduces coordination errors** ([Campfire](https://campfirenow.com/), [Hipchat](https://www.hipchat.com/), and [Flowdock](https://www.flowdock.com/) are also supported). We’ve been using ChatOps in 15+ simultaneous projects within our team.







![](https://cdn-images-1.medium.com/max/2000/1*WuZO04C1uFLulI0ZGm_a3Q.png)

Screenshot of our Slack bots, Chima and Faseng (the names of our resident office cats)







[ChatOps](https://speakerdeck.com/jnewland/chatops-at-github) is a great way to make the deployment procedure less complex, less black-boxed, and less scary.   

I adapted GitHub’s use of ChatOps for our deployment with Slack. GitHub’s open source chatbot ([_Hubot_](https://github.com/hubotio/hubot)) does automating deployment, graphing, monitoring, provisioning, tweeting, and many other things. GitHub even created MySQL database back-up jobs so they can do important operations without leaving the chatroom with a set of instructions.



![](https://cdn-images-1.medium.com/max/1600/1*fVmXBn-azKd53zoYvKXqoQ.png)



### The big picture of ChatOps deployment

ChatOps simplifies deployment with automation: it removes manual coordination errors, and allows everyone in a project to jump in. It also encourages open communication so team members don’t have to interrupt each other for updates or documentation. They can access information whenever they need it.

So how does it work and how do you set it up?

This graph shows how deployment interactions would work via [Github](http://www.github.com/).



![](https://cdn-images-1.medium.com/max/1600/1*Vu_VmB_cJ0qFIUvYQm2OjA.png)

_Reference:_ [_https://developer.github.com/v3/repos/deployments/_](https://developer.github.com/v3/repos/deployments/)



Our company implemented a similar version using open [Slack](https://slack.com/) channels for all our operations. Each project has its own channel. We introduced two Slack botsk, **Chima** and **Faseng**, to assist the deployment process. ([Chima and Faseng](https://www.facebook.com/chima.fasang/) are the names of our resident office cats.)  

**The core idea is summarized in this sentence:**

> `_Tell_ **_Chima_**_(CEO), to make_ **_Faseng_**_(CTO) deploy._`



![](https://cdn-images-1.medium.com/max/1600/1*YVd18Txn2-SRXJi8K-UHlg.png)



### Roles of the bots: Creating & executing

For each project, we set up respective deployment jobs with Faseng. It’s not only easily to deploy, but deployment notifications make the progress and status of the project clear.



![](https://cdn-images-1.medium.com/max/1600/1*r6WJVHOT6BxeCn5hvLFdBg.png)

Screenshot of Chima and Faseng (our Slack bots)



### Creating the deployment job (chat command bot)

Chima is a [github/hubot](https://github.com/github/hubot) which helps to understand our commands from Slack. For example `chima deploy` is a deployment command.  

 We have to configure these settings for each project:

*   Specify a deployment `provider` such as [Fabric](http://www.fabfile.org/), [Capistrano](http://capistranorb.com/), [Heroku](https://www.heroku.com/), or any Ruby Rescue task
*   Whether to support `auto_merge` for the target branch for deployment
*   The `repository` name of the project
*   Available environments of the deployment
*   Only channel members in the `allowed_rooms` list can create the deployment

We put this configuration in the **app.json** file. Below is an example of how you can configure for `project-x`:

<pre name="bd9d" id="bd9d" class="graf graf--pre graf-after--p">{  
  "project-x": {  
    "provider": "fabric",  
    "auto_merge": false,  
    "repository": "oursky/project-x",  
    "environments": ["live", "edge"],  
    "allowed_rooms": ["deployment"]  
  }  
}</pre>

### Executing the deployment job (deployment bot)

Faseng is an [atmos/heaven](https://github.com/atmos/heaven) program. When it receives GitHub webhooks, it will run deployment jobs as background tasks with Resque. There are several supported ways to create deployment jobs, such as:

*   [Fabric](http://www.fabfile.org/)
*   [Capistrano](http://capistranorb.com/)
*   [Heroku](https://www.heroku.com/)
*   Any Ruby rescue task
*   [Lita](https://www.lita.io/): Written in Ruby
*   [Err](http://errbot.net/): Written in Python

Deployment task creation and completion will send out notifications into the integrated chat services. [Campfire](https://campfirenow.com/), [Hipchat](https://www.hipchat.com/), [SlackHQ](https://slack.com/), and [Flowdock](https://www.flowdock.com/) can receive deployment status event notifications.

### Use cases in our company

#### 1\. Developers use it to deploy to the staging environment



![](https://cdn-images-1.medium.com/max/1600/1*lWEwt5cgW5zqHtkA8tRyag.png)



Although we planned to use ChatOps to ease the difficulties for non-developers, it also benefits me as a developer.   

For example, when I want to deploy `trellhub/edge` to `pandawork,` I can just type `chima deploy trelhub/edge to pandawork` and then brew some coffee while I wait.  

To deploy using a chat command, I have to set up the environment settings at Chima. To make sure the deployment is authorized, I have also provided Faseng the access to the `pandawork` server.

#### 2\. QA can also deploy the latest version to the edge



![](https://cdn-images-1.medium.com/max/1600/1*e-mIkpu3XnMVlUq7DIfr-w.png)



After each milestone, the QA team is responsible for performing functional tests, usability tests, and performance tests for the pre-deliverable software.   

 In this example, our QA engineer, [Joyz](https://medium.com/@joyzoursky), wants to ensure that the latest version of `modmod-web` is ready on the edge environment before she runs the tests. She can trigger the deployment and receive notifications as well.

#### 3\. Checking up the current jobs



![](https://cdn-images-1.medium.com/max/1600/1*9124MZa1SPe2RZCX36tO8Q.png)



To see the current building jobs, **everyone** who is relevant to the project can talk to Chima and check on the Travis building progress.  

This one-time initial ChatOps setup has helped our team manage our projects in the following ways:

*   Enables less technical members on the team to contribute to the development process.
*   Notifications are pushed to the relevant project channel, which means that every relevant team member receives and can access status updates.

We are working towards doing more via ChatOps , such as backing up servers and [performing automated tests](https://medium.freecodecamp.org/4-steps-to-build-an-automated-testing-pipeline-with-gitlab-ci-24ccab95535e). Look out for future updates or share your tips with us! We’d love to hear from you.

### Further reading

#### About continuous integration

*   [Issue 6: Build Tools · Issue Travis CI for iOS](http://www.objc.io/issue-6/travis-ci.html)

#### About deployment

*   [Github Developer — Deployments](https://developer.github.com/v3/repos/deployments/)
*   [Remote multi-server automation tool — Capistrano](https://github.com/capistrano/capistrano)
*   [Python tool for streamlining deployment- Fabric](http://www.fabfile.org/)

Footnote: Now, we’ve moved to GitHub trigger deploy.











* * *







Building an app? Our free [developer tools](https://oursky.com/products/) and [open source backend](http://skygear.io) will make your job easier.

Liked what you read? Give me some claps so more people see this article! Thanks!








