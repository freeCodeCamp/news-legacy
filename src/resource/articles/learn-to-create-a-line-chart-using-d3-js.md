---
original: >-
  https://medium.freecodecamp.org/learn-to-create-a-line-chart-using-d3-js-4f43f1ee716b?source=rss----336d898217ee---4
title: Learn to create a line chart using D3.js
pubDate: '2018-05-02T03:17:56.000Z'
author:
  avatar: 'https://cdn-images-1.medium.com/fit/c/120/120/1*_fe6q5Mazu3qxnW5XBKOFA.jpeg'
  name: Sohaib Nehal
  bio: >-
    Full Stack JavaScript Developer. Passionate about traveling, meeting new
    people, trying new food and discussing unique ideas.
  profileLink: 'https://medium.freecodecamp.org/@sohaib.nehal?source=post_header_lockup'
  social:
    twitter: 'https://twitter.com/Sohaib_Nehal'
  slug: sohaib-nehal
slug: learn-to-create-a-line-chart-using-d3-js
---
* * *

Learn to create a line chart using D3.js
========================================

Use the power of D3.js to draw beautiful representations of your data.
----------------------------------------------------------------------

[![](https://cdn-images-1.medium.com/max/2000/1*YjFjjGpFZ-yDDrM97TKyVg.png)](https://scrimba.com/g/gd3js)

Learn D3.js for free on Scrimba

D3.js is an open source JavaScript library used to create beautiful data representations which we can view in any modern browser. Using D3.js, we can create various kinds of charts and graphs from our data.

In this tutorial, we are going to create a line chart displaying the Bitcoin Price Index from the past six months. We will be pulling in data from an external API and rendering a line chart with labels and an axis inside the DOM.

**We’ve also created a free D3.js course on Scrimba.** [**Check it out here.**](https://scrimba.com/g/gd3js)

#### Getting started

First of all, we will import the D3.js library directly from the CDN inside our HTML.

<html>  
  <head>  
    <link rel="stylesheet" href="index.css">  
  </head>  
  <body>  
    <svg></svg>  
    <script src="https://d3js.org/d3.v4.min.js"></script>  </body>  
</html>

We have also added an `<svg></svg>` tag inside our HTML to create the line chart inside it using D3.js

Let’s now move towards writing our JavaScript code. First of all, we want to load our data of the Bitcoin Price Index from an external API once the DOM has been loaded.

#### **Fetch Data**

var api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

document.addEventListener("DOMContentLoaded", function(event) {  
   fetch(api)  
     .then(function(response) { return response.json(); })  
     .then(function(data) {   
         //DO SOMETHING WITH DATA    
     })  
});

In the code above, we are using the `fetch` method to get the data from an external API. We then parse it using the `.json()` method.

We now want to convert this data into key/value pairs so that they are in the format of `date:price`. For this, we are going to send our data to another function which will parse and return it in our desired form.

#### **Parse Data**

....  
.then(function(data) {   
         var parsedData = parseData(data)  
 })

function parseData(data) {  
   var arr = \[\];  
   for (var i in data.bpi) {  
      arr.push(  
         {  
            date: new Date(i), //date  
            value: +data.bpi\[i\] //convert string to number  
         });  
   }  
   return arr;  
}

We pass our data to a function `parseData` which returns another array of objects. Each object contains a date and the price of bitcoin on that particular date.

Once we have the data in our required format, we will send this data to the `drawChart` function in which all of the remaining code will be written using D3.js to render the line chart.

....  
.then(function(data) {   
   var parsedData = parseData(data);  
   drawChart(parsedData);  
})

#### Select SVG element

In the `drawChart` function, we first of all select our SVG element and provide it with some styling.

function drawChart(data) {

   var svgWidth = 600, svgHeight = 400;  
   var margin = { top: 20, right: 20, bottom: 30, left: 50 };  
   var width = svgWidth - margin.left - margin.right;  
   var height = svgHeight - margin.top - margin.bottom;

   var svg = d3.select('svg')  
     .attr("width", svgWidth)  
     .attr("height", svgHeight);  
...

In the code above, we are setting the width and height of the SVG container by first selecting it using the `select()` method and then using the `attr()` method to assign the attributes.

We have also defined margins and are using their values in calculating the width and height attributes of the SVG container. These margin values will help us later in positioning and displaying our chart correctly.

Using CSS, we have given borders to our SVG container:

<style>  
    .line-chart  
    {  
        border: 1px solid lightgray;  
    }  
</style>

So far, we have nothing inside our DOM yet:

![](https://cdn-images-1.medium.com/max/1600/1*P62TLPk5q1SE7iS5BDGRfQ.png)

Next up, we are going to create a group element to hold our line chart, axis, and labels.

#### **Create and Transform Group Element**

...  
var g = svg.append("g")  
   .attr("transform",   
      "translate(" + margin.left + "," + margin.top + ")"  
   );

Grouping elements helps organize similar or related elements together. Here, after rendering a group element, we provide it some transformation.

D3 gives us various options to transform our elements. In the code above, we are using the `translate` property to reposition our group element with margins on its left and top.

#### **Add Scales**

Now, we want to add scales to our chart.

var x = d3.scaleTime().rangeRound(\[0, width\]);

var y = d3.scaleLinear().rangeRound(\[height, 0\]);

As we know, our data consists of dates and the value of Bitcoin on those dates. Therefore, we can assume that the x-axis would contain the dates and y-axis would contain values. That is how we can see the variation in the line chart with respect to time.

And so, in the code snippet above, we created a scale of type time on the x-axis and linear type on the y-axis. We are also providing these scales with the ranges as per the width and height of our SVG container.

#### Create a Line

Let’s now move towards defining our line by using the `d3.line` method. We will be defining the x and y attributes of the line by passing in anonymous functions and returning the date object and bitcoin value for that particular day.

var line = d3.line()  
   .x(function(d) { return x(d.date)})  
   .y(function(d) { return y(d.value)})  
   x.domain(d3.extent(data, function(d) { return d.date }));  
   y.domain(d3.extent(data, function(d) { return d.value }));

#### Append Axises

We are now going to append our left and bottom axes inside our group element for the line chart. The left axis will represent the value of bitcoin while the bottom axis displays the corresponding date.

g.append("g")  
   .attr("transform", "translate(0," + height + ")")  
   .call(d3.axisBottom(x))  
   .select(".domain")  
   .remove();

In the above code, we are appending a group element inside our main group and translating it at the very bottom our container. Then, we pass `d3.axisBottom` method in the call function where `d3.axisBottom` takes the parameter of `x` which is defined in the **Add Scales** section.

g.append("g")  
   .call(d3.axisLeft(y))  
   .append("text")  
   .attr("fill", "#000")  
   .attr("transform", "rotate(-90)")  
   .attr("y", 6)  
   .attr("dy", "0.71em")  
   .attr("text-anchor", "end")  
   .text("Price ($)");  
  

Similar to the bottom axis, we append another group element and then call on it the `d3.axisLeft` method which takes the parameter of `y`. Then, we also style our axis by assigning it different attributes and a label.

If we save and refresh the page, we can see our axes being rendered inside the DOM:

![](https://cdn-images-1.medium.com/max/1600/1*g4xUQ-hRIIGna5WlSGcFTw.png)

Left and bottom axes

#### Append a Path

In the last step, we will be appending a path inside our main group element. This path will actually draw the line chart as per the values of the data.

We pass our dataset using the `datum` method and then set the attributes of fill color, stroke color, and width. In the end, we set the attribute of `d` which actually gives instruction to the SVG path about where to connect the points of the path.

g.append("path")  
.datum(data)  
.attr("fill", "none")  
.attr("stroke", "steelblue")  
.attr("stroke-linejoin", "round")  
.attr("stroke-linecap", "round")  
.attr("stroke-width", 1.5)  
.attr("d", line);

Here is the final result:

![](https://cdn-images-1.medium.com/max/1600/1*x-3p2C-nd9_RbXOZG0Dx0A.png)

Line chart

#### Conclusion

Congratulations! We have successfully created the line chart using D3.js. You can check out the official documentation of [D3.js](https://github.com/d3/d3/wiki) to learn more about different charts and graphs you can create.

If you’re interested in learning more about D3.js, be sure to [check out our free course on Scrimba.](https://scrimba.com/g/gd3js)

* * *

_I am Sohaib Nehal. I am a Full-Stack Web Application Developer. You can reach me at sohaib.nehal@ymail.com or on Twitter @Sohaib_Nehal. Thank you :-)_
