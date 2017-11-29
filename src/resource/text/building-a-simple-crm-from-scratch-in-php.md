---
author: Richard
authorTwitter: https://twitter.com/chensformers
authorFacebook: none
title: "Build yourself a simple CRM from scratch in PHP and MySQL"
subTitle: "Customer Relationship Management (CRM) is a system that manages customer interactions and data throughout the customer life-cycle between..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9ZxDtBiAUyVo6anPUJxkcg.jpeg
url: https://medium.freecodecamp.org/building-a-simple-crm-from-scratch-in-php-58fef061b075
id: building-a-simple-crm-from-scratch-in-php-58fef061b075
date: 2017-03-01T05:26:50.000Z
tags: [
  "CRM",
  "Web Development",
  "PHP",
  "Programming",
  "Technology"
]
---
# Build yourself a simple CRM from scratch in PHP and MySQL







![](https://cdn-images-1.medium.com/max/2000/1*9ZxDtBiAUyVo6anPUJxkcg.jpeg)

Photo by [Mike Kononov](http://unsplash.com/photos/lFv0V3_2H6s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







Customer Relationship Management (CRM) is a system that manages customer interactions and data throughout the customer life-cycle between the customer and the company across different channels. In this tutorial, we are going to build a custom CRM in PHP, which a sales team can use to track customers through the entire sales cycle.

We’ll be creating a simple CRM system for salespeople to:

*   Access their tasks
*   View their leads
*   Create new tasks for each lead
*   Create new opportunity
*   Close a sale

Sales managers will be able to:

*   Manage all customers
*   Manage sales team
*   View current sales activities

[Download Demo Files](https://github.com/phpcontrols/phpgrid-custom-crm)

### Building Blocks of a CRM

Here is a list of the essential components of the CRM:

*   **Leads**: initial contacts
*   **Accounts**: Information about the companies you do business with
*   **Contact**: Information about the people you know and work with. Usually, one account has many contacts
*   **Opportunities**: Qualified leads
*   **Activities**: Tasks, meetings, phone calls, emails and any other activities that allow you to interact with customers
*   **Sales**: Your sales team
*   **Dashboard**: CRM dashboards are much more than just eye candy. They should deliver key information at a glance and provide links to drill down for more details.
*   **Login**: Salespeople and managers have different roles in the system. Managers have access to reports and sales pipeline information.



![](https://cdn-images-1.medium.com/max/1600/0*19oQRWbZyumceXfU.)



### System Requirements

*   PHP 5.3+,
*   MySQL or MariaDB
*   [phpGrid](http://phpgrid.com/)

### Create CRM Database

We will start by creating our custom CRM database. The main tables we will be using are:

*   **contact** — contains basic customer data
*   **notes** — holds information collection from Contact by sales people.
*   **users** — information about sales people



![](https://cdn-images-1.medium.com/max/1600/0*gJgr4DrRJ3O_OEYr.)



The **Contact** table contains basic customer information including names, company addresses, project information, and so forth.

The **Notes** table stores all sales activity information such as meetings and phone calls.

The **Users** table holds login information about users of the system such as usernames and passwords. Users can also have roles, such as Sales or Manager.

All other tables are [lookup tables](https://www.quora.com/In-database-what-are-lookup-tables) to join to the three main relational database tables.

*   **contact_status** — contains contact status such as Lead and Opportunity. Each indicates a different stage in a typical sales cycle
*   **task_status** — the task status can be either Pending or Completed
*   **user_status** — a sale person can be Active or Inactive
*   **todo_type** — a type of task either Task or Meeting
*   **todo_desc** — description of a task such as Follow Up Email, Phone Call, and Conference etc.
*   **roles** — a user can be either a Sales Rep or a Manager

#### Complete Database Schema Diagram

A database schema is the structure that represents the logical view such as tables, views, or primary and foreign keys of the entire database. A database schema includes entities and the relationship among them.

It is a good practice to have one primary key for each table in a relational database. A primary key is a unique identifier for each record. It can be the social security number (SSN), vehicle identification number (VIN), or auto-increment number. This is a unique number that is generated when a new record is inserted into a table.

Below is the database diagram of our simple CRM. The key symbol in each table represents the table primary key. The magnifying glass indicates foreign key linking another table in the database. Sometimes we call it the “lookup” table.



![](https://cdn-images-1.medium.com/max/1600/0*qExvrxjr5WZERLEO.)



#### install.sql

Once you have an understanding of the database table structure, find the “install.sql” script in the `db` folder and use a MySQL tool such as [MySQL Workbench](http://www.mysql.com/products/workbench/) or [Sequel Pro](https://www.sequelpro.com/) to run the SQL script. It should create a new relational database named `custom_crm` and its database tables.

### Setup phpGrid



![](https://cdn-images-1.medium.com/max/1600/1*FZ9ZZsPaUVIiGZkgcbpSDQ.jpeg)



Our CRM contains many datagrids. The datagrid is a spreadsheet-like data table that displays rows and columns representing records and fields from the database table. The datagrid gives the end-user ability to read and write to database tables on a webpage. We can use a datagrid tool from [phpGrid](http://phpgrid.com/). We use a tool instead of building them from scratch because developing the datagrid is usually tedious and error-prone. The datagrid library will handle all internal database **CRUD (Create, Remove, Update, and Delete)** operations for us with better and faster results with little code. To install phpGrid, follow these steps:

1.  Unzip the phpGrid download file.
2.  Upload the phpGrid folder to the `phpGrid` folder.
3.  Complete the installation by configuring the `conf.php` file.

Before we begin coding, we must specify the database information in `conf.php`, the phpGrid configuration file. Here is an example of database connection settings:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b7b1df99dcc02e755ba5463004a160e9?postId=58fef061b075" data-media-id="b7b1df99dcc02e755ba5463004a160e9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





*   **PHPGRID_DB_HOSTNAME** — web server IP or host name
*   **PHPGRID_DB_USERNAME** — database user name
*   **PHPGRID_DB_PASSWORD** — database password
*   **PHPGRID_DB_NAME** — database name of our CRM
*   **PHPGRID_DB_TYPE** — type of database
*   **PHPGRID_DB_CHARSET** — always ‘utf8’ in MySQL

To learn more about configuring phpGrid, check out [phpGrid complete installation guide](http://phpgrid.com/documentation/installation/).

### Page Template



![](https://cdn-images-1.medium.com/max/1600/0*nnv7_XJ9KD0zLXqK.)



Before we can start building our first page of the CRM, it is a good practice to make the reusable page items such as header and footer.

The page will comprise of a header, menu, body and footer. We will start by creating a reusable page template.

### head.php

This is a basic HTML5 template header. It includes a link to a custom stylesheet that will be created in a later step.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/05516c8efaac96cbb968c632ed0d1bf1?postId=58fef061b075" data-media-id="05516c8efaac96cbb968c632ed0d1bf1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### menu.php



![](https://cdn-images-1.medium.com/max/1600/0*TDduZwwNWj64wN77.)







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/245f34cbb9ba8a9c42aee52de5467e2d?postId=58fef061b075" data-media-id="245f34cbb9ba8a9c42aee52de5467e2d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Notice the usage of `$_GET['currentPage']`. Each page will set a value which will highlight the name of the current page on the top menu bar.

Include the following code in style.css for menu styling (minified). It will transform the above, unordered list into a menu.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c0a2a72449ec397fc71b4c416217becd?postId=58fef061b075" data-media-id="c0a2a72449ec397fc71b4c416217becd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### footer.php

Simple closing body and html tags.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2d2f81a3f979e5c7433a8c8edecdcd52?postId=58fef061b075" data-media-id="2d2f81a3f979e5c7433a8c8edecdcd52" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Complete Page Template

This is the complete page template. The main content will go after `Section Title`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/04e04b4c791c9e047274dfa5bf7bf374?postId=58fef061b075" data-media-id="04e04b4c791c9e047274dfa5bf7bf374" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### CRM Main Pages



![](https://cdn-images-1.medium.com/max/1600/1*z5iaw9R1XH1qCwIeE7-QfA.jpeg)



Are you still with me? Good! We can now finally develop the first page in our CRM.

Our CRM for the sales team members has four pages:

*   **Tasks**
*   **Leads**
*   **Opportunities**
*   **Customers/Won**

Each page indicates a different stage in a typical sales cycle.

### Sale People Page Design Mockup

Here’s our CRM design mockup for the sales people.



![](https://cdn-images-1.medium.com/max/1600/1*AS942OO-igxo4ylg8f7m5g.png)



### Tasks Page

When a sales team member logged in, the first page he sees is a list of current tasks.

As you may recall, our Notes table holds all the sales activity information. We can create a datagrid and populate it from the Notes table using phpGrid.

The Tasks page main content is a datagrid. The following two lines will give us a list of tasks of the current sales person.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7eb0c6d08bc91019688df259a0432b91?postId=58fef061b075" data-media-id="7eb0c6d08bc91019688df259a0432b91" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





*   The first line creates a phpGrid object by passing the SELECT SQL statement, its primary key — `ID`, and then the name of the database table - `notes`.
*   The second and the final line calls [display()](http://phpgrid.com/documentation/display/) function to render the datagrid on the screen. Check out the [basic datagrid demo](http://phpgrid.com/example/example-1-a-basic-php-datagrid-2/) for more detail.

### Leads Page

The leads page contains list of current leads that the sales person is responsible for. Each Lead can have one or many Notes. We will use the [phpGrid master-detail](http://phpgrid.com/example/master-detail-grid/) feature for that.

We also need to use [set_query_filter](http://phpgrid.com/documentation/set_query_filterwhere/)() to display only the leads, `Status = 1`, and only for the current sales person.

#### Contact status table



![](https://cdn-images-1.medium.com/max/1600/0*GJDLBk0XN5r9M5NY.)







<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/054a75a2ffb029a8982d4f198218def1?postId=58fef061b075" data-media-id="054a75a2ffb029a8982d4f198218def1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Opportunities Page

A Lead becomes an Opportunity once it is qualified. The Opportunities page is similar to the Leads page. The only difference is the filtered status code in set_query_filter is `Status = 2`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/00ff29dc829807d0646e623b6b51479f?postId=58fef061b075" data-media-id="00ff29dc829807d0646e623b6b51479f" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### Customers/Won Page

Customers/Won has the `Status = 3`. Similar to Leads and Opportunities, Customers/Won can also have Notes.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2734e061ef5a5427e1bc895c1f97b722?postId=58fef061b075" data-media-id="2734e061ef5a5427e1bc895c1f97b722" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





That’s all there is to it for sales people in our simple CRM.

### Manager Dashboard



![](https://cdn-images-1.medium.com/max/1600/1*AI44nH7B8mnNLTKqulmjGA.jpeg)

Photo by [Eaters Collective](http://unsplash.com/photos/rS1GogPLVHk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)



The sales manager will have access to all records in the sales pipeline as well as the ability to manage sales team and customer data.

We will have a single web page with tabbed menu similar to the [phpGrid tabbed grid demo](http://phpgrid.com/example/tabbed-datagrid/).

### Manager Dashboard Design Mockup

#### My Sales Reps



![](https://cdn-images-1.medium.com/max/1600/1*Jn0q3g0FMqW6shEXtENR8w.png)



### Main content

Each tab represents a table in the CRM database. `$_GET['gn']` will store the table name. It dynamically generates the datagrid based on table name passed.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c1135898e18ac15174a983dd7cbfdb4c?postId=58fef061b075" data-media-id="c1135898e18ac15174a983dd7cbfdb4c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It’s very easy to integrate jQueryUI Tabs with phpGrid. Please refer to the phpGrid [Tabbed Grid demo](http://phpgrid.com/example/tabbed-datagrid/) for more information.

### My Sales Rep Page

Since a sales manager needs to quickly find out whom a sale person is working with, we added a detail grid `$sdg` populated from contact table and link with the master grid.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/eab6a0c378cf85707ca28cfe2a419056?postId=58fef061b075" data-media-id="eab6a0c378cf85707ca28cfe2a419056" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F24869808%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`sales_rep` is the connecting key in `contact` table to the `id` that is the foreign key in `users` table. Remember the `users` stores all of our sales people information.

### Screenshots

#### CRM — Sales Screen



![](https://cdn-images-1.medium.com/max/1600/1*e_osyaKXAm8Paj6OTVpCsg.png)



#### CRM — Manager Screen



![](https://cdn-images-1.medium.com/max/1600/1*wMcbdN9Im5jAUhv-mfEN_g.png)



### Live Demo

[CRM Sales Rep Screen](http://phpdatagrid.com/apps/phpgrid-custom-crm/sales/tasks.php) | [CRM Managers screen](http://phpdatagrid.com/apps/phpgrid-custom-crm/managers/pipeline.php)

### Complete Source Code on GitHub

[**phpcontrols/phpgrid-custom-crm**  
_phpgrid-custom-crm - Custom CRM Demo - Learn to build yourself a custom CRM in PHP and MySQL, which a sales team can…_github.com](https://github.com/phpcontrols/phpgrid-custom-crm "https://github.com/phpcontrols/phpgrid-custom-crm")[](https://github.com/phpcontrols/phpgrid-custom-crm)








