---
author: Kevin Hsu
authorTwitter: https://twitter.com/kevhs_pj
authorFacebook: https://facebook.com/10210904541363867
title: "Let’s Build a React Chat Room Component with 100 lines of JavaScript"
subTitle: "I was building a React Chat Room Component for my side-project. I don’t think I will be able to launch soon due to a lot of things I woul..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*kjOH0q5D2vKlHq7Z5QrATQ.png
url: https://medium.freecodecamp.org/lets-build-a-react-chatroom-component-ed353982d826
id: lets-build-a-react-chatroom-component-ed353982d826
date: 2017-08-20T10:32:33.555Z
tags: [
  "React",
  "Tutorial",
  "Internships",
  "Programming",
  "JavaScript"
]
---
# Let’s Build a React Chat Room Component with 100 lines of JavaScript

I was building a React Chat Room Component for my side-project. I don’t think I will be able to launch soon due to **a lot of things** I would love to chat about. Instead of letting this sit it my Git Lab for months, I thought open sourcing it to [GitHub](https://github.com/WigoHunter/react-chatapp) might be a better idea.

Who knows, I may even receive early feedback!

And I love writing. So I will try to explain how I built this React Chat Room Component in 100 lines of JavaScript. And some high level introductions of how React applications and components work!







![](https://cdn-images-1.medium.com/max/2000/1*kjOH0q5D2vKlHq7Z5QrATQ.png)







### **Why React**

I guess you might have your reasons to check out this article.

You might find it cool. Or you might be hearing a lot of the library and want to know more about it.

For me though, React is fun!

It disrupts the minimal unit level in web applications to become functional **components**. You can define how a component is being rendered, the data it consumes and the functionalities it controls.

This increases the re-usability of codes.

For instance, I can write

<pre name="67e8" id="67e8" class="graf graf--pre graf-after--p">class Chatroom extends React.Component {  
    submitMessage() {  
        // JS Code here  
    }</pre>

<pre name="fb8b" id="fb8b" class="graf graf--pre graf-after--pre">    render() {  
        const { chatHistory } = this.props;</pre>

<pre name="d674" id="d674" class="graf graf--pre graf-after--pre">        return (  
            {/* HTML code here */}  
        );  
    }  
}</pre>

and from there, I would be able to render a `Chatroom` anywhere with

<pre name="4439" id="4439" class="graf graf--pre graf-after--p"><Chatroom chatHistory={chatHistory} /></pre>

You see how the data is being streamed. You can simply inject the chat data from your App to a `Chatroom` component, which you would use just like HTML tags. In the `Chatroom` component’s code, you will gain access to the data source with `this.props`.

Beautiful, isn’t it?

The HTML and JavaScript codes will be covered in this tutorial.

### Create-React-App

One great thing about React is the support of open source community. Some people are even open sourcing components like this [React-ChatRoom](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) app on GitHub.

This brings to mind the old adage “Don’t reinvent the wheel.”

It is possible to develop a website or application without using any of these components. Look them up on GitHub or any other frameworks and inject the right data into the right components.

It might bring you troubles to config webpacks and those magics in the background at first — But Facebook even mitigate this by providing a CLI to get a React app up and running with a single command line.

I am assuming that you have already installed npm. So let’s install the React App. First go to your terminal or iTerm and run

<pre name="642c" id="642c" class="graf graf--pre graf-after--p">npm install -g create-react-app  
create-react-app <the project name you want>  
cd <the project name>  
npm start</pre>

You will see a generic starting page running on localhost:3000



![](https://cdn-images-1.medium.com/max/1600/1*bwFxqbpXBb0u4JS8IRw9Zg.png)



If you open the project folder with Visual Studio Code, you will see the `App` Component in `/src` like this

<pre name="200b" id="200b" class="graf graf--pre graf-after--p">class App extends Component {  
    render() {  
        return (  
            {/* SKIP: Generic HTML codes */}  
        );  
    }  
}</pre>

You can try to edit anything here and you will notice the website at localhost:3000 reloads. You don’t need to refresh the page. The project will observe the file changes and reload the page for you.

### Build the Chat Room

Let’s modify the `render` function of this App to only render a background `div` with a Flexbox layout to pin the `Chatroom` in the center of the page.

You can copy my CSS code from [here](http://react-chatapp.surge.sh/static/css/main.b5d0bdf9.css). I won’t be covering CSS in this article.

<pre name="48b5" id="48b5" class="graf graf--pre graf-after--p">return (  
      
        <Chatroom />  
      
);</pre>

This should break your project because it doesn’t recognize the `Chatroom` component yet. So let’s plan how we want our Chat Room to look.

You might have other ideas, but to me: a chat room has two most critical missions:

*   Render the chat history
*   Allow user to submit a new message

This is why I felt the component I made for my side-project could be an alternative example to than to-do apps. These two objectives pretty much map to Create and Read operations in CRUD. Update and Delete are something you could add to chat rooms as well. I didn’t plan to have these functions in the prototype level.



![](https://cdn-images-1.medium.com/max/1600/1*AZHXZeU1kHwjRRQLNKSRxQ.png)

The central part of the chatroom that renders chat history



### Render Data

In the source code here in [src/Chatroom.js](https://github.com/WigoHunter/react-chatapp/blob/master/src/Chatroom.js), you will see that I have prepared an array of mock data of chat history. In React, if you want to iterate and render each element in an array, you should make use of the `map` function.

When you have back-end for data streaming, do not use React states to store data. You should inject data to the `Chatroom` component as properties, like `<Chatroom chatHistory={chatHistory} />`.

For the comparisons of `props` and `states` in React, I would recommend this [official doc](https://facebook.github.io/react/docs/state-and-lifecycle.html).

I would use `State` to control the component’s UI status, for example whether a user is typing or not. And I would use `Props` for actual data of the application.

<pre name="f13c" id="f13c" class="graf graf--pre graf-after--p"><ul className="chats" ref="chats">  
    {  
        chats.map((chat) =>  
            <Message chat={chat} user={username} />  
        );  
    }  
</ul></pre>

This is how I render data with the `map` function. It will map each element in the array of chats to a `Message Component` where I will pass data as properties to that `Message Component`.

<pre name="e176" id="e176" class="graf graf--pre graf-after--p">const Message = ({chat, user}) => (  
    {/* SKIP: HTML codes */}  
    {/* Check out details at [https://github.com/WigoHunter/react-chatapp/blob/master/src/Message.js](https://github.com/WigoHunter/react-chatapp/blob/master/src/Message.js) */}  
);</pre>

The functional declaration of this `Message Component` in [src/Message.js](https://github.com/WigoHunter/react-chatapp/blob/master/src/Message.js) is simpler. It doesn’t just own JavaScript functions and then render HTML codes, expecting two data inputs of chat and user to be used in the HTML codes.

### Submit New Message



![](https://cdn-images-1.medium.com/max/1600/1*Vxqxe9UPRmzL83ssCOvqKQ.png)

The bottom part that submits a new message



Submitting in React is not much different from what you would do with pure or Vanilla JavaScript. Remember that you can get data from UI with the library ReactDOM that comes with create-react-app.

For example, we have an `input` like this in the bottom of the chat room.

<pre name="a4ef" id="a4ef" class="graf graf--pre graf-after--p"><input type="text" ref="msg" /></pre>

We would be able to get its value by

<pre name="2283" id="2283" class="graf graf--pre graf-after--p">ReactDOM.findDOMNode(this.refs.msg).value</pre>

So, the texting part in the bottom would be like

<pre name="181e" id="181e" class="graf graf--pre graf-after--p"><form className="input" onSubmit={(e) => this.submitMessage(e)}>  
    <input type="text" ref="msg" />  
    <input type="submit" value="Submit" />  
</form></pre>

Since we are using State to store the chat history, in the `submitMessage` function we will use the native React function `setState` to modify the origin `state` of data and add an additional entry when users type and submit. For the sake of UX, let’s also reset the value of the `input` to an empty string on success.

Another thing worth noting with React `state` is that it is immutable. Even if you want to insert an element into an array in `state`, you should use the JavaScript array method `concat`rather than `push`, which actually mutates the value of `state`.

### Finally, Deployment with Surge

So if everything goes right, you should have this Chat Room running fine. The final part of deployment is where another great synergy of Create-react-app and [Surge](https://surge.sh/) comes in handy.

Go to the root directory of this project in your terminal.

<pre name="0caa" id="0caa" class="graf graf--pre graf-after--p">#If you don't have surge yet then do this:  
npm install -g surge</pre>

<pre name="d094" id="d094" class="graf graf--pre graf-after--pre">#If you already have surge, or after installing it:  
npm start build  
cd build  
surge</pre>

There you go. Three commands in the terminal, and your first React site will be running healthy. And at no cost at a Surge.sh sub-domain like my [react-chatapp.surge.sh](https://react-chatapp.surge.sh) with free and built-in SSL/HTTPS.

### Whoa! My First Attempt

This is the first time I have written an article that is even close to being a tutorial.

I did skip some of the codes in this article. I don’t believe copying all the codes and explaining them line by line is a good way to elaborate.

I took different approach and tried to explain the high level designs and functions that we have in this `Chatroom` component. I also introduced some of the concepts and tools that synergize well with React.

This is how I made this React `Chatroom` component in 100 lines. Now I am more comfortable to say that at least I made some uses of these codes. I can and put it aside for now to prepare for my GRE test, graduate program applications and job searches!

You can check out my source code on my [GitHub](https://github.com/WigoHunter/react-chatapp) repository. I also have a [demo](https://react-chatapp.surge.sh/) hosted on [Surge](https://surge.sh/). I recommend Surge for its amazing and free single command line deployment.

**Final Disclaimer**: I will not include how I stream data with Meteor in this tutorial. That would make this too long to write, and for you to read. If I do have time, I will write an article about the `createContainer` functions that come with [Meteor](https://www.meteor.com/).

If there is something I failed to explain, or if you see potential synergies between you and me, like create-react-app and Surge, I would definitely appreciate if you can share your opinions in the comment section.

Feel free to reach me at kevin@projectable.hk or connect me on [Linkedin](https://www.linkedin.com/in/kai-chun-kevin-hsu-5428bbb4).








