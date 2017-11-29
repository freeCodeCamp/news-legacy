---
author: Bruno Pedro
authorTwitter: https://twitter.com/bpedro
authorFacebook: none
title: "Best practices for securely storing API keys"
subTitle: "In the past, I’ve seen many people use Git repositories to store sensitive information related to their projects...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*xw9gprMTI6h3U3NkKV0vUg.jpeg
url: https://medium.freecodecamp.org/how-to-securely-store-api-keys-4ff3ea19ebda
id: how-to-securely-store-api-keys-4ff3ea19ebda
date: 2017-10-25T15:27:37.797Z
tags: [
  "Git",
  "API",
  "Github",
  "Security",
  "Docker"
]
---
# Best practices for securely storing API keys







![](https://cdn-images-1.medium.com/max/2000/1*xw9gprMTI6h3U3NkKV0vUg.jpeg)

Picture by [Jose Fontano](https://unsplash.com/@josenothose)







In the past, I’ve seen many people use Git repositories to store sensitive information related to their projects.

Lately, I’ve been seeing some people announce that they’re storing API keys on their private GitHub repositories. I’m writing this article because people should understand the risks of storing API keys with your code.

This article is not intended to be a permanent solution to the problems you might have with storing API keys. Instead, it’s my own analysis of the problem and my suggestions on how to fix it.

So, what exactly is the problem with storing sensitive information near your code on a Git repository?

### Why you shouldn’t store API keys on Git repositories

Storing API Keys, or any other sensitive information, on a `git` repository is something to be avoided at all costs. Even if the repository is private, you should not see it as a safe place to store sensitive information.

Let’s start by looking at why it’s a bad idea to store API keys on **public** `git` repositories.

By nature, a public `git` repository can be accessed by anyone.

In other words, anyone with an Internet connection can access the contents of a public `git` repository. Not only that, but they can also browse all the code inside the repository and possibly even run it. If you store an API key on a public repository, you are publishing in the open so that anyone can see it.

A recent search for **client_secret** on GitHub revealed that there are more than one 30,000 commits that potentially expose an API key and secret. In some cases, you only copy and paste the code to immediately access the API.

This problem is becoming so important that some companies invest in resources to make sure that there aren’t any leaked API keys and secrets.

Last year, Slack started to search for exposed API tokens and invalidate them proactively. This action prevents malicious access to Slack’s accounts but can’t possibly find all the leaked tokens.

So, this is happening on public Git repositories. What about the **private** ones? Why is that an issue?

Private Git repositories hosted on services such as GitHub, GitLab, and Bitbucket are exposed to a different type of risk. When you integrate a third-party application with one of the services mentioned, you may be opening your private repositories to those third parties. Those applications will be able to access your private repositories and read the information contained within.

While that alone doesn’t create a risk, imagine if one of those applications becomes vulnerable to attackers. By getting unauthorized access to one of those third-party applications, attackers might gain access to your sensitive data, including API keys and secrets.

### So, where should API keys be stored?

There are many alternatives for securely storing API keys and secrets. Some of them let you use your Git repository and encrypt the sensitive data. Other tools are more sophisticated and decrypt sensitive information as part of a deploy workflow. Let’s look at some of the available solutions.

#### `git-remote-gcrypt`

The first solution lets you encrypt a whole Git repository. [git-remote-gcrypt](https://github.com/spwhitton/git-remote-gcrypt) does that by adding functionality to Git remote helpers so that a new encrypted transport layer becomes available. Users only have to set up a new encrypted remote and push code into it.

Read on if you’re looking for a more fine-grained solution that lets you encrypt individual files.

#### `git-secret`

`[git-secret](http://git-secret.io/)` is a tool that works on your local machine and encrypts specific files before you push them to your repository. Behind the scenes, `git-secret` is a shell script that uses GNU Privacy Guard ([GPG](https://www.gnupg.org/)) to encrypt and decrypt files that might have sensitive information.

#### `git-crypt`

Another solution is `[git-crypt](https://www.agwa.name/projects/git-crypt/)`. It is very similar to git-secret in the way it operates, but it has some interesting differences.

The first thing to notice about `git-crypt` is that it is a binary executable and not a shell script, as git-secret is. Being a binary executable means that to use it you first have to compile it, or you need to find a binary distribution for your machine.

If you’re using a Mac you’re lucky because [HomeBrew](https://brew.sh/) offers a `git-crypt` ready-to-install package. All you have to do is run brew install `git-crypt` on a terminal.

#### BlackBox

[BlackBox](https://github.com/StackExchange/blackbox) is a tool created by [Stack Overflow](https://stackoverflow.com/). This is the company behind popular Q&A communities such as Stack Overflow itself, Server Fault, and Super User. BlackBox is a robust tool as it works with Git as well as other version control systems like Mercurial, and Subversion.

It also supports the encryption of small strings and not only entire files. It does that when working with [Puppet](https://puppet.com/) and uses Puppet’s [Hiera](https://docs.puppet.com/hiera/), a key-value lookup tool for configuration data.

Having the ability to encrypt and decrypt individual strings makes BlackBox a great solution for securing API keys and secrets.

#### Heroku Configuration and Config Vars

If you’re working with [Heroku](https://www.heroku.com/) you should not store any sensitive information such as API keys and secrets on your Git repositories. Heroku offers a solution that lets you [set configuration variables](https://devcenter.heroku.com/articles/config-vars).

Your application can then access the contents of those configuration variables during runtime by accessing the corresponding environment variables. Even though the values are not encrypted, this solution lets you avoid using your Git repository for storing API keys.

[Dokku](http://dokku.viewdocs.io/dokku/), an Open Source solution like Heroku, offers the same capabilities.

#### Docker secrets

At the end of the spectrum of possible solutions is [Docker secrets](https://docs.docker.com/engine/swarm/secrets/). This solution [was introduced by Docker](https://blog.docker.com/2017/02/docker-secrets-management/) in February 2017\. It has gained popularity ever since.

Docker secrets lets you define encrypted variables and makes them available to specific services during runtime. Secrets are encrypted both during transit and at rest.

This approach makes Docker secrets the perfect solution for storing and using API keys and secrets in a secure and encrypted way.

### Summary

By now you should be aware of the dangers of storing sensitive information such as API keys and secrets on public and private Git repositories.

Understanding the potential ways in which your repositories might be exposed is key to assessing and mitigating the risks associated with information leaks.

This article also proposes a few different solutions that let you encrypt API keys and secrets so that you can securely use your code repositories.

I’m sure there are more solutions out there that can help you achieve the same results.








