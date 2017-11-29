---
author: Emmanuel Yusufu
authorTwitter: https://twitter.com/emmyyusufu
authorFacebook: https://facebook.com/275394792839290
title: "How to build a basic version of Product Hunt using React"
subTitle: "This example and design shares what I’ve learned from the book Fullstack React. I highly recommend it as a good resource for learning Rea..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*X1Qk5m8MDrcWsRkWwdv79g.png
url: https://medium.freecodecamp.org/how-to-build-a-basic-version-of-product-hunt-using-react-f87d016fedae
id: how-to-build-a-basic-version-of-product-hunt-using-react-f87d016fedae
date: 2017-10-01T20:16:57.529Z
tags: [
  "Web Development",
  "React",
  "JavaScript",
  "Tech",
  "Startup"
]
---
# How to build a basic version of Product Hunt using React







![](https://cdn-images-1.medium.com/max/2000/1*X1Qk5m8MDrcWsRkWwdv79g.png)







This example and design shares what I’ve learned from the book _Fullstack React_. I highly recommend it as a good resource for learning React and it’s ecosystem technologies. check it out here: [fullstackreact.com](https://fullstackreact.com).

Imagine that as a developer, you have been tasked with creating an MVP for a startup product that needs to be demonstrated to potential investors.

The application is a voting application inspired by Product Hunt and Reddit. In the application, products are displayed in a collection. Users can upvote the best products, and the application will automatically sort them according to the number of votes, placing the highest before the lowest.

The features of the app we will be building are very simple:

*   Users can view the existing/displayed products.
*   Users can upvote products that delight them.
*   Products are sorted automatically according to vote count.

**You can** [**view the demo here**](http://reactdemo.emmanuelyusufu.com).

#### Step 1: first things first

Fist of all, head over to Github and download the starter folder I’ve already created with the necessary set up for our application [here](https://github.com/emmyyusufu/react-product-voting-app-with-bootstrap/tree/starter). Copy the **URL** provided by the green clone/download button and run in your preferred path on your command line. You must have git already installed.

<pre name="a786" id="a786" class="graf graf--pre graf-after--p">git clone **URL**</pre>

Once the folder is downloaded, open it in your code editor and observe the folder files and structure. It look like this:

    ├───src|    ├───app.js|    ├───seed.js|    ├───style.css└───vendor    ├───bootstrap-3.3.7-dist    ├───font-awesome-4.7.0    ├───react.js    ├───react-dom.js    └───babel-standalone.js

**Note:** Your code editor should have a live server. This allows us to serve the files to our browser to view our work. Make sure to install the extension for your preferred code editor.

Under the src folder there are **app.js** and **seed.js** files. The app.js file is where we will write most of the code for our application. The seed.js file already contains the data collection of the products to be displayed.

Our seed.js file contains the following code

    window.Seed = (function () {    function generateVoteCount() {      return Math.floor((Math.random() * 50) + 15);    }

        const products = [      {        id: 1,        title: 'Yellow Pail',        description: 'On-demand sand castle construction expertise.',        url: '#',        votes: generateVoteCount(),        submitterAvatarUrl: 'images/avatars/daniel.jpg',        productImageUrl: 'images/products/image-aqua.png',      },                                ...    ];

        return { products: products };

      }());

This code creates a function `generateVoteCount()` which we will explain later, and a `products` array that contains the data of our products. They are wrapped as a self-invoking function, and are attached to the `window` object of our browser. This way we can access them anywhere we want them.

The `Seed` function eventually returns an object with a property of products and a value of `products`. This means that, if we execute `Seed.products`, we should have every product object returned to us.

The **react.js** file is the code containing the React core itself. Also, **react-dom.js** is the code that helps us render out React components we’ve created in HTML DOM. Finally, **babel-standalone.js** is the Babel code that transpiles the advanced JSX and ES6 code we will be working with into ES5 code (the most common JavaScript specification that most old and current browsers support today).

#### Step 2: create components

We need to create two React components. We will call the parent component `ProductList` , and the collection of children components it houses will be `Procuct` .

Inside the app.js file, create the parent component by doing this:

    class ProductList extends React.Component {    render() {        const products = Seed.products.map((product) => (            <Product             id={product.id}            title={product.title}            description={product.description}            url={product.url}            votes={product.votes}            submitterAvatarUrl={product.submitterAvatarUrl}            productImageUrl={product.productImageUrl}            />        ));        return (                            <h1>Popular products</h1>                <hr />                {products}                    );    }}ReactDOM.render(<ProductList />, document.getElementById('content'));

In the parent component, we intend to create a child component based on each object accessible from `Seed.products` . So we set up some props. Now let’s actually declare the child component still in the same file called `Product` :

    class Product extends React.Component {    render() {        return (                                                                                        <img src={this.props.productImageUrl} />                                                                                             {this.props.votes}                                                                            {this.props.title}                                        <p>{this.props.description}                    </p>                                                              <img                  className='avatar'                  src={this.props.submitterAvatarUrl}                />                                                                      );      }}

We are able to reference `React.Component` and `ReactDOM.render` because we have already loaded the react.js and react-dom.js files. They are available for use even though we’re currently in the app.js file. Having created the component, `ReactDOM.render(whatComponent, where)` renders it to the DOM.

Running your live server, you should have the following screen:







![](https://cdn-images-1.medium.com/max/2000/1*OcJzrdQWZSd07hYpHnBf2A.png)

static components







#### Step 3: add interactivity

So far, we have been able to code the components of our app — but they are still static. How can we make them interactive?

In coding React apps, follow this general process:

*   Divide the app UI into components
*   Build a static version of the app
*   Determine what data is a state
*   Determine in what components each piece of the state should live
*   Hard code initial states
*   Add inverse data flow from child to parent via props
*   Add server communication

We wont be doing all of the above, but lets get going with **state**. The only piece of data in our app that can be considered stateful or ever-changing is the number of votes. Remember: that is a property in the collection of products in our seed.js file. Votes are in each `product` object, so it represents our state.

Knowing our state, where do we initialize it? States in React are self-contained in certain components, unlike props that are passed down. The number of votes as a state is owned by `<Product />` , but since the collection of products we have are generated from `<ProductList />`, we initialize the state there. In `<ProductList />`, do this before the `render()` method:

    constructor() {        super();        this.state = {            products: []        }    }

When initializing state in a component, we try to define what it should look like while keeping it empty. Our products are an array, so we use an empty array. We initialize it inside `constructor() {}` , because thats the piece of code that runs when our component is created.

Lets make our component read `products` from its own state instead of from a file. Add:  
 `componentDidMount() {  
 this.setState({ products: Seed.products })  
 }`  
 to set the state to use. Also update `const products = Seed.products` to `const products = this.state.products`. To make JavaScript sort it according to the highest number of votes, write this instead:

    const products = this.state.products.sort((a, b) {    b.votes - a.votes});

The JavaScript `sort();` uses a **compare function** inside. You could find out about this in a documentation.

#### Step 4: handle upvoting

Let’s head over to the hyperlink surrounding the font-awesome, caret-up icon and create a function using onClick.

        <i className='fa fa-2x fa-caret-up' /> 

After we’ve defined the function, lets actually create it. Inside the Product component, create a `passTheId();` function:

    constructor() {        super();        this.passTheId = this.passTheId.bind(this);    }

        passTheId() {        console.log('Id will be passed');    }

We bound the function to the `this` keyword, because only in-built functions like render() have access to use that word.

Lets create another function in the ProductList component. This one will update the state working with the `handleUpVote` function of the Product component.

    handleProductUpVote = (productId) => {    const nextProducts = this.state.products.map((product) => {      if (product.id === productId) {        return Object.assign({}, product, {          votes: product.votes + 1,        });      } else {        return product;      }    });    this.setState({      products: nextProducts,    });  }

States in React should be treated as immutable. That is, they should not be modified directly. The above function will do that using JavaScript’s `Object.assign();`by creating a seemingly new array called `nextProducts` . This is similar to the existing state, but has a change in the number of votes. `nextProducts`is then set as the new state. It seems weird to do things this way, but this is what the React team recommends to improve performance.

We want to pass the ID of the product from the child `Product` component to the parent `ProductList` component, so lets make `handleProductUpVote` available to the child as props:

    const productComponents = products.map((product) => (      <Product        key={'product-' + product.id}        id={product.id}        title={product.title}        description={product.description}        url={product.url}        votes={product.votes}        submitterAvatarUrl={product.submitterAvatarUrl}        productImageUrl={product.productImageUrl}        onVote={this.handleProductUpVote}      />    ));

We added `onVote={this.handleProductUpVote}`. So at the child level, we can access it through `this.props`

    passTheId() {        console.log('Id will be passed');        this.props.onVote(this.props.id)    }

Your entire `app.js` file should look like this:

    class ProductList extends React.Component {    state = {        products: [],      };

          componentDidMount() {        this.setState({ products: Seed.products });      }

          handleProductUpVote = (productId) => {        const nextProducts = this.state.products.map((product) => {          if (product.id === productId) {            return Object.assign({}, product, {              votes: product.votes + 1,            });          } else {            return product;          }        });        this.setState({          products: nextProducts,        });      }

        render() {

            const products = this.state.products.sort((a, b) => (            b.votes - a.votes        ));

            const productComponents = products.map((product) => (            <Product              key={'product-' + product.id}              id={product.id}              title={product.title}              description={product.description}              url={product.url}              votes={product.votes}              submitterAvatarUrl={product.submitterAvatarUrl}              productImageUrl={product.productImageUrl}              onVote={this.handleProductUpVote}            />          ));

            return (                            <h1>Popular products</h1>                <hr />                {productComponents}                    );    }}

    class Product extends React.Component {

        constructor() {        super();        this.passTheId = this.passTheId.bind(this);    }

        passTheId() {        console.log('Id will be passed');        this.props.onVote(this.props.id);    }

        render() {        return (                                  

                                                          <img src={this.props.productImageUrl} />                 

                                                                <i className='fa fa-2x fa-caret-up' />                                        {this.props.votes}                                                                            {this.props.title}                                        <p>                        {this.props.description}                    </p>                                                              <img                  className='avatar'                  src={this.props.submitterAvatarUrl}                />                            

                                              );      }}

    ReactDOM.render(<ProductList />, document.getElementById('content'));

Refresh your browser and you should see the working app. [**View demo**](http://reactdemo.emmanuelyusufu.com).

Feel free to share, comment or ask questions. For the final code, visit this [github link](https://github.com/emmyyusufu/react-product-voting-app-with-bootstrap "github link") and clone to your computer.

If you enjoyed this article, give me some claps so more people see it. Thank you for reading.

You can read more of my writing on my blog: [Stellar Code](http://stellarcode.co/build-a-product-hunt-inspired-app-with-react-2/).








