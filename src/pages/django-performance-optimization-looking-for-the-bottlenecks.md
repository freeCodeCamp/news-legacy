---
author: Vadym Zakovinko
authorTwitter: none
authorFacebook: none
title: "Django Performance Optimization: The Search for Bottlenecks"
subTitle: "All too often, I see Django developers go about optimizing their apps the wrong way. So In this short article, I’ll shed some light on th..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*rLpycYJgBTX9sonF41YQBg.png
url: https://medium.freecodecamp.org/django-performance-optimization-looking-for-the-bottlenecks-8583789e341b
id: django-performance-optimization-looking-for-the-bottlenecks-8583789e341b
date: 2017-04-11T11:45:43.534Z
tags: [
  "Django",
  "Python",
  "Programming",
  "Web Development",
  "Software Development"
]
---
# Django Performance Optimization: The Search for Bottlenecks







![](https://cdn-images-1.medium.com/max/2000/1*rLpycYJgBTX9sonF41YQBg.png)







All too often, I see Django developers go about optimizing their apps the wrong way. So In this short article, I’ll shed some light on the most common mistakes. I’ll show you how I search for bottlenecks.

### Database optimization

I saw how people start the optimization of database queries that take about 5% of all the request for so many times. Unfortunately, most of the developers just add `select_related`/`prefetch_related` to their Django QuerySets to decrease the count of queries to the database.

This does indeed decrease the total number of queries. But what about total time? Such changes will increase the amount of time needed to complete each request. This will ultimately increase the total time needed on production server.

### Never try to optimize queries on your development machine

> “The Postgres planner collects statistics about your data that help identify the best possible execution plan for your query. In fact, it will just use heuristics to determine the query plan if the table has little to no data in it. Not only do you need realistic production data in order to analyze reasonable query plans, but also the Postgres server’s configuration has a big effect. For this reason, it’s required that you run your analysis on either the production box, or on a staging box that is configured just like production, and where you’ve restored production data.”

> — An excerpt from the Harold’s Germinez [article](https://robots.thoughtbot.com/postgresql-performance-considerations)

In terms of database optimization, I prefer to have the log of long queries, and work with that. It doesn’t matter whether you’re using a tool like NewRelic or just the built-in PostgreSQL log.

### Code optimization

Most Django developers know about `django-extension` with `RunProfileServer`, but I think that this solution isn’t very comfortable to work with. It provides you with a lot of data, but the format is quite hard to read.

I use [line_profiler](https://github.com/rkern/line_profiler) instead. This package allows you to check the performance of specific parts of the code. Basically, you have to write the script to evaluate code that you need and put `@profile` decorator to methods you are interested in.

As a result, you’ll receive:

*   The amount of time taken by each method
*   Total time spent
*   Time per hit
*   Amount of hits
*   Time for each line of the method shown in percents

I use two options to run view in Django project to check performance. The first one is easier but it doesn’t reveal middlewares and Django code. The second one is a bit more complicated, but it gives the possibility to measure middlewares.

    #!/usr/bin/env pythonimport os

    os.environ.setdefault(      'DJANGO_SETTINGS_MODULE',    'django_classifier_profile.settings')import django  django.setup()

    from django.test.client import RequestFactory

    from django_classifier_profile.apps.account.models import User  from django_classifier_profile.apps.account.views import ProfileEditView

    request_factory = RequestFactory()  user = User.objects.get()

    request = request_factory.get('/')  request.session = {}  request.user = user

    view = ProfileEditView.as_view()  view(request).render()

Here I create a fake request, then call the view directly. We need to call the `render` method of the view to run template rendering and evaluate lazy objects.

    #!/usr/bin/env pythonimport os

    os.environ.setdefault(      'DJANGO_SETTINGS_MODULE',    'django_classifier_profile.settings')import django  django.setup()

    from django.core.servers.basehttp import get_internal_wsgi_application  from django.test.client import RequestFactory

    from django_classifier_profile.apps.account.models import User

    request_factory = RequestFactory()  user = User.objects.get()

    request = request_factory.get('/')  request.session = {}  request._cached_user = user  #request.user = user

    app = get_internal_wsgi_application()  app.get_response(request)

In this script, I use a WSGI application to call the view, and it provides the ability to evaluate the entire Django flow, with middlewares and template rendering.

To get results, you just need to run two commands.

First, you want to evaluate the profiled code, then write and dump statistics to file:

    $ kernprof –l <script_name.py>

Second, you want to show the results of profiling:

    $ python -m line_profiler <script_name.py>.lprof

The result will look like this:







![](https://cdn-images-1.medium.com/max/2000/1*lifoTtPsge-6vsI9ffQVdA.png)







### Focus on the big picture

When optimizing Django, remember to look at the big picture instead of just paying attention to some specific parameter stats.

A high number of queries doesn’t necessarily point to performance loss. A much smaller number queries that are more complex can end up running even more slowly.

So always check for the time consumed by the logic of your application — not just the database.

_You can read more articles by me on the_ [_Django Stars blog_](http://djangostars.com/blog/django-performance-optimization-tips/)_._








