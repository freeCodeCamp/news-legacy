---
author: Adam Wattis
authorTwitter: none
authorFacebook: none
title: "ElasticSearch with Django the easy way"
subTitle: "A while back I was working on a Django project and wanted to implement fast free text search. Instead of using a regular database for thi..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ojvTsI-Asv1IIjdm61RzKw.jpeg
url: https://medium.freecodecamp.org/elasticsearch-with-django-the-easy-way-909375bc16cb
id: elasticsearch-with-django-the-easy-way-909375bc16cb
date: 2017-01-13T21:43:09.407Z
tags: [
  "Python",
  "Django",
  "Elasticsearch",
  "NoSQL",
  "Web Development"
]
---
# ElasticSearch with Django the easy way



![](https://cdn-images-1.medium.com/max/1600/1*ojvTsI-Asv1IIjdm61RzKw.jpeg)



A while back I was working on a Django project and wanted to implement fast free text search. Instead of using a regular database for this search function — such as MySQL or PostgreSQL — I decided to use a NoSQL database. That is when I discovered [ElasticSearch](https://www.elastic.co/).

ElasticSearch indexes documents for your data instead of using data tables like a regular relational database does. This speeds up search, and offers a lot of other benefits that you don’t get with a regular database. I kept a regular relational database as well for storing user details, logins, and other data that ElasticSearch didn’t need to index.

After searching for a long time on how to properly implement ElasticSearch with Django, I didn’t really find any satisfying answers. Some [guides or tutorials](https://qbox.io/blog/how-to-elasticsearch-python-django-part1) were convoluted and seemed to be taking unnecessary steps in order to index the data into ElasticSearch. There was quite a bit of information on how to perform searching, but not as much about how the indexing should be done. I felt like there must be a simpler solution out there, so I decided to give it a try myself.

I wanted to keep it as simple as possible, because simple solutions tend to be the best ones in my opinion. KISS (Keep It Simple Stupid), Less is More and all of that stuff is something that resonates with me a lot, especially when every other solution out there is complex. I decided to use Honza Král’s example in [this video](https://www.youtube.com/watch?v=1KHM7WvNeL4&t=1141s) to have something to base my code on. I recommend watching it, although it is a bit outdated at this point.

Since I was using Django — which is written in Python — it was easy to interact with ElasticSearch. There are two client libraries to interact with ElasticSearch with Python. There’s [elasticsearch-py](https://elasticsearch-py.readthedocs.io/en/master/index.html), which is the official low-level client. And there’s [elasticsearch-dsl](http://elasticsearch-dsl.readthedocs.io/en/latest/index.html), which is build upon the former but gives a higher-level abstraction with a bit less functionality.

We will get into some example soon, but first I need to clarify what we want to accomplish:

*   Setting up ElasticSearch on our local machine and ensuring it works properly
*   Setting up a new Django project
*   Bulk indexing of data that is already in the database
*   Indexing of every new instance that a user saves to the database
*   A basic search example

All right, that seems simple enough. Lets get started by installing ElasticSearch on our machine. Also, all the [code will be available on my GitHub](https://github.com/adamwattis/elasticsearch-example) so that you can easily follow the examples.

#### Installing ElasticSearch

Since ElasticSearch runs on Java you must ensure you have an updated JVM version. Check what version you have with `java -version` in the terminal. Then you run the following commands to create a new directory, download, extract and start ElasticSearch:

<pre name="d4e9" id="d4e9" class="graf graf--pre graf-after--p">mkdir elasticsearch-example</pre>

<pre name="200b" id="200b" class="graf graf--pre graf-after--pre">wget [https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.1.1.tar.gz](https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.1.1.tar.gz)</pre>

<pre name="25a7" id="25a7" class="graf graf--pre graf-after--pre">tar -xzf elasticsearch-5.1.1.tar.gz</pre>

<pre name="7816" id="7816" class="graf graf--pre graf-after--pre">./elasticsearch-5.1.1/bin/elasticsearch</pre>

When ElasticSearch starts up there should be a lot of output printed to the terminal window. To check that its up and running correctly open up a new terminal window and run this `curl` command:

<pre name="51dc" id="51dc" class="graf graf--pre graf-after--p">curl -XGET http://localhost:9200</pre>

The response should be something like this:

<pre name="ca74" id="ca74" class="graf graf--pre graf-after--p">{  
  "name" : "6xIrzqq",  
  "cluster_name" : "elasticsearch",  
  "cluster_uuid" : "eUH9REKyQOy4RKPzkuRI1g",  
  "version" : {  
    "number" : "5.1.1",  
    "build_hash" : "5395e21",  
    "build_date" : "2016-12-06T12:36:15.409Z",  
    "build_snapshot" : false,  
    "lucene_version" : "6.3.0"  
  },  
  "tagline" : "You Know, for Search"</pre>

Great, you now have ElasticSearch running on your local machine! It’s time to set up your Django project.

#### Setting up a Django project

First you create a virtual environment with `virtualenv venv` and enter it with `source venv/bin/activate` in order to keep everything contained. Then you install some packages:

<pre name="f576" id="f576" class="graf graf--pre graf-after--p">pip install django  
pip install elasticsearch-dsl</pre>

To start a new Django project you run:

<pre name="3882" id="3882" class="graf graf--pre graf-after--p">django-admin startproject elasticsearchproject  
cd elasticsearchproject  
python manage.py startapp elasticsearchapp</pre>

After you created your new Django projects you need to create a model that you will use. For this guide I chose to go with a good old fashioned blog post example. In `models.py` you place the following code:

<pre name="c8f3" id="c8f3" class="graf graf--pre graf-after--p">**from** django.db **import** models  
**from** django.utils **import** timezone  
**from** django.contrib.auth.models **import** User  

_# Create your models here.  

# Blogpost to be indexed into ElasticSearch_ **class** BlogPost(models.Model):  
   author = models.ForeignKey(User, on_delete=models.CASCADE, related_name=**'blogpost'**)  
   posted_date = models.DateField(default=timezone.now)  
   title = models.CharField(max_length=200)  
   text = models.TextField(max_length=1000)</pre>

Pretty straight forward, so far. Don’t forget to add `elasticsearchapp` to `INSTALLED_APPS` in `settings.py` and register your new BlogPost model in `admin.py` like this:

<pre name="fb3b" id="fb3b" class="graf graf--pre graf-after--p">**from** django.contrib **import** admin  
**from** .models **import** BlogPost  

_# Register your models here.  

# Need to register my BlogPost so it shows up in the admin_ admin.site.register(BlogPost)</pre>

You must also `python manage.py makemigrations`, `python manage.py migrate` and `python manage.py createsuperuser` to create the database and an admin account. Now, `python manage.py runserver`, go to `[http://localhost:8000/admin/](http://localhost:8000/admin/)` and login. You should now be able to see your Blog posts model there. Go ahead and create your first blog post in the admin.

Congratulations, you now have a functioning Django project! It’s finally time to get into the fun stuff — connecting ElasticSearch.

#### Connecting ElasticSearch with Django

You begin by creating a new file called `search.py` in our `elasticsearchapp` directory. This is where the ElasticSearch code will live. The first thing you need to do here is to create a connection from your Django application to ElasticSearch. You do this in your `search.py` file:

<pre name="db27" id="db27" class="graf graf--pre graf-after--p">**from** elasticsearch_dsl.connections **import** connections  

connections.create_connection()</pre>

Now that you have a global connection to your ElasticSearch set-up you need to define what you want to index into it. Write this code:

<pre name="8510" id="8510" class="graf graf--pre graf-after--p">**from** elasticsearch_dsl.connections **import** connections  
**from** elasticsearch_dsl **import** DocType, Text, Date  

connections.create_connection()  

class BlogPostIndex(DocType):  
    author = Text()  
    posted_date = Date()  
    title = Text()  
    text = Text()  

    class Meta:  
        index = 'blogpost-index'</pre>

It looks pretty similar to your model, right? The `DocType` works as a wrapper to enable you to write an index like a model, and the `Text` and `Date` are the fields so that they get the correct format when they get indexed.

Inside the Meta you tell ElasticSearch what you want the index to be named. This will be a point of reference for ElasticSearch so that it knows what index it’s dealing with when initializing it in the database and saving each new object instance created.

Now you need to actually create the mapping of your newly created `BlogPostIndex` in ElasticSearch. You can do this and also create a way to do the bulk indexing at the same time — how convenient right?

#### Bulk indexing of data

The `bulk` command is located in `elasticsearch.helpers` which is included when you installed `elasticsearch_dsl` since it is built on top of that library. Do the following in `search.py`:

<pre name="df8c" id="df8c" class="graf graf--pre graf-after--p">...  
**from** elasticsearch.helpers **import** bulk  
**from** elasticsearch **import** Elasticsearch  
**from** . **import** models  
...</pre>

<pre name="3210" id="3210" class="graf graf--pre graf-after--pre">...  
**def** bulk_indexing():  
    BlogPostIndex.init()  
    es = Elasticsearch()  
    bulk(client=es, actions=(b.indexing() **for** b **in** models.BlogPost.objects.all().iterator()))</pre>

“What is going on here?” you might be thinking. It’s not that complicated, actually.

Since you only want to do bulk indexing whenever you change something in our model you `init()` the model which maps it into ElasticSearch. Then, you use the `bulk` and pass it an instance of `Elasticsearch()` which will create a connection to ElasticSearch. You then pass a generator to `actions=` and iterate over all the `BlogPost` objects you have in your regular database and call the `.indexing()` method on each object. Why a generator? Because if you had a lot of objects to iterate over a generator would not have to first load them into memory.

There is just one problem with the above code. You don’t have an `.indexing()` method on your model yet. Lets fix that:

<pre name="4b28" id="4b28" class="graf graf--pre graf-after--p">...  
**from** .search **import** BlogPostIndex  
...</pre>

<pre name="22d6" id="22d6" class="graf graf--pre graf-after--pre">...  
# Add indexing method to BlogPost **def** indexing(self):  
   obj = BlogPostIndex(  
      meta={**'id'**: self.id},  
      author=self.author.username,  
      posted_date=self.posted_date,  
      title=self.title,  
      text=self.text  
   )  
   obj.save()  
   **return** obj.to_dict(include_meta=**True**)</pre>

You add the indexing method to the `BlogPost` model. It returns a `BlogPostIndex` and gets saved to ElasticSearch.

Lets try this out now and see if you can bulk index the blog post you previously created. By running `python manage.py shell` you go into the Django shell and import your `search.py` with `from elasticsearchapp.search import *` and then run `bulk_indexing()` to index all the blog posts in your database. To see if it worked you run the following curl command:

<pre name="0d62" id="0d62" class="graf graf--pre graf-after--p">curl -XGET 'localhost:9200/blogpost-index/blog_post_index/1?pretty'</pre>

You should get back your first blog post in the terminal.

#### Indexing of newly saved instance

Next you need to add a signal that fires the `.indexing()` on each new instance that is saved every time a user saves a new blog post. In `elasticsearchapp` create a new file called `signals.py` and add this code:

<pre name="dd1b" id="dd1b" class="graf graf--pre graf-after--p">**from** .models **import** BlogPost  
**from** django.db.models.signals **import** post_save  
**from** django.dispatch **import** receiver  

@receiver(post_save, sender=BlogPost)  
**def** index_post(sender, instance, **kwargs):  
    instance.indexing()</pre>

The `post_save` signal will ensure that the saved instance will get indexed with the `.indexing()` method after it is saved.

In order for this to work we also need to register Django that we’re using signals. We do this opening `apps.py` and adding the following code:

<pre name="d516" id="d516" class="graf graf--pre graf-after--p">from django.apps import AppConfig  

class ElasticsearchappConfig(AppConfig):  
    name = 'elasticsearchapp'  

    def ready(self):  
        import elasticsearchapp.signals</pre>

To to complete this we also need to tell Django that we’re using this new configuration. We do this inside the `__init__.py` inside our `elasticsearchapp` directory by adding:

<pre name="8d8b" id="8d8b" class="graf graf--pre graf-after--p">default_app_config = 'elasticsearchapp.apps.ElasticsearchappConfig'</pre>

Now the `post_save` signal is registered with Django and is ready to listen for whenever a new blogpost is being saved.

Try it our by going into the Django admin again and saving a new blogpost. Then check with a `curl` command if it was successfully indexed into ElasticSearch.

#### Simple search

Now lets make a simple search function in `search.py` to find all posts filtered by author:

<pre name="c013" id="c013" class="graf graf--pre graf-after--p">...  
**from** elasticsearch_dsl **import** DocType, Text, Date, Search  
...</pre>

<pre name="07d5" id="07d5" class="graf graf--pre graf-after--pre">...  
**def** search(author):  
    s = Search().filter(**'term'**, author=author)  
    response = s.execute()  
    **return** response</pre>

Lets try the search out. In the shell: `from elasticsearchapp.search import *` and run `print(search(author=""))` :

<pre name="3089" id="3089" class="graf graf--pre graf-after--p">>>> print(search(author="home"))  
<Response: [<Result(blogpost-index/blog_post_index/1): {'text': 'Hello world, this is my first blog post', 'title':...}>]></pre>

There you have it! You have now successfully indexed all your instances into ElasticSearch, created a `post_save` signal that indexes each newly saved instance, and created a function to search our ElasticSearch database for your data.

#### Conclusion

This was a quite lengthy article but I hope it is written simple enough for even the beginner to be able to understand.

I explained how to connect a Django model to ElasticSearch for indexing and searching, but there is so much more that ElasticSearch can do. I recommend reading on their website and exploring what other possibilities exist, such as spatial operations and full text search with intelligent highlighting. Its a great tool and I will be sure to use it in future projects!

If you liked this article or have a comment or suggestion, please feel free to leave a message below. And stay tuned for more interesting stuff!








