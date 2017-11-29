---
author: Vaghawan Ojha
authorTwitter: https://twitter.com/vaghawan
authorFacebook: none
title: "How to build a recommendation engine using Apache’s Prediction IO Machine Learning Server"
subTitle: "This post will guide you through installing Apache Prediction IO machine learning server. We’ll use one of its templates called Recommend..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*eqxzM8a_IhzgrncLxCkGwA.png
url: https://medium.freecodecamp.org/building-an-recommendation-engine-with-apache-prediction-io-ml-server-aed0319e0d8
id: building-an-recommendation-engine-with-apache-prediction-io-ml-server-aed0319e0d8
date: 2017-04-30T03:37:01.546Z
tags: [
  "Big Data",
  "Data Science",
  "Machine Learning",
  "Tech",
  "Programming"
]
---
# How to build a recommendation engine using Apache’s Prediction IO Machine Learning Server







![](https://cdn-images-1.medium.com/max/2000/1*eqxzM8a_IhzgrncLxCkGwA.png)

Image Source: [Prediction IO slideshare : slide 17](https://www.slideshare.net/predictionio/sf-scala-dase2015-44112226)







This post will guide you through installing Apache Prediction IO machine learning server. We’ll use one of its templates called Recommendation to build a working recommendation engine. The finished product will be able to recommend customized products depending upon a given user’s purchasing behavior.

### **The Problem**

You’ve got bunch of data and you need to predict something accurately so you can help your business grow its sales, grow customers, grow profits, grow conversion, or whatever the business need is.

Recommendation systems are probably the first step everyone takes toward applying data science and machine learning. Recommendation engines use data as an input and run their algorithms over them. Then they output models from which we can make prediction about what a user is really going to buy, or what a user may like or dislike.

### **Enter Prediction IO**

> “Apache PredictionIO (incubating) is an **open source Machine Learning Server** built on top of state-of-the-art open source stack for developers and data scientists create predictive engines for any machine learning task.” — [Apache Prediction IO documentation](https://predictionio.incubator.apache.org/)

The very first look at the documentation makes me feel good because it’s giving me access to a powerful tech stack for solving machine learning problems. What’s more interesting is that Prediction IO gives access to many templates, which are helpful for solving the real problems.

The [template gallery](https://predictionio.incubator.apache.org/gallery/template-gallery) consists many templates for recommendation, classification, regression, natural language processing, and many more. It make use of technology like Apache Hadoop, Apache spark, ElasticSearch and Apache Hbase to make the machine learning server scaleable and efficient. I’m not going to talk much about the Prediction IO itself, because you can do that on your own [here](https://predictionio.incubator.apache.org/start/).

So back to the problem: I have a bunch of data from user purchase histories, which consists user_id, product_id and purchased_date. Using these, I need to make a customized prediction/recommendation to the user. Considering this problem, we’ll use a Recommendation Template with Prediction IO Machine Learning server. We’ll make use of Prediction IO event server as well as bulk data import.

So let’s get ahead. **(Note: This guide assume that you’re using Ubuntu system for the installation)**

### Step# 1: Download Apache Prediction IO

Go to the home directory of your current user and Download The latest 0.10.0 Prediction IO apache incubator. I assume you’re in the following dir `_(/home/you/)_`

<pre name="8748" id="8748" class="graf graf--pre graf-after--p">git clone git@github.com:apache/incubator-predictionio.git</pre>

Now go to the directory `_incubator-predictionio`_ where we have cloned the Prediction IO repo. If you have cloned it in a different directory, make sure to be inside that dir in your terminal.

Now let’s checkout the current stable version of Prediction IO which is 0.10.0

<pre name="af14" id="af14" class="graf graf--pre graf-after--p">cd _incubator-predictionio # or any dir where you have cloned pio._  
git checkout release/0.10.0</pre>

### Step #2: Let’s Make A Distribution Of Prediction IO

<pre name="f2d6" id="f2d6" class="graf graf--pre graf-after--h3">./make-distribution.sh</pre>

If everything went Ok, then you will get the message like this in your console:



![](https://cdn-images-1.medium.com/max/1600/1*qmV_XKXaJnWQVGssirNmdQ.png)

Successful distribution process of Prediction IO.



However if you encountered something like this:







![](https://cdn-images-1.medium.com/max/2000/1*5DOEQCCuvJ2yQclh_deDeg.png)

Error while creating Prediction IO distribution.







then you would have to remove `_.ivy2_` _dir_ in your home directory, by default this folder is hidden. You need to remove it completely and then run the `_./make-distribution.sh_` again for the build to successfully generate a distribution file.

Personally I’ve faced this issue many times, but I’m not sure this is the valid way to get through this problem. But removing the `_.ivy2_` folder and again running the make-distribution command works.

### Step # 3: Extract The Distribution File

After the successful build, we will have a filename called PredictionIO-0.10.0-incubating.tar.gz inside the directory where we built our Prediction IO. Now let’s extract it into a directory called pio.

<pre name="91e4" id="91e4" class="graf graf--pre graf-after--p">mkdir ~/pio  
tar zxvf PredictionIO-0.10.0-incubating.tar.gz -C ~/pio</pre>

Make sure the tar.gz filename match the distribution file that you have inside the original predictionIo directory. If you forgot to check out the 0.10.0 version of Prediction IO, you’re sure to get a different file name, because by default the version would be the latest one.

### Step #4: Prepare For Downloading Dependencies

<pre name="b64a" id="b64a" class="graf graf--pre graf-after--h3">cd ~/pio</pre>

<pre name="4ddd" id="4ddd" class="graf graf--pre graf-after--pre">#Let’s make a vendors folder inside ~/pio/PredictionIO-0.10.0-incubating where we will save hadoop, elasticsearch and hbase.</pre>

<pre name="42ea" id="42ea" class="graf graf--pre graf-after--pre">mkdir ~/pio/PredictionIO-0.10.0-incubating/vendors</pre>

### Step #5: Download and Setup Spark

<pre name="cf0e" id="cf0e" class="graf graf--pre graf-after--h3">wget [http://d3kbcqa49mib13.cloudfront.net/spark-1.5.1-bin-hadoop2.6.tgz](http://d3kbcqa49mib13.cloudfront.net/spark-1.5.1-bin-hadoop2.6.tgz)</pre>

If your current directory is `~/pio` the command will download the spark inside pio dir. Now let’s extract it. Depending upon where you downloaded it, you might want to change the below command.

<pre name="fdfd" id="fdfd" class="graf graf--pre graf-after--p">tar zxvfC spark-1.5.1-bin-hadoop2.6.tgz PredictionIO-0.10.0-incubating/vendors</pre>

<pre name="b4d6" id="b4d6" class="graf graf--pre graf-after--pre"># This will extract the spark setup that we downloaded and put it inside the vendors folder of our fresh pio installation. </pre>

Make sure you had done `_mkdir PredictionIO-0.10.0-incubating/vendors_` earlier.

### Step #6: Download & Setup ElasticSearch

<pre name="fb6e" id="fb6e" class="graf graf--pre graf-after--h3">wget [https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.4.4.tar.gz](https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.4.4.tar.gz)</pre>

<pre name="c0ff" id="c0ff" class="graf graf--pre graf-after--pre">#Let’s extract elastic search inside vendors folder.</pre>

<pre name="ae0c" id="ae0c" class="graf graf--pre graf-after--pre">tar zxvfC elasticsearch-1.4.4.tar.gz PredictionIO-0.10.0-incubating/vendors</pre>

### Step #7: Download and Setup Hbase

<pre name="f29c" id="f29c" class="graf graf--pre graf-after--h3">wget [http://archive.apache.org/dist/hbase/hbase-1.0.0/hbase-1.0.0-bin.tar.gz](http://archive.apache.org/dist/hbase/hbase-1.0.0/hbase-1.0.0-bin.tar.gz)</pre>

<pre name="78c9" id="78c9" class="graf graf--pre graf-after--pre">#Let’s extract it.</pre>

<pre name="667a" id="667a" class="graf graf--pre graf-after--pre">tar zxvfC hbase-1.0.0-bin.tar.gz PredictionIO-0.10.0-incubating/vendors</pre>

Now let’s edit the `_hbase-site.xml_` to point the hbase configuration to the right dir. Considering you’re inside `_~/pio_` dir, you could hit this command and edit the hbase conf.

<pre name="666f" id="666f" class="graf graf--pre graf-after--p">nano PredictionIO-0.10.0-incubating/vendors/hbase-1.0.0/conf/hbase-site.xml</pre>

Replace the configuration block with the following configuration.

<pre name="1180" id="1180" class="graf graf--pre graf-after--p"><configuration>  
  <property>  
    <name>hbase.rootdir</name>  
    <value>file:///home/you/pio/PredictionIO-0.10.0-incubating/vendors/hbase-1.0.0/data</value>  
  </property>  
  <property>  
    <name>hbase.zookeeper.property.dataDir</name>  
    <value>/home/you/pio/PredictionIO-0.10.0-incubating/vendors/hbase-1.0.0/zookeeper</value>  
  </property>  
</configuration></pre>

Here “**_you”_** signifies to your user dir, for example if you’re doing all this as a user “tom” then it would be something like file::///home/tom/…

Make sure the right files are there.

Now let’s set up JAVA_HOME in hbase-env.sh .

<pre name="59b1" id="59b1" class="graf graf--pre graf-after--p">nano PredictionIO-0.10.0-incubating/vendors/hbase-1.0.0/conf/hbase-env.sh</pre>



![](https://cdn-images-1.medium.com/max/1600/1*pq1WjO6l5vvxNZdxTjHPNg.png)

export java home in hbase-env.sh file.



If you’re unsure about which version of JDK you’re currently using, follow these step and make necessary changes if required.

We need Java SE Development Kit 7 or greater for Prediction IO to work. Now let’s make sure we’re using the right version by running:

<pre name="6099" id="6099" class="graf graf--pre graf-after--p">sudo update-alternatives — config java</pre>

By default I’m using:

<pre name="aa12" id="aa12" class="graf graf--pre graf-after--p">java -version</pre>

<pre name="4643" id="4643" class="graf graf--pre graf-after--pre">openjdk version “1.8.0_121”</pre>

<pre name="e892" id="e892" class="graf graf--pre graf-after--pre">OpenJDK Runtime Environment (build 1.8.0_121–8u121-b13–0ubuntu1.16.04.2-b13)</pre>

<pre name="2d8b" id="2d8b" class="graf graf--pre graf-after--pre">OpenJDK 64-Bit Server VM (build 25.121-b13, mixed mode)</pre>

If you’re using below 1.7, then you should change the java config to use a version of java that is equal to 1.7 or greater. You can change that with the update-alternatives command as given above. In my case the command `sudo update-alternatives -config java` outputs something like this:







![](https://cdn-images-1.medium.com/max/2000/1*-ivqFmR2bSPPKVq8Q3X7qA.png)







If you have any trouble setting this up, you can follow [this link](https://askubuntu.com/questions/272187/setting-jdk-7-as-default).

Now let’s export the JAVA_HOME path in the `.bashrc` file inside `/home/you/pio.`

Considering you’re on `~/pio` dir, you could do this: `nano .bashrc`

Don’t forget to do `source .bashrc` after you set up the java home in the `.bashrc`.

### Step #8: Configure the Prediction IO Environment

Now let’s configure pio.env.sh to give a final touch to our Prediction IO Machine learning server installation.

<pre name="5068" id="5068" class="graf graf--pre graf-after--p">nano PredictionIO-0.10.0-incubating/conf/pio-env.sh</pre>

We’re not using ProsgesSQl or MySql for our event server, So let’s comment out that section and have a pio-env.sh something like this:

<pre name="0a3b" id="0a3b" class="graf graf--pre graf-after--p">#!/usr/bin/env bash  
#  
# Copy this file as pio-env.sh and edit it for your site's configuration.  
#  
# Licensed to the Apache Software Foundation (ASF) under one or more  
# contributor license agreements.  See the NOTICE file distributed with  
# this work for additional information regarding copyright ownership.  
# The ASF licenses this file to You under the Apache License, Version 2.0  
# (the "License"); you may not use this file except in compliance with  
# the License.  You may obtain a copy of the License at  
#  
#    [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)  
#  
# Unless required by applicable law or agreed to in writing, software  
# distributed under the License is distributed on an "AS IS" BASIS,  
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
# See the License for the specific language governing permissions and  
# limitations under the License.  
#</pre>

<pre name="c22b" id="c22b" class="graf graf--pre graf-after--pre"># PredictionIO Main Configuration  
#  
# This section controls core behavior of PredictionIO. It is very likely that  
# you need to change these to fit your site.</pre>

<pre name="66c1" id="66c1" class="graf graf--pre graf-after--pre"># SPARK_HOME: Apache Spark is a hard dependency and must be configured.  
SPARK_HOME=$PIO_HOME/vendors/spark-1.5.1-bin-hadoop2.6</pre>

<pre name="ac3e" id="ac3e" class="graf graf--pre graf-after--pre">POSTGRES_JDBC_DRIVER=$PIO_HOME/lib/postgresql-9.4-1204.jdbc41.jar  
MYSQL_JDBC_DRIVER=$PIO_HOME/lib/mysql-connector-java-5.1.37.jar</pre>

<pre name="de03" id="de03" class="graf graf--pre graf-after--pre"># ES_CONF_DIR: You must configure this if you have advanced configuration for  
#              your Elasticsearch setup.  
 ES_CONF_DIR=$PIO_HOME/vendors/elasticsearch-1.4.4/conf</pre>

<pre name="d907" id="d907" class="graf graf--pre graf-after--pre"># HADOOP_CONF_DIR: You must configure this if you intend to run PredictionIO  
# with Hadoop 2.  
 HADOOP_CONF_DIR=$PIO_HOME/vendors/spark-1.5.1-bin-hadoop2.6/conf</pre>

<pre name="5abd" id="5abd" class="graf graf--pre graf-after--pre"># HBASE_CONF_DIR: You must configure this if you intend to run PredictionIO  
# with HBase on a remote cluster.  
 HBASE_CONF_DIR=$PIO_HOME/vendors/hbase-1.0.0/conf</pre>

<pre name="51b9" id="51b9" class="graf graf--pre graf-after--pre"># Filesystem paths where PredictionIO uses as block storage.  
PIO_FS_BASEDIR=$HOME/.pio_store  
PIO_FS_ENGINESDIR=$PIO_FS_BASEDIR/engines  
PIO_FS_TMPDIR=$PIO_FS_BASEDIR/tmp</pre>

<pre name="6937" id="6937" class="graf graf--pre graf-after--pre"># PredictionIO Storage Configuration  
#  
# This section controls programs that make use of PredictionIO's built-in  
# storage facilities. Default values are shown below.  
#  
# For more information on storage configuration please refer to  
# [http://predictionio.incubator.apache.org/system/anotherdatastore/](http://predictionio.incubator.apache.org/system/anotherdatastore/)</pre>

<pre name="5543" id="5543" class="graf graf--pre graf-after--pre"># Storage Repositories</pre>

<pre name="96b8" id="96b8" class="graf graf--pre graf-after--pre"># Default is to use PostgreSQL  
PIO_STORAGE_REPOSITORIES_METADATA_NAME=pio_meta  
PIO_STORAGE_REPOSITORIES_METADATA_SOURCE=ELASTICSEARCH</pre>

<pre name="0fae" id="0fae" class="graf graf--pre graf-after--pre">PIO_STORAGE_REPOSITORIES_EVENTDATA_NAME=pio_event  
PIO_STORAGE_REPOSITORIES_EVENTDATA_SOURCE=HBASE</pre>

<pre name="7481" id="7481" class="graf graf--pre graf-after--pre">PIO_STORAGE_REPOSITORIES_MODELDATA_NAME=pio_model  
PIO_STORAGE_REPOSITORIES_MODELDATA_SOURCE=LOCALFS</pre>

<pre name="98e5" id="98e5" class="graf graf--pre graf-after--pre"># Storage Data Sources</pre>

<pre name="aee3" id="aee3" class="graf graf--pre graf-after--pre"># PostgreSQL Default Settings  
# Please change "pio" to your database name in PIO_STORAGE_SOURCES_PGSQL_URL  
# Please change PIO_STORAGE_SOURCES_PGSQL_USERNAME and  
# PIO_STORAGE_SOURCES_PGSQL_PASSWORD accordingly  
# PIO_STORAGE_SOURCES_PGSQL_TYPE=jdbc  
# PIO_STORAGE_SOURCES_PGSQL_URL=jdbc:postgresql://localhost/pio  
# PIO_STORAGE_SOURCES_PGSQL_USERNAME=pio  
# PIO_STORAGE_SOURCES_PGSQL_PASSWORD=root</pre>

<pre name="6678" id="6678" class="graf graf--pre graf-after--pre"># MySQL Example  
# PIO_STORAGE_SOURCES_MYSQL_TYPE=jdbc  
# PIO_STORAGE_SOURCES_MYSQL_URL=jdbc:mysql://localhost/pio  
# PIO_STORAGE_SOURCES_MYSQL_USERNAME=root  
# PIO_STORAGE_SOURCES_MYSQL_PASSWORD=root</pre>

<pre name="822a" id="822a" class="graf graf--pre graf-after--pre"># Elasticsearch Example  
 PIO_STORAGE_SOURCES_ELASTICSEARCH_TYPE=elasticsearch  
 PIO_STORAGE_SOURCES_ELASTICSEARCH_CLUSTERNAME=firstcluster  
 PIO_STORAGE_SOURCES_ELASTICSEARCH_HOSTS=localhost  
 PIO_STORAGE_SOURCES_ELASTICSEARCH_PORTS=9300  
 PIO_STORAGE_SOURCES_ELASTICSEARCH_HOME=$PIO_HOME/vendors/elasticsearch-1.4.4</pre>

<pre name="ddff" id="ddff" class="graf graf--pre graf-after--pre"># ocal File System Example  
PIO_STORAGE_SOURCES_LOCALFS_TYPE=localfs  
PIO_STORAGE_SOURCES_LOCALFS_PATH=$PIO_FS_BASEDIR/models</pre>

<pre name="be84" id="be84" class="graf graf--pre graf-after--pre"># HBase Example  
PIO_STORAGE_SOURCES_HBASE_TYPE=hbase  
PIO_STORAGE_SOURCES_HBASE_HOME=$PIO_HOME/vendors/hbase-1.0.0</pre>

### Step #9: Configure cluster name in ElasticSearch config

Since this line `PIO_STORAGE_SOURCES_ELASTICSEARCH_CLUSTERNAME=firstcluster` points to our cluster name in the ElasticSearch configuration, let’s replace a default cluster name in ElasticSearch configuration.

    nano PredictionIO-0.10.0-incubating/vendors/elasticsearch-1.4.4/config/elasticsearch.yml



![](https://cdn-images-1.medium.com/max/1600/1*o--ENIFFOPUNpxriGZt0Mw.png)

Added cluster name in the elastic search config.



### Step #10: Export The Prediction IO Path

Let’s now export the Prediction IO path so we could freely use the pio command without pointing to it’s bin every time. Run the following command in your terminal:

`PATH=$PATH:/home/you/pio/PredictionIO-0.10.0-incubating/bin; export PATH`

### **Step #11: Give Permission To** Prediction IO **Installation**

<pre name="5d5b" id="5d5b" class="graf graf--pre graf-after--h3">sudo chmod -R 775 ~/pio</pre>

This is vital because if we didn’t give permission to the pio folder, the Prediction IO process won’t be able to write log files.

### **Step #12: Start Prediction IO Server**

Now we’re ready to go, let’s start our Prediction IO server. Before running this command make sure you exported the pio path described above.

<pre name="6270" id="6270" class="graf graf--pre graf-after--p">pio-start-all</pre>

<pre name="36e7" id="36e7" class="graf graf--pre graf-after--pre">#if you forgot to export the pio path, it won't work and you manually have to point the pio bin path. </pre>

If everything is Ok to this point, you would see the output something like this.







![](https://cdn-images-1.medium.com/max/2000/1*nfmjxtCQYWeZI8Jctx439g.png)

pio start all services.







> Note: If you forget to give permission then, there will be issues writing logs and if your JAVA_HOME path is incorrect HBASE wouldn’t start properly and it would give you the error.

### **Step #13: Verify The Process**

Now let’s verify our installation with `pio status`, if everything is Ok, you will get an output like this:







![](https://cdn-images-1.medium.com/max/2000/1*3yCROCM2vMhiaVpmN8R6fQ.png)

pio status results when everything is ok.







If you encounter error in Hbase or any other backend storage, make sure everything was started properly.

**Our Prediction IO Server is ready to implement the template now.**











* * *







### **Implementing the** [**Recommendation Engine**](https://predictionio.incubator.apache.org/templates/recommendation/quickstart/)

A recommendation engine template is a Prediction IO engine template that uses collaborative filtering to make personalized recommendation to the user. It uses can be in E-commerce site, news site, or any application that collects user histories of event to give a personalized experiences to the user.

We’ll implement this template in Prediction IO with few eCommerce user data, just to do an sample experiment with Prediction IO machine learning server.

Now let’s back to our home dir `cd ~`

### Step #14: **Download the Recommendation Template**

<pre name="1446" id="1446" class="graf graf--pre graf-after--h3">pio template get apache/incubator-predictionio-template-recommender MyRecommendation</pre>

It will ask for company name and author name, input subsequently, now we have a MyRecommendation Template inside our home dir. Just a reminder: you can put the template anywhere you want.



![](https://cdn-images-1.medium.com/max/1600/1*9uKPeejpgc99cqbx00SXsA.png)

installing template in pio.



### #15\. **Create Our First Prediction IO App**

Now let’s go inside the MyRecommendation dir `cd MyRecommendation`

After you’re inside the template dir, let’s create our first Prediction IO app called `ourrecommendation`.

You will get output like this. Please remember that you can give any name to your app, but for this example I’ll be using the app name `ourrecommendation`.

<pre name="b39b" id="b39b" class="graf graf--pre graf-after--p">pio app new `ourrecommendation`</pre>

This command will output something like this:



![](https://cdn-images-1.medium.com/max/1600/1*n0RwYjt9tajNtsGNRSjwRA.png)

pio app created.



Let’s verify that our new app is there with this command:

<pre name="a035" id="a035" class="graf graf--pre graf-after--p">pio app list</pre>

Now our app should be listed in the list.

### Step #16: Import Some Sample Data

Let’s download the [sample-data from gist](https://gist.github.com/vaghawan/0a5fb8ddb85e03631dd500d7c8f0677d#file-data-sample-json), and put that inside importdata folder inside MyRecommendation folder.

    mkdir importdata

Copy the sample-data.json file that you just created inside the importdata folder.

Finally let’s import the data inside our ourrecommendation app. Considering you’re inside the `MyRecommendation dir` you can do this to batch import the events.

<pre name="daaf" id="daaf" class="graf graf--pre graf-after--p">pio import — appid 1 — input importdata/data-sample.json</pre>

**(Note: make sure the appid of ourrecommendation is same as of your appid that you just provided)**







![](https://cdn-images-1.medium.com/max/2000/1*LIpVDDfYPXEeuSL0eBSxSQ.png)

event import in pio.







### Step #17: Build The App

Before building the app, let’s edit engine.json file inside the MyRecommendation directory to replicate our app name inside it. It should look something like this:

**Note: Don’t copy this, just change the “appName” in your engine.json.**

<pre name="c3d0" id="c3d0" class="graf graf--pre graf-after--p">{  
  "id": "default",  
  "description": "Default settings",  
  "engineFactory": "orgname.RecommendationEngine",  
  "datasource": {  
    "params" : {  
      "appName": "ourrecommendation"  
    }  
  },  
  "algorithms": [  
    {  
      "name": "als",  
      "params": {  
        "rank": 10,  
        "numIterations": 5,  
        "lambda": 0.01,  
        "seed": 3  
      }  
    }  
  ]  
}</pre>

**Note: the “engineFactory” will be automatically generated when you pull the template in our step 14, so you don’t have to change that. In my case, it’s my orgname, which I put in the terminal prompt during installation of the template. In you engine.json you just need to modify the appName, please don’t change anything else in there.**

In the same dir where our MyRecommendation engine template lies, let’s run this pio command to build our app.

<pre name="ef0f" id="ef0f" class="graf graf--pre graf-after--p">pio build</pre>

(Note: if you wanna see all the messages during the building process, you can run this `pio build — verbose`)

It can take sometimes to build our app, since this is the first time. From next time it takes less time. You should get an output like this:







![](https://cdn-images-1.medium.com/max/2000/1*LtVRhns9KUHhV80WhSkqdQ.png)

pio build success message.







**Our engine is now ready to train our data.**

### Step #18: **Train The dataset**

<pre name="3c34" id="3c34" class="graf graf--pre graf-after--h3">pio train</pre>

If you get an error like the one below in the middle of the training, then you may have to change number of iterations inside your engine.json and rebuild the app.







![](https://cdn-images-1.medium.com/max/2000/1*20nA1dmBSn6oI6jOxB4Mwg.png)

Java StackOverflowError during pio train.







Let’s change the `numItirations` in engine.json which is by default 20 to 5:

<pre name="84bc" id="84bc" class="graf graf--pre graf--startsWithDoubleQuote graf-after--p">“numIterations”: 5,</pre>

Now let’s build the app with `pio build`, again do `pio train`. The training should be completed successfully. After finishing the training you will get the message like this:







![](https://cdn-images-1.medium.com/max/2000/1*a6wbX4F3dZ-UFdu2-z4kOg.png)

training success console.







Please note that this training works just for small data, if you however want to try with large data set then we would have to set up an standalone spark worker to accomplish the training. (I will write about this in a future post.)

### Step #19: **Deploy and Serve the prediction**

<pre name="00b8" id="00b8" class="graf graf--pre graf-after--h3">pio deploy  
#by default it will take 8000 port.</pre>

We will now have our prediction io server running.



![](https://cdn-images-1.medium.com/max/1600/1*nLTNt2YFpkbBe1lS46mkXw.png)

running prediction io server in 8000 port



> **Note:** to keep it simple, I’m not discussing about event server in this post, since it may get even longer, thus we’re focusing on simple use case of Prediction IO.

Now let’s get the prediction using curl.

Open up a new terminal and hit:

<pre name="7338" id="7338" class="graf graf--pre graf-after--p">curl -H “Content-Type: application/json” \  
-d ‘{ “user”: “user1”, “num”: 4 }’ [http://localhost:8000/queries.json](http://localhost:8000/queries.json)</pre>

In the above query, the user signifies to the user_id in our event data, and the num means, how many recommendation we want to get.

Now you will get the result like this:

<pre name="39e1" id="39e1" class="graf graf--pre graf-after--p">{"itemScores":[{"item":"product5","score":3.9993937903501093},{"item":"product101","score":3.9989989282500904},{"item":"product30","score":3.994934059438341},{"item":"product98","score":3.1035806376677866}]}</pre>

That’s it! Great Job. We’re done. But wait, **what’s next?**

*   Next we will use spark standalone cluster to train large dataset (believe me, its easy, if you wanna do it right now, you could follow the [documenation in Prediction IO](https://predictionio.incubator.apache.org/resources/faq/))
*   We will use [Universal Recommender from Action ML](http://actionml.com/universal-recommender) to build a recommendation engine.

**Important Notes:**

*   The template we used uses [ALS algorithm](https://spark.apache.org/docs/latest/mllib-collaborative-filtering.html) with explicit feedback, however you can easily switch to implicit depending upon your need.
*   If you’re curious about Prediction IO and want to learn more you can do that on the [Prediction IO official site](https://predictionio.incubator.apache.org/).
*   If your Java version is not suitable for Prediction IO specification, then you are sure to run into problems. So make sure you configure this first.
*   Don’t run any of the commands described above with `sudo` except to give permission. Otherwise you will run into problems.
*   Make sure your java path is correct, and make sure to export the Prediction IO path. You might want to add the Prediction IO path to your .bashrc or profile as well depending upon your need.











* * *







#### _Update 2017/07/14: Using Spark To Train Real Data Sets_

We have the spark installed inside our vendors folders, with our current installation, our spark bin in the following dir.

<pre name="301f" id="301f" class="graf graf--pre graf-after--p">~/pio/PredictionIO-0.10.0-incubating/vendors/spark-1.5.1-bin-hadoop2.6/sbin</pre>

From there we have to setup a spark master and slave to execute our model training to accomplish it faster. If your training seems to stuck we can use the spark options to accomplish the training tasks.

#### #Start the Spark master:

<pre name="9dcc" id="9dcc" class="graf graf--pre graf-after--h4">~/pio/PredictionIO-0.10.0-incubating/vendors/spark-1.5.1-bin-hadoop2.6/sbin/start-master.sh</pre>

This will start the spark master. Now let’s browse the spark master’s web UI by going into [http://localhost:8080/](http://localhost:8080/) in the browser.

Now let’s copy the master-url to start the slave worker. In our case the master spark URL is something like this:

spark://your-machine:7077 (your machine signifies to your machine name)

<pre name="a33b" id="a33b" class="graf graf--pre graf-after--p">~/pio/PredictionIO-0.10.0-incubating/vendors/spark-1.5.1-bin-hadoop2.6/sbin/start-slave.sh spark://your-machine:7077</pre>

The worker will start. Refresh the web ui you will see the registered worker this time. Now let’s run the training again.

<pre name="7688" id="7688" class="graf graf--pre graf-after--p">pio train -- --master spark://localhost:7077 --driver-memory 4G --executor-memory 6G</pre>

**Great!**

**Special Thanks: Pat Ferrel From** [**Action ML**](http://actionml.com/) **& Marius Rabenarivo**








