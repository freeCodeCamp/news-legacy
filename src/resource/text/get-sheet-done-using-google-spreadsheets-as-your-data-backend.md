---
author: Gilad Dayagi
authorTwitter: https://twitter.com/giladaya
authorFacebook: none
title: "Get Sheet Done — using Google Spreadsheets as your data backend"
subTitle: "If you want to rapidly prototype your next web apps, try using Google Spreadsheets as your data backend...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ulO04x_24taM1kWjlBHW7w.jpeg
url: https://medium.freecodecamp.org/get-sheet-done-using-google-spreadsheets-as-your-data-backend-650ba23dc6d9
id: get-sheet-done-using-google-spreadsheets-as-your-data-backend-650ba23dc6d9
date: 2017-08-21T16:03:16.451Z
tags: [
  "Web Development",
  "Tech",
  "Technology",
  "Startup",
  "Productivity"
]
---
# Get Sheet Done — using Google Spreadsheets as your data backend







![](https://cdn-images-1.medium.com/max/2000/1*ulO04x_24taM1kWjlBHW7w.jpeg)







If you want to rapidly prototype your next web apps, try using Google Spreadsheets as your data backend.

With a small library I created called [get-sheet-done](https://www.npmjs.com/package/get-sheet-done), you can have a free cloud database with GUI editor up and running in less than 5 minutes.

### The story behind Get Sheet Done

A while back, I needed to quickly prototype a web app that could display structured data. The catch was that these data had to be frequently edited by a non-technical person.

Since this was a prototype, I was looking for a solution that would give me the most bang for the buck, when taking into account development time and maintenance costs.

I considered several solutions, including using a full backend-as-a-service approach that stored the data as a file in Dropbox. Then I chose a somewhat non-orthodox solution: I stored the data in a Google spreadsheet.

### When is a spreadsheet-based database a suitable solution?

Using Google spreadsheets as a database for web applications in not a mainstream solution, and it may or may not be suitable for your next project.

To help you decide whether this is a good option, I’ve put together the following list of considerations.

Remember: we’re talking about a spreadsheet, which works great for structured, tabular data. But doesn’t work well for a document / object store.

Other than that, here are some pros and cons to consider:

#### Pros

*   It’s free
*   Very easy to set up — no need for API keys or complicated SDKs
*   Zero maintenance
*   You get a data editing GUI for free
*   You get write access management for free
*   Can include internal calculations using spreadsheet functions
*   The app that uses the data can be easily upgraded in a later phase to use a real database, as data is exposed as standard JSON
*   Some level of automation can be achieved by using apps-scripts in combination with [time-driven triggers](https://developers.google.com/apps-script/guides/sheets#triggers)
*   It can be combined with Google Forms for data collection

#### Cons

*   No server-side filtering logic to talk about
*   All the data you want to access has to be publicly accessible
*   The entire database is manually-editable, so a human error may break the application. For example, if someone accidentally changes the label of some field, it won’t be available for the application.  
    This can be partially remedied by protecting the critical cells
*   You can have [up to 2 million cells](https://support.google.com/drive/answer/37603?hl=en) in a spreadsheet

### How I implemented this

I couldn’t find a lot of information nor good libraries for easily reading data from a Google spreadsheet. So I decided to roll my own solution. It is now available on npm as the [get-sheet-done package](https://www.npmjs.com/package/get-sheet-done).

My implementation is based on the fact that once a spreadsheet is published to the web, it’s also available as a standard RSS feed, which can be fetched and parsed.

One complication is you have to fetch it using JSONP or somehow handle CORS. I chose to go with JSONP and use the [fetch-jsonp](https://www.npmjs.com/package/fetch-jsonp) library to manage this, so there’s no need for special measures.

### How to use it

Here’s what you need to do to get a simple editable database for your web app:

1.  Create a google spreadsheet with some data
2.  Publish the sheet to the web: `File -> Publish to the web`.  
    Note the document ID from the URL
3.  Install the package: `npm install --save get-sheet-done`
4.  Get the data:

<pre name="c395" id="c395" class="graf graf--pre graf-after--li">import **GetSheetDone** from 'get-sheet-done'</pre>

<pre name="d8b7" id="d8b7" class="graf graf--pre graf-after--pre">**GetSheetDone**.labeledCols(DOCUMENT_ID).then(sheet => console.log(sheet))</pre>

5\. Profit!

Note that there are three functions you can use to fetch the data, depending on how it should be parsed: raw 2d array, array of objects, object of objects.

Here’s a [live demo](https://giladaya.github.io/get-sheet-done/) you can play with.

It’s worth considering using Google Spreadsheets as a data source for a web application, especially if you’re just building a quick prototype. It has some unique advantages, and implementation is easy with (or without) my library.

Let me know in the comments if you found this library useful and whether there are missing features.








