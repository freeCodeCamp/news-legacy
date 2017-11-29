---
author: Charly Vega
authorTwitter: https://twitter.com/charlyvegameyer
authorFacebook: https://facebook.com/10153063233076513
title: "Why Docker makes sense for startups"
subTitle: "Docker is becoming the standard to develop and run containerized applications...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*mUBw_A0ktP7ikp8MefvDXQ.jpeg
url: https://medium.freecodecamp.org/why-docker-makes-sense-for-startups-e9be14a1f662
id: why-docker-makes-sense-for-startups-e9be14a1f662
date: 2017-09-18T18:58:26.452Z
tags: [
  "AWS",
  "Technology",
  "Programming",
  "Docker",
  "Startup"
]
---
# Why Docker makes sense for startups







![](https://cdn-images-1.medium.com/max/2000/1*mUBw_A0ktP7ikp8MefvDXQ.jpeg)

Mandatory container metaphor is mandatory. Credit: [chuttersnap](https://unsplash.com/@chuttersnap)







Docker is becoming the standard to develop and run containerized applications.

Long ago, this piece of technology might have made sense to system administrator and PaaS (Platform as a Service) providers. But we’ve been hearing rather little from startups about their Docker adoption. Particularly the 1–to-10-employee-strong ones. This is an impression that somewhat correlates with [Datadog HQ](https://medium.com/u/acdb626ac40c)’s [recent research](https://www.datadoghq.com/docker-adoption/):







![](https://cdn-images-1.medium.com/max/2000/1*TNQdK1w297zNJKDauk4a4Q.png)

…guess this story could have been more timely written in 2015.







In case you’re unsure if it’s worth the trouble, we thought we’d reveal how much adopting a container-friendly architecture has helped [our startup](https://blog.beta.uy/). And why you might take Docker for a spin if you haven’t yet.

### The Development Experience

If you work in a small [two pizza](http://www.businessinsider.com/amazon-jeff-bezos-two-pizza-rule-productive-meetings-2017-7) startup, there’s a high chance people in your team are a multidisciplinary lot. Once projects are no longer siloed, you’ll receive a warm welcome into development environment hell.

Consider a simple scenario of a front-end engineer needing a not-yet-in-production API from a back-end. You could overcome this by making do with mocked data, or setting up staging environments. These are great. But nothing beats the agility of running integrations against the back-end code itself.

Tools like docker-compose did wonders for us. All a newcomer has to do is install a single [_thing_](https://www.docker.com/docker-mac). One invocation of docker-compose will have Docker setup everything for you so you can jump straight back into coding.

The [declarative nature](https://docs.docker.com/compose/compose-file/#dockerfile) of these tools provides a simple description of how runtime components talk to each other. This makes reasoning about your top-level architecture all the easier.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ddaf0c14086e27dd48237a509ffdb758?postId=e9be14a1f662" data-media-id="ddaf0c14086e27dd48237a509ffdb758" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F7302872%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Portability

As well as being useful in development, Docker also brought us simplicity when packaging our code for production. This is because it makes development and production environments all the more symmetric. That is a point made by 12factor’s [dev/prod parity](https://12factor.net/dev-prod-parity).

We have great language-specific tools like [rbenv](https://github.com/rbenv/rbenv) (Ruby version management) and [nvm](https://github.com/creationix/nvm) (Node Version Manager). They safeguard us from things like runtime version mismatches. You would outpace their capabilities if your code depended on some obscure native binaries or a particular file system structure.

This is where containers go the extra mile. They allow us to package our application together with exactly the kind of environment we need.

This same portability shines on hybrid-cloud setups. This point I need not tell you much more than our story migrating our cloud.

We were unhappy with our cloud provider’s poor reliability and support at the time. We decided to make the switch to the [king](https://thenextweb.com/offers/2016/03/11/amazon-web-services-dominates-cloud-services-market/#.tnw_e8LvdkYN) of IaaS (Infrastructure as a Service), AWS (Amazon Web Services).

We foresaw that this migration would take place sooner than later. So, we’d been migrating our applications to run on Docker for a few months by then. When the time came to say farewell to our old cloud, the whole transition process took little more than a couple of days.

Such a drastic transition could be considered a rare event. But I’ve never found erring on the side of flexibility to be problematic.

It’s worth noting that it’s not all about apps. [Hosted turnkey solutions](https://aws.amazon.com/cloudwatch/) may solve cross-cutting concerns such as monitoring and logging. Yet these can be replaced with containerized open-source solutions that are [easier](https://technologyconversations.com/2016/10/24/forwarding-logs-from-all-containers-running-anywhere-inside-a-docker-swarm-cluster/) to set up, and leave you in a better position to avoid [cloud jail](http://firstround.com/review/the-three-infrastructure-mistakes-your-company-must-not-make/).

### Orchestration

Whether you **need** an orchestration system or not is not the right question. It’s whether you want to have it be self-managed or to be the human orchestrator fixing a downtime at 3 AM.

The analogy is having to care for of a lot of moving parts. Software systems become more complex and fragmented at runtime. They become fragile when faced with network partitioning.

Now, containers on their own don’t solve this problem — quite the opposite in fact. Their ephemeral nature makes your system ever so dynamic. This makes it difficult to set dependencies in stone at deploy time.

Scale to a clustered infrastructure, and the situation worsens. It reaches the point of never being certain of where your processes might end up running. This makes locating and addressing them all the more difficult. But it is the need to embrace this nature that gives way to a whole host of solutions.

We tried several clustering systems. These included Google’s Kubernetes, Mesosphere’s Marathon and Hashicorp’s Nomad.

We settled on Docker’s own [Docker Swarm](https://github.com/docker/swarm) for most of our deployments using the simple Docker for AWS CloudFormation [template](https://docs.docker.com/docker-for-aws/).

First declaratively express the desired state of your system about the services it should run. Then Swarm will constantly monitor the actual state of your containers. It will reconcile the desired state by rescheduling the workload to other nodes in the event of a node failure. It will also self-heal the cluster by re-provisioning new servers should a node become unrecoverable.

Provisioning your own container cluster may escape your needs. However, new [Caas](http://searchitoperations.techtarget.com/definition/Containers-as-a-Service-CaaS) (Containers-as-a-Service) platforms are popping up, often at no extra cost than your underlying infrastructure usage.



![](https://cdn-images-1.medium.com/max/1600/1*p2d6GDAtrpRQr2UzZX91zw.png)

Who needs kittens when you’ve got cartoon whales.



You’ll find service discovery, load-balancing, software-defined networks, persistent storage, task scheduling and RAFT consensus. This guarantees a scary but fun ride through a whirlpool of cool-sounding jargon.

### Cutting down your infrastructure bill

You don’t need yet another article on “How we shaved our server costs by`{{ rand_amount }}`after switching to`{{ rand_language }}`_”. S_o I’ll try to come up with something different.

Microservices are all the rage these days. We’ve come to split our applications into several different services here at [Beta Labs](https://medium.com/@betalabs). This approach allows us to mix and match different languages and frameworks. That keeps us free to work with the best tool for the job every time.

Please bear with me. I’m trying to make a case for microservices in 10 words or less.

Following 12factor’s [“_One codebase, many deploys”_](https://12factor.net/codebase), this means each service should get deployed as its own application in PaaS parlance. This happens to be how most PaaS pricing models scale.

Let’s throw some numbers at it. Running an available setup for a Ruby app in Heroku means running at least two web Standard 1X [dynos](https://devcenter.heroku.com/articles/background-jobs-queueing). This will set you back $50 per month for a total of 1 application constrained to 512MB of memory.

That’s $50 GB per month for front-end services. Add one worker dyno for simple background processing, and that’s another $25 per month.

You may also want a couple of lightweight back-end services, such as a piece of middleware or broker with custom logic, which could make do with 1 instance each. You could go over the $100 per month mark with ease.

That’s before we start talking add-ons. Add a further $30 per month for a basic Redis and a PostgreSQL instance. Heroku’s Logplex is only for streaming. So, if you want to keep your logs for a bit longer, you’ll also want to add a logging service that can be [shared](https://devcenter.heroku.com/articles/managing-add-ons#using-the-command-line-interface-attaching-an-add-on-to-another-app) across apps.

Let’s see how we could do better.



![](https://cdn-images-1.medium.com/max/1600/1*S1kWdAuHYbxc7sUW7k-0hA.png)

One VM per (monolithic) service vs. multiple (micro) services per VM. Credit: [Martin Fowler](http://martinfowler.com)



Let’s borrow from Martin Fowler’s description of [microservices](https://martinfowler.com/articles/microservices.html). The combined use of containers with a clustering system provides a beautiful and fitting platform for dynamically scaling your services.

Our containers get placed on nodes with the most available [resources](https://docs.docker.com/swarm/scheduler/strategy/). All nodes share an internal [SDN](http://www.webopedia.com/TERM/S/software_defined_networking.html) (Software Defined Network). So, your services can talk to each other without leaving the cluster.



![](https://cdn-images-1.medium.com/max/1600/1*ECJp2DdJnM5u0Hvv_EfGwQ.png)

A 3-node-strong Swarm cluster running the example-voting-app



Let’s go back to our example from earlier. Such a system would fit on a 3-node, t2.micro-based Docker Swarm cluster, which clocks in at roughly [$50 per month.](https://calculator.s3.amazonaws.com/index.html#r=IAD&s=EC2&key=calc-0351D66A-E96F-4871-B9C8-1F42BF37FDCC) You could have a total of 3GB of memory. You may even have extra headroom to run your own containerized Redis instances, if you feel so daring.

Heroku’s dynos are a lot more gifted in the CPU department with 8 virtual cores against 1\. But unless you’re running on a language with native threads, a multi-process-per-dyno setup could make you find 512MB of memory insufficient fast. Also, it won’t make much of a difference if your workload is I/O intensive.

Don’t get me wrong, as far as making DevOps a non-issue goes, it doesn’t get much better than Heroku . I’m not suggesting you or anyone in your team should go it alone and spend nights learning how to get high availability setups right in PostgreSQL. We’d be comparing apples to oranges.

I do nonetheless feel it’s important to point out you **are** paying extra for all that reliability and ease of use. With that you can judge for yourself what is actually worth the price and what you can get done yourself.

Oh, while we’re at it, don’t forget you can [run your Docker](https://devcenter.heroku.com/articles/container-registry-and-runtime) containers in Heroku.

#### Inherent security

This argument won’t hold much water when comparing the Docker platform to a PaaS. Yet, you’ll find you reduce the risk of certain vulnerabilities when compared to your Ubuntu box running multiple apps .

Why is it any different? Enter Linux containers. An intriguing concept once presented by the likes of Heroku when reading through their guides now sits at the very core of Docker. And with them comes a much appreciated security feature: isolation.

Take the worst case scenario of someone executing code remotely inside your server. Sounding too far-fetched? Check out [ImageTragick](https://imagetragick.com/). Applications tend to have a one-to-one relationship with containers. You should be able to isolate the damage to that application’s domain, keeping whatever else you choose to run on your hosts safe.

This is a similar characteristic to what VMs ([Virtual Machines](https://en.wikipedia.org/wiki/Virtual_machine)) have provided for quite some time. But they’ve always had the slightly more rigid nature of longer boot-up and provisioning times, plus the overhead of running full operating systems.

One could almost be forgiven for giving them longer lifecycles and treating them more like [Pets than Cattle](http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/), but running more apps in this way leads to the potential compromise of more secrets.

While running containerized applications lowers this risk, this is not to say you’ll be immune to developer malpractice. You wouldn’t want to compromise access to the host’s [Docker daemon](https://github.com/dockersamples/docker-swarm-visualizer/blob/master/docker-compose.yml#L7), for instance. But all in all, containerized environments do help in reducing your attack surface as an organization.

Just be cautious and [don’t](https://avicoder.me/2016/07/22/Twitter-Vine-Source-code-dump/) keep your images public (cheap shot, I know).

### _You feel like it_

Okay this might be completely biased by what our inner geeks find to be motivating, but…

We can’t say we haven’t had to work around some rough edges early on. I have to admit to being drawn to hipster tools rather easily.

One should be able to add new tools to the arsenal if one feels it will contribute to one’s happiness as an engineer . Wasn’t that part of the whole selling point for startups in the first place?

Should you decide to go Docker-less, you’ll almost certainly find that being a little container-savvy will be handy in [years to come](https://www.linux.com/news/5-next-gen-cloud-technologies-you-should-know).

### Conclusion

So, was it a silky-smooth road to containerized paradise? Hell, no.

Could we have settled with more stable tools until Docker’s rough edges were fully polished? Probably.

Would we have completely failed as a startup if we hadn’t adopted Docker? Most definitely not.

Would we invest in adopting containers again? A resounding **yes** is in order.

These points are far from being exclusive to startups. I’d even say company size is almost irrelevant. Rest assured, my endorsement won’t jeopardize Docker’s reputation among the corporate types either way.

We are not advocating that Docker is the **only** way to solve these timeless problems. And we haven’t talked much about its downfalls.

But for now, it **does** remain the closest one-stop shop solution to all the commonplace problems we presented above.

All in all, it’s pretty safe to say containers are here to stay — oh wait, did you hear about this whole **serverless** thing? Come to think of it, containers are so old-fashioned…

Thanks for reading! Be sure to leave a comment if you have any thoughts or questions. If you found this article helpful, some claps would mean a lot!








