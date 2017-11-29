---
author: cheungpat
authorTwitter: https://twitter.com/cheungpat
authorFacebook: https://facebook.com/10155273053344681
title: "How I built a Kubernetes cluster so my coworkers could deploy apps faster"
subTitle: "How do you encourage your development team to build more projects without being bogged down with deployment? As a company that builds mob..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*tTK6pwJc63dSpVzGImKEvQ.png
url: https://medium.freecodecamp.org/how-i-built-a-kubernetes-cluster-so-my-coworkers-could-deploy-apps-faster-ad5567bf6fa8
id: how-i-built-a-kubernetes-cluster-so-my-coworkers-could-deploy-apps-faster-ad5567bf6fa8
date: 2017-05-26T15:50:56.910Z
tags: [
  "Github",
  "Startup",
  "Kubernetes",
  "DevOps",
  "Tech"
]
---
# How I built a Kubernetes cluster so my coworkers could deploy apps faster







![](https://cdn-images-1.medium.com/max/2000/1*tTK6pwJc63dSpVzGImKEvQ.png)

[Kubernetes](https://kubernetes.io/) x [GitHub](https://github.com/)







How do you encourage your development team to build more projects without being bogged down with deployment? As a company that builds mobile and web products, it’s a priority that we create an environment where our team members focus on building rather than deploying.

But even if we have a deployment platform, we’ll still need someone to manage the administration. As engineers, anything we have to repeat, we want to automate.

What would be a secure way to give our developers access to our deployment platform?

1.  We want to allow our developers to build their own projects (perhaps personal) without needing to ask an administrator for permission or resources to deploy a new application for testing or experimenting
2.  Our developers can deploy their own application, update it, or remove it
3.  Lower barriers for trying out new things (so to speak)

### Our solution: Kubernetes

Our solution was to use GitHub Authentication for our Kubernetes cluster.   

For those of you who don’t know, [Kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/) is a production-ready container orchestration engine developed by Google. It’s an open-source platform that enables automation for container operations. Things like deployment and scaling across a cluster of hosts (or nodes).

With Kubernetes, we are able to support our developers as customers who need to deploy applications and seamlessly roll out new features without a heavy admin overhead. Container technologies are a good practice for packaging backend applications and running them on a server.  

We run containers from different projects in the same cluster. Kubernetes allows us to focus less on individual servers. We may think of Kubernetes as “a big computer” where our team members can run containers on top of it.

### Giving our team access to the cluster

We want colleagues to have their own user credentials to access the cluster. This saves admin time since they don’t need to open a new account for each user. New users can generate the credential themselves, or new ones if they lose their credentials.  

We were looking for an authentication solution that could meet all of the requirements below:

1.  Admin time should be saved (since they are also our developers)
2.  New users can generate their own credentials without needing the admin
3.  User credential is always private for security reasons
4.  Developers have their own space to experiment
5.  Project spaces can be accessed and changed by multiple users
6.  In the future, we may want to enable auditing to track changes

### Attempts — most existing authentication strategies do not fit

First of all, many existing authentication methods still require an admin to generate or manage accounts. This is the main reason we ruled most of them out.  

Below, I’ll list out some common ones for reference, but feel free to skip to the next section if you just want to understand why we chose GitHub Authentication.

#### **Certificate-Based**

Each user has their own private SSL certificate for accessing the cluster, which can be complicated to set up. This means an admin needs to manage a public-key infrastructure (i.e. Certificate Authority) to sign the user certificate. In addition, the admin needs to do this when 1) there is a new user, 2) the certificate expires, or 3) the user has lost the certificate/private-key. Finally, the user has to manage their own private key materials when they want to use the same SSL certs on multiple computers — a potential security weakness.

#### **Username/Password-Based**

Since everyone knows how to use a username and password, this is easier to implement than certificate-based authentication. However, Kubernetes doesn’t have a user-friendly interface for our team members to create their own account, which means we still need an admin to generate a set of username and password for each user. Additionally, this means the admin needs to reset a user’s password if the user loses it. Without a user-friendly UI, it is difficult for the user to change the password, too. Kubernetes also requires the API server to be restarted when the username/password list changes.

#### **Pre-Generated Token-Based**

Similar to the Username/Password-based approach, the admin is still involved to generate a token.  

[**Open ID Connect (OIDC)**](http://openid.net/connect/)**:** At the time we built the Kubernetes cluster, OIDC support was not fully-baked, and we were not sure about how to integrate OIDC with Google accounts. OIDC is a good option if it is fully implemented by the Kubernetes API server and client command (this was not implemented last time I checked).

### 5 simple reasons to use GitHub authentication

GitHub Authentication was a simple solution because:

1.  Everyone in our company already has a GitHub account
2.  This solves our admin overhead problem since people manage their own tokens
3.  Users can easily generate an access token on [github.com](http://github.com)
4.  It’s highly flexible as users can access the Kubernetes cluster on different computers, just by generating new tokens
5.  Access can always be revoked by removing the access token on [github.com](http://github.com) (in case the github token is leaked)

### Implementing GitHub authentication

We authenticate our team members using GitHub token.  

Kubernetes supports a [webhook token authenticator plugin](https://github.com/kubernetes/kubernetes/pull/24902) to allow a remote service to authenticate. So all we have to do is implement a webhook that verifies the token.  

When a user tries to authenticate to the Kubernetes API, the Kubernetes API server calls this authenticator to verify the bearer token. This authenticator checks if the access token is valid using GitHub API and returns the GitHub username to the API server by checking whether the requested user has access to the resource. It uses Role-Based Access Control (RBAC) rules.  

Note that we have to run the webhook on Kubernetes master, in order for the API server to access it.  

 This is how we actually [implement the WebHook](https://github.com/oursky/kubernetes-github-authn/blob/master/main.go):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5b0cadd07b005ddb0c6d32146bb75831?postId=ad5567bf6fa8" data-media-id="5b0cadd07b005ddb0c6d32146bb75831" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F1916493%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





We used [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control) because it offers the highest flexibility without making config changes on the API server. Besides RBAC, Kubernetes has various authorization strategies.   

For now, GitHub Authentication doesn’t entirely remove admin responsibilities. An admin is still needed in certain scenarios:

1.  If a user wants their own personal namespace, the admin still needs to create the namespace and set RBAC rules for this user
2.  If there is a new project, the admin still needs to create the namespace and set RBAC rules for this project

When setting up the project, the admin can designate a team lead to control RBAC rules for the participating team members and control who has access to the project namespace.

### Now Oursky team members can access the cluster with GitHub

Whenever our teammates need a new deployment for their project (even for personal ones), they could just obtain a token from GitHub. We hope this encourages our team to build something interesting without worrying about stable deployment.  

You are welcome to take a look at the exact implementation in [this github repository](https://github.com/oursky/kubernetes-github-authn). You can also feel free to implement this solution in your own cluster.











* * *







_Building an app? I’m currently working on an_ [_open source backend_](http://skygear.io/) _at_ [_Oursky_](https://medium.com/@oursky) _that will make your job easier._








