---
author: Shubheksha
authorTwitter: https://twitter.com/ScribblingOn
authorFacebook: none
title: "Distributed Computing in a nutshell: How distributed systems work"
subTitle: "This post distills the material presented in the paper titled “A Note on Distributed Systems” published in 1994 by Jim Waldo and others...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*tYxWuyksovxA1Thu8PggPQ.jpeg
url: https://medium.freecodecamp.org/a-note-on-distributed-systems-3c796f1eb0a0
id: a-note-on-distributed-systems-3c796f1eb0a0
date: 2017-09-18T18:26:34.877Z
tags: [
  "Programming",
  "Research",
  "Computer Science",
  "Tech",
  "Web Development"
]
---
# Distributed Computing in a nutshell: How distributed systems work



![](https://cdn-images-1.medium.com/max/1600/1*tYxWuyksovxA1Thu8PggPQ.jpeg)



This post distills the material presented in the paper titled “[**A Note on Distributed Systems**](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.41.7628)” published in 1994 by Jim Waldo and others.

The paper presents the differences between local and distributed computing in the context of Object Oriented Programming. It explains why treating them the same is incorrect and leads to applications that aren’t robust or reliable.

#### Introduction

The paper kicks off by stating that the current work in distributed systems is modeled around objects — more specifically, a **unified view of objects.** Objects are defined by their supported interfaces and the operations they support.

Naturally, this can be extended to imply that objects in the same address space, or in a different address space on the same machine, or on a different machine, all behave in a similar manner. Their location is an implementation detail.

Let’s define the most common terms in this paper:

#### Local Computing

It deals with programs that are confined to a single address space only.

#### Distributed Computing

It deals with programs that can make calls to objects in different address spaces either on the same machine or on a different machine.

#### The Vision of Unified Objects

Implicit in this vision is that the system will be “objects all the way down.” This means that all current invocations, or calls for system services, will eventually be converted into calls that might be made to an object residing on some other machine. There is a single paradigm of object use and communication used no matter what the location of the object might be.

This refers to the assumption that all objects are defined only in terms of their interfaces. Their implementation also includes location of the object, and is independent of their interfaces and hidden from the programmer.

As far the programmer is concerned, they write the same type of call for every object, whether local or remote. The system takes care of sending the message by figuring out the underlying mechanisms not visible to the programmer who is writing the application.

The hard problems in distributed computing are not the problems of how to get things on and off the wire.

The paper goes on to define the toughest challenges of building a distributed system:

1.  Latency
2.  Memory Access
3.  Partial failure and concurrency

Ensuring a reasonable performance while dealing with all the above doesn’t make the life of the a distributed systems engineer any easier. And the lack of any central resource or state manager adds to the various challenges. Let’s observe each of these one by one.

#### Latency

This is the fundamental difference between local and distributed object invocation.

The paper claims that a remote call is four to five times slower than a local call. If the design of a system fails to recognize this fundamental difference, it is bound to suffer from serious performance problems. Especially if it relies on remote communication.

You need to have a thorough understanding of the application being designed so you can decide which objects should be kept together and which can be placed remotely.

If the goal is to unify the difference in latency, then we’ve two options:

*   Rely on the hardware to get faster with time to eliminate the difference in efficiency
*   Develop tools which allow us to visualize communication patterns between different objects and move them around as required. Since location is an implementation detail, this shouldn’t be too hard to achieve

#### Memory

Another difference that’s very relevant to the design of distributed systems is the pattern of memory access between local and remote objects. A pointer in the local address space isn’t valid in a remote address space.

We’re left with two choices:

*   The developer must be made aware of the difference between the access patterns
*   To unify the differences in access between local and remote access, we need to let the system handle all aspects of access to memory.

There are several way to do that:

*   Distributed shared memory
*   Using the [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) (Object-oriented programming) paradigm, compose a system entirely of objects — one that deals only with object references.The transfer of data between address spaces can be dealt with by marshalling and unmarshalling the data by the layer underneath. This approach, however, makes the use of address-space-relative pointers obsolete.

The danger lies in promoting the myth that “remote access and local access are exactly the same.” We should not reinforce this myth. An underlying mechanism that does not unify all memory accesses while still promoting this myth is both misleading and prone to error.

It’s important for programmers to be made aware of the various differences between accessing local and remote objects. We don’t want them to get bitten by not knowing what’s happening under the covers.

#### Partial failure & concurrency

Partial failure is a central reality of distributed computing.

The paper argues that both local and distributed systems are subject to failure. But it’s harder to discover what went wrong in the case of distributed systems.

For a local system, either everything is shut down or there is some central authority which can detect what went wrong (the OS, for example).

Yet, in the case of a distributed system, there is no global state or resource manager available to keep track of everything happening in and across the system. So there is no way to inform other components which may be functioning correctly which ones have failed. Components in a distributed system fail independently.

A central problem in distributed computing is insuring that the state of the whole system is consistent after such a failure. This is a problem that simply does not occur in local computing.

For a system to withstand partial failure, it’s important that it deals with indeterminacy, and that the objects react to it in a consistent manner. The interfaces must be able to state the cause of failure, if possible. And then allow the reconstruction of a “reasonable state” in case the cause can’t be determined.

The question is not “can you make remote method invocation look like local method invocation,” but rather “what is the price of making remote method invocation identical to local method invocation?”

Two approaches come to mind:

1.  Treat all interfaces and objects as local. The problem with this approach is that it doesn’t take into account the failure models associated with distributed systems. Therefore, it’s indeterministic by nature.
2.  Treat all interfaces and objects as remote. The flaw with this approach is that it over-complicates local computing. It adds on a ton of work for objects that are never accessed remotely.

A better approach is to accept that there are irreconcilable differences between local and distributed computing, and to be conscious of those differences at all stages of the design and implementation of distributed applications.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/adc19bed52216163c38cb889a2e72d2c?postId=3c796f1eb0a0" data-media-id="adc19bed52216163c38cb889a2e72d2c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>












