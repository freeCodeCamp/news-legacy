---
author: Daniel Deutsch
authorTwitter: https://twitter.com/DDCreationStudi
authorFacebook: https://facebook.com/1259823787399135
title: "How I built an app that follows the Stock Market for a freeCodeCamp challenge."
subTitle: "I was working on an app from the FreeCodeCamp curriculum, and thought others might find it interesting. In this article, you can read the..."
coverSrc: https://cdn-images-1.medium.com/max/2000/0*ztwOJDHFao9iHsFv.
url: https://medium.freecodecamp.org/chart-the-stock-market-with-react-redux-react-vis-and-socket-io-18caf312693c
id: chart-the-stock-market-with-react-redux-react-vis-and-socket-io-18caf312693c
date: 2017-10-13T07:27:45.523Z
tags: [
	"JavaScript",
	"Web Development",
	"Tech",
	"Data Science",
	"Design"
]
---
# How I built an app that follows the Stock Market for a freeCodeCamp challenge.











![](https://cdn-images-1.medium.com/max/2000/0*ztwOJDHFao9iHsFv.)






Photo by peggy pardo on Unsplash — [https://unsplash.com/photos/a6z2tYFEjR8](https://unsplash.com/photos/a6z2tYFEjR8)







I was working on an app from the [FreeCodeCamp curriculum](https://www.freecodecamp.org/challenges/chart-the-stock-market), and thought others might find it interesting. In this article, you can read the full documentation for the building process. Enjoy!

> _“Failure isn’t a necessary evil. In fact, it isn’t evil at all. It is a necessary consequence of doing something new.”_

> _― Ed Catmull_

### The challenge

For this particular challenge, I had to build an app that would allow monitoring of various stocks. You can read more about the full challenge [here](https://www.freecodecamp.org/challenges/chart-the-stock-market). Now let’s get started.

The user stories are pretty simple:

*   I can view a graph displaying the recent trend lines for each added stock.
*   I can add new stocks by their symbol name.
*   I can remove stocks.
*   I can see changes in real-time when any other user adds or removes a stock. For this you will need to use WebSockets.

It looks like this:
















Charting the Stock Market in real-timewith websockets







### Roadmap

When I made [my last full-stack app](https://github.com/DDCreationStudios/Writing/blob/master/articles/LearningsFirstFullStack.md), I learned that starting with the back end can cause some issues when you are working on the front end later on. So this time, I decided to start with the front end and finish with the back end.

Here’s the roadmap I used:

1.  Setup the environment with create-react-app
2.  Lay out the basic React component structure
3.  Set up the Redux eco system
4.  Work over all components, divide them into container components, and wire everything up with the Redux store
5.  Build the Chart component with React-Vis
6.  Build the backend using socket.io
7.  Adapt the frontend to WebSockets
8.  Deploy to Heroku

### Front end

I going to highlight the key cornerstones — this isn’t a step-by-step tutorial.

#### Setup with the create-react-app package

For this project, I wanted to use [this boilerplate](https://github.com/facebookincubator/create-react-app) because I have used it many times before but never on a full-stack project. Although it has some limitations with the pre-configured structure, the benefits outweigh the problems by a mile.

Basically it provides an environment that:

*   React, JSX, ES6, and Flow syntax support.
*   Provides language extras beyond ES6 like the object spread operator.
*   Has a dev server that looks for common errors.
*   Imports CSS and image files directly from JavaScript.
*   Has autoprefixed CSS, so you don’t need -webkit or other prefixes.
*   Has a build script to bundle JS, CSS, and images for production, with sourcemaps.
*   Gives you an offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.

Pretty early on, I had to eject the configuration ( = opening the environment configuration for changes) to modify the WebPack config.

The problem was that I wanted to add jQuery for Materializecss — and there were always issues.

Here are some solutions:

*   Import jquery in ES6: [here](https://stackoverflow.com/questions/37213647/es6-code-not-working-with-jquery).
*   Provide jquery plugin in WebPack config: [here](https://github.com/erikras/react-redux-universal-hot-example/issues/596).

#### React, Redux, React-vis

This time, I wanted to use [react-vis](https://github.com/uber/react-vis) for visualizing the chart. It is a visualization library based on D3 and developed by Uber. To summarize and quote their docs:

> _A collection of react components to render common data visualization charts, such as line/area/bar charts, heat maps, scatterplots, contour plots, pie and donut charts, sunbursts, radar charts, parallel coordinates, and tree maps._

Some notable features:

*   **Simplicity**. react-vis doesn’t require any deep knowledge of data visualization libraries before you start building your first visualizations.
*   **Flexibility**. react-vis provides a set of basic building blocks for different charts. For instance, it has separate X and Y axis components. This provides a high level of control of chart layout for applications that need it.
*   **Ease of use**. The library provides a set of defaults which can be overridden by the custom user’s settings.
*   **Integration with React**. react-vis supports the React’s lifecycle and doesn’t create unnecessary nodes.

Some practical issues I came across and solved were:

*   Make react-vis chart responsive, like [this](https://github.com/uber/react-vis/issues/262)
*   To use gradients in react-vis properly, make sure you include them in the Plot and adapt the reference points. Check [this](https://uber.github.io/react-vis/#/documentation/general-principles/colors) out.
*   Use LineSeries instead of LineMarkSeries for better performance (check out [this same link](http://uber.github.io/react-vis/#/documentation/series-reference/line-series))

At this point the app was already pretty nice. Now I had to check the last User Story, which displays real-life changes using a “web socket” back end.

### Back end

For the data, I used the open API from [Quandl](https://www.quandl.com/).

Server: index.js:





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F22077628%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/e2e602ab503618293d559982590c5670?postId=18caf312693c" data-media-id="e2e602ab503618293d559982590c5670" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F22077628%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








#### Setting up the database (MongoDB hosted with mLab)

Simply set up the mLab account and create a collection for the new app. Make a mongoose model to simplify interactions with the database, such as this one:

<pre name="8bc1" id="8bc1" class="graf graf--pre graf-after--p">const mongoose = require('mongoose');</pre>

<pre name="088c" id="088c" class="graf graf--pre graf-after--pre">var Schema = mongoose.Schema;</pre>

<pre name="3433" id="3433" class="graf graf--pre graf-after--pre">var stockSchema = new Schema({  
  stockName: String  
});</pre>

<pre name="8f82" id="8f82" class="graf graf--pre graf-after--pre">module.exports = mongoose.model('stockModel', stockSchema);</pre>

Then connect the express server to the mLab.

To solve the warning about the deprecated mongoose open connection, use openURI.

For more, see [here](http://mongoosejs.com/docs/connections.html).

#### Routes

Set up a route so that, on default, the production build index.html is consumed. Set up another route to check the database for its content and return it in the response.

#### Adding Websocket

Use the Socket docs to set up listeners to:

*   Display the connection
*   Display a disconnection
*   Save data to the database
*   Remove data from the database

Make sure to integrate the listener function with the mongoose model to harness the power of MongoDB.

On a side note — because I spent literally one week on this issue:

Use `socket.BROADCAST.emit` to send the message to ALL sockets!

See more [here](https://stackoverflow.com/questions/9837998/socket-io-client-not-receiving-messages-from-server).

### Adapt the front end to the WebSocket

The “problem” you have to overcome here is to render the components accordingly to the emitted actions of the socket.

For these configurations, it’s key to handle the problem in the component itself and in the ducks (Redux files).

I solved it by wiring up the container component with a socket.io client and listening for changes. I did this with the `componentDidMount` lifecycle. Every time a message is emitted by the socket, the component consults the database by dispatching actions to the Redux files.

In the Redux files, I fetched the data from the database and compared it with the current store of the application. Depending on this comparison, the app fetches all data again from the Quandl service. This way, every new socket client can check for themselves and always has the most up-to-date data.

Please note: I am not sure if this is best practice for a Redux/react application, since I handle much logic in the async action. Feel free to point out mistakes or misunderstood concepts! :)

#### Async actions in ducks/stocks.js (snippet):

<pre name="ff2e" id="ff2e" class="graf graf--pre graf-after--h4">// Async actions with thunk  
export function checkDB(stocks) {  
	return dispatch =>  
		axios  
			.get('/api/stocks')  
			.then(res => {  
				if (stocks.length === 0) {  
					res.data.map(elem => {  
						dispatch(fetchStock(elem.stockName));  
					});  
				} else if (res.data.length < stocks.length) {  
					dispatch(removeStock(stocks.length - 1));  
				} else {  
					let diff = [];  
					res.data.map((item, i) => {  
						if (i < stocks.length) {  
							if (res.data[i].stockName !== stocks[i].dataset.dataset_code) {  
								diff.push({  
									stockName: item.stockName  
								});  
							}  
						} else if (i === stocks.length) {  
							diff.push({  
								stockName: item.stockName  
							});  
						} else {  
							diff = [];  
						}  
					});</pre>

<pre name="e764" id="e764" class="graf graf--pre graf-after--pre">					diff.map(elem => {  
						dispatch(fetchStock(elem.stockName));  
					});  
					diff = [];  
					// console.log(res);  
				}  
			})  
			.catch(err => {  
				console.warn(err);  
			});  
}</pre>

<pre name="61dc" id="61dc" class="graf graf--pre graf-after--pre">export function fetchStock(stockCode) {  
	return dispatch =>  
		axios  
			.get(  
				`https://www.quandl.com/api/v3/datasets/WIKI/${stockCode}.json?api_key=${process  
					.env.REACT_APP_QUANDL_KEY}`  
			)  
			.then(res => {  
				dispatch(addStock(res.data));  
				// console.log(res.data);  
			})  
			.catch(err => {  
				console.error(err);  
				toastr['warning'](' ', 'Stock Code cannot be found!');  
			});  
}</pre>

<pre name="7adf" id="7adf" class="graf graf--pre graf-after--pre">export function newStock(stockCode, socket) {  
	socket.emit('update', stockCode);  
	return dispatch =>  
		axios  
			.get(  
				`https://www.quandl.com/api/v3/datasets/WIKI/${stockCode}.json?api_key=${process  
					.env.REACT_APP_QUANDL_KEY}`  
			)  
			.then(res => {  
				dispatch(addStock(res.data));  
				// console.log(res.data);  
			})  
			.then(socket.emit('addStock', stockCode))  
			.catch(err => {  
				console.error(err);  
				toastr['warning'](' ', 'Stock Code cannot be found!');  
			});  
}</pre>

<pre name="22a5" id="22a5" class="graf graf--pre graf-after--pre">export function deleteStock(ind, stockCode) {  
	const socket = socketIOClient('https://createdd-stockmarketchart.herokuapp.com/');  
	socket.emit('removeStock', stockCode);  
	return dispatch => {  
		dispatch(removeStock(ind));  
		console.log(`Deleted ${stockCode}`);  
	};  
}</pre>

#### Collapsible Container — CollapsibleCon.js





![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F22077628%3Fv%3D4%26s%3D400&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)


<iframe width="700" height="250" data-src="https://medium.freecodecamp.org/media/c86305475de03a11653ad2d9f923c505?postId=18caf312693c" data-media-id="c86305475de03a11653ad2d9f923c505" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F22077628%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" class="progressiveMedia-iframe js-progressiveMedia-iframe" allowfullscreen="" frameborder="0"></iframe>








### Deploy to Heroku

For the deployment to Heroku it’s important:

*   to use the create-react-app buildpack when using the webpack server
*   to use the nodeJs buildpack when using your own websocket with your express server
*   to set environment variables

### See the result

*   **See the live app** [**here**](https://createdd-stockmarketchart.herokuapp.com/)**.**
*   **See open source code** [**here.**](https://github.com/DDCreationStudios/ChartTheStockMarket)
*   **See 5min timelapse** [**here.**](https://www.youtube.com/watch?v=iPnyrrWJpLU)
*   **See 1hour relaxing coding session** [**here.**](https://www.youtube.com/watch?v=8d6829bIxYg)

































See the whole building process on Youtube













* * *







Thanks for reading my article! If you enjoyed it, please give me some claps so more people see it. And feel free to leave any feedback.








