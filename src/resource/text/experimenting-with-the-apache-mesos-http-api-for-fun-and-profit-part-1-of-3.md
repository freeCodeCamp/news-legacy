---
author: Marco Massenzio
authorTwitter: none
authorFacebook: none
title: "Experimenting with the Apache Mesos HTTP API for Fun and Profit"
subTitle: "Apache Mesos is a tool used in production at large-scale services like Twitter and Airbnb. Here’s its textbook description:..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*YWIt5Ajh2lAk4e2yj4jO8Q.jpeg
url: https://medium.freecodecamp.org/experimenting-with-the-apache-mesos-http-api-for-fun-and-profit-part-1-of-3-cf5736e84f85
id: experimenting-with-the-apache-mesos-http-api-for-fun-and-profit-part-1-of-3-cf5736e84f85
date: 2016-08-27T21:59:44.000Z
tags: [
  "Docker",
  "DevOps",
  "Mesos",
  "Python",
  "Programming"
]
---
# Experimenting with the Apache Mesos HTTP API for Fun and Profit



![](https://cdn-images-1.medium.com/max/1600/1*YWIt5Ajh2lAk4e2yj4jO8Q.jpeg)



Apache Mesos is a tool used in production at large-scale services like Twitter and Airbnb. Here’s its textbook description:

> The Mesos kernel runs on every machine and provides applications (e.g., Hadoop, Spark, Kafka, Elasticsearch) with API’s for resource management and scheduling across entire datacenter and cloud environments. — from the [Apache Mesos](https://mesos.apache.org) project site.

This is the first of a series of three articles that show how to setup a Vagrant-based Apache Mesos test/development environment on your laptop, how to run a Python notebook against the HTTP API, and how to launch Docker containers on the running Agent VM.

This series is an extended (and updated) version of the [talk](https://youtu.be/G7xfEs0lX5U) I gave at **MesosCon Europe 2015** updated for Apache Mesos 1.0.0, which has just been released (August 2016) — you can also find the [slides](http://events.linuxfoundation.org/sites/events/files/slides/MesosCon%20EU%20-%20HTTP%20API%20Framework.pdf) there.

This post is pretty jam-packed, and will require you to be familiarity with some concepts around containers, VMs, and Mesos. But I’ll take the time to show all the intermediate steps (hence, the 3-parts). It should be easy to follow, even if you’ve never used Vagrant, Mesos, or even Jupyter notebooks before.

I recommend you first have a basic familiarity with Python and handling HTTP requests and responses, as we will not be going those details there.

All the code is available [on the zk-mesos git repository](https://github.com/massenz/zk-mesos):

<pre name="264e" id="264e" class="graf graf--pre graf-after--p">git clone git@github.com:massenz/zk-mesos.git</pre>

And you can also view the [README](https://github.com/massenz/zk-mesos).

### Getting Started

In order to follow along, you will need to clone the repository (as shown above) and install [Virtualbox](http://virtualbox.org) and [Vagrant](https://www.vagrantup.com/docs). Follow the instructions on their respective sites and you’ll be up and running in no time.

I also recommend quickly scanning the Vagrant documentation. A knowledge of Vagrant beyond `_vagrant up`_ is not really required to get the most out of this series, but it may help if you get stuck (or would like to experiment and improve on our _Vagrantfile_).

If you’re not familiar with [Apache Mesos](https://mesos.apache.org) I recommend taking a look at the project’s site. I recommend reading [Mesos in Action](http://amzn.to/2citsRx) (note that I was one of the manuscript’s reviewers).

We will **not** be building Mesos from source here, but will instead use [Mesosphere packages](http://open.mesosphere.com/downloads/mesos/). You don’t need to download them. The _Vagrantfile_ will automatically download and install on the VMs.

To run the Python notebook, we’ll take advantage of the [Jupyter](http://jupyter.org) packages, and use a _virtualenv_ to run all of our code. Virtualenv isn’t strictly necessary, but will prevent you messing up your system Python.

If you‘ve never used [virtualenv](https://virtualenv.pypa.io/en/stable/installation/) before:

<pre name="8e53" id="8e53" class="graf graf--pre graf-after--p">$ sudo pip install virtualenv</pre>

And then create and run a _virtualenv_:

<pre name="52b3" id="52b3" class="graf graf--pre graf-after--p">$ cd zk-mesos   
$ virtualenv mesos-demo  
$ source mesos-demo/bin/activate   
$ pip install -r requirements.txt</pre>

Finally, verify that you can run and load the Jupyter notebook:

<pre name="89a5" id="89a5" class="graf graf--pre graf-after--p">$ jupyter notebook</pre>

This should automatically open your browser and point it to [http://localhost:8888](http://localhost:8888). From here you can select the _notebooks/Demo-API.ipynb_ file. Don’t run it just yet, but if it shows up, it will confirm that your Python setup is just fine.

### Building and installing Apache Mesos

This is where the beauty of Vagrant shines in all its glory. Installing Apache Mesos Master and Agent are not trivial tasks, but in our case, it’s just a matter of:

<pre name="db08" id="db08" class="graf graf--pre graf-after--p">$ cd vagrant   
$ vagrant up</pre>

Make sure that you’re in the same directory as the _Vagrantfile_ when issuing any of the Vagrant commands, or it will complain about it.

It is worth noting that we are building **two** Vagrant boxes, so any command will operate on **both** unless specified. To avoid this, you can specify the name of the VM after the command. For example, to SSH onto the Agent:

<pre name="d5e4" id="d5e4" class="graf graf--pre graf-after--p">$ vagrant ssh agent</pre>

This should log you in on that box. From there, you can explore, experiment, and diagnose any issues.

The _vagrant up_ command will take some time to execute, but it should eventually lead your Virtualbox to have two VMs, named respectively _mesos-master_ and _mesos-agent_. Incidentally, you should never need to use VirtualBox to manage them. All the tasks can be undertaken via Vagrant commands. But you can manage them manually if necessary or desired.

Once your VMs are built, ensure you can access Mesos HTTP UI at:

<pre name="c6d3" id="c6d3" class="graf graf--pre graf-after--p">[http://192.168.33.10:5050](http://192.168.33.10:5050)</pre>



![](https://cdn-images-1.medium.com/max/1600/1*hufcyup4iWbMMozwGJ6rnQ.png)

Mesos Master web UI — reachable at http://192.168.33.10:5050



You should also see one agent running, accessible either via the Master UI.



![](https://cdn-images-1.medium.com/max/1600/1*y5Rocm9klIoHYRtFYSsYfA.png)

Agents view on the Mesos Master web UI



Or directly at:

<pre name="543a" id="543a" class="graf graf--pre graf-after--p">[http://192.168.33.11:5051/state](http://192.168.33.11:5051/slave%281%29/state)</pre>



![](https://cdn-images-1.medium.com/max/1600/1*Z5JAokEwyaRmMRYWOX39SQ.png)

JSON response from the Agent, when hitting the /state endpoint



Note that the Agent runs not only on a different IP address than the Master, but also on a different port (5051 instead of 5050).

Look into vagrant/run-agent.sh to see a few of the command line flags that we use to run the Agent (and in run-master.sh for the Master).

### Zookeeper

It’s worth noting that we are also running an instance of Zookeeper (for Leader election and Master/Agent coordination) on the _mesos-master_ VM, inside a Docker container: partly because we can, but also to show how easy it is to do so using containers.

This one line (in _run-master.sh_), will give you a perfectly good ZK instance (albeit, a catastrophically unreliable one in a production environment, where you’d want to run at least 3–5 nodes, at least, on physically separate machines/racks):

<pre name="0ab6" id="0ab6" class="graf graf--pre graf-after--p">docker run -d --name zookeeper -p 2181:2181 -p 2888:2888 \  
    -p 3888:3888 jplock/zookeeper:3.4.8</pre>

And because we expose the ports (in particular, 2181) to the host VM, we can connect to it via the Zookeeper CLI utility (_zkCli.sh_) and explore it. From your development machine (you will need to first download Zookeeper) you can use:

<pre name="edc8" id="edc8" class="graf graf--pre graf-after--p">$ zkCli.sh -server 192.168.33.10:2181  
...  
[zk: 192.168.33.10:2181(CONNECTED) 4] get /mesos/vagrant/json.info_0000000000</pre>

<pre name="71ae" id="71ae" class="graf graf--pre graf-after--pre"># Formatted for better readability:  
{"address":  
  { "hostname": "mesos-master",  
    "ip":"192.168.33.10",  
    "port":5050  
  },  
  "hostname":"mesos-master",  
  "id":"7eb34f10-b07c-4921-aece-bbaece09dfd1",  
  "ip":169978048,  
  "pid":"master@192.168.33.10:5050",  
  "port":5050,  
  "version":"1.0.0"  
}</pre>

<pre name="f9ab" id="f9ab" class="graf graf--pre graf-after--pre">cZxid = 0xb  
ctime = Sat Aug 27 14:00:44 PDT 2016  
...</pre>

This is how Agents get information about how to connect to the Master node.

The __000000_ suffix gets incremented every time a new Leader gets elected, so depending on how long the ZK instance has been running and whether the Master was restarted, it may become something like __0000005._ That is an “_ephemeral node”_ in Zookeeper’s parlance.

In that record above, it is worth noting that “pid” is _libprocess_ unique identifier and “ip” as a compressed 4-byte representation of an IPv4 octect quadruple. These legacy fields and may eventually be removed.

#### Wrap Up

You are now the proud owner of a Master/Agent 2-node Apache Mesos deployment. Welcome in the same league as Twitter and Airbnb production wizards.

In Part 2, we’ll run our Python notebook against the Master API and will accept the Agent’s offers to launch a Docker container.

If you’ve got time, let’s jump on in and learn [how to connect to Mesos Master and accept Resource Offers](https://medium.com/@massenz/a-python-notebook-to-experiment-with-the-apache-mesos-http-api-part-2-of-3-7f97fbe32e80#.yhx3zxpws).

_Originally published at_ [_codetrips.com_](https://codetrips.com/2016/08/27/a-python-notebook-to-experiment-with-the-apache-mesos-http-api-part-1-of-3/) _on August 27, 2016._








