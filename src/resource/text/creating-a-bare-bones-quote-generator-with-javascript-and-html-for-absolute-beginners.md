---
author: Sophanarith Sok
authorTwitter: https://twitter.com/NnjaRattleSnake
authorFacebook: none
title: "How to build a random quote generator with JavaScript and HTML, for absolute beginners"
subTitle: "This tutorial is intended for beginners who want to learn how to create a simple web application using JavaScript. It will help you under..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9CjruUOhJY8hgQ_WAsSqWw.png
url: https://medium.freecodecamp.org/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08
id: creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08
date: 2016-09-03T02:42:10.406Z
tags: [
  "JavaScript",
  "Web Development",
  "Web Design",
  "Programming",
  "Life Lessons"
]
---
# How to build a random quote generator with JavaScript and HTML, for absolute beginners







![](https://cdn-images-1.medium.com/max/2000/1*9CjruUOhJY8hgQ_WAsSqWw.png)







This tutorial is intended for beginners who want to learn how to create a simple web application using JavaScript. It will help you understand the interaction between JavaScript and an HTML document, and how they work together to display things on the web browser for people to see.

If you have absolutely zero experience in HTML and JavaScript, no worries. I will walk you through every single line of code, and explain everything in detail. By the time you reach the end of this lesson, you should have a much better understanding of how JavaScript works with with HTML to make web pages interactive.

In this project, we’ll build a random quote generator that displays a random quote to the user every time they press a button. To get started, you’ll need three essential things that are almost always used for every web project:

*   a web browser
*   a text editor
*   a desire to build things

For this tutorial I will be using the Google Chrome web browser, the [Sublime Text 3 Editor](https://www.sublimetext.com/3), and of course, my own desire to build and teach. You can use whatever tools you feel comfortable with.

### Let’s get started!

The first thing we’ll do is create the folder that will contain all of our files that make up the project. **Create an empty folder** on your desktop and name it “quote generator”. **Open up Sublime Text** and **drag the file into sublime**. Now we should have the folder accessible through the sidebar.



![](https://cdn-images-1.medium.com/max/1600/1*iGah2fSgoOs1eTgixchQ3Q.png)

Create a blank folder on your desktop





![](https://cdn-images-1.medium.com/max/1600/1*gB_Nmoad9oD-LxvmhB8f3Q.png)

Drag the folder into Sublime Text. Now it shows up on the sidebar menu.



Most web project consist of at least one HTML, JavaScript, and a CSS file. Let’s create these files within the “quote generator” folder.

In Sublime Text,right click the “quote generator” folder on the sidebar and click on **create new file**. An input bar will pop up on the bottom to name the file. Type “index.html” and press enter. Now you have created the index.html file. **Repeat this step two more times**, but create a file named “javascript.js” and “style.css” (without the quotation marks)**.** It’s important to make sure that when you name a file that the letters are always lowercase to prevent any complications.



![](https://cdn-images-1.medium.com/max/1600/1*0_OYdyCQvkD8LVFWxvd8KA.png)

Your files should now look like this.



Now that we have all of our files setup, let’s create our HTML file that will work as the foundation for our web project. We’ll start off with a bare bones HTML code within our index.html file before we can add anything.

Below is our HTML file with nothing in it. You can think of this as our HTML skeleton that will hold all the meat (content), which we will add later.



![](https://cdn-images-1.medium.com/max/1600/1*cswp2GDupMRw8DPItTkPmA.png)



Now, we will have to link our JavaScript file to our HTML document so that our JavaScript code will be able interact with the HTML document. We’ll also add text within the **<title>** tags, add an **<h1>** element, create a **** element with an **onclick** attribute with “newQuote()” passed into it.



![](https://cdn-images-1.medium.com/max/1600/1*MZgAxLTxyDWSn_AJfzLISA.png)



### Breaking it down

If you’re confused as to how each part of the HTML code serves its purpose, then I will explain it to you here. If you know exactly what each element does and why it’s there, then you may skip to the next section to continue.

First, we added “Quote Gen” between the **<title>** tags. The title tag takes the text between it and displays it on the tab of your web browser when it is opened.



![](https://cdn-images-1.medium.com/max/1600/1*LPkTp65qOyMtPJG6Q4P53g.png)

Contents between <title> tags will show up on the projects tab when opened in a browser.



During the first step, we also need to make sure to link the javascript.js file at the bottom of the HTML document right before the closing **<body>** tag.



![](https://cdn-images-1.medium.com/max/1600/1*ecsEEifOsFJgppdzCLavaQ.png)

Link to the javascript.js file



Secondly, we created an **<h1>** element with “Simple Quote Generator” within it. This will serve to display a title within our web page.



![](https://cdn-images-1.medium.com/max/1600/1*49TfOW4xx7CvTWV1G9N0vQ.png)

The <h1> tag will display large text



Then, we created a **** element works as a divider for HTML documents. **** element.



![](https://cdn-images-1.medium.com/max/1600/1*t4TyiuXnNPoc3VCyYIADiA.png)

Quotes will be displayed within this 



After that, we create a **<button>** element with an **onclick** attribute with “newQuote()” passed in as a parameter. The **<button>** element as you guessed, is a button that will do something when you click on it. The **onclick** attribute is used to set a function to the button, so that every time you click on the button, it will run the function that was passed into the **<button>**’s **onclick** attribute.

In this case, every time you click on the button, it will run the function newQuote(), of course, we haven’t defined the newQuote() function yet. If you open up the project within a browser and press the button it will throw an error within the console since the function does not currently exist.



![](https://cdn-images-1.medium.com/max/1600/1*2oZ0sCSLwAMr-LkT4lR_hQ.png)

Our <button> element will produce this button



Finally, here is a refresher to show what our full index.html file currently looks like and what it produces in the web browser. To open the project, use a web browser to open the index.html file.







![](https://cdn-images-1.medium.com/max/2000/1*AkiS2Y0Pu8StCvZbANb_xg.png)

What we have so far







### Thinking logically using code

It’s finally time to start working on the JavaScript in our javascript.js file so we can develop our own quote generation functionality.

Now, before we begin coding, let’s think logically about how we can create a quote generating machine with code. We can’t just start coding without thinking first.

We need to figure out what we want, and when we want it. For this project, we want quotes! When do we want it? We want it now! Oh, erm… I mean we want it whenever the user presses the button.

Now that we solved the first question, we need to ask the second. What are quotes? I mean really, what are they?



![](https://cdn-images-1.medium.com/max/1600/1*7KnvfVpZXP7aw9NRQca1lw.jpeg)

“Quotes are strings.”



Thanks Jaden! Yes! Quotes are made up of letters, which make up words. In the programming world, words are classified as strings, therefore, our quotes will need to be [**strings**](http://www.w3schools.com/jsref/jsref_obj_string.asp)!

Since we know that we will have multiple quotes, and each one will be picked out randomly, the best choice would be to store multiple strings within an [**array**](http://www.w3schools.com/js/js_arrays.asp).

If you didn’t already know, elements within an array are retrieved by calling its [**array index number**](http://www.w3schools.com/js/js_arrays.asp). The technical details are out of this tutorial’s scope, but in simple terms, each element within an array is represented by a whole number in chronological order. The first element of an array has an index number of 0, every element after that goes up by one.

In order to retrieve a random quote from an array, we now know that we need to produce a random number every time the user clicks on the button. Then, we would use that random number to retrieve a quote from the array and place that quote onto the HTML document, which in turn, would display the quote on the browser to the user.

That’s it! We solved how to create a Random Quote Generator by logically thinking in code! Here’s a summary of the logic that we’ve come up with for our project:

1.  Quotes are multiple strings that need to be stored in an array.
2.  Every time the button gets pressed, a random whole number needs to be generated.
3.  The number will be used as a representation of the array index number for the quote array.
4.  Once we retrieve the randomly picked quote from the array using our randomly generated whole number, we will place it to the HTML document.

### Coding time!

Wow! We’ve gotten this far and haven’t started programming yet! Welcome to the world of programming!

Just kidding.

Not really.

You’re going to spend a lot of time coding in this career (or hobby). But my point is that you’re going to spend even more of that time thinking about programming logic and how to solve problems. Programming is not about hacking 100 words per minute for 20 minutes on the keyboard. That’s not going to happen.





<iframe data-width="435" data-height="249" width="435" height="249" src="https://medium.freecodecamp.org/media/afced5f52edf0959126a92c80e48843e?postId=5264e1725f08" data-media-id="afced5f52edf0959126a92c80e48843e" allowfullscreen="" frameborder="0"></iframe>



No.



Now that we have all of the logic out of the way. Let’s start coding. We will now be working within the **javascript.js** file.

We need to either create our own quotes or copy them from an online source.

I Googled “Best Quotes” and copied the first 10 from a [_website_](http://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/)_, then_ placed them in an array separated by commas. Make sure you place your quotes in single or double quotation marks. If your quote consists of apostrophes, single or double quotes, you may need to use backslashes to [**escape these characters**](http://www.w3schools.com/js/js_strings.asp) so that JavaScript will know that the symbols are part of the string, and not the coding syntax.

As you can see on the picture below, I have defined a variable called “quotes” and set it equal to an array full of the quotes that I’ve chosen off the [internet](https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg).







![](https://cdn-images-1.medium.com/max/2000/1*SVJuLemM2aHiuiwAHBqmzg.png)

My quote array.







Now we need to create our newQuote() function that I mentioned earlier in the HTML section of this tutorial. For our newQuote() function, we need to generate a **random whole number that ranges from 0 to the length of our quotes array**. I will explain further below.

First, we call the Math.floor() function. The Math.floor() function takes in a parameter and rounds the number downward to the nearest integer. For example, if we call Math.floor(5.7) it will return 5.

Second, we will pass in Math.random() as a parameter into Math.floor(). The Math.random() function will generate a random decimal number between 0 and 1.

So let’s say we have this:



![](https://cdn-images-1.medium.com/max/1600/1*seX2GQBGVyg7iAj59tj7GQ.png)

Calling Math.floor() with Math.random() passes as a parameter



If we console log our randomNumber at this state, it will always return 0\. This is because Math.random() will always be a decimal between 0 and 1 such as 0.4, 0.721, 0.98, and so on. Because we pass Math.random() into Math.floor() as a parameter, Math.floor() is always rounding down to the nearest decimal, therefore, every decimal between 0 and 1 will always revert back to 0.

So what’s the point of doing this? Well, to create our array index numbers, we need whole numbers, but we need random whole numbers. To generate random whole numbers and break away from only returning 0, we will need to take our random decimal and multiply it by a whole number.

Now let’s try something like this:



![](https://cdn-images-1.medium.com/max/1600/1*brj-QRKTZCUvwbBzVF8CBQ.png)

A randomly generated decimal multiplied by 20, then rounded down to the nearest whole number



If we console log randomNumber, the results will be anywhere between 1 and 19\. Now I could use this current state of randomNumber to pull out a quote from the quotes array, but it will only work if the array index number exist within the array, otherwise, an error will be thrown.

For example:



![](https://cdn-images-1.medium.com/max/1600/1*3JaYVWqjXP9neimXXAz34Q.png)

This will return undefined



I currently only have 10 strings within my quotes array, so any number above 9 will return **undefined** since it does not exist within the array.

To solve this problem, we need to only multiply Math.random() with the length of our quotes array. By doing this, we can add or remove as many strings from the array as we like and our randomNumber variable will always return a valid number since we are using the quotes.length method to always get the current length of our array.



![](https://cdn-images-1.medium.com/max/1600/1*xm3wHx2OriKnMUetoU_MEQ.png)

randomNumber will always generate a valid array index number for our quotes array



Now we need a way to use the value of randomNumber to randomly retrieve a quote from the quotes array and place the quote into our HTML document and display it to our users.



![](https://cdn-images-1.medium.com/max/1600/1*RJIAwk-neVc82TcgYCZ1sg.png)

Placing the quote into the HTML quoteDisplay element



Remember how I mentioned that we use HTMLID’s to allow JavaScript to easily grab and manipulate HTML elements? Well, that’s what we’re doing now to the HTML **quoteDisplay** ID we created earlier.



![](https://cdn-images-1.medium.com/max/1600/1*CfRX7oTE08Jmu5FBI6NHyQ.png)

Grabbing the HTML element with id of quoteDisplay



Using document.getElementById() we can pass in any string and JavaScript will look through our HTML document and retrieve it for use to do whatever we want with it. We will pass in ‘quoteDisplay’ as a parameter to retrieve the HTML element with the id of “quoteDisplay”.

Now we will use the .innerHTML method to pass a randomly retrieved quote from our array as the value that will be added into our HTML quoteDisplay element.



![](https://cdn-images-1.medium.com/max/1600/1*HoxL49JVaVwpggIkiCL2lQ.png)

Passing in our random quote as the inner value of the quoteDisplay element



We set innerHTML equal to our quotes array with our randomNumber variable passed as an array index number. Now our newQuote() function is complete!







![](https://cdn-images-1.medium.com/max/2000/1*bHjHZVJf05BCUpeEciSGTQ.png)

Your javascript.js file should look similar to this







### Mission Accomplished!

If you’ve reached this part of the tutorial, you’ve completed the project! Congratulations! You are practically done building the Random Quote Generator.

Now all you need to do is open the project up in your browser and see if it works! Do this by dragging your index.html file into your browser window.

Press the button, and it should display a random quote to your screen. Press the button as many times as you like. Each time, a new quote should replace current one on screen.

You can add as many quotes as you want into the quotes array.



![](https://cdn-images-1.medium.com/max/1600/1*yKlV6ORDPIsTc0qMaP0Log.png)

Finished Product



Take a look at an overview of our entire project files side by side that make up this Random Quote Generator.







![](https://cdn-images-1.medium.com/max/2000/1*6byNQiPEKjPVwQg1CbQZDA.png)

Our Project’s Source Code







### What now?

You’ve created a fully functional Random Quote Generator and you’re probably wondering where do you go on from here.

You’re probably thinking that this Random Quote Generator looks very boring, and no one would probably use it. And you’re absolutely right. This project looks quite plain, and it’s up to you to change that.

You can improve upon this project by adding your own functionalities and styling to it.

At the beginning of this tutorial we created a style.css file that we didn’t use. [**CSS**](http://www.w3schools.com/css/css_intro.asp) **is used to make web pages pretty and colorful.** It is up to you to add to the CSS file for styling if you want.

You can search for some CSS tutorials for some additional guidance. Let your imagination run wild, and make this project yours! Do whatever you want! Coding is magic and you’re a wizard, Harry!

If you’re curious to see how much a project can change with CSS and a few more lines of JavaScript code, check out my own version of this Random Quote Generator that I titled _“Epiphany Clock”_[**here**](http://codepen.io/sok213/full/NqJYzb/).











* * *







If you enjoyed this tutorial please click the heart button and share it! Feel free to leave any comments, questions, or feedback. Thank you and happy coding!








