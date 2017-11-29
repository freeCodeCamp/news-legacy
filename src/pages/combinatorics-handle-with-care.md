---
author: Jeff Lowery
authorTwitter: https://twitter.com/jmlowery
authorFacebook: https://facebook.com/10209080625586279
title: "Combinatorial explosions explained with ice cream: how to add a little and get a lot"
subTitle: "Let’s explore the fun, counter-intuitive world of combinatorics...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*IwwZN7qurglWUXNLYR35QQ.jpeg
url: https://medium.freecodecamp.org/combinatorics-handle-with-care-ed808b48e5dd
id: combinatorics-handle-with-care-ed808b48e5dd
date: 2017-02-04T19:11:00.431Z
tags: [
  "JavaScript",
  "Data Structures",
  "NoSQL",
  "Mathematics",
  "Programming"
]
---
# Combinatorial explosions explained with ice cream: how to add a little and get a lot



![](https://cdn-images-1.medium.com/max/1600/1*IwwZN7qurglWUXNLYR35QQ.jpeg)



Let’s explore the fun, counter-intuitive world of combinatorics.

Combining values to form sets of distinct combinations can be a tricky thing. Even if you ignore order, the number of possible sets grows alarmingly.

For an array of two values [1, 2], you can generate:

*   [] (empty set)
*   [1]
*   [2]
*   [1,2] (or [2,1])

If repeats are allowed ([2, 2] for example), the increase is even greater. As the number of input values increase, the number of corresponding output sets [shoots through the roof](http://www.intmath.com/counting-probability/4-combinations.php)!



![](https://cdn-images-1.medium.com/max/1600/1*7DsXxogHWKpaynmwaTfE7Q.jpeg)

[Combinatorial Explosion](http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss), indeed













* * *







Let’s call the input values **items** and each combination of those values a **choice**. Furthermore, let’s allow for multiple items, each with distinct choices. A good working example would be a menu. We’ll simulate the menu of **Ye Olde Ice Cream Shoppe**, which offers its customers combinations of ice cream, toppings, and syrup flavors.

The ice cream flavors are: **CHOCOLATE, STRAWBERRY, VANILLA**

Toppings: **pineapple, strawberry, coconut flakes, pecans**

Syrups: **chocolate, marshmallow, butterscotch, maple**

There are some constraints on the choices: customers can choose any **two** ice creams, **two** toppings, and **one** syrup. Ice cream and topping choices are exclusive, meaning that I can’t choose pineapple + pineapple, for instance. The customer may choose to have no toppings and no syrup, but must choose at least one ice cream. With these constraints, the rate of increase is exponential, of the order 2 to the nth power, which is considerably less than if order was significant and duplicates allowed.

#### Palatability

**Ye Olde Ice Cream Shoppe** is actually quite modern in its approach to business, and is developing an artificial intelligence expert system to judge which combinations of ice cream, topping, and syrup are palatable. Servers will be shown a warning on their registers when a customer chooses an unpalatable selection. The servers are then instructed to double check with the customer that their order is correct.

### Step 1: Building the Data

Code for this article can be found [here](https://github.com/JeffML/Combinatorics). I will assume you’re familiar with JavaScript and Node.js. A working knowledge of Lodash (or Underscore) is helpful. The code uses a map/reduce database for storage.

The first step will be to create a database of all ice cream, topping, and syrup combinations. The inputs will be as follows:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f04bf3f7fb09f9cf0a48644fa2490d2d?postId=ed808b48e5dd" data-media-id="f04bf3f7fb09f9cf0a48644fa2490d2d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>



Ice cream values are capitalized so that CHOCOLATE ice cream is distinguishable form chocolate syrup



With this data, I can write a [Combinator](https://github.com/JeffML/Combinatorics/blob/master/Combinator.js) function that takes each menu item and generates all possible permitted combinations. Each combination is stored as an array. For example, ice cream combinations would look like:

<pre name="4ea8" id="4ea8" class="graf graf--pre graf-after--p">[ [ ‘CHOCOLATE’, ‘STRAWBERRY’ ],  
 [ ‘CHOCOLATE’, ‘VANILLA’ ],  
 [ ‘CHOCOLATE’ ],  
 [ ‘STRAWBERRY’, ‘VANILLA’ ],  
 [ ‘STRAWBERRY’ ],  
 [ ‘VANILLA’ ] ]</pre>

Once the combinations of ice cream, toppings, and syrups are determined, all that’s left is to iterate each item combination with the others:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/898269f090cd4409fa1f44e9cc289719?postId=ed808b48e5dd" data-media-id="898269f090cd4409fa1f44e9cc289719" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This yields a combination of ice cream(s), topping(s), and syrup, like:

<pre name="f825" id="f825" class="graf graf--pre graf-after--p">[ [ 'VANILLA' ], [ 'coconut flakes', 'pecans' ], [] ],  
  [ [ 'VANILLA' ], [ 'coconut flakes' ], [ 'chocolate' ] ],  
  [ [ 'VANILLA' ], [ 'coconut flakes' ], [ 'marshmallow' ] ],...</pre>

The choices shown translate as:

*   Vanilla ice cream with coconut flakes and pecans, no syrup
*   Vanilla ice cream with coconut flakes and chocolate syrup
*   Vanilla ice cream with coconut flakes and marshmallow syrup

Even with just a few restricted menu items, the number of permitted choices is 330!

### Step 2: Storing the Data

With every combination of orderable items now determined, further work can be done. The AI system for determining palatable choice combinations is turning out to be complex and won’t be embedded in the registers’ operating system. Instead, an AJAX request will be made to a server housing the AI program. The inputs will be the customer’s menu choices, and the output will rate the palatability of those choices as one of: **[ugh, meh, tasty, sublime].** A palatability rating of **ugh** triggers the aforesaid warning.

We need a fast response to the request, so the palatability ratings will be cached in a database. Given the nature of exponential increase, this could evolve to become a Big Data problem if more item choices are added to the menu in the future.

Let’s say it is decided to store choice combinations and ratings in a NoSQL database. Using [PouchDB,](https://pouchdb.com/guides/) each choice and palatability value are stored as JSON documents. A [_secondary index_](https://pouchdb.com/guides/queries.html) (a.k.a. _view_) with each choice as a key will allow us to quickly look up the palatability rating. Instead of pushing the data into an **allChoices** array as shown above in [buildChoices.js](https://gist.github.com/JeffML/c0f9c7c02272da7c57604bd685910cd2), I can push JSON documents to the database for storage.

Proceeding naively, I can make a couple of changes in Step1.js to arrive at Step2.js: first of all, I need to install PouchDB via npm, then require it. Then, I create a NoSQL database called **choices**.

<pre name="a858" id="a858" class="graf graf--pre graf-after--p">var PouchDB = require('pouchdb');  
var db = new PouchDB('choices');</pre>

Now, each choice is posted to the choices database:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/bd12bd50982d0fff477890f4d5ec04d8?postId=ed808b48e5dd" data-media-id="bd12bd50982d0fff477890f4d5ec04d8" allowfullscreen="" frameborder="0"></iframe>





This works! Sort of. As can be inferred by the callback parameter to **db.post**, that operation is asynchronous. What we see in the log is:

<pre name="dace" id="dace" class="graf graf--pre graf-after--p">>node Step2.js  
done??  
stored 1  
stored 2  
stored 3  
...</pre>

So the code says it’s done before even record 1 has been stored. This will be a problem if I have further processing to do against the database and all the records aren’t there yet.

### Step 3: Fixing and Refining

There’s also a more subtle problem: potential resource exhaustion. If the database limits the number of concurrent connections, a large number of simultaneous post requests may result in connection timeouts.

For [Step3.js](https://github.com/JeffML/Combinatorics/blob/master/Step3.js), I did a bit of bug fixing, reformatting and refactoring of what was written in Step2.js. One bug was that each run added more and more records to the database, duplicating what was there before. The solution was to destroy the existing database, re-create it, and then run the main program:

<pre name="5b02" id="5b02" class="graf graf--pre graf-after--p">// remove old  
db.destroy(null, function () {  
    db = new PouchDB('choices');  
    run();  
});</pre>

Next was to add a running count of documents stored and post requests in process so that the program: 1) knows when the last document is stored; 2) allows only five posts to proceed at any one time. The run() method looks like this now (with some omissions):





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/17bc2dfd6ed2abdb3b692d5f3376a918?postId=ed808b48e5dd" data-media-id="17bc2dfd6ed2abdb3b692d5f3376a918" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The main changes to note are that:

1.  A **postCount** tracks how many posts are outstanding
2.  An interval timer checks the **postCount** and will post and exit when post slots are available
3.  a **done()** handler is called when all choices are stored

### Step 4: Adding Palatability

With all possible menu choices in place, we can now have the AI determine the palatability of each. The AI is just a mock at the moment, which assigns random values to each document record in PouchDB. Those values will be stored in the database by updating each document with a taste rating.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e03d6151e496ddacc2b83865d7156e77?postId=ed808b48e5dd" data-media-id="e03d6151e496ddacc2b83865d7156e77" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Just to verify that we stored things correctly, we can dump the docs in the database to the console:

<pre name="0bde" id="0bde" class="graf graf--pre graf-after--p">db.allDocs({  
        include_docs: true  
    })  
    .then(docs => {  
        _.each(docs.rows, r => {  
            console.log(r.doc.choice, r.doc.taste)  
        });  
    });</pre>

<pre name="cf08" id="cf08" class="graf graf--pre graf-after--pre">//output looks like:  
/*  
[ [ 'STRAWBERRY' ], [ 'coconut flakes' ], [ 'maple' ] ] 'sublime'  
[ [ 'CHOCOLATE' ], [ 'pecans' ], [ 'chocolate' ] ] 'tasty'  
[ [ 'CHOCOLATE', 'STRAWBERRY' ], [], [ 'chocolate' ] ] 'sublime'  
[ [ 'VANILLA' ], [], [ 'marshmallow' ] ] 'meh'  
[ [ 'CHOCOLATE', 'STRAWBERRY' ],  
  [ 'pineapple' ],  
  [ 'marshmallow' ] ] 'meh'  
*/</pre>

### Step 5: Looking Up Palatability

The documents are in the database, but now there needs to be a way to determine what the palatability is for a customer’s choices. This is done by defining a view, which is a function that returns a key for each document, along with a value. What should the key be?

I could use r.doc.choice as the key, but arrays have an order and that order might change if the menu items defined in Step 1 were later rearranged. The key is just an identifier of the choice selection and doesn’t carry an semantic meaning of its own. What should work is to:

*   flatten each r.doc.choice array,
*   order the elements alphabetically, then
*   concatenate them together
*   result is a key

If more choices are added in the future, though, the key length might be over the limit allowed by the database. Instead of using the key as constructed, a hash the key could be used as the real key. A SHA256 hash in hex is 64 characters long, and the likelihood of a hash collision, even for a quadrillion choices, is essentially zero. Writing the hash function for choices is easy, using the Node.js **crypto** module and a Lodash chain:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2b03f81f031e6301523b3f6f4c6dd53d?postId=ed808b48e5dd" data-media-id="2b03f81f031e6301523b3f6f4c6dd53d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Adding the hash to our existing documents is a simple matter of iterating through each database document, computing its hash, and updating the document with a key value:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7171335d67d3312576ca1a2099e5038e?postId=ed808b48e5dd" data-media-id="7171335d67d3312576ca1a2099e5038e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Next, a database view is built using the document key field as an index; I’ll call it **choice**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4bf74ba896eeede60b66c1644d4d0888?postId=ed808b48e5dd" data-media-id="4bf74ba896eeede60b66c1644d4d0888" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





For any document key (hash of choice array), I can find its taste via the view **choice.** Now everything is in place to determine whether a customer’s choice is **ugh, meh, tasty,** or **sublime**. To test this, we make some random choices and see if we can find the taste:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/308122e1cf1068c107c95ff12a280be9?postId=ed808b48e5dd" data-media-id="308122e1cf1068c107c95ff12a280be9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The results are:

<pre name="1e65" id="1e65" class="graf graf--pre graf-after--p">=> node test  
VANILLA,coconut flakes,pecans,marshmallow tastes ugh  
CHOCOLATE,pecans,chocolate tastes sublime  
STRAWBERRY,VANILLA,pineapple,coconut flakes,marshmallow tastes tasty  
STRAWBERRY,pecans,maple tastes meh  
VANILLA,coconut flakes,pineapple,chocolate tastes sublime</pre>

That’s it! All that’s left is to write client software that submits choices via AJAX and gets a taste (palatability) value back. If it’s **ugh**, then up comes a warning on the register.











* * *







_In a subsequent post, I refine the algorithm used above._ [_Check it out_](https://medium.com/@jefflowery/recursive-generator-f8bc30e5e412#.wa7sl6bt7)_!_

### References

[**Exponential Growth Isn't Cool. Combinatorial Explosion Is.**  
_So much of the tech industry is obsessed with exponential growth. Anything linear is dying, or has been dead for years…_www.torbair.com](http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss "http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss")[](http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss)

[**Combinations and Permutations Calculator**  
_Find out how many different ways you can choose items. For an in-depth explanation of the formulas please visit…_www.mathsisfun.com](https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html "https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html")[](https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html)








