---
author: Déborah Mesquita
authorTwitter: https://twitter.com/dehhmesquita
authorFacebook: none
title: "A gentle introduction to D3: how to build a reusable bubble chart"
subTitle: "Getting Started with D3"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*Ywul1VdNkWbdFz3x5iVYCA.jpeg
url: https://medium.freecodecamp.org/a-gentle-introduction-to-d3-how-to-build-a-reusable-bubble-chart-9106dc4f6c46
id: a-gentle-introduction-to-d3-how-to-build-a-reusable-bubble-chart-9106dc4f6c46
date: 2017-03-11T19:20:44.916Z
tags: [
  "D3",
  "JavaScript",
  "Data Science",
  "Data Visualization",
  "Web Development"
]
---
# A gentle introduction to D3: how to build a reusable bubble chart

## Getting Started with D3







![](https://cdn-images-1.medium.com/max/2000/1*Ywul1VdNkWbdFz3x5iVYCA.jpeg)







When I started to learn D3, nothing made sense to me. Things only became more clear when I started to learn about reusable charts.

In this article, I’ll show you how to create a reusable bubble chart and give you a gentle introduction to D3 along the way. The dataset we’ll use is composed of [stories published in the freeCodeCamp in January 2017](https://github.com/dmesquita/reusable_bubble_chart/blob/master/medium_january.csv).



![](https://cdn-images-1.medium.com/max/1600/1*iz8EaD2Hell1FGuxnuUGJA.gif)

This is the chart you’re going to build



### About D3

[D3](https://d3js.org/) is a JavaScript library for data visualization. It brings data to life using HTML, SVG and CSS.

We often need to reuse a chart in another project, or event share the chart with others. For this, Mike Bostock (the creator of D3) proposed a model called [reusable charts](https://bost.ocks.org/mike/chart/). We’ll use his approach with some small modifications, as presented by Pablo Navarro Castillo in the book [Mastering D3.js](http://pnavarrc.github.io/book/).

We are using D3 version **4.6.0** here.

### 📊Reusable charts

Graphs following the reusable chart pattern have two characteristics:

*   **Configurability.** We want to modify the appearance and behavior of the graph without having to modify the code itself.
*   **Ability to be built in an independent way.** We want every graph element associated with a data point of our dataset independently. This has to do with the way D3 associates data instances with DOM elements. This will become more clear in a minute.

> “To sum up: implement charts as **closures with getter-setter methods.” — **[Mike Bostock](https://bost.ocks.org/mike/chart/)

### The bubble chart

You first need to define which elements of the chart can be customized:

*   The size of the chart
*   The input dataset

#### Defining the size of the chart

Let's start by creating a function to encapsulate all variables of the graph and set the default values. This structure is called a closure.

<pre name="73b6" id="73b6" class="graf graf--pre graf-after--p">// bubble_graph.js</pre>

<pre name="f8ab" id="f8ab" class="graf graf--pre graf-after--pre">**var bubbleChart = function () {**  
    var width = 600,  
    height = 400;  

    function chart(selection){  
        // you gonna get here  
    }  

    return chart;  
**}**</pre>

You want to create charts of different sizes without having to change the code. For this you will create charts as follows:

<pre name="e560" id="e560" class="graf graf--pre graf-after--p">// bubble_graph.html</pre>

<pre name="3db9" id="3db9" class="graf graf--pre graf-after--pre">var chart = **bubbleChart().width(300).height(200**);</pre>

To do that, now you will define accessors for the width and height variables.

<pre name="5c52" id="5c52" class="graf graf--pre graf-after--p">// bubble_graph.js</pre>

<pre name="7d84" id="7d84" class="graf graf--pre graf-after--pre">var bubbleChart = function () {  
    var width = 600  
    height = 400;</pre>

<pre name="383f" id="383f" class="graf graf--pre graf-after--pre">    function chart(selection){  
        // we gonna get here  
    }  

    **chart.width = function(value) {  
        if (!arguments.length) { return width; }  
        width = value;  

        return chart;  
    }**</pre>

<pre name="80eb" id="80eb" class="graf graf--pre graf-after--pre"> **chart.height = function(value) {  
        if (!arguments.length) { return height; }  
        height = value;  

        return chart;  
    }**  

    return chart;  
}</pre>

If you call `bubbleChart()` (without width or height attributes) the graph is created with the default width and heights values you defined inside the closure. If called without arguments, the method returns the variable value.

<pre name="22bc" id="22bc" class="graf graf--pre graf-after--p">// bubble_graph.html</pre>

<pre name="3341" id="3341" class="graf graf--pre graf-after--pre">var chart = bubbleChart();  
**bubbleChart().width()**; // returns 600</pre>

You may be wondering why the methods return the chart function. This is a JavaScript pattern used to simplify the code. It's called method chaining. With this pattern you can create new objects like this:

<pre name="afbc" id="afbc" class="graf graf--pre graf-after--p">// bubble_graph.html</pre>

<pre name="fb6f" id="fb6f" class="graf graf--pre graf-after--pre">var chart = bubbleChart()**.width(600).height(400)**;</pre>

instead of:

<pre name="0469" id="0469" class="graf graf--pre graf-after--p">// bubble_graph.html</pre>

<pre name="07b5" id="07b5" class="graf graf--pre graf-after--pre">var chart = bubbleChart();   
**chart.setWidth(600);   
chart.setHeight(400);**</pre>

#### Joining data with our chart

Now let’s learn how to join data with chart elements. Here’s how the chart is structured: the div with the graph has an SVG element, and each data point corresponds to a circle in the chart.







![](https://cdn-images-1.medium.com/max/2000/1*9fpW7NQJ7wys-R5ebNZKnQ.png)







<pre name="7be1" id="7be1" class="graf graf--pre graf-after--figure">// bubble_graph.html, after the bubbleChart() function is called</pre>

<pre name="0189" id="0189" class="graf graf--pre graf-after--pre graf--trailing"><svg width="600" height="400">  
    **<circle></circle> // a story from data  
    <circle></circle> // another story from data**  
    ...  
</svg></pre>











* * *







#### 🗄 d3.data()

The `d3.selection.**data**([data[,key]])` function returns a new selection that represents an element successfully bound to data. To do that, you first need to load the data from the .csv file. You will use the `d3.**csv**(_url_[[, _row_], _callback_])` function.

<pre name="f63c" id="f63c" class="graf graf--pre graf-after--p">// bubble_graph.html</pre>

<pre name="3c2e" id="3c2e" class="graf graf--pre graf-after--pre">**d3.csv**('file.csv', function(error, **our_data**) {  
    **var data = our_data;** //here you can do what you want with the data  
}</pre>

    // medium_january.csv|                title                 |   category   | hearts ||--------------------------------------|--------------|--------|| Nobody wants to use software         | Development  |  2700  |  | Lossless Web Navigation with Trails  |    Design    |  688   |   | The Rise of the Data Engineer        | Data Science |  862   |

#### 🖍 d3-selection

You will use the **d3-select()** and the **data()** functions to pass our data to the chart.

> Selections allow powerful data-driven transformation of the document object model (DOM): set [attributes](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr), [styles](https://github.com/d3/d3-selection/blob/master/README.md#selection_style), [properties](https://github.com/d3/d3-selection/blob/master/README.md#selection_property), [HTML](https://github.com/d3/d3-selection/blob/master/README.md#selection_html) or [text](https://github.com/d3/d3-selection/blob/master/README.md#selection_text) content, and more. — [D3 documentation](https://github.com/d3/d3-selection/)

<pre name="786b" id="786b" class="graf graf--pre graf-after--blockquote">// bubble_graph.html</pre>

<pre name="0b6f" id="0b6f" class="graf graf--pre graf-after--pre"><svg></svg></pre>

<pre name="8316" id="8316" class="graf graf--pre graf-after--pre">d3.csv('medium_january.csv', function(error, our_data) {  
    if (error) {  
        console.error('Error getting or parsing the data.');  
        throw error;  
    }</pre>

<pre name="f1ec" id="f1ec" class="graf graf--pre graf-after--pre">    var chart = bubbleChart().width(600).height(400);  
    **d3.select('#chart').data(our_data).call(chart);**</pre>

<pre name="e713" id="e713" class="graf graf--pre graf-after--pre"> });</pre>

Another important selector is **d3.selectAll()**. Let's say you have the following structure:

<pre name="4968" id="4968" class="graf graf--pre graf-after--p"><body>  
      
      
      
</body></pre>

`d3.select("body").selectAll("div")` selects all those divs for us.

#### 👶🏽 d3.enter()

And now you’re going to learn about an important D3 function: **d3.enter()**. Let's say you have an empty body tag and an array with data. You want to go through each element of the array and create a new div for each element. You can do this with the following code:

<pre name="73a4" id="73a4" class="graf graf--pre graf-after--p"><!-- before -->  
<body>  
 //empty  
</body></pre>

<pre name="684b" id="684b" class="graf graf--pre graf-after--pre">----  
// js script</pre>

<pre name="b193" id="b193" class="graf graf--pre graf-after--pre">var our_data = [1, 2, 3]  

var div = d3.select("body")  
 .selectAll("div")  
 .data(our_data)  
 .**enter()**  
 .append("div");  

---</pre>

<pre name="97fe" id="97fe" class="graf graf--pre graf-after--pre"><!-- after -->  
<body>  
      
      
      
</body></pre>

Why do you need `selectAll("div")` if the the divs don't even exist yet? Because in D3 instead of telling **how** to do something, we tell **what** we want.

In this case, you want to associate each div with a element of the array. That's what you are saying with the `selectAll("div")`.

<pre name="7f83" id="7f83" class="graf graf--pre graf-after--p">var div = d3.select("body")  
 **.selectAll("div") // here you are saying 'hey d3, each data element      of the array that comes next will be bound to a div'**  
 .data(our_data)  
 .enter().append("div");</pre>

The `enter()` returns the selection with the data bound to the element of the array. You then finally add this selection to the DOM with the `.append("div")`

#### 🎈d3.forceSimulation()

You need something to simulate the physics of the circles. For this you will use `d3.forceSimulation([nodes])`. You also need to tell what kind of force will change the position or the velocity of the nodes.

In our case, we’ll use the `d3.forceManyBody()`.

<pre name="19ba" id="19ba" class="graf graf--pre graf-after--p">// bubble_chart.js</pre>

<pre name="c8ad" id="c8ad" class="graf graf--pre graf-after--pre">var simulation = **d3.forceSimulation(data)**  
 .force("charge", d3.forceManyBody().strength([-50]))  
 .force("x", d3.forceX())  
 .force("y", d3.forceY())  
 .on("tick", ticked);</pre>

A positive strength value causes the nodes to attract each other, while a negative strength value causes them to repel each other.



![](https://cdn-images-1.medium.com/max/1600/1*7sLEEtCpUEZBOuAF8APYVg.png)

The strength() effect



We don't want the nodes spreading out through the whole SVG space, though, so we use `d3.forceX(0)` and`d3.forceY(0)`. This "drags" the circles to the 0 position. Go ahead and try removing this from the code to see what happens.

When you refresh the page, you can see that the circles adjust until they finally stabilize. The `ticked()` function updates the positions of the circles. The `d3.forceManyBody()` keeps updating the x and y position of each node, and the the `ticked()` function updates the DOM with these values (the cx and cy attributes).

<pre name="8416" id="8416" class="graf graf--pre graf-after--p">// bubble_graph.js</pre>

<pre name="6dc0" id="6dc0" class="graf graf--pre graf-after--pre">function ticked(e) {  
   ** node.attr("cx", function(d) { return d.x; })  
        .attr("cy", function(d) { return d.y; });  
    // 'node' is each circle of the bubble chart**</pre>

<pre name="be84" id="be84" class="graf graf--pre graf-after--pre"> }</pre>

Here's the code with everything together:

<pre name="941d" id="941d" class="graf graf--pre graf-after--p">var simulation = d3.forceSimulation(data)   
    .force("charge", d3.forceManyBody().strength([-50]))   
    .force("x", d3.forceX())   
    .force("y", d3.forceY())   
    .on("tick", ticked); </pre>

<pre name="0ab6" id="0ab6" class="graf graf--pre graf-after--pre">function ticked(e) {   
    node.attr("cx", function(d) { return d.x; })   
        .attr("cy", function(d) { return d.y; });   
}</pre>

To sum up, all this simulation does is give each circle an x and y position.

#### 📤 d3.scales

Here comes the most exciting part: actually adding the circles. Remember the **enter()** function? You will use it now. In our chart the radius of each circle is proportional to the number of recommendations of each story. To do that you will use a linear scale: **d3.scaleLinear()**

To use scales you need to define two things:

*   **Domain**: the minimum and maximum values of the input data (in our case, the minimum and maximum number of recommendations). To get the minimum and maximum values, you’ll use the **d3.min()** and **d3.max()** functions.
*   **Range**: the minimum and maximum output values of the scale. In our case, we want the smallest radius of size 5 and the biggest radius of size 18.

<pre name="905e" id="905e" class="graf graf--pre graf-after--li">// bubble_graph.js</pre>

<pre name="b30d" id="b30d" class="graf graf--pre graf-after--pre">var scaleRadius = d3.scaleLinear() **.domain([d3.min(data, function(d) { return +d.views; }),   
                    d3.max(data, function(d) { return +d.views; })])  
            .range([5,18]);**</pre>

And then you finally create the circles:

<pre name="dceb" id="dceb" class="graf graf--pre graf-after--p">// bubble_graph.js</pre>

<pre name="e44a" id="e44a" class="graf graf--pre graf-after--pre">**var node** = svg.selectAll("circle")  
   .data(data)  
   .enter()  
   .append("circle")  
   **.attr('r', function(d) { return scaleRadius(d.views)})**  
});</pre>

To color the circles, you’ll use a categorical scale: **d3.scaleOrdinal()**. This scale returns discrete values.

Our dataset has 3 categories: Design, Development and Data Science. You will map each of these categories to a color. `d3.schemeCategory10` gives us a list of 10 colors, which is enough for us.

<pre name="d087" id="d087" class="graf graf--pre graf-after--p">// bubble_graph.js</pre>

<pre name="79c6" id="79c6" class="graf graf--pre graf-after--pre">**var colorCircles = d3.scaleOrdinal(d3.schemeCategory10);**  

var node = svg.selectAll("circle")  
    .data(data)  
    .enter()  
    .append("circle")  
    .attr('r', function(d) { return scaleRadius(d.views)})  
    **.style("fill", function(d) { return colorCircles(d.category)});**</pre>

You want the circles drawn in the middle of the SVG, so you’ll move each circle to the middle (half the width and half the height). Go ahead and remove this from the code to see what happens.

<pre name="dae3" id="dae3" class="graf graf--pre graf-after--p">// bubble_graph.js</pre>

<pre name="cb35" id="cb35" class="graf graf--pre graf-after--pre">var node = svg.selectAll("circle")  
 .data(data)  
 .enter()  
 .append("circle")  
 .attr('r', function(d) { return scaleRadius(d.views)})  
 .style("fill", function(d) {return colorCircles(d.category)})  
 **.attr('transform', 'translate(' + [width / 2, height / 2] + ')');**</pre>

Now you’ll add tooltips to the chart. They need to appear whenever we place the mouse over the circles.

<pre name="234f" id="234f" class="graf graf--pre graf-after--p">**var tooltip = selection  
 .append("div")  
 .style("position", "absolute")  
 .style("visibility", "hidden")  
 .style("color", "white")  
 .style("padding", "8px")  
 .style("background-color", "#626D71")  
 .style("border-radius", "6px")  
 .style("text-align", "center")  
 .style("font-family", "monospace")  
 .style("width", "400px")  
 .text("");**</pre>

<pre name="37b9" id="37b9" class="graf graf--pre graf-after--pre">var node = svg.selectAll("circle")  
 .data(data)  
 .enter()  
 .append("circle")  
 .attr('r', function(d) { return scaleRadius(d.views)})  
 .style("fill", function(d) {return colorCircles(d.category)})  
 .attr('transform', 'translate(' + [width / 2, height / 2] + ')')  
 **.on("mouseover", function(d){  
     tooltip.html(d.category +"<br>"+ d.title+"<br>"+d.views);   
     return tooltip.style("visibility", "visible");})  
 .on("mousemove", function(){  
   return tooltip.style("top", (d3.event.pageY-       10)+"px").style("left",(d3.event.pageX+10)+"px");})  
 .on("mouseout", function(){return tooltip.style("visibility", "hidden");});**</pre>

The `mousemove` follows the cursor when the mouse is moving. `d3.event.pageX` and `d3.event.pageY` return the mouse coordinates.

And that's it! You can see the final code [here](https://github.com/dmesquita/reusable_bubble_chart).

You can play with the bubble chart [here](https://bl.ocks.org/dmesquita/37d8efdb3d854db8469af4679b8f984a).

Any questions or suggestions? Leave them in the comments. Thanks for reading! 😁

_Special thanks to_ [_John Carmichael_](https://medium.com/@johncarmichael1984) _and_ [_Alexandre Cisneiros_](https://medium.com/@Cisneiros)_._








