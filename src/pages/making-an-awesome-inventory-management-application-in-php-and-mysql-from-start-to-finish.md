---
author: Richard
authorTwitter: https://twitter.com/chensformers
authorFacebook: none
title: "How to make an awesome Inventory Management Application in PHP and MySQL"
subTitle: "You do not need bloated enterprise software to effectively track your inventory. This tutorial will help you develop your own custom inve..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*D8DAUz3T2nustjr2Pnn6QQ.jpeg
url: https://medium.freecodecamp.org/making-an-awesome-inventory-management-application-in-php-and-mysql-from-start-to-finish-90bc5996680a
id: making-an-awesome-inventory-management-application-in-php-and-mysql-from-start-to-finish-90bc5996680a
date: 2017-10-05T02:35:39.409Z
tags: [
  "Web Development",
  "Programming",
  "Tech",
  "Business",
  "Startup"
]
---
# How to make an awesome Inventory Management Application in PHP and MySQL







![](https://cdn-images-1.medium.com/max/2000/1*D8DAUz3T2nustjr2Pnn6QQ.jpeg)







You do not need bloated enterprise software to effectively track your inventory. This tutorial will help you develop your own custom inventory tracking application so you can make smart inventory decisions based on timely and accurate inventory data.

### System Requirements

Our Inventory System requires the standard commercial phpGrid and phpChart license. It needs a few advanced features from both components.

*   PHP 5.3+
*   MySQL / MariaDB
*   phpGrid
*   phpChart (for reports)

### What is in an Inventory Management System

An inventory management system has several critical components. At its core, inventory control works by tracking the two main functions of a warehouse: receiving (incoming) and shipping (outgoing). Other activities such as the movement or relocation of inventory also take place. Raw materials are decremented and finished goods are incremented.

*   Incoming shipments
*   Outgoing orders
*   Inventory
*   Suppliers

### Inventory System Database Design

Typically, an inventory system has four basic elements: products, purchases, orders, and suppliers. Each element must be tracked based on its location, SKU, and quantity. Current inventory, or products on hand, is updated by tracking incoming shipments and outgoing orders. Order alerts can be set to trigger when inventory levels fall below custom-defined minimum levels.



![](https://cdn-images-1.medium.com/max/1600/0*WLtlop6hT9Ahzng9.png)



### Setting up the Inventory Manager Database

Download the `**InventoryManager.sql**` SQL script from this tutorial’s [GitHub repo](https://github.com/phpcontrols/inventory-manager), and then execute the script using a MySQL tool such as [MySQL Workbench](https://www.mysql.com/products/workbench/). This will create a new database named `**InventoryManager**` as well as the tables needed for this tutorial.

### Set up phpGrid

We will use a datagrid component by [phpGrid](https://phpgrid.com) to handle all internal database **CRUD (Create, Remove, Update, and Delete)** operations.

Be sure to [download a copy of phpGrid](https://phpgrid.com/download/) before you proceed.

To install phpGrid, follow these steps:

1.  Unzip the phpGrid download file.
2.  Upload the `**phpGrid**` folder to the phpGrid folder.
3.  Complete the installation by configuring the `**conf.php**` file.

Before we begin coding, we must include the following information in `**conf.php**`, the phpGrid configuration file.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/40491baef58cbd386f3f36257c904470?postId=90bc5996680a" data-media-id="40491baef58cbd386f3f36257c904470" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Creating the User Interface (UI)

Our inventory system comprises four pages:

*   Current Inventory
*   Incoming Purchases
*   Orders to Ship
*   Reports



![](https://cdn-images-1.medium.com/max/1600/0*5x785dIZjdHZOWcY.png)



### Menus

The include file for the menu is stored in an `**inc**` folder named `**menu.php**`. The code for the menu is straightforward. For the sake of focus, we will not go into great detail. Feel free to look at the code inside the `[**inc**](https://github.com/phpcontrols/inventory-manager/tree/master/inc)` folder.

We have also added a menu item named `Reports`.



![](https://cdn-images-1.medium.com/max/1600/0*RkuvXBv-6OjUC9sn.png)



### Pages

We will use the same page template we used for the [CRM](https://phpgrid.com/example/build-first-simple-crm-scratch/) and [Project Management](https://phpgrid.com/example/build-project-management-application-scratch/) tutorials.

#### Current Inventory







![](https://cdn-images-1.medium.com/max/2000/1*6E4oBbZ8ZcQ8KqOIOoIP_w.jpeg)







Let’s start with the Current Inventory page.

Incoming purchases increase the inventory while outgoing orders decrease it. From a master-detail perspective, the Current Inventory has not one, but two detail datagrids — the **Purchases** (incoming purchases) and the **Orders** (outgoing orders).

So the Current Inventory page is composed of one master grid (the Current Inventory in stock) and two detail grids (Incoming Purchases and Outgoing Orders). We can easily present these relationships using the phpGrid one master and multiple detail datagrids feature.

If you have read the last tutorial [Building a Donation Manager from Scratch](https://medium.com/@chensformers/a-step-by-step-guide-to-building-a-donation-manager-from-scratch-in-php-part-i-514a7d34ee82), you will have no problem following the code below.

Note the use of the [set_col_format()](https://phpgrid.com/documentation/set_col_format/) function used to format the integers.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a35a512926081e47e59c26f9041d441f?postId=90bc5996680a" data-media-id="a35a512926081e47e59c26f9041d441f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





That’s it for the Current Inventory datagrid. Here’s what it looks like so far:



![](https://cdn-images-1.medium.com/max/1600/0*z8v0J-HntXleu6Wj.png)



Now, let’s make a few changes to enhance our **Product** datagrid.

First of all, we will add some conditional formatting: whenever the **InventoryOnHand** is set to zero or a negative value, it is displayed using a different background color. We will use the [set_conditional_format()](https://phpgrid.com/documentation/set_conditional_format/) function for this purpose.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7d514dc0219e1b76791329346e19ea3a?postId=90bc5996680a" data-media-id="7d514dc0219e1b76791329346e19ea3a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The above code adds a display condition so that whenever the `InventoryOnHand` field has a value that is less than (`lt`) one, the text color changes to `red` and the background color to dark gray (`#DCDCDC`).

Secondly, whenever the `InventoryOnHand` is less than the value shown in `MinimumRequired`, we would like to alert the user by displaying it in a prominent background color such as gold. To compare values between two fields, we must switch to Javascript because the [set_conditional_format()](https://phpgrid.com/documentation/set_conditional_format/) function only works with a single field.

The code below uses a `for` loop to iterate through each row in the **Products** datagrid. It compares the `inventoryOnHand` with the`minimumRequired` and, when the condition is met, it will use the`setCell` function to change the background color.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a8f8424892f7fcc8ecce1bfe5d8c9a58?postId=90bc5996680a" data-media-id="a8f8424892f7fcc8ecce1bfe5d8c9a58" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





You can learn more about [comparing multiple cell values](https://phpgrid.uservoice.com/knowledgebase/articles/909546-conditional-format-compare-two-cells) on the phpGrid support website.

Next, on the same page, we need to see the purchases coming in (**Incoming**) and orders going out (**Outgoing**) for a specific product.

#### Purchases Detail Grid (Incoming)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/4803c92a6fc9ed82235a76d4c5033a1b?postId=90bc5996680a" data-media-id="4803c92a6fc9ed82235a76d4c5033a1b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Orders Detail Grid (Outgoing)





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/039af6ce878e7d9c076273d0e56329e9?postId=90bc5996680a" data-media-id="039af6ce878e7d9c076273d0e56329e9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Both detail grids use the same foreign key `ProductId` to link to the master datagrid (**Products**).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b7fa6791c0c957ab23df7dc33fc182f4?postId=90bc5996680a" data-media-id="b7fa6791c0c957ab23df7dc33fc182f4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Finally, our complete code to manage the **Current Inventory** page is:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5f4546581d903238d76eecd6981700d8?postId=90bc5996680a" data-media-id="5f4546581d903238d76eecd6981700d8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here’s the a snapshot of the inventory page:



![](https://cdn-images-1.medium.com/max/1600/0*5bSvq6er5cuJ2jDI.png)



### Incoming Purchases







![](https://cdn-images-1.medium.com/max/2000/1*GDxQanPArOQ5sjCZVHJU1w.jpeg)







The next page is the **Incoming Purchase** page. It is similar to the **Purchase Detail Grid** we saw when setting up the **Current Inventory** page. We group the purchases by `ProductId` and display the sum in`NumberReceived`. Any incoming purchases will increase the inventory.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/691436a89755434430bb23ecd07c26d6?postId=90bc5996680a" data-media-id="691436a89755434430bb23ecd07c26d6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The complete code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3f5506fce834b21f5598b975810b4cb8?postId=90bc5996680a" data-media-id="3f5506fce834b21f5598b975810b4cb8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Here’s a screenshot of our **Incoming Purchases** page with grouping enabled:



![](https://cdn-images-1.medium.com/max/1600/0*ox6BB1sEaaQcCDJ5.png)



### Outgoing Orders







![](https://cdn-images-1.medium.com/max/2000/1*HLdGQpPFfTwHPnOJj65koA.jpeg)







The next page is the **Outgoing Orders** page. It is similar to the **Orders Detail Grid** from the **Current Inventory** page. Here, we will introduce an advanced function called [set_grid_method()](https://phpgrid.com/documentation/set_grid_method/).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f9e32dc86021884d45cd3602a499f3f3?postId=90bc5996680a" data-media-id="f9e32dc86021884d45cd3602a499f3f3" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Summary

This tutorial builds a simple and extendable inventory system in less than 50 lines of code. The progressive style of these tutorials also helps the reader to ultimately become more familar and comfortable with phpGrid by introducing a limited number of new phpGrid features in each one.

### What’s Coming Up

This marks the end of the code needed to create the datagrids required for this tutorial. However, we are not done yet. There is still one more page we need to create — Reports. We will cover that after the jump.

What’s the use of an inventory system without some of type of report? In this section, you will learn how to use [phpChart](http://phpchart.com/) — which seamlessly integrates with phpGrid — to create visually pleasing and useful reports for your Inventory Manager application.

Here’s what our page will look like when it’s done:



![](https://cdn-images-1.medium.com/max/1600/0*LPTbgkA5_37hxkMx.png)



Before we start, we need to install phpChart. It is recommended that you obtain the [full version of phpChart](https://phpchart.com/download/) since the free version (phpChart Lite) supports only the line chart.

### Setup phpChart

It’s important that we keep phpGrid and phpChart in separate folders. Below is the **recommended** folder hierarchy.

<pre name="e638" id="e638" class="graf graf--pre graf-after--p">www  
    +-- Donation_Manager  
    |   |-- phpGrid  
    |   |   +-- conf.php  
    |   |-- phpChart  
    |   |   +-- conf.php  
    |   +-- ...</pre>

### Report Design

We will place a pie chart next to an inventory summary grid. The datagrid provides the series data to plot the pie chart.



![](https://cdn-images-1.medium.com/max/1600/0*5mb5GeotYXenZX1x.png)



### phpGrid and phpChart Integration

First of all, include calls to both `**conf.php**` files at the beginning of the code.

    require_once("phpGrid/conf.php"); require_once("phpChart/conf.php");

### Pie Chart

Below is the complete code to create our pie chart:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/256f00bfbfc8a0c30552a50181846203?postId=90bc5996680a" data-media-id="256f00bfbfc8a0c30552a50181846203" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Let’s walk through the code.

The first line is the constructor. We pass `array(null)` as the series data because we don’t wish to have any data displayed in the pie chart initially. The inventory data used to plot the chart is not yet available when it is first initialized. The data is fed from the datagrid later in JSON.

We also give our chart a unique name, `PieChart`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e8e7988442bb7365fcfc3583e7ac325c?postId=90bc5996680a" data-media-id="e8e7988442bb7365fcfc3583e7ac325c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Next, we give it a title. Nothing fancy here.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/efb0db4a410fe3f0c638893522764811?postId=90bc5996680a" data-media-id="efb0db4a410fe3f0c638893522764811" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Once we have the title, we call the [series default](https://phpchart.com/phpChart/docs/output/C_PhpChartX_set_series_default@.html) function to set the `renderer` to `PieRenderer`. Unlike a bar chart, a pie chart does not have a Y axis.

We can also set the `rendererOptions` property. We will not go into each option in detail here, but you can find more information in the [online documentation](https://phpchart.com/documentation/).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3c2aa2c42370e7bd36747487882dc530?postId=90bc5996680a" data-media-id="3c2aa2c42370e7bd36747487882dc530" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We also want to show a legend. The set_legend command below shows the legend to the west (noted by`w`) or to the left of the pie chart.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/746459dd5ad544c1a27006a8d58bff7e?postId=90bc5996680a" data-media-id="746459dd5ad544c1a27006a8d58bff7e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





We will also remove the border and the background.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8d32a266c91fcf0c8364ee06c298cc70?postId=90bc5996680a" data-media-id="8d32a266c91fcf0c8364ee06c298cc70" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Finally, we draw our chart by giving it a height and width in pixels.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e9eefe5eb94294ed696af200e59c9583?postId=90bc5996680a" data-media-id="e9eefe5eb94294ed696af200e59c9583" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





However, if you execute the code now, you will not see the chart because the data used to render it isn’t available yet.

### Inventory Summary Datagrid

Here, we will use the same the inventory datagrid as we did in the **Products** page. We just need to add one more thing — an event handler.

In phpGrid, we can add an event handler with the [add_event()](https://phpgrid.com/documentation/add_event/) function. add_event() binds an event handler, which is essentially a JavaScript function, to a specific phpGrid event. A list of possible events can be found [here](https://phpgrid.com/documentation/add_event/).

Since we must wait for the datagrid to finish loading **before** it can send the data to plot the chart, we use the event `jqGridLoadComplete`.

**phpGrid 101 — jqGridLoadComplete Event**

jqGridLoadComplete is last event that occurs once the whole datagrid body has finished loading. Note that the grid body will be reloaded if the user changes the sort order of a column or sets a filter.

#### Sending Data with Javascript

The following is the Javascript event handler for `jqGridLoadComplete`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9eb8f68829631a55e1ce65a9d292efe4?postId=90bc5996680a" data-media-id="9eb8f68829631a55e1ce65a9d292efe4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The complete code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/809597e8f2f5ec4e6561b513e64e72ed?postId=90bc5996680a" data-media-id="809597e8f2f5ec4e6561b513e64e72ed" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F24869808%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Now there you have it. Your just built your very first inventory management system from scratch using PHP and MySQL!

Thank you for reading! If you enjoyed this post, please give me some claps so more people see it.

### Online Demo

*   [Current Inventory](https://phpdatagrid.com/apps/inventory-manager/products.php)
*   [Incoming Purchases](https://phpdatagrid.com/apps/inventory-manager/incoming-purchases.php)
*   [Outgoing orders](https://phpdatagrid.com/apps/inventory-manager/outgoing-order.php)
*   [Reports](https://phpdatagrid.com/apps/inventory-manager/reports.php) (with datagrid side-by-side)

### Download Source Code on Github

[**phpcontrols/inventory-manager**  
_Source code of inventory-manager the awesome Inventory Management Application in PHP and MySQL from Start to Finish_github.com](https://github.com/phpcontrols/inventory-manager "https://github.com/phpcontrols/inventory-manager")[](https://github.com/phpcontrols/inventory-manager)

### You may be also interested in those tutorials:

[**Build a Project Management Application From Scratch**  
_What is a Project Management Application?_](https://phpgrid.com/example/build-project-management-application-scratch/ "https://phpgrid.com/example/build-project-management-application-scratch/")[](https://phpgrid.com/example/build-project-management-application-scratch/)

[**Build a Simple CRM from Start to Finish**  
_Customer Relationship Management (CRM) is a system that manages customer interactions and data throughout the customer…_](https://phpgrid.com/example/build-first-simple-crm-scratch/ "https://phpgrid.com/example/build-first-simple-crm-scratch/")[](https://phpgrid.com/example/build-first-simple-crm-scratch/)

[**Building a Donation Manager from Scratch in PHP**](https://medium.com/@chensformers/a-step-by-step-guide-to-building-a-donation-manager-from-scratch-in-php-part-i-514a7d34ee82 "https://medium.com/@chensformers/a-step-by-step-guide-to-building-a-donation-manager-from-scratch-in-php-part-i-514a7d34ee82")[](https://medium.com/@chensformers/a-step-by-step-guide-to-building-a-donation-manager-from-scratch-in-php-part-i-514a7d34ee82)








