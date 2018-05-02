---
original: >-
  https://medium.freecodecamp.org/how-to-choose-the-right-container-orchestration-and-how-to-deploy-it-41844021c241?source=rss----336d898217ee---4
title: How to choose the right container orchestration and how to deploy it
pubDate: '2018-05-01T17:21:03.000Z'
author:
  avatar: 'https://cdn-images-1.medium.com/fit/c/120/120/0*uLUktMh6TLwymIpF.'
  name: Michael Douglass
  bio: >-
    Developing code & running servers from the dawn of the Internet. I still
    enjoy the thrill of learning and am passionate about software architecture.
    Everywhere!
  profileLink: 'https://medium.freecodecamp.org/@mikedoug?source=post_header_lockup'
  social:
    twitter: null
  slug: michael-douglass
slug: how-to-choose-the-right-container-orchestration-and-how-to-deploy-it
---
* * *

How to choose the right container orchestration and how to deploy it
====================================================================

![](https://cdn-images-1.medium.com/max/2000/1*bYL46jvuTzhBeoswADSHiw.jpeg)

Running server processes inside containers is here to stay. If your environment is small with a couple of servers running a few dozen containers, you can likely get away with doing everything by hand. Beyond that scale, you need great tooling to deal with the heavy lifting and provide a common, baseline functionality. The alternative is a lot of tedious, error-prone, repetitive, manual work.

If you do not utilize a CI/CD pipeline and an orchestration system, development and operations will have to perform extreme, continuous collaboration and coordination.

![](https://cdn-images-1.medium.com/max/2000/1*8Ia2JL_X2ZDIzaZRFa5P9w.jpeg)

Image Courtesy Julius Silver - [Pexels.com](https://www.pexels.com/photo/white-water-boat-753331/) — I sure hope they have an orchestration for how containers are loaded on these vessels… I cannot imagine the variables involved: Weight distribution. Destination and order of removal. Volatility. This image makes me glad I work in software where I get to help manage the complexity!

When I began investigating the world of microservices earlier this year, I had no idea of the extensive support infrastructure I would discover. Kubernetes has been an absolute treasure trove of a find, and Istio appears to be simply amazing for microservices — even though I know I have only scratched the surface of both these technologies.

From its humble beginnings less than three years ago, Kubernetes has quickly grown to be an amazing orchestration engine employed by countless corporations and embedded in many other projects. As a software designer with multiple decades under my belt, I am quite impressed with the Kubernetes architecture. It is extremely modular and built under the expectation that many pieces can be replaced. In some cases there are already numerous choices for a given component.

All of this newness and multiplicity of choice can make getting started quite daunting. Just as I sit on the precipice of going full bore into Kubernetes, I am struck by a more fundamental decision…

### Making the Right Container Orchestration Choice

As I began to dig deeper into the world of container orchestration, it became apparent that there are more than a few choices available. My instincts told me Kubernetes is the thing to use, but I also began to question how I’d know if I was right. There is nothing quite like uncertainty to make one dig deeper.

The first question I had was, what are the alternatives for container orchestration?

After spending a reasonable amount of time searching and reading, here is the list of orchestration systems I could find:

*   [Kubernetes](http://kubernetes.io) \- The apparent big-daddy of them all. The project itself is very active, and the architecture gives me comfort that continued development is going to be swift and safe. This is my instinctive choice.
*   [Docker Swarm](https://docs.docker.com/engine/swarm/) \- This is built into Docker by default, and has a lot of core functionality you want in a system. It has a lot of parity with Kubernetes, but it lacks a key item in that the free, open-source version is Role Based Access Control (RBAC). You can get that in the paid, Enterprise version.
*   [Marathon](https://github.com/mesosphere/marathon) on [Mesos](http://mesos.apache.org/) \- Mesos itself is a highly scalable clustering system for running tasks of all kinds. It relies on frameworks to support different kinds of tasks, and Marathon is the plugin which provides the support for container orchestration within the Mesos ecosystem. The [list of frameworks](http://mesos.apache.org/documentation/latest/frameworks/) is impressive.
*   [Titus](https://github.com/Netflix/titus) \- As I was writing this, Netflix [open-sourced](https://medium.com/netflix-techblog/titus-the-netflix-container-management-platform-is-now-open-source-f868c9fb5436) their internal orchestration system. Thanks Netflix! Titus was designed to provide the tightest of integrations with the Amazon AWS infrastructure (where Netflix maintains its operations). One of their intentions is that other projects will use their technology so that Netflix can use them in the future.
*   [Cattle](https://github.com/rancher/cattle) \- This is the orchestration engine made for and embedded within the Rancher system. I did not give Cattle a very deep look, since its parent project has apparently bought into Kubernetes as its preferred and primary orchestration engine. The main title on the Rancher website reads, “Enterprise Kubernetes Made Easy.” The page is riddled with how it helps you run Kubernetes clusters. No mention of Cattle exists on the webpage. It is clear the Rancher project has made its choice.
*   [Nomad](https://www.nomadproject.io/) \- Okay, this is Hashicorp. As a huge fan of Hashicorp, I would feel unjust if I did not give their product at least a once over. The product looks interesting on the surface with some fairly major paywall concerns. Namespaces are only available in the enterprise version. For service discovery, you’d have to add on Consul, and for secret management, you’d need to add on Vault. By a review of the documentation, it also appears to lack basic CNI configuration — the primary discussion for networking configuration is on mapping ports and static IP mappings.
*   Kontena - This is a visually stunning product. You can run in their cloud offering, or you can setup your own platform master on your infrastructure of choice. If you choose to bring your own infrastructure, you can either choose to connect it to the Kontena Cloud for $15/month or not. The pretty web interface is what you give up in that case. Not having delved beyond a few hours of digging around their site, I am not certain the impact that would cause.

There are still others that you find hints of if you look hard enough: Deis, Mantl, Cloud Foundry, and Amazon ECS to name a few. These guys probably deserve more than this simple, honorable mention.

#### Requirements First

Making the choice here is difficult. Of course it depends on your requirements, and so let me list out a few important ones to me:

1.  **Active development:** The container orchestration world is relatively young. Inactive projects will quickly fall behind and signify that bugs are not being addressed. I get the sense that Cattle is on the way out. So I’m scratching it off here.
2.  **No cloud vendor lock-in:** I am not interested in being tied to any single cloud provider at this time. Titus falls out here due to its tight integration with AWS, which is definitely a down side here.
3.  **Simplicity:** The more complex a system, the harder it will be to operate it. This requirement causes me to drop Mesos out of the running, because it is not a container orchestration system first. It tries to be many things to many people, and that feels like a wrong fit.
4.  **CNI Networking:** The ability to have trivial network connectivity between my services is important. I do not want the developers spending time on special purpose code for finding dependent services. Docker Swarm and Kubernetes, you are both still in the running.
5.  **Namespaces with RBAC -** I work in a corporate environment, and one of my goals is to provide development, QA, staging, and production setups that do not collide. I could setup a separate cluster for each, or I could use RBAC and share my compute power. Docker Swarm, I am sorry to see you go, but this is the end of our journey together. I love Hashicorp, but Nomad too puts this functionality behind a paywall.

There you have it, some pretty high-level requirements that pretty quickly whittle down the playing field. It might not seem fair to drop Mesos out on the “simplicity” category. But if you spend half the time I have investigating all of these options, you will understand that at some point you must simplify your decision making in order to actually start moving forward.

I am left with the bizarre state of having Kubernetes and Kontena still on the list. Kontena is literally an 11th hour investigation. I almost left it relegated to the list of others. If I had done so, this final hour of authorship would have been less painful. But here it is. A decision has to be made, and while I will eventually circle back around to Kontena, Kubernetes is my current vote.

I feel guilty leaving so many amazing projects on the cutting room floor. This is what happens in today’s world of amazing options coupled with the age-old need to make a decision.

### Getting Started With Kubernetes

So I have chosen Kubernetes to be my container orchestration system of choice. How do I get a cluster operational for testing and production use? The answers to this question are quite varied as well.

#### Kubernetes Deployment Methods

*   [Minikube](https://github.com/kubernetes/minikube): The recommended method to get a single-node Kubernetes running quickly for testing and development purposes. I prefer to see things in full action, so I did not settle for a single node deployment for my tests.
*   [Kubeadm](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/): This is provided by kubernetes.io as a method to deploy a single-master, multi-node cluster. There are additional instructions for setting up a multi-master configuration, too. I have previously used Kubeadm through some Terraform scripting to setup my Digital Ocean testbed clusters.
*   [Docker Enterprise 2.0](https://www.docker.com/enterprise-edition): As I was working on this article, Docker announced the upgrade to EE 2.0. This new version now incorporates a full Kubernetes deployment built into the product. From a quick reading, they utilize Swarm to bootstrap the cluster and deploy Kubernetes.
*   [Rancher](https://rancher.com/): “Enterprise Kubernetes Made Easy” is their claim. Indeed, I was able to get a full Kubernetes cluster running on Digital Ocean in under an hour by following their guide. My initial reaction was: “Holy cow! Rancher is Amazing.” It supports managing the Kubernetes deployments into many environments and trivializes the High Availability deployment. It purports to allow management of multiple clusters along with managing other orchestration alternatives including their own Cattle and Apache Mesos.
*   [Mesosphere DC/OS](https://mesosphere.com/): Possibly coming in as an even heavier weight champion as a container orchestration system in its own right, but now also able to administer Kubernetes clusters as well. This product appears quite compelling… Except that the really good stuff is under the [Enterprise pay wall](https://mesosphere.com/pricing/). I am also unclear from their website if the DC/OS version is free and the DC/OS Enterprise version is paid (or if they are both paid). Anytime I see a “Contact us for pricing,” I tend to move on. This will keep me from looking too closely — apologies to anyone I offended.
*   [Kontena’s Pharos](https://pharos.sh/) \- It seems that even companies who have their own complete alternative to Kubernetes cannot keep their hands out of the Kubernetes deployment software initiatives. Their “[Usage with Terraform](https://pharos.sh/docs/usage/terraform.html)” documentation looks to have a lot of power in making your Kubernetes installation a distinct, composable step. You can setup your infrastructure in one step using whatever tool you have for that and then setup Kubernetes on top of that. `setup-infrastructure | install-kubernetes > profit`

The list goes on: Pivitol’s Kubo, Apprenda Kismatic, CoreOS Tectonic, RedHat Openshift v3, Openshift Origin, and certainly more.

#### Hosted Options

*   [Amazon EKS](https://aws.amazon.com/eks/) \- Elastic Container Service for Kubernetes — An Amazon hosted Kubernetes cluster. This is currently an “In Preview” technology by Amazon. This speaks towards the viability and future of Kubernetes…
*   [OpenShift](https://www.openshift.com/) \- Red Hat’s online container service.

#### My Kubernetes Deployment Choice?

For deployment of Kubernetes, I plan on continuing to work with both Kubeadm (possibly replacing that with Pharos) as well as Rancher.

Rancher showed great promise the first time I used it. The only downside is that I must first have a control machine onto which I install Rancher, but that is a small price to pay. I am not certain that I will want to use the Rancher interface for interacting with my Kubernetes cluster, and so long as it does not get in the way of me using `kubectl` to control the cluster, we can get along just fine.

### What is Next?

Now that I have gone through the exercise to understand the world of options, I am ready to go head down and experiment with Kubernetes. There is a lot of exploration I need to do with my deployment methods of choice.

I also talked before about Istio which lays on top of Kubernetes to provide even more foundation to support microservice communication and monitoring. Expect more of that in upcoming articles. Oh, and now that I tripped over Kontena, I feel pulled to give it a trial run through. 😉
