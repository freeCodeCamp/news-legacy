---
author: Déborah Mesquita
authorTwitter: https://twitter.com/dehhmesquita
authorFacebook: none
title: "How to build a Gantt-like chart by using D3 to visualize a dataset"
subTitle: "When you finish learning about the basics of D3.js, usually the next step is to build visualizations with your dataset. Because of how D3..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*t1WrOVTnZKGrY2oVjjoUfA.jpeg
url: https://medium.freecodecamp.org/d3-visualizations-with-datasets-how-to-build-a-gantt-like-chart-9c9afa9b8d9d
id: d3-visualizations-with-datasets-how-to-build-a-gantt-like-chart-9c9afa9b8d9d
date: 2017-09-28T12:39:13.490Z
tags: [
  "Data Visualization",
  "Data Science",
  "Tech",
  "Web Development",
  "Technology"
]
---
# How to build a Gantt-like chart by using D3 to visualize a dataset







![](https://cdn-images-1.medium.com/max/2000/1*t1WrOVTnZKGrY2oVjjoUfA.jpeg)







When you finish learning about the basics of D3.js, usually the next step is to build visualizations with your dataset. Because of how D3 works, the way we organize the dataset can make our lives really easy or really hard.

In this article we will discuss different aspects of this building process. To illustrate these aspects, we will build a visualization that is similar to a Gantt chart.

The most important lesson I learned is that **you need to build a dataset where each datapoint equals a data unity of your graph**. Let’s dive into our case study to see how this works.

The goal is to build a Gantt-like chart similar to the one below:







![](https://cdn-images-1.medium.com/max/2000/1*DmEXz6uHizu2o02SibCRKg.png)

The visualization we want to build







As you can see, it’s not a Gantt chart because the tasks start and finish on the same day.

### Creating the dataset

I extracted the data from minutes. For each text file, I received information about the projects and their statuses from meetings. At first, I structured my data like this:

<pre name="04f6" id="04f6" class="graf graf--pre graf-after--p">{  
    "meetings": [{  
            "label": "1st Meeting",  
            "date": "09/03/2017",  
            "projects_presented": [],  
            "projects_approved": ["002/2017"],  
            "projects_voting_round_1": ["005/2017"],  
            "projects_voting_round_2": ["003/2017", "004/2017"]  
        },  
        {  
            "label": "2nd Meeting",  
            "date_start": "10/03/2017",  
            "projects_presented": ["006/2017"],  
            "projects_approved": ["003/2017", "004/2017"],  
            "projects_voting_round_1": [],  
            "projects_voting_round_2": ["005/2017"]  
        }  
    ]  
}</pre>

Let’s take a closer look at the data.

Each project has 4 statuses: `presented`, `voting round 1`, `voting round 2` and `approved`. In each meeting, the status for the projects can or can not change. I structured the data by grouping them by meetings. This grouping gave us a lot of problems when we built the visualization. This was because we needed to pass data to nodes with D3\. After I saw the Gantt chart that Jess Peter built [here](https://codepen.io/jey/full/jmClJ/), I realized I needed to change my data.

What was the minimum information I wanted to display? What was the minimum node? Looking at the picture, it is the information of the project.So I changed the structure of the data to the following:

<pre name="5012" id="5012" class="graf graf--pre graf-after--p">{  
  "projects": [  
                  {  
                    "meeting": "1st Meeting",  
                    "type": "project",  
                    "date": "09/03/2017",  
                    "label": "Project 002/2017",  
                    "status": "approved"  
                  },  
                  {  
                    "meeting": "1st Meeting",  
                    "type": "project",  
                    "date": "09/03/2017",  
                    "label": "Project 005/2017",  
                    "status": "voting_round_1"  
                  },  
                  {  
                    "meeting": "1st Meeting",  
                    "type": "project",  
                    "date": "09/03/2017",  
                    "label": "Project 003/2017",  
                    "status": "voting_round_2"  
                  },  
                  {  
                    "meeting": "1st Meeting",  
                    "type": "project",  
                    "date": "09/03/2017",  
                    "label": "Project 004/2017",  
                    "status": "voting_round_2"  
                  }  
               ]  
}</pre>

And everything worked better after that. It's funny how the frustration disappeared after this simple change.

### Creating the visualization

Now that we have the dataset, let’s start building the visualization.

#### Creating the x-axis

Each date should be displayed in the x-axis. To do that, define `d3.timeScale()` :

<pre name="0c38" id="0c38" class="graf graf--pre graf-after--p">var timeScale = d3.scaleTime()  
                .domain(d3.extent(dataset, d => dateFormat(d.date)))  
                .range([0, 500]);</pre>

The minimum and maximum values are given in the array`d3.extent()`.

Now that you have `timeScale` , you can call the axis.

<pre name="3cf2" id="3cf2" class="graf graf--pre graf-after--p">var xAxis = d3.axisBottom()  
                .scale(timeScale)  
                .ticks(d3.timeMonth)  
                .tickSize(250, 0, 0)  
                .tickSizeOuter(0);</pre>

The ticks should be 250px long. You don’t want the outer tick. The code to display the axis is:

<pre name="cdbd" id="cdbd" class="graf graf--pre graf-after--p">d3.json("projects.json", function(error, data) {  
            chart(data.projects);  
});</pre>

<pre name="1082" id="1082" class="graf graf--pre graf-after--pre">function chart(data) {  
    var dateFormat = d3.timeParse("%d/%m/%Y");</pre>

<pre name="e478" id="e478" class="graf graf--pre graf-after--pre">    var timeScale = d3.scaleTime()  
                   .domain(d3.extent(data, d => dateFormat(d.date)))  
                   .range([0, 500]);</pre>

<pre name="aa5a" id="aa5a" class="graf graf--pre graf-after--pre">    var xAxis = d3.axisBottom()  
                  .scale(timeScale)  
                  .tickSize(250, 0, 0)  
                  .tickSizeOuter(0);</pre>

<pre name="1145" id="1145" class="graf graf--pre graf-after--pre">    var grid = d3.select("svg").append('g').call(xAxis);  
}</pre>

If you plot this, you can see that there are many ticks. In fact, there are ticks for each day of the month. We want to display only the days that had meetings. To do that, we will set the tick values explicitly:

<pre name="97bf" id="97bf" class="graf graf--pre graf-after--p">let dataByDates = d3.nest().key(d => d.date).entries(data);  
let tickValues = dataByDates.map(d => dateFormat(d.key));</pre>

<pre name="b068" id="b068" class="graf graf--pre graf-after--pre">var xAxis = d3.axisBottom()  
                .scale(timeScale)  
                .tickValues(tickValues)  
                .tickSize(250, 0, 0)  
                .tickSizeOuter(0);</pre>

Using `d3.nest()` you can group all the projects by date (see how handy it is to structure the data by projects?), and then get all the dates and pass it to the axis.

#### Placing the projects

We need to place the projects along the y-axis, so let’s define a new scale:

<pre name="ebdd" id="ebdd" class="graf graf--pre graf-after--p">yScale = d3.scaleLinear().domain([0, data.length]).range([0, 250]);</pre>

The domain is the number of projects. The range is the size of each tick. Now we can place the rectangles:

<pre name="0cc0" id="0cc0" class="graf graf--pre graf-after--p">var projects = d3.select("svg")  
                   .append('g')  
                   .selectAll("this_is_empty")  
                   .data(data)  
                   .enter();</pre>

<pre name="19cb" id="19cb" class="graf graf--pre graf-after--pre">var innerRects = projects.append("rect")  
              .attr("rx", 3)  
              .attr("ry", 3)  
              .attr("x", (d,i) => timeScale(dateFormat(d.date)))  
              .attr("y", (d,i) => yScale(i))  
              .attr("width", 200)  
              .attr("height", 30)  
              .attr("stroke", "none")  
              .attr("fill", "lightblue");</pre>

`selectAll()`, `data()`, `enter()` and `append()` always get tricky. To use the `enter()` method (in order to create a new node from a datapoint), we need a selection. That’s why we need `selectAll("this_is_empty)"`, even if we don’t have any`rect` yet. I've used this name to clarify that we only need the empty selection. In other words, we use `selectAll("this_is_empty)"` to get an empty selection we can work on.

The variable `projects` has empty selections bounded to data, so we can use it to draw the projects in `innerRects`.

Now you can also add a label for each project:

<pre name="055d" id="055d" class="graf graf--pre graf-after--p">var rectText = projects.append("text")  
                .text(d => d.label)  
                .attr("x", d => timeScale(dateFormat(d.date)) + 100)  
                .attr("y", (d,i) => yScale(i) + 20)  
                .attr("font-size", 11)  
                .attr("text-anchor", "middle")  
                .attr("text-height", 30)  
                .attr("fill", "#fff");</pre>

#### Coloring each project

We want the color of each rectangle to reflect the status of each project. To do that, let’s create another scale:

<pre name="deb1" id="deb1" class="graf graf--pre graf-after--p">let dataByCategories = d3.nest().key(d => d.status).entries(data);  
let categories = dataByCategories.map(d => d.key).sort();</pre>

<pre name="9afd" id="9afd" class="graf graf--pre graf-after--pre">let colorScale = d3.scaleLinear()  
             .domain([0, categories.length])  
             .range(["#00B9FA", "#F95002"])  
             .interpolate(d3.interpolateHcl);</pre>

And then we can fill the rectangles with colors from this scale. Putting together everything we've seen so far, here is the code:

<pre name="97f7" id="97f7" class="graf graf--pre graf-after--p">d3.json("projects.json", function(error, data) {  
            chart(data.projetos);  
        });</pre>

<pre name="e0a8" id="e0a8" class="graf graf--pre graf-after--pre">function chart(data) {  
    var dateFormat = d3.timeParse("%d/%m/%Y");  
    var timeScale = d3.scaleTime()  
                   .domain(d3.extent(data, d => dateFormat(d.date)))  
                   .range([0, 500]);  

    let dataByDates = d3.nest().key(d => d.date).entries(data);  
    let tickValues = dataByDates.map(d => dateFormat(d.key));  

    let dataByCategories = d3.nest().key(d => d.status).entries(data);  
    let categories = dataByCategories.map(d => d.key).sort();  
    let colorScale = d3.scaleLinear()  
                 .domain([0, categories.length])  
                 .range(["#00B9FA", "#F95002"])  
                 .interpolate(d3.interpolateHcl);  

    var xAxis = d3.axisBottom()  
                .scale(timeScale)  
                .tickValues(tickValues)  
                .tickSize(250, 0, 0)  
                .tickSizeOuter(0);  
    var grid = d3.select("svg").append('g').call(xAxis);  

    yScale = d3.scaleLinear().domain([0, data.length]).range([0, 250]);  

    var projects = d3.select("svg")  
                   .append('g')  
                   .selectAll("this_is_empty")  
                   .data(data)  
                   .enter();  

    var barWidth = 200;  

    var innerRects = projects.append("rect")  
                  .attr("rx", 3)  
                  .attr("ry", 3)  
                  .attr("x", (d,i) => timeScale(dateFormat(d.date)) - barWidth/2)  
                  .attr("y", (d,i) => yScale(i))  
                  .attr("width", barWidth)  
                  .attr("height", 30)  
                  .attr("stroke", "none")  
                  .attr("fill", d => d3.rgb(colorScale(categories.indexOf(d.status))));  

    var rectText = projects.append("text")  
                  .text(d => d.label)  
                  .attr("x", d => timeScale(dateFormat(d.date)))  
                  .attr("y", (d,i) => yScale(i) + 20)  
                  .attr("font-size", 11)  
                  .attr("text-anchor", "middle")  
                  .attr("text-height", 30)  
                  .attr("fill", "#fff");   
}</pre>





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/d6323f48f510eb7078f3bad14e36f522?postId=9c9afa9b8d9d" data-media-id="d6323f48f510eb7078f3bad14e36f522" allowfullscreen="" frameborder="0"></iframe>





And with that we have the raw structure of our visualization.

Well done.

### Creating a reusable chart

The result shows that there are no margins. Also, if we want to display this graph on another page, we need to copy the entire code. To solve these issues, let’s build a reusable chart and just import it. To learn more about charts, click [here](https://bost.ocks.org/mike/chart/). To see a previous tutorial I wrote about reusable charts, click [here](https://medium.freecodecamp.org/a-gentle-introduction-to-d3-how-to-build-a-reusable-bubble-chart-9106dc4f6c46).

The structure to create a reusable chart is always the same. I created a tool to generate one. In this graph, I want to set:

*   The data (of course)
*   The values for width, height, and margins
*   A time scale for the xvalue of the rectangles
*   A scale for the y value for the rectangles
*   A scale for the color
*   The values for `xScale`, `yScale` , and `colorScale`
*   The values for the start and end of each task and the height of each bar

I then pass this to the function I've created:

<pre name="4957" id="4957" class="graf graf--pre graf-after--p">chart: ganttAlikeChart  
width: 800  
height: 600  
margin: {top: 20, right: 100, bottom: 20, left:100}  
xScale: d3.scaleTime()  
yScale: d3.scaleLinear()  
colorScale: d3.scaleLinear()  
xValue: d => d.date  
colorValue: d => d.status  
barHeight: 30  
barWidth: 100  
dateFormat: d3.timeParse("%d/%m/%Y")</pre>

Which gives me this:

<pre name="d746" id="d746" class="graf graf--pre graf-after--p">function  ganttAlikeChart(){  
width = 800;  
height = 600;  
margin = {top: 20, right: 100, bottom: 20, left:100};  
xScale = d3.scaleTime();  
yScale = d3.scaleLinear();  
colorScale = d3.scaleLinear();  
xValue = d => d.date;  
colorValue = d => d.status;  
barHeight = 30;  
barWidth = 100;  
dateFormat = d3.timeParse("%d/%m/%Y");  
function chart(selection) {  
 selection.each(function(data) {   
  var svg = d3.select(this).selectAll("svg").data([data]).enter().append("svg");   
  svg.attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);  
  var gEnter = svg.append("g");  
  var mainGroup = svg.select("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");  
})}</pre>

<pre name="3374" id="3374" class="graf graf--pre graf-after--pre">[...]</pre>

<pre name="9e8c" id="9e8c" class="graf graf--pre graf-after--pre">return chart;  
}</pre>

Now we just need to fill this template with the code we created before. I also made some changes to the CSS and added a tooltip.





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/b9f5765779e9d243090c95c32b6a4329?postId=9c9afa9b8d9d" data-media-id="b9f5765779e9d243090c95c32b6a4329" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F1413899.pWJGNg.small.a53cc243-2351-48d0-ab31-40f440ac38b3.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





And that's it.

You can check out the entire code [here](https://github.com/dmesquita/d3_gantt_alike_chart).

Thanks for reading! 😄








