---
author: Jeff Lowery
authorTwitter: https://twitter.com/jmlowery
authorFacebook: https://facebook.com/10209080625586279
title: "Spreadsheets getting you down? Converting row data to JSON trees is a breeze."
subTitle: "Like many of you, I often have to take the result of SQL queries and convert the rowsets to JSON data objects. Sometimes I have to do the..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg
url: https://medium.freecodecamp.org/spreadsheets-and-rowsets-getting-you-down-fd6ff7599052
id: spreadsheets-and-rowsets-getting-you-down-fd6ff7599052
date: 2017-10-30T05:41:28.364Z
tags: [
  "Programming",
  "Technology",
  "Web Development",
  "Sql",
  "Productivity"
]
---
# Spreadsheets getting you down? Converting row data to JSON trees is a breeze.



![](https://cdn-images-1.medium.com/max/1600/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg)



Like many of you, I often have to take the result of [SQL queries](http://www.sqlcourse.com/intro.html) and convert the rowsets to [JSON data objects](http://www.json.org/). Sometimes I have to do the same with CSV files from spreadsheets. The transformation process can be a hassle, though anyone can do it. Yet, it can be time-consuming and error-prone. This post will show you how to use the [**treeize**](https://www.npmjs.com/package/treeize)Node.js package to simplify the process in very few lines of code.

Before going further, I’ll first need a dataset to base some examples on. The domain will be **Books**, which lend themselves to all sorts of categorization. I will use a fake data generator called [casual](https://github.com/boo1ean/casual), which I previously used for mocks in my post on [GraphQL testing](https://medium.freecodecamp.org/mocking-graphql-with-graphql-tools-42c2dd9d0364).

The book data will be of the following structure:

<pre name="5e61" id="5e61" class="graf graf--pre graf-after--p">casual.define('book', () => {  
    const author = casual.random_element(authors);</pre>

<pre name="8c16" id="8c16" class="graf graf--pre graf-after--pre">**const book = {  
        first_name: author.first,  
        last_name: author.last,  
        title: casual.random_element(author.titles),  
        category: casual.random_element(author.category)  
    }**</pre>

<pre name="a5c7" id="a5c7" class="graf graf--pre graf-after--pre">return book;  
});</pre>

Every time I request a `casual.book` I get a book with a new set of values. It’s not entirely random. The generator uses some [predefined data](https://github.com/JeffML/rowsets2json/blob/master/src/mocks/index.js) for well-known authors, and more-or-less randomly generated data for other authors. Here’s a sample:

<pre name="38ff" id="38ff" class="graf graf--pre graf-after--p">{ dataset:  
   [ { first_name: 'Barbara',  
       last_name: 'Cartland',  
       title: 'The Pirate and the Piano Teacher',  
       category: 'thriller' },  
     { first_name: 'Carlie',  
       last_name: 'Haley',  
       title: 'Digitized Global Orchestration',  
       category: 'engineering' },  
     { first_name: 'Arthur',  
       last_name: 'Doyle',  
       title: 'The Case of the Spotted Dick',  
       category: 'mystery' },  
     { first_name: 'Reinhold',  
       last_name: 'Gutmann',  
       title: 'Managed Directional Benchmark',  
       category: 'management' },  
     { first_name: 'Isaac',  
       last_name: 'Asimov',  
       title: 'Once in a Venusian Sun',  
       category: 'science fiction' },  
     { first_name: 'R. L.',  
       last_name: 'Stein',  
       title: 'Why are You Scared of Me?',  
       category: 'childrens books' },  
     { first_name: 'Alicia',  
       last_name: 'Cruickshank',  
       title: 'Balanced Local Database',  
       category: 'engineering' },  
     { first_name: 'Chase',  
       last_name: 'Runte',  
       title: 'Ergonomic Tertiary Solution',  
       category: 'engineering' } ] }</pre>

If you’re interested in how this data was generated, the full source code used in this post can be found [here](https://github.com/JeffML/rowsets2json). For a little bit of added realism, this generated data will be thrown into an [in-memory SQL database](https://www.npmjs.com/package/alasql) for later retrieval. Here’s the format of the results for the SQL query:

<pre name="ee4d" id="ee4d" class="graf graf--pre graf-after--p">SELECT title, category, first_name, last_name  
FROM book  
JOIN author ON author.id = book.author</pre>

This format is, for all intents and purposes, identical to the format of the **dataset** shown just previously, for example:

<pre name="cd83" id="cd83" class="graf graf--pre graf-after--p">[ { title: 'Proactive Regional Forecast',  
    category: 'mystery',  
    first_name: 'Arthur',  
    last_name: 'Doyle' },  
  { title: 'More Scary Stuff',  
    category: 'suspense',  
    first_name: 'Steven',  
    last_name: 'King' },  
  { title: 'Scary Stuff',  
    category: 'occult',  
    first_name: 'Steven',  
    last_name: 'King' },  
  { title: 'Persistent Neutral Info Mediaries',  
    category: 'management',  
    first_name: 'Maegan',  
    last_name: 'Frami' },  
  { title: 'Enhanced Background Frame',  
    category: 'engineering',  
    first_name: 'Winifred',  
    last_name: 'Turner' },...</pre>

The main difference between the dataset and the rowset is that when populating the database from the casual-generated data, I eliminated duplicate authors (by name) and book titles (by category):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5963c0c744347913e8e6bc4ceacb4ac5?postId=fd6ff7599052" data-media-id="5963c0c744347913e8e6bc4ceacb4ac5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Converting to JSON



![](https://cdn-images-1.medium.com/max/1600/1*Bqpso0-O-T-b4_wujzgmpA.jpeg)

Gratuitous kitten picture.



You might notice that the dataset results were in JSON format already. What this post aims for, though, is to build a containment hierarchy that shows the relationships between authors, books, and categories in a concise way. That’s not the case with the rowset values, where the results are glorified key-value pairs, where each pair is a column name and value from a table row.

So, for example, say I want to list authors, the categories they write in, and the titles of books in those categories that they authored. I want to show each category just once, and each book within each category should be listed only once, also.

This is a pretty common type of reducing operation that is often applied to rowset data. One way to conquer the problem is to declare a container object, then populate it by looping through the rowsets. A typical implementation might be:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f6473e8d8b2767800c65c86f5c73c141?postId=fd6ff7599052" data-media-id="f6473e8d8b2767800c65c86f5c73c141" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The `handrolled()`method gets a bit hairy the deeper the hierarchy. Local variables are used to reduce long path lengths. We have to keep the meta-structure in mind to write the proper initializations of properties in the JSON object. What could be simpler?

The results returned are:

<pre name="5e53" id="5e53" class="graf graf--pre graf-after--p">...  
        "Doyle,Arthur": {  
            "categories": {  
                "thriller": {  
                    "titles": [  
                        "The Case of the Spotted Dick",  
                        "The Case of the Mashed Potato"  
                    ]  
                },  
                "mystery": {  
                    "titles": [  
                        "The Case of the Spotted Dick"  
                    ]  
                }  
            }  
        },  
        "Asimov,Isaac": {  
            "categories": {  
                "science": {  
                    "titles": [  
                        "Once in a Venusian Sun",  
                        "Total Multi Tasking Forecast"  
                    ]  
                },  
                "general interest": {  
                    "titles": [  
                        "Total Multi Tasking Forecast",  
                        "Once in a Venusian Sun",  
                        "Fourth Foundation"  
                    ]  
                }  
            }  
        },  
        "Kilback,Bradley": {  
            "categories": {  
                "management": {  
                    "titles": [  
                        "Mandatory Solution Oriented Leverage"  
                    ]  
                },  
                "engineering": {  
                    "titles": [  
                        "Multi Layered Fresh Thinking Framework",  
                        "Total Scalable Neural Net",  
                        "Mandatory Solution Oriented Leverage"  
                    ]  
                },  
                "reference": {  
                    "titles": [  
                        "Multi Layered Fresh Thinking Framework"  
                    ]  
                }  
            }  
        },...</pre>

### Building a tree with Treeize

The npm module treeizeis designed to simplify the conversion of rowsets to structured JSON data through the use of descriptive keys. Installation through npm is per usual:

<pre name="efbf" id="efbf" class="graf graf--pre graf-after--p">npm install --save treeize</pre>

#### JSON Rowsets

Treeize is able to recognize reoccurring patterns in the rowsets. It transforms them according to how the key names are defined in metadata passed in as the seed structure. Here’s the code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/151bdb1c4941cf532e35c64773f87a13?postId=fd6ff7599052" data-media-id="151bdb1c4941cf532e35c64773f87a13" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F3497069%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This is about a dozen lines of code compared to double that for the hand-rolled version. Notice the key values used in the mapping operation. Treeize recognizes plurals as collections, so `categories`and `titles`will be arrays. The colons (‘:’) in the names indicate nesting. `Type`will be a property of an object in the array of categories, and `name`will be a property in all objects in titles.

The tree is built when `authors.grow(seed)` is called, and the results retrieved through `authors.getData()`. However, it doesn’t _quite_ yield the same results as what we had from the hand-rolled method:

<pre name="6192" id="6192" class="graf graf--pre graf-after--p">...,  
{  
    "name": "Glover, Ashley",  
    "categories": [  
        {  
            "type": "engineering",  
            "titles": [  
                {  
                    "name": "Intuitive Full Range Capacity"  
                },  
                {  
                    "name": "Organic Encompassing Core"  
                }  
            ]  
        },  
        {  
            "type": "reference",  
            "titles": [  
                {  
                    "name": "Distributed Client Server Service Desk"  
                },  
                {  
                    "name": "Organic Encompassing Core"  
                }  
            ]  
        },  
        {  
            "type": "management",  
            "titles": [  
                {  
                    "name": "Organic Encompassing Core"  
                }  
            ]  
        }  
    ]  
},...</pre>

One notable difference is that categories are not named objects (as before), but objects with a `name`property. `Title` is also not just an array of strings, but an array of objects with `name`as the title. Treeize interprets `categories`and `titles`as arrays of objects, not as maps (or arrays of primitives). For most use cases, this is not much of an issue. But, if you need to find a category by name quickly (rather than iterate through an array of categories), then you can take care of that [through a couple of reduce operations](https://gist.github.com/JeffML/1bbe228f271765d3ee3a917196e8a81c) to arrive at the same structure as before:

<pre name="10a9" id="10a9" class="graf graf--pre graf-after--p">,...     
    "Doyle, Arthur": {  
        "categories": {  
            "mystery": {  
                "titles": [  
                    "The Case of the Spotted Dick",  
                    "Pre Emptive Needs Based Approach",  
                    "The Case of the Mashed Potato"  
                ]  
            },  
            "thriller": {  
                "titles": [  
                    "The Case of the Mashed Potato",  
                    "The Pound Puppies of the Baskervilles"  
                ]  
            }  
        }  
    },...</pre>

#### Spreadsheets

Sometimes data comes from spreadsheets rather than relational databases. Treeize is adept at handling this case, too. Instead of using descriptive keys as we did with rowset data in JSON format, the same descriptive format is used as column values in a header row:

<pre name="9572" id="9572" class="graf graf--pre graf-after--p">var seed **=** [  
**['name', 'categories:type', 'categories:titles:name'],**   
['Doyle, Arthur', 'mystery', 'The Adventure of the Gyring Gerbils'],  
['Schuppe, Katarina', 'engineering', 'Configurable Discrete Locks'],  
['Doyle, Arthur', 'mystery', 'Holmes Alone 2'],  
['Asimov, Isaac', 'science fiction', 'A Crack in the Foundation']  
];</pre>

<pre name="05f2" id="05f2" class="graf graf--pre graf-after--pre">// same as before...  
var authors = new Treeize();  
authors.grow(seed);  
return authors.getData();</pre>

There are [quite a few options](https://www.npmjs.com/package/treeize#1-getset-options-optional) that treeize supports, and I’ve only shown the basics. It is a powerful tool that makes light work of transforming row-based data structures.

Complete source [can be found at my GitHub](https://github.com/JeffML/rowsets2json).








