---
author: Mohammed Subhan Khan
authorTwitter: none
authorFacebook: none
title: "How to handle user authentication in Python Django"
subTitle: "In this tutorial, I’ll show how to do user login, logout and signup in Django. All the code that I describe here is in this GitHub reposi..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*SA3NDT1VMUBn9g0emx9TUg.png
url: https://medium.freecodecamp.org/user-authentication-in-django-bae3a387f77d
id: user-authentication-in-django-bae3a387f77d
date: 2017-02-17T19:49:11.776Z
tags: [
  "Django",
  "Python",
  "Web Development",
  "Learning To Code",
  "Software Development"
]
---
# How to handle user authentication in Python Django



![](https://cdn-images-1.medium.com/max/1600/1*SA3NDT1VMUBn9g0emx9TUg.png)



In this tutorial, I’ll show how to do user login, logout and signup in Django. All the code that I describe here is in this GitHub [repository](https://github.com/khansubhan95/Django-User-Auth). This tutorial will be using Python 2.7 and Django 1.9.

### Project installation and structure

To get started, run the following commands from the terminal:

    django-admin startproject srccd srcpython manage.py startapp mysitepython manage.py migrate

In a nutshell, these four commands create a new Django project named src, enter the project, create a new app, mysite, inside the src project, then create a SQLite database for the project named db.sqlite3\. Also be sure to include the mysite app inside src/settings.py.

<pre name="3c54" id="3c54" class="graf graf--pre graf-after--p">INSTALLED_APPS = [  
    'src',  
    'django.contrib.admin',  
    'django.contrib.auth',  
    ...  
]</pre>

Create a directory named templates inside mysite app. Then create two other directories inside mysite/templates named “registration” and “mysite”.

Also, I will refer to the templates stored in these two directories, using registration/{template_name} and mysite/{template_name}.

Your project structure should ultimately look like this:

<pre name="122d" id="122d" class="graf graf--pre graf-after--p">.  
|-- db.sqlite3  
|-- manage.py  
|-- mysite  
|   |-- admin.py  
|   |-- apps.py  
|   |-- __init__.py  
|   |-- migrations  
|   |   `-- __init__.py  
|   |-- models.py  
|   |-- templates  
|   |   |-- mysite  
|   |   `-- registration  
|   |-- tests.py  
|   `-- views.py  
`-- src  
    |-- __init__.py  
    |-- settings.py  
    |-- urls.py  
    `-- wsgi.py</pre>

You may already be able to figure out what the templates in mysite may be used for (views defined in mysite for example). We’ll get to the importance of registration soon.

Also, we’ll need users to test our site. You can do this by creating a superuser (`python manage.py createsuperuser`). But don’t worry — everything this tutorial describes can be applied to normal users as well, without any changes. You can create normal users for the purpose of this tutorial by creating a superuser, running your development server (`python manage.py runserver`), navigating to localhost:8000/admin, navigating to Users, then creating a new user.

### Handling login

According to the documentation, Django provides [views](https://docs.djangoproject.com/en/1.10/topics/auth/default/#all-authentication-views) for handling user authentication methods like login, logout, and password recovery. This saves us the trouble of having to go through defining our own views for handling those things. Moreover, these views are quite configurable and are included in django.contrib.auth.views, which we will import as follows:

<pre name="b011" id="b011" class="graf graf--pre graf-after--p">from django.contrib.auth import views as auth_views</pre>

We want the login page to open when user goes to /login. To use the [login](https://docs.djangoproject.com/en/1.10/topics/auth/default/#django.contrib.auth.views.login) view append the following in src/urls.py

<pre name="7023" id="7023" class="graf graf--pre graf-after--p">url(r'^login//pre>, auth_views.login),</pre>

The view by default renders a template that is in registration/login.html.

Our registration/login.html includes the following simple HTML form:

<pre name="a156" id="a156" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html></pre>

<pre name="80a0" id="80a0" class="graf graf--pre graf-after--pre"><head>  
    <title>Login</title>  
</head></pre>

<pre name="71bd" id="71bd" class="graf graf--pre graf-after--pre"><body>  
    <form method="POST">  
        {% csrf_token %}  
        <p>  
            <label>Username</label>  
            <input type="text" name="username">  
        </p>  
        <p>  
            <label>Password</label>  
            <input type="password" name="password">  
        </p>  
        <button type="submit">Login</button>  
    </form>  
</body></pre>

<pre name="5f2c" id="5f2c" class="graf graf--pre graf-after--pre"></html></pre>

Don’t want to use registration/login.html? You can specify what templates to use by giving a python dictionary as a third parameter in the urlpattern, with ‘template_name’ as key and the location of the template as the value. If you want to use mysite/login_user.html as the template:

<pre name="995d" id="995d" class="graf graf--pre graf-after--p">url(r'^login//pre>, auth_views.login, {'template_name': 'mysite/login_user.html'})</pre>

In addition, you can also use other arguments of the view, in pretty much the same way. For a full list of arguments, refer the [docs](https://docs.djangoproject.com/en/1.10/topics/auth/default/#django.contrib.auth.views.login).

When user clicks on the submit button, the login view handles the login for us. After the user has logged in, we can define where the page should be redirected by specifying LOGIN_REDIRECT_URL in src/settings.py. By default, we will be redirected to /login if the login fails.

<pre name="38db" id="38db" class="graf graf--pre graf-after--p">LOGIN_REDIRECT_URL = '/'</pre>

Now run the development server (`python manage.py runserver`) and navigate to localhost:8000/login/. Enter the user credentials for your example superuser. You’ll be redirected to / if the login was successful. Otherwise you’ll be redirected to /login.

Even if your login was successful, you’ll be redirected to / and see an error. This will happen because we haven’t defined a `urlpattern` for it.

### Handling logout

Next we want users to logout when they navigate to /logout. We can extend the same analogy as login to logout, accessing the view corresponding to [logout](https://docs.djangoproject.com/en/1.10/topics/auth/default/#django.contrib.auth.views.logout) by appending the following urlpattern to src/settings.py

<pre name="f145" id="f145" class="graf graf--pre graf-after--p">url(r'^logout//pre>, auth_views.logout)</pre>

The logout view renders the registration/logged_out.html template by default. Here is a simple logout template:

<pre name="6d03" id="6d03" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html></pre>

<pre name="5058" id="5058" class="graf graf--pre graf-after--pre"><head>  
    <title></title>  
</head></pre>

<pre name="e84b" id="e84b" class="graf graf--pre graf-after--pre"><body>  
    You have successfully logged out.  
    Home  
</body></pre>

<pre name="9d21" id="9d21" class="graf graf--pre graf-after--pre"></html></pre>

As with login, you can change the template location by including an object with a ‘template_name’ key and the template’s location as the value.

### Signup

We want our users to register for our website by navigating to /register. Before doing that, let’s clean up the project a bit. First of all, we want a `urlpattern` for our home page /. We are going to use mysite app for this purpose, so append the following in src/urls.py

<pre name="335d" id="335d" class="graf graf--pre graf-after--p">url(r'^', include('mysite.urls'))</pre>

Now we need to include the `urlpattern` for / in mysite/urls.py, so include the following `urlpattern` in it (after importing the relevant libraries)

<pre name="78c4" id="78c4" class="graf graf--pre graf-after--p">from django.conf.urls import url, include  
from django.contrib import admin  
from .views import home, register</pre>

<pre name="b5ab" id="b5ab" class="graf graf--pre graf-after--pre">urlpatterns = [  
    url(r'^/pre>, home),  
    url(r'^register/', register),  
]</pre>

Here, `home` refers to the view for /, and `register` refers to the view for handling registration. For creating a user registration form, we will use Django’s in built forms. To do this, create a mysite/forms.py file and include the following:

<pre name="fc9b" id="fc9b" class="graf graf--pre graf-after--p">from django import forms</pre>

<pre name="ea2e" id="ea2e" class="graf graf--pre graf-after--pre">class UserRegistrationForm(forms.Form):  
    username = forms.CharField(  
        required = True,  
        label = 'Username',  
        max_length = 32  
    )  
    email = forms.CharField(  
        required = True,  
        label = 'Email',  
        max_length = 32,  
    )  
    password = forms.CharField(  
        required = True,  
        label = 'Password',  
        max_length = 32,  
        widget = forms.PasswordInput()  
    )</pre>

First, we import the forms library, we create `UserRegistrationForm`, which inherits from `forms.Form`. We want our forms to have 3 fields: `username`, `email`, `password` and the variable assignments do just that. `forms.CharField` represents a field composed of characters. The arguments — `required`, `max_length` and `label`— specify whether a field is required, it’s maximum length, and the field’s label. The widget parameter in `password` says that `password` is an input of type “password.”

We want users to be able to view the form if they go to /register, as well as fill it in and submit it. These correspond to GET and POST requests on /register. Thus, we include the following in mysite/views.py:

<pre name="1315" id="1315" class="graf graf--pre graf-after--p">from django.shortcuts import render  
from django.contrib.auth.models import User  
from django.contrib.auth import authenticate, login  
from django.http import HttpResponseRedirect  
from django import forms  
from .forms import UserRegistrationForm</pre>

<pre name="7a0a" id="7a0a" class="graf graf--pre graf-after--pre"># Create your views here.</pre>

<pre name="93c0" id="93c0" class="graf graf--pre graf-after--pre">def home(request):  
    return render(request, 'mysite/home.html')</pre>

<pre name="fa10" id="fa10" class="graf graf--pre graf-after--pre">def register(request):  
    if request.method == 'POST':  
        form = UserRegistrationForm(request.POST)  
        if form.is_valid():  
            userObj = form.cleaned_data  
            username = userObj['username']  
            email =  userObj['email']  
            password =  userObj['password']  
            if not (User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists()):  
                User.objects.create_user(username, email, password)  
                user = authenticate(username = username, password = password)  
                login(request, user)  
                return HttpResponseRedirect('/')  
            else:  
                raise forms.ValidationError('Looks like a username with that email or password already exists')</pre>

<pre name="4495" id="4495" class="graf graf--pre graf-after--pre">    else:  
        form = UserRegistrationForm()</pre>

<pre name="4ab0" id="4ab0" class="graf graf--pre graf-after--pre">    return render(request, 'mysite/register.html', {'form' : form})</pre>

The home view is defined to render the src/home.html template, which is as follows:

<pre name="8d29" id="8d29" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html></pre>

<pre name="000e" id="000e" class="graf graf--pre graf-after--pre"><head>  
    <title>Home</title>  
</head></pre>

<pre name="eacd" id="eacd" class="graf graf--pre graf-after--pre"><body>  
    {% if user.is_authenticated %}  
    <p>hello</p>  
    <p>welcome {{ user.username }}</p>  
    <p>Logout</p>  
    {% else %}  
    <p>Login</p>  
    <p>Register</p>  
    {% endif %}  
</body></pre>

<pre name="6c2e" id="6c2e" class="graf graf--pre graf-after--pre"></html></pre>

We check whether the user is logged in, using user.is_authenticated, and display our welcome text along with the username (using `user.username`) along with a link for logging out. If not, we will display links for logging in and registering.

For the register view, we check whether the request method is POST or not. If it isn’t, then we specify the form to be `UserRegistrationForm` and render, it by passing it as a parameter to mysite/register.html template:

<pre name="2e84" id="2e84" class="graf graf--pre graf-after--p"><!DOCTYPE html>  
<html></pre>

<pre name="e66f" id="e66f" class="graf graf--pre graf-after--pre"><head>  
    <title></title>  
</head></pre>

<pre name="ae18" id="ae18" class="graf graf--pre graf-after--pre"><body>  
    <form method="POST">  
        {% csrf_token %} {{ form.as_p }}  
        <button type="submit">Submit</button>  
    </form>  
</body></pre>

<pre name="d9d6" id="d9d6" class="graf graf--pre graf-after--pre"></html></pre>

The form that is passed as input to the register view is then rendered using `form.as_p`. When the user clicks the submit button, a POST request is sent. We take the form data using the form variable.

Next we check if the form data is valid (through `[is_valid()](https://docs.djangoproject.com/en/1.10/ref/forms/api/#django.forms.Form.is_valid)`). If it is, we create a `userObj` dictionary which we get by applying `[cleaned_data](https://docs.djangoproject.com/en/1.10/ref/forms/api/#django.forms.Form.cleaned_data)` to the form and extract `username`, `email` and `password` from it.

The if condition checks whether it’s the case that a user with the same username and email exists in our database. If it is so, we create a new user, login using the same user and redirect to /. Otherwise, we raise an error saying that such a user already exists.

Here’s some relevant documentation in case you get stuck, or want to learn more:

*   [User Authentication](https://docs.djangoproject.com/en/1.10/topics/auth/default/)
*   [Forms](https://docs.djangoproject.com/en/1.10/topics/forms/)

If you would like to give me feedback about this tutorial, [contact me](https://www.mohdsubhan.me/contact/).

If you liked this post, please ♡ it and share it :)








