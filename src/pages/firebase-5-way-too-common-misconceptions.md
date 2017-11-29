---
author: Cathryn Griffiths
authorTwitter: https://twitter.com/cathryn_mtl
authorFacebook: none
title: "Firebase: 5 way-too-common misconceptions"
subTitle: "I’ve been reading a lot of online commentary recently about Firebase. Mostly — it must be pointed out — written by developers who hate Fi..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*zdrREji23Eu5dqVVJE1E7w.png
url: https://medium.freecodecamp.org/firebase-5-way-too-common-misconceptions-93b843ee1b93
id: firebase-5-way-too-common-misconceptions-93b843ee1b93
date: 2017-08-18T16:12:26.905Z
tags: [
  "Firebase",
  "Startup",
  "Tech",
  "Web Development",
  "Programming"
]
---
# Firebase: 5 way-too-common misconceptions







![](https://cdn-images-1.medium.com/max/2000/1*zdrREji23Eu5dqVVJE1E7w.png)







I’ve been reading a lot of online commentary recently about Firebase. Mostly — it must be pointed out — written by developers who hate Firebase.

[“Complex queries are impossible!”](https://crisp.chat/blog/why-you-should-never-use-firebase-realtime-database/) says one.

[“Dumb data modeling!”](https://medium.freecodecamp.com/firebase-the-great-the-meh-and-the-ugly-a07252fbcf15) says another.

“[Everything has to be client-side!](https://lugassy.net/why-im-dumping-firebase-for-web-cd64a78cb43e)” complains another.

You can almost hear the little veins standing out on their foreheads.

I get it though. The issues they’ve run into are frustrating. But a big part of the problem is a lack of understanding about Firebase, what it can (and can’t!) do.

I’ve been working with Firebase over the last few months. At [FFunction](https://ffctn.com/?utm_source=medium&utm_medium=5-firebase-myths&utm_campaign=general-pr), we are using Firebase to build a [project planning tool called Min](https://www.min.team/?utm_source=medium&utm_medium=5-firebase-myths&utm_campaign=early-access). There are some serious misconceptions/myths/misunderstandings about this backend-as-a-service(BaaS) solution. So, I wanted to unpack some of them here.

By the way: We’re not in any way affiliated with Firebase. I want to add a little nuance to what is becoming a fairly one-sided discussion.

### Misconception #1: Firebase is client-side only

Until recently, Firebase was an exclusively client-side technology. Although, it provided storage and querying capabilities. But the majority of your application logic had to exist and execute on the client. For many developers, this was a total deal breaker. After all, how many web applications these days need no backend?

Firebase team actually listened to the requests of the developer community. In March 2017, they introduced [Cloud Functions for Firebase](https://firebase.googleblog.com/2017/03/introducing-cloud-functions-for-firebase.html). With cloud functions, you can save snippets of code on Google Cloud. This code will run in response to specific Firebase events and HTTP requests. For example, if you want to perform data processing when saving data to the database, [you can do that](https://firebase.google.com/docs/functions/use-cases#perform_database_sanitization_and_maintenance). Also, if you don’t want your application’s API keys exposed in your client-side code, [you can do that too](https://firebase.google.com/docs/functions/use-cases#integrate_with_third-party_services_and_apis).

If you’re interested in learning more, I would recommend checking out the [Cloud Function for Firebase docs](https://firebase.google.com/docs/functions/) (which have some great examples) and [these recently-released tutorials](https://www.youtube.com/playlist?list=PLl-K7zZEsYLkPZHe41m4jfAxUi0JjLgSM).

### Misconception #2: Firebase results in spaghetti code

This makes me think of that old adage: “A poor workman blames their tools!” But let’s dig into this in a little detail.

Based on my experience thus far, Firebase doesn’t result in spaghetti code_._ Since Firebase is mostly client side, most of your backend logic will end up on the client. If you’re not careful, you may end up with a pile of messy, unmaintainable code.

In the early stages of developing [Min](https://www.min.team/?utm_source=medium&utm_medium=5-firebase-myths&utm_campaign=early-access), we spent a lot of time planning the app. We planned how to model our data, our database structure and the best way to interact with our data. We created a connector for communicating with Firebase. It had all the code for doing CRUD operations and for interacting with Firebase. We built a collection of classes to process the object’s data according to the Firebase database structure.

This abstraction helped us keep Firebase related logic and application logic separate. Our code was maintainable and easy to debug.

### Misconception #3: Dumb data modelling / too much duplication

As the Firebase team describes it, the Firebase database is [just one giant JSON tree](https://firebase.google.com/docs/database/web/structure-data#how_data_is_structured_its_a_json_tree). Data gets stored as collections of key-value pairs and can have any breadth and depth that you want. There’s a lot of flexibility how you can store your data, which can get you into a lot of trouble if you’re not careful. Let me show this with an example.

Let say you’re building a basic project management application. You have users and tasks. Users can be assigned to tasks. You might want to store all task information in one database location under the tasks node:

<pre name="c81a" id="c81a" class="graf graf--pre graf-after--p">tasks : {  
    "001" : {  
        name         : "Development Round 1"  
        description  : "Lorem ipsum dolor sit amet elit..."  
        startDate    : "20170101"  
        endDate      : "20170201"  
        loggedHours  : {  
            "20170101" : "1.66"  
            "20170102" : "7"  
            "20170103" : "5.5"  
        }  
        assignedStaff : "Cathryn"  
    }  
    "002" : {  
        name : "Development Round 2"  
        description : "Mauris quis turpis ut ante..."  
        startDate   : "20170206"  
        endDate     : "20170228"  
        loggedHours  : {  
            "20170206" : "3"  
            "20170207" : "1"  
            "20170208" : "4.75"  
        }  
        assignedStaff : "Sam"  
    }  
    "003" : {  
        name : "Browser Testing"  
        description : "Vivamus nec ligula et nulla blandit..."  
        startDate   : "20170301"  
        endDate     : "20170303"  
        loggedHours  : {  
            "20170301" : "1"  
            "20170301" : "3"  
        }  
        assignedStaff : "Cathryn"  
    }  
}</pre>

Now let’s say, you want to display task name of all the tasks assigned to Cathryn. To do this, you could query the database to return all tasks whose “assignedStaff” value is “Cathryn”.

<pre name="0214" id="0214" class="graf graf--pre graf-after--p">firebase  
.database().ref(“tasks/”)  
.orderByValue(“assignedStaff”).equalTo(“Cathryn”).once(“value”);</pre>

The problem with this query is that it’ll return _all_ the task information for a given task that’s assigned to Cathryn, not just the task name. That’s a lot of unnecessary data to download.

To fix this, Firebase recommends you to [denormalize your data](https://firebase.googleblog.com/2013/04/denormalizing-your-data-is-normal.html)([there’s a great how-to about this here](https://www.youtube.com/watch?v=vKqXSZLLnHA&index=6&list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&t=1s)). Denormalization is a process of storing redundant copies of data throughout the database, to improve read performance. In our example, we could denormalize our data by adding the following to our database:

<pre name="71bc" id="71bc" class="graf graf--pre graf-after--p">tasksByUser : {  
    "Cathryn" : {  
        "001" : "Development Round 1"  
        "003" : "Browser Testing"  
    }  
    "Sam" : {  
        "002" : "Development Round 2"  
    }  
}</pre>

Now if we want to retrieve the task names for all tasks assigned to Cathryn, we simply need to read from one database location:

<pre name="862f" id="862f" class="graf graf--pre graf-after--p">firebase  
.database().ref(“/tasksByUser/Cathryn”)  
.once(“value”);</pre>

Compared to our previous query, this will return the name of tasks assigned to Cathryn. This results in faster read operations with better performance in the long term.

Denormalization may seem like a hack to some. But it’s an imperative strategy when designing a Firebase database for a complex and scalable web application. It requires that you have a deep understanding of the data you want to store and how you’re going to use it.

Before jumping into building your Firebase database. Take the time to learn about [denormalization](https://www.youtube.com/watch?v=vKqXSZLLnHA), [how to structure your data](https://firebase.google.com/docs/database/web/structure-data), and [how to maintain consistency of denormalized data](https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html). As the Firebase team has said, “_Consider that disk space is cheap, but a user’s time is not._”

If your read times are slow, then chances are that your users won’t be sticking around.

Furthermore, inefficient queries that return unnecessary data can be monetarily expensive. Depending on your Firebase pricing plan, you may need to pay as much as [$1 per GB downloaded](https://firebase.google.com/pricing/).

### Misconception #4: Firebase can lead to data inconsistencies

If you’re designing your Firebase database in a correct way. Chances are your data is denormalized across multiple database locations. And if your data is stored in multiple locations, then you’re probably wondering… “how am I going to keep all that data consistent?”

In a normal case, when sending data to Firebase, you specify one database path and the data you want to store there. Let’s return to the example, to update a task name (before using denormalization), I would do this:

<pre name="744b" id="744b" class="graf graf--pre graf-after--p">firebase  
.database().ref(“tasks/001/name”)  
.set(“Here’s the new name”);</pre>

Now with denormalization, I may update a task’s name by doing two write operations:

<pre name="8bdd" id="8bdd" class="graf graf--pre graf-after--p">firebase  
.database().ref(“tasks/001/name”)  
.set(“Here’s the new name”);</pre>

<pre name="5967" id="5967" class="graf graf--pre graf-after--pre">firebase  
.database().ref(“tasksByUser/Cathryn/001”)  
.set(“Here’s the new name”);</pre>

But doing those two write operations can lead to data inconsistencies. What if one of the write operations fails, and the other one doesn’t? What I need is an atomic write operation, allowing me to write to database paths at the same time. For this, Firebase provides [multipath updates](https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html) to address this exact problem. You can watch a great how-to on this [here](https://www.youtube.com/watch?v=i1n9Kw3AORw&index=7&list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&t=4s). Now, to update a task name, we just need to do the following:

<pre name="8109" id="8109" class="graf graf--pre graf-after--p">firebase  
.database().ref()  
.update({  
    “tasks/001/name” : “Here’s the new name”,  
    “tasksByUser/Cathryn/001” : “Here’s the new name”  
});</pre>

If the update fails at any of the database paths, the whole update will fail. As long as you use multipath updates, your data should always be consistent.

### Misconception #5: Very limited querying capabilities

Firebase has limited querying capabilities. You can sort data by keys or value and filter data by equality or using ranges.

For example, using the examples of tasks and users. I could make a query to retrieve tasks that start on, before, or after 20170601\. I could also make a query to retrieve all task assigned to Cathryn, or who have hours logged for 20170203\. But what I _can’t_ do is filter by multiple values or keys. For example, I can’t make a query to retrieve the tasks that assigned to Cathryn _and_ start after 20170601\. A query to retrieve the tasks that have hours logged on 20170203 and 20170304 will also won’t work.

Querying or filtering on multiple keys or values doesn’t work, and developers love to complain about it. But if they did their research, they’d realize there’s actually a pretty good reason for it. Since Firebase is a real-time database and designed for speed, [Firebase only supports operations that it can guarantee to be fast](https://firebase.googleblog.com/2013/04/denormalizing-your-data-is-normal.html). If you want to do some complex queries, you’ll have to design your database accordingly. Complex queries aren’t impossible, you have to plan ahead for them.

For example, if I wanted to make a query to retrieve all tasks assigned to Cathryn that start on 20170201\. I could add a “staff_startDate” property to my tasks, as follows:

<pre name="aab8" id="aab8" class="graf graf--pre graf-after--p">tasks : {  
    "001" : {  
        ...  
        startDate       : "20170101"  
        assignedStaff   : "Cathryn"  
        staff_startDate : “Cathryn_20170101”  
        ...  
    }  
    ...  
}</pre>

Then, I would just need to query it this way:

<pre name="3a90" id="3a90" class="graf graf--pre graf-after--p">firebase  
.database().ref(“/tasks/”)  
.orderByChild(“staff_startDate”)  
.equalTo(“Cathryn_20170101”);</pre>

I highly recommend you watch [Common SQL Queries converted for the Firebase Database](https://www.youtube.com/watch?v=sKFLI5FOOHs&t=7s) and [Firebase Database Querying 101](https://www.youtube.com/watch?v=3WTQZV5-roY). Knowing how to structure and query your data will allow you to do more advanced queries. It will save you a lot of headaches down the road.

I decided to follow this article with a Firebase Best Practices checklist. If you put your email in the box below, I’ll send it to you.

In the meantime, I’d like to hear from other developers using Firebase.

Is anyone else liking Firebase?

Not so much?

Banging your head against the screen?

Talk to me, developers. Comments are open.





<iframe data-width="800" data-height="480" width="700" height="420" src="https://medium.freecodecamp.org/media/8a8a5e42c759601bb905fe2204a845f5?postId=93b843ee1b93" data-media-id="8a8a5e42c759601bb905fe2204a845f5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>












