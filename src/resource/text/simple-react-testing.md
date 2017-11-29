---
author: Anthony Ng
authorTwitter: none
authorFacebook: none
title: "Let’s test React components with TDD, Mocha, Chai, and jsdom"
subTitle: "In this tutorial, we’ll learn how to write tests for React Components...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*CrB6isZN6YXeM1rWmnjxHw.png
url: https://medium.freecodecamp.org/simple-react-testing-d9e25ec87e2
id: simple-react-testing-d9e25ec87e2
date: 2016-08-18T16:47:16.041Z
tags: [
  "React",
  "JavaScript",
  "Web Development",
  "Programming",
  "Testing"
]
---
# Let’s test React components with TDD, Mocha, Chai, and jsdom



![](https://cdn-images-1.medium.com/max/1600/1*CrB6isZN6YXeM1rWmnjxHw.png)



In this tutorial, we’ll learn how to write tests for React Components.

By keeping things simple, we’ll end up with a webpack.config.js and a package.json file that we can still understand.

### Why I recommend Test Driven Development

What’s the big deal about Test Driven Development (TDD)? There are a lot of great articles and books on TDD, but here are some benefits I see from it:

#### **Benefit #1: You create better code.**

When you write tests first, you keep your code focused on what you are doing.

I’ve been in situations where I code by coincidence. I keep writing code until it works…assuming I remember what the goal of my code was.

TDD will keep you on track and cut fat from your code.

#### **Benefit #2: You create cleaner code.**

When you have well designed tests that pass, you know that you can safely refactor. How many times have you refactored your working code, only to break everything?

TDD gives you the vital signs of your code and warns you when something is wrong. It’s an efficient way to catch regressions in your code.

#### **Benefit #3: It’s fun.**

Creating code is a long, tough process. It may take you a while to see progress in your project.

TDD gives you instant feedback that you are going in the right direction. Seeing your tests pass gives you tiny victories and makes coding (for me, at least) a lot more enjoyable.

Do note that TDD isn’t solely about unit tests. I like to think of TDD as a mindset where you create clean, succinct and purposeful code. Unit tests are just a side effect of TDD.

### Tools we’ll use

Testing React components is relatively simple because React components are pure functions. When you have Stateless/Presentational components, they are just functions that should return the same result given certain inputs.

#### Mocha

For this tutorial, we’ll be using Mocha. Make sure to download this globally so you’re able to run mocha from your command line.

<pre name="ad16" id="ad16" class="graf graf--pre graf-after--p">  
$ npm install -g mocha  

</pre>

We’ll add a script into our package.json to run our tests. Note the additional flags we are using to run the mocha from our command line.

<pre name="75c8" id="75c8" class="graf graf--pre graf-after--p">  
 — watch // Mocha will watch our source and test files and automatically rerun tests when the files change.  
 — compilers // We will use Babel to compile our ES6/JSX code in our tests.  
 — require // We will be running our “test_helper.js” file before our tests start. Our “test_helper.js” file will set up a fake DOM environment in Node.js that we will need to test our React components.</pre>

#### Chai

Chai is an assertion library that will help us write our tests in something that reads more like English.

<pre name="549f" id="549f" class="graf graf--pre graf-after--p">// Instead of our tests reading as..  
assert.equal(2 + 1, 3);</pre>

<pre name="7939" id="7939" class="graf graf--pre graf-after--pre">// …using Chai we can write…  
expect(2 + 1).to.equal(3);</pre>

#### jsdom

jsdom is a JavaScript implementation of the DOM and HTML that we can use in Node.js.

When we test our React components, we will mount them to a DOM. Node.js doesn’t come with a DOM, so that’s where jsdom comes in: it sets up a fake browser environment for us.

### Source Code

We have three components to test:

1\. A Todo item that displays text.  
2\. A TodoList that displays a list of Todo components.  
3\. An TodoInput component which has an input field and a button. This component calls a callback when the button is clicked.

Let’s get testing.

### Tests To Run

By the way, you can see the full test files in [Github](https://github.com/newyork-anthonyng/tutorials/tree/master/Simple_React_Testing/test).

#### 1\. Todo Component. What do we want to test?

With this component, we’ll test to see whether the   
const component = renderIntoDocument(  
   <Todo  
       todo={‘Walk dog’}  
   />  
);  

</pre>

“react-addons-test-utils” also gives us some tools to traverse our DOM. The first one we’ll look at is “findRenderedDOMComponentWithClass”, which will search our component for one element with a class of “todo”:

<pre name="b1d3" id="b1d3" class="graf graf--pre graf-after--p">const todo = findRenderedDOMComponentWithClass(component, ‘todo’);  
expect(todo).to.be.ok;</pre>

Now, let’s verify that the text content is what we expect it to be:

<pre name="bdc0" id="bdc0" class="graf graf--pre graf-after--p">const todoText = todo.textContent;  
expect(todoText).to.equal(‘Walk dog’);</pre>

Let’s move onto the TodoList.

#### 2\. TodoList Component. What do we want to test?

Let’s make sure that we’re getting a Todo component for each todo.

First, we’ll create a TodoList component and pass in three todo items. We would expect three Todo components to be created.

Let’s use another method from the react utils, “scryRenderedComponentsWithType”, to look through our component and find any child components whose type is of a given React class.

<pre name="c747" id="c747" class="graf graf--pre graf-after--p">const todosEle = scryRenderedComponentsWithType(component, Todo);  
expect(todosEle.length).to.equal(3);</pre>

#### 3\. TodoInput Component. What do we want to test?

We want to test if the input field and button is properly rendered onto the DOM.

React utils provides us with a method, “findRenderedDOMComponentWithTag”, which looks for one element with a given HTML tag.

<pre name="7ab5" id="7ab5" class="graf graf--pre graf-after--p">const inputField = findRenderedDOMComponentWithTag(component, ‘input’);  
const button = findRenderedDOMComponentWithTag(component, ‘button’);</pre>

<pre name="cd26" id="cd26" class="graf graf--pre graf-after--pre">expect(inputField).to.be.ok;  
expect(button).to.be.ok;</pre>

Now, we want to test whether the button will run our callback method.

This is where it’s good to have stateless components. We can mock our component’s props and test that the component works.

<pre name="43b5" id="43b5" class="graf graf--pre graf-after--p">let addTodoInvoked = false;  
let addTodo = (todo) => { addTodoInvoked = todo };  
const component = renderIntoDocument(  
   <TodoInput  
       addTodo={addTodo}  
   />  
);</pre>

We pass the “addTodo” function as a callback to the TodoInput component. Whenever the callback is run, it should update the “addTodoInvoked” variable with the text inside the input field.

You might be wondering how we’re going to click this button to test whether the callback was run. Again, react-utils has a method, “Simulate”, to help us out. “Simulate” does what it sounds like it does — it simulates DOM actions (such as a “click”) for us.

First let’s input a value into the text field. We do this by updating the value of the input field itself, then using Simulate.change to update the value in the DOM:

<pre name="af67" id="af67" class="graf graf--pre graf-after--p">inputField.value = ‘Mow lawn’;  
Simulate.change(inputField);</pre>

Then, we’ll use Simulate.click to click the button:

<pre name="c85c" id="c85c" class="graf graf--pre graf-after--p">Simulate.click(button);</pre>

Our test should test that the callback has been run:

<pre name="dcae" id="dcae" class="graf graf--pre graf-after--p">expect(addTodoInvoked).to.equal(‘Mow lawn’);</pre>

And that’s it — we just tested Stateless React components. Now it’s more straightforward to set up tests and mock any callbacks, since we’ve keep our functions pure.

### Testing Reducers

If we wanted to use Redux, we could test reducers in a similar manner, since they’re also just pure functions.

This is actually even easier than testing React components, because states are just vanilla JavaScript data types. We don’t need any additional utilities like we did for React components.

Let’s say we have a reducer in our project, like below:

<pre name="686a" id="686a" class="graf graf--pre graf-after--p">const initialState = [];</pre>

<pre name="c2f4" id="c2f4" class="graf graf--pre graf-after--pre">const reducer = (state = initialState, action) => {  
   let newTodos;</pre>

<pre name="6b48" id="6b48" class="graf graf--pre graf-after--pre">switch(action.type) {  
   case ‘ADD_TODO’:  
     newTodos = state.slice();  
     newTodos.push(action.data);  
     return newTodos;  
   default:  
     return state;  
   };  
};</pre>

To test this, we have to stub an initial state and an action. An example of a test would look like the below:

<pre name="c57e" id="c57e" class="graf graf--pre graf-after--p">const initialState = [‘Mow lawn’];  
cons action = {  
   type: ‘ADD_TODO’,  
   data: ‘Walk Dog’  
};  
const nextState = reducer(initialState, action);</pre>

<pre name="c3ae" id="c3ae" class="graf graf--pre graf-after--pre">expect(nextState).to.deep.equal([‘Mow lawn’, ‘Walk Dog’]);</pre>

### Testing AJAX

Working with AJAX calls is another common functionality that you may want to test.

I recommend using “axios” for your AJAX needs. Axios is an HTTP client that you can use in the browser or with Node.js. This means that you’ll get to use a consistent API no matter where you’re making your AJAX calls from.

A basic GET request in axios would look like this:

<pre name="f23f" id="f23f" class="graf graf--pre graf-after--p">axios.get(‘myUrl’);</pre>

There are different approaches to testing this. For this tutorial, we’ll use “sinon”, a testing library that gives us a lot of testing utility functions. It’s similar to what react-addons-test-utils provided.

We’ll look at a method called “stub”, which will let us see information about a method, such as how many times the method was called.

Our code to check that we’re using axios to make a request would look like so:

<pre name="5773" id="5773" class="graf graf--pre graf-after--p">// stub on the axios.get() method to see how many times it was called  
sinon.stub(axios, ‘get’);</pre>

<pre name="9b8f" id="9b8f" class="graf graf--pre graf-after--pre">// make a request using axios.get()  
utility.makeAjax();</pre>

<pre name="a20c" id="a20c" class="graf graf--pre graf-after--pre">// expect that axios.get() was called once  
expect(axios.get.callCount).to.equal(1);</pre>

Sinon gives us a lot of functionality, including spies, mocks, and creating fake XMLHttpRequests and fake servers.

When you start out, be cognizant of where you’re running your tests (browser vs. Node.js). If you’re running your tests in Node.js (like we did in this tutorial), do note that you won’t have access to XMLHttpRequest and other browser objects because…well…you’re not in a browser.

Some of sinon’s functionalities expect a browser environment. If that’s the case, you may want to consider running your tests through a browser.

You could also look into [Karma](https://karma-runner.github.io/1.0/index.html) to run your tests through a headless browser through your command line.

Have any questions? Do you do testing differently? Feel free to comment below.











* * *







Check out some of my other articles on testing.

[Testing React Component’s State](https://medium.com/@newyork.anthonyng/testing-react-components-state-b57bfc712b90)








