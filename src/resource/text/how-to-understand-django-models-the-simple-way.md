---
author: Tim
authorTwitter: https://twitter.com/whyimsoalone
authorFacebook: https://facebook.com/1451829848232465
title: "How to understand Django models the simple way"
subTitle: "Have you ever tried to learn models by going through Django Docs? Did you leave with answers, or with even more questions?..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*lVq4xiiufKeBVM-lMkfp4w.jpeg
url: https://medium.freecodecamp.org/how-to-understand-django-models-the-simple-way-20c39d234870
id: how-to-understand-django-models-the-simple-way-20c39d234870
date: 2017-10-10T15:03:17.551Z
tags: [
  "Django",
  "Tech",
  "Programming",
  "Web Development",
  "Learning"
]
---
# How to understand Django models the simple way







![](https://cdn-images-1.medium.com/max/2000/1*lVq4xiiufKeBVM-lMkfp4w.jpeg)







Have you ever tried to learn models by going through Django Docs? Did you leave with answers, or with even more questions?

Personally, I started doubting whether programming was really for me.



![](https://cdn-images-1.medium.com/max/1600/0*McS5-tWqTape0uqd.gif)



I wrote this post to help you understand Django models so you can perform basic operations with them. Models are an excellent way to work with data.

Say we want to keep track of our amazing cats. We could create a `Cat` model — but what is a model anyway?

Turns out, a model is kind of three things in one:



![](https://cdn-images-1.medium.com/max/1600/0*Uv844414ItnWgqIa.png)



Now, let’s walk through each block.

### Table with cats in database



![](https://cdn-images-1.medium.com/max/1600/0*LVpq2r6p0k7iiMXn.png)



We’ve created a class (= a model) named `Cat`.

When we add columns, we must tell Django which kind of data will be in each of them. It can be string, digits, or boolean, among others.

In this case, the cat’s name should be in text — this is a `CharField` in Django. Don’t forget to set the maximum length for this field, because the database needs to know it. The cat’s weight in grams is an integer — so we use an `IntegerField`. Just a note: the `id` column is generated automatically.

Finally, `null` makes it possible to leave a column blank. For example, we might not know the weight. Note that any field can be marked as `null`.

For the finishing touch, we’ll propagate changes (like creating a model or adding a column) into our database schema. For that we use `python manage.py makemigrations` and then `python manage.py migrate`. It’s important to do this every time you change something in the models.

Now we have a table but we don’t have anything inside it. Let’s fix that.

### Operations with all cats

#### Creating an entry



![](https://cdn-images-1.medium.com/max/1600/1*DvqYmkZLK7cbU-XZSTwVWg.png)



The `create()` function helps us to create some rows. We just need to pass all the purry details into it.

#### Finding a particular one



![](https://cdn-images-1.medium.com/max/1600/0*pzfB9VqKCsYTodez.png)



If you want to get the cat’s FBI file — meow-xcuse me, I mean the cat’s info — just use the `get()` function with one of the cat parameters. In the example, I use `pk` which means “primary key.” Most often, that would be the same as using `id`.

`get()` will find all rows matching the parameters and will only return the first one.

#### Finding all the records



![](https://cdn-images-1.medium.com/max/1600/0*CB-I7LDj8w0Kg9pE.png)



On top of that, you can access all cats from the database by using the `all()` function.

#### Filtering out



![](https://cdn-images-1.medium.com/max/1600/0*xUQqdOgxQKCgycX5.png)



Or do you need cats lighter than 3000g?

A function named `filter` is ready to help you with that.

We pass `field__lookuptype = 'value'` into it to filter out the cats.

In the example, `lt` means “less than.” So `weight_g__lt=3000` means “weight is less than 3000g.”

### Operations with one cat

#### Updating



![](https://cdn-images-1.medium.com/max/1600/0*97IIJUzVuzR6kEIC.png)



Last time we weighed Luna, she was 3200g. But now her weight is 3100g. It’s very easy to change that.

We just get Luna from the database by her name, and then change her weight to 3100\. It’s that simple. Just one thing — we have to call `.save()` when we’re done changing.

#### Deleting, like, forever



![](https://cdn-images-1.medium.com/max/1600/0*9TwcSFfI2uPeWoGt.png)



We can delete one of our cats. We get the cat and call the `.delete()` function.

Very sad. But that’s life.











* * *







Did you enjoy this article? Please give me some claps so more people see it. Thanks!

The article was originally published on [my blog](https://arevej.me/django-models/).

[Subscribe at the end of the original post](https://arevej.me/django-models/) to get my new articles in your inbox and learn Django together.








