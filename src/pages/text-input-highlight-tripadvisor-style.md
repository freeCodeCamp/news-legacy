---
author: Petr Gazarov
authorTwitter: https://twitter.com/PetrGazarov
authorFacebook: https://facebook.com/1279607215397876
title: "Text input highlight, TripAdvisor style"
subTitle: "I was recently asked by a designer to create a text input style like the search input on TripAdvisor. I liked it a lot. I’m going to shar..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ByufyT7UMuOKWR0ElX4TGA.png
url: https://medium.freecodecamp.org/text-input-highlight-tripadvisor-style-2a44477de1b2
id: text-input-highlight-tripadvisor-style-2a44477de1b2
date: 2017-11-02T23:35:50.600Z
tags: [
  "Web Development",
  "React",
  "JavaScript",
  "Software Development",
  "CSS"
]
---
# Text input highlight, TripAdvisor style



![](https://cdn-images-1.medium.com/max/1600/1*ByufyT7UMuOKWR0ElX4TGA.png)



I was recently asked by a designer to create a text input style like the search input on [TripAdvisor](https://www.tripadvisor.com/). I liked it a lot. I’m going to share my solution as a step-by-step guide so you can build it yourself.



![](https://cdn-images-1.medium.com/max/1600/1*wrX3xu1-98RjaZbHTezQuQ.png)



The implementation involves both CSS and JavaScript. For our version, I’m going to assume you have a basic knowledge of SCSS and React.

Here is the finished CodePen:





<iframe data-width="800" data-height="600" width="700" height="525" src="https://medium.freecodecamp.org/media/4f01ebba9faf28a96ceed780fa46d160?postId=2a44477de1b2" data-media-id="4f01ebba9faf28a96ceed780fa46d160" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F1397317.JyXvzB.small.a50c43f5-4236-4039-aecf-ab7553920e22.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



We will build it from scratch



### Let’s build it

First, we will create a simple React component and render it to the DOM:

<pre name="775d" id="775d" class="graf graf--pre graf-after--p">class App extends React.Component {  
  render() {  
    return (  
        
        <input  
          placeholder='Search...'  
          spellCheck={false}  
        />  
        
    );  
  }  
}</pre>

<pre name="67e4" id="67e4" class="graf graf--pre graf-after--pre">ReactDOM.render(  
  <App />,  
  document.getElementById('root')  
);</pre>

Add some CSS to it:

<pre name="7ee1" id="7ee1" class="graf graf--pre graf-after--p">$input-font-size: 30px;  
$input-line-height: 70px;  
$font-family: Roboto Slab, sans-serif;</pre>

<pre name="9f0e" id="9f0e" class="graf graf--pre graf-after--pre">body {  
  background-color: #222222;  
}</pre>

<pre name="9920" id="9920" class="graf graf--pre graf-after--pre">.input-wrapper {  
  width: 500px;  
  margin: 50px auto;  
}</pre>

<pre name="7c62" id="7c62" class="graf graf--pre graf-after--pre">input {  
  height: 60px;  
  width: 100%;  
  min-width: 100%;  
  padding: 0;  
  border-radius: 0;  
  line-height: $input-line-height;  
  background-color: transparent;  
  color: white;  
  font-size: $input-font-size;  
  border: none;  
  outline: none;  
  border-bottom: 3px solid #333333;  
  font-family: $font-family;  
}</pre>

Add an HTML container for ReactDOM to render into:

<pre name="f34e" id="f34e" class="graf graf--pre graf-after--p"></pre>

This gets us the basic text input with bottom border.



![](https://cdn-images-1.medium.com/max/1600/1*Rwd4CnYTGdL7hJ6J3YgUFg.png)



### Now let’s add life to the border!

The difficulty with implementing the highlight is that the width needs to be level with the end of the text. It also needs to work with any `font-family` and `font-size`.

Since the input element `width` is fixed, we need some other trick to detect where the end of the text is at any given time.

Let’s say we can use a second element with **dynamic** width — in our example it will be a `span` element with `input-highlight` class. Next, we will copy the input text and place it inside of the `span`.

I switched the input from [uncontrolled to controlled](https://gist.github.com/markerikson/d71cfc81687f11609d2559e8daee10cc), by providing a `value` prop.

Our React component now looks like this:

<pre name="c0a2" id="c0a2" class="graf graf--pre graf-after--p">class App extends React.Component {  
  render() {  
    return (  
        
        <input  
          placeholder='Search...'  
          spellCheck={false}  
          value='basic input, bottom border'  
        />  
          
          basic input, bottom border  
          
        
    );  
  }  
}</pre>

Add the following CSS rules for `input-highlight`

**Note:** we use SCSS variables here to make sure the `font` properties are the same between `input` and `span`:

<pre name="a158" id="a158" class="graf graf--pre graf-after--p">.input-highlight {  
  font-size: $input-font-size;  
  line-height: $input-line-height;  
  font-family: $font-family;  
  max-width: 100%;  
}</pre>

This got us here:



![](https://cdn-images-1.medium.com/max/1600/1*-HPjO9pbMNrmCtfX3JaP6Q.png)



Next, let’s add a top border on the `span` and position it so its border superimposes input’s bottom border. Also, since `input-highlight` now has `position: absolute`, the parent element will need the`position: relative` rule.

<pre name="dce3" id="dce3" class="graf graf--pre graf-after--p">.input-highlight {  
  font-size: $input-font-size;  
  line-height: $input-line-height;  
  font-family: $font-family;  
  max-width: 100%;</pre>

<pre name="3125" id="3125" class="graf graf--pre graf-after--pre">  border-top: 3px solid white;  
  position: absolute;  
  left: 0;  
  bottom: 0;  
  height: 0;  
}</pre>

<pre name="c5a9" id="c5a9" class="graf graf--pre graf-after--pre">.input-wrapper {  
  width: 500px;  
  margin: 50px auto;  
  position: relative;  
}</pre>



![](https://cdn-images-1.medium.com/max/1600/1*0ugZlIdc2z-kl8O7Pjmq_Q.png)

Cool, right?



The span element ends with the text. This makes its width a perfect measure of the width of the text in the input!

Now, the easy part: let’s use JavaScript to update the text in the span every time input contents changes. We will use React `state` to update the value of both input and span simultaneously.

Here is our updated component:

<pre name="d66f" id="d66f" class="graf graf--pre graf-after--p">class App extends React.Component {  
  constructor() {  
    super();</pre>

<pre name="fe58" id="fe58" class="graf graf--pre graf-after--pre">    this.state = {  
      inputValue: ''  
    };  

    this.onInputChange = this.onInputChange.bind(this);  
  }</pre>

<pre name="b21a" id="b21a" class="graf graf--pre graf-after--pre">onInputChange(e) {  
    const { value } = e.target;</pre>

<pre name="ae7b" id="ae7b" class="graf graf--pre graf-after--pre">    this.setState({  
      inputValue: value  
    });  
  }</pre>

<pre name="cd67" id="cd67" class="graf graf--pre graf-after--pre">render() {  
    const { inputValue } = this.state;  

    return (  
        
        <input  
          onChange={this.onInputChange}  
          placeholder='Search...'  
          value={inputValue}  
          spellCheck={false}  
          />  
          
          { inputValue.replace(/ /g, "\u00a0") }  
          
        
    );  
  }  
}</pre>

The `.replace(/ /g, "\u00a0")` part is necessary for React to deal with spaces properly.

Then, hide the span by adding the following lines to the`input-highlight` CSS selector:

<pre name="a48d" id="a48d" class="graf graf--pre graf-after--p">color: transparent;  
user-select: none;  
overflow: hidden;</pre>

We need the `overflow: hidden` on the span in order to limit its width (otherwise it will cause the container to stretch horizontally — thanks [Prasanna](https://medium.com/@vipranarayan14) and [Andrea](https://medium.com/@zanin_andrea) for pointing it out in the comments!)



![](https://cdn-images-1.medium.com/max/1600/1*WzFkT5CIV5W9Y7JUJpMRog.gif)



### Finishing it up

It already works very nicely. The last touch is adding a different `onFocus` color for the highlight.

To accomplish this, we need a way to style the span based on the focus state of the input. The input and span are siblings, so we will be using CSS sibling selector(`+`).

Here is the code for the full `input` selector, including the sibling selector for `input-highlight`:

<pre name="542a" id="542a" class="graf graf--pre graf-after--p">input {  
  height: 60px;  
  width: 100%;  
  min-width: 100%;  
  padding: 0;  
  border-radius: 0;  
  line-height: $input-line-height;  
  background-color: transparent;  
  color: white;  
  font-size: $input-font-size;  
  border: none;  
  outline: none;  
  border-bottom: 3px solid #333333;  
  font-family: $font-family;</pre>

<pre name="1341" id="1341" class="graf graf--pre graf-after--pre">  &:focus {  
    + .input-highlight {  
      border-top: 3px solid #fbc91b;  
    }  
  }  
}</pre>

Thanks for sticking around! If you like this post, share it with more people by recommending it.








