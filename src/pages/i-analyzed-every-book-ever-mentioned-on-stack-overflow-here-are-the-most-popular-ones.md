---
author: Vlad Wetzel
authorTwitter: none
authorFacebook: none
title: "I analyzed every book ever mentioned on Stack Overflow. Here are the most popular ones."
subTitle: "Finding your next programming book is hard, and it’s risky...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*tIbZVgZCBSzq7dLUUBnrPQ.jpeg
url: https://medium.freecodecamp.org/i-analyzed-every-book-ever-mentioned-on-stack-overflow-here-are-the-most-popular-ones-eee0891f1786
id: i-analyzed-every-book-ever-mentioned-on-stack-overflow-here-are-the-most-popular-ones-eee0891f1786
date: 2017-03-07T15:30:44.178Z
tags: [
  "Programming",
  "Data Science",
  "Tech",
  "Startup",
  "Python"
]
---
# I analyzed every book ever mentioned on Stack Overflow. Here are the most popular ones.







![](https://cdn-images-1.medium.com/max/2000/1*tIbZVgZCBSzq7dLUUBnrPQ.jpeg)







Finding your next programming book is hard, and it’s risky.

As a developer, your time is scarce, and reading a book takes up a lot of that time. You could be programming. You could be resting. But instead you’re allocating precious time to read and expand your skills.

So which book should you read? My colleagues and I often discuss books, and I’ve noticed that our opinions on a given book vary wildly.

So I decided to take a deeper look into the problem. My idea: to parse the most popular programmer resource in the world for links to a well-known book store, then count how many mentions each book has.

Fortunately, Stack Exchange (the parent company of Stack Overflow) had just published their data dump. So I sat down and got to coding.







![](https://cdn-images-1.medium.com/max/2000/1*-Gtla3Qgig00AgRvGc-kxg.png)

A screenshot from the tool I built: [dev-books.com](http://www.dev-books.com)







> _“If you’re curious, the overall top recommended book is_ [_Working Effectively with Legacy Code_](https://amazon.co.uk/dp/0131177052/?tag=devbookscom-21)_, with_ [_Design Pattern: Elements of Reusable Object-Oriented Software_](https://amazon.co.uk/dp/0201633612/?tag=devbookscom-21) _coming in second. While the titles for these are as dry as the Atacama Desert, the content should still be quality. You can sort books by tags, like JavaScript, C, Graphics, and whatever else. This obviously isn’t the end-all of book recommendations, but it’s certainly a good place to start if you’re just getting into coding or looking to beef up your knowledge.” — review on_ [_Lifehacker.com_](http://lifehacker.com/dev-books-is-a-massive-collection-of-the-most-recommend-1792134129)

Shortly afterward, I launched [dev-books.com](http://www.dev-books.com), which allows you to explore all the data I gathered and sorted. I got more than 100,000 visitors and received lots of feedback asking me to describe the whole technical process.

So, as promised, I’m going to describe how I built everything right now.

### Getting and importing the data

I grabbed the Stack Exchange database dump from [archive.org](https://archive.org/details/stackexchange).

From the very beginning I realized it would not be possible to import a 48GB XML file into a freshly created database (PostgreSQL) using popular methods like `myxml := pg_read_file(‘path/to/my_file.xml’)`, because I didn’t have 48GB of RAM on my server. So, I decided to use a [SAX](https://en.wikipedia.org/wiki/Simple_API_for_XML) parser.

All the values were stored between `<row>` tags, so I used a Python script to parse it:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2bd012e11b703a49e4123a1a316fbd32?postId=eee0891f1786" data-media-id="2bd012e11b703a49e4123a1a316fbd32" allowfullscreen="" frameborder="0"></iframe>





After three days of importing (almost half of the XML was imported during this time), I realized that I’d made a mistake: the `ParentID` attribute should have been `ParentId`.

At this point, I didn’t want to wait for another week, and moved from an AMD E-350 (2 x 1.35GHz) to an Intel G2020 (2 x 2.90GHz). But this still didn’t speed up the process.

Next decision — batch insert:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d3e1f43c2488ad3f5ffb88ec31df365?postId=eee0891f1786" data-media-id="2d3e1f43c2488ad3f5ffb88ec31df365" allowfullscreen="" frameborder="0"></iframe>





StringIO lets you use a variable like file to handle the function `copy_from`, which uses `COPY`. This way, the whole import process only took one night.

OK, time to create indexes. In theory, GiST indexes are slower than GIN, but take less space. So I decided to use GiST. After one more day, I had an index that took 70GB.

When I tried couple of test queries, I realized that it takes way too much time to process them. The reason? Disk IO waits. SSD GOODRAM C40 120Gb helped a lot, even if it is not the fastest SSD so far.

I created a brand new PostgreSQL cluster:

<pre name="13cb" id="13cb" class="graf graf--pre graf-after--p">initdb -D /media/ssd/postgresq/data</pre>

Then I made sure to change the path in my service config (I used Manjaro OS):

<pre name="b133" id="b133" class="graf graf--pre graf-after--p">vim /usr/lib/systemd/system/postgresql.service</pre>

<pre name="4dd3" id="4dd3" class="graf graf--pre graf-after--pre">  
Environment=PGROOT=/media/ssd/postgres  
PIDFile=/media/ssd/postgres/data/postmaster.pid</pre>

I Reloaded my config and started postgreSQL:

<pre name="99b9" id="99b9" class="graf graf--pre graf-after--p">systemctl daemon-reload  
postgresql systemctl start postgresql</pre>

This time it took couple hours to import, but I used GIN. The indexing took 20GB of space on SSD, and simple queries were taking less than a minute.

### Extracting books from the database

With my data finally imported, I started to look for posts that mentioned books, then copied them over to a separate table using SQL:

<pre name="1207" id="1207" class="graf graf--pre graf-after--p">  
CREATE TABLE books_posts AS SELECT * FROM posts WHERE body LIKE ‘%book%’”;</pre>

The next step was to find all the hyperlinks within those:

<pre name="a053" id="a053" class="graf graf--pre graf-after--p">  
CREATE TABLE http_books AS SELECT * posts WHERE body LIKE ‘%http%’”;</pre>

At this point I realized that StackOverflow proxies all links like: `rads.stackowerflow.com/[$isbn]/`

I created another table with all posts with links:

<pre name="14b2" id="14b2" class="graf graf--pre graf-after--p">CREATE TABLE rads_posts AS SELECT * FROM posts WHERE body LIKE ‘%http://rads.stackowerflow.com%'";</pre>

Using regular expressions to extract all the [ISBNs](https://en.wikipedia.org/wiki/International_Standard_Book_Number). I extracted Stack Overflow tags to another table through `regexp_split_to_table`.

Once I had the most popular tags extracted and counted, the top of 20 most mentioned books by tags were quite similar across all tags.

My next step: refining tags.

The idea was to take the top-20-mentioned books from each tag and exclude books which were already processed.

Since it was “one-time” job, I decided to use PostgreSQL arrays. I wrote a script to create a query like so:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/440bdc82ba2c1e3f9d4cf44b36042088?postId=eee0891f1786" data-media-id="440bdc82ba2c1e3f9d4cf44b36042088" allowfullscreen="" frameborder="0"></iframe>





With the data in hand, I headed for the web.

### Building the web app

Since I’m not a web developer — and certainly not a web user interface expert — I decided to create a very simple single-page app based on a default Bootstrap theme.

I created a “search by tag” option, then extracted the most popular tags to make each search clickable.

I visualized the search results with a bar chart. I tried out Hightcharts and D3, but they were more for dashboards. These had some issues with responsiveness, and were quite complex to configure. So, I created my own responsive chart based on SVG. To make it responsive, it has to be redrawn on screen orientation change event:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/40509f93be5fe35fa6bba5aaf37c6b08?postId=eee0891f1786" data-media-id="40509f93be5fe35fa6bba5aaf37c6b08" allowfullscreen="" frameborder="0"></iframe>





### Web server failure



![](https://cdn-images-1.medium.com/max/1600/0*Mr3xakmAy7cOXbB9.png)

Nginx vs. Apache



Right after I published [dev-books.com](http://www.dev-books.com) I had a huge crowd checking out my web site. Apache couldn’t serve for more than 500 visitors at the same time, so I quickly set up Nginx and switched to it on the way. I was really surprised when real-time visitors shot up to 800 at same time.

### Conclusion:

I hope I explained everything clearly enough for you to understand how I built this. If you have any questions, feel free to ask. You can find me [on twitter](https://twitter.com/VLPLabs) and [Facebook](https://www.facebook.com/VLP-Labs-727090070789985/).

As promised, I will publish my full report from Amazon.com and Google Analytics at the end of March. The results so far have been really surprising.

Make sure you click on green heart below and follow me for more stories about technology :)

Stay tuned at [dev-books.com](http://www.dev-books.com)








