---
author: Samer Buna
authorTwitter: https://twitter.com/samerbuna
authorFacebook: https://facebook.com/568190226682058
title: "Do you want to learn more about React? Let’s build — and then play — a game."
subTitle: "When I teach React to beginners, I start by introducing them to the React API. Then I have them build a simple browser game after that. I..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*jju0KT50kJI1xX6c6EJVsw.png
url: https://medium.freecodecamp.org/do-you-want-to-learn-more-about-react-lets-build-and-then-play-a-game-218e0da5be44
id: do-you-want-to-learn-more-about-react-lets-build-and-then-play-a-game-218e0da5be44
date: 2017-11-17T13:27:48.866Z
tags: [
  "React",
  "Tech",
  "Programming",
  "Web Development",
  "JavaScript"
]
---
# Do you want to learn more about React? Let’s build — and then play — a game.

When I teach React to beginners, I start by introducing them to the React API. Then I have them build a simple browser game after that. I think this is a good introduction strategy, because a simple game usually has a small state and, in most cases, no data dependencies at all. Learners get to focus entirely on the React API itself. The official React tutorial is a simple [Tic-Tac-Toe game](https://reactjs.org/tutorial/tutorial.html#getting-started), which is an excellent choice.

Building simple game apps beats building abstract (and todo) apps on so many levels. I have always been against the use of abstract foo-bar types of examples, because they lack context and engagement.

Learners need to like what they are building. They need to accomplish something at the end of each phase in their learning journey. They need to make design decisions and see progress on features they can relate to.

**Please note** that this article is not a beginner’s tutorial. I will be assuming that you know the basics of React. If you are absolutely new to React, start by [writing your first React component](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) and then [learn the fundamental concepts of React](https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2).



![](https://cdn-images-1.medium.com/max/1600/1*jju0KT50kJI1xX6c6EJVsw.png)

The Target Sum Game: Pick the set of challenge numbers that sum to the target 42 within 10 seconds



I named the game we are going to build in this article **The Target Sum**. It is a simple one: you start with a random number in the header, **the target** (42 in the screenshot above), and a list of random **challenge numbers** below that target (the six numbers in the screenshot above).

Four of the six random numbers used above (8, 5, 13, 16) add up exactly to the target sum of 42\. Picking the correct subset of numbers is how you win the game.

Wanna play a few rounds? Click the **Start** button below:





<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/8a93f032b875ee96a0d710ef0067f1db?postId=218e0da5be44" data-media-id="8a93f032b875ee96a0d710ef0067f1db" allowfullscreen="" frameborder="0"></iframe>



You will have 10 seconds to click the 4 correct numbers once you click Start



Were you able to win? I am SO bad at this game.

Now that you know what we are going to build, let’s dive right in. Don’t worry— we will build this game in small increments, one step at a time.

#### Step #1: initial markup and styles

It is a good idea to start with any known markups and styles to get those out of the way. With simple games like this one, this is usually an easy task. Just put mock static content where the dynamic content will eventually be.

To keep this article as short as possible and focused on React, I will start with some initial ready markup and CSS. Here is a jsComplete code session that you can use to start:









<iframe data-width="800" data-height="250" width="1200" height="375" src="https://medium.freecodecamp.org/media/998fc7667fabcc4e355da1b8b2a3e00d?postId=218e0da5be44" data-media-id="998fc7667fabcc4e355da1b8b2a3e00d" allowfullscreen="" frameborder="0"></iframe>



Edit code inline here or at [https://jscomplete.com/repl/?j=HkGgHj7kM](https://jscomplete.com/repl/?j=HkGgHj7kM)







If you want to follow along with a different development environment, here is all the CSS that I used to style the markup above:

<pre name="ef68" id="ef68" class="graf graf--pre graf-after--p">.game {  
  display: inline-flex; flex-direction: column;  
  align-items: center; width: 100%;  
}  
.target {  
  border: thin solid #999; width: 40%; height: 75px;  
  font-size: 45px; text-align: center; display: inline-block;  
  background-color: #ccc;  
}  
.challenge-numbers {  
  width: 85%; margin: 1rem auto;  
}  
.number {  
  border: thin solid lightgray; background-color: #eee;  
  width: 40%; text-align: center; font-size: 36px;  
  border-radius: 5px; margin: 1rem 5%; display: inline-block;  
}  
.footer {  
  display: flex; width: 90%; justify-content: space-between;    
}  
.timer-value { color: darkgreen; font-size: 2rem; }</pre>

I am not very good with CSS, and some of my choices above are probably questionable. Do not get distracted by that. We have a game to build.

#### Step #2: extracting components

Once we reach a good state for the initial markup and styles, it’s natural to think about components as a next step. There are many reasons to extract part of the code into a component. For this example, I would like to focus on just one reason: **Shared Behavior**.

A good indicator that you need a new component is when multiple elements are going to share the exact same behavior. In our example, you can click any of the six random challenge numbers to sum towards the target number. These clicks will trigger UI changes. This shared behavior means that we should create a component to represent a single number. I will simply name that `Number`.

The new changes introduced in every code snippet below are highlighted in **bold**.

<pre name="4c2b" id="4c2b" class="graf graf--pre graf-after--p">// Step #2: [https://jscomplete.com/repl/?j=S1M0BsQ1G](https://jscomplete.com/repl/?j=S1M0BsQ1G)</pre>

<pre name="8f0e" id="8f0e" class="graf graf--pre graf-after--pre">**class Number extends React.Component {  
  render() {  
    return {this.props.value};  
  }  
}**</pre>

<pre name="54cd" id="54cd" class="graf graf--pre graf-after--pre">class Game extends React.Component {  
  render() {  
    return (  
        
        42  
          
 **<Number value={8} />  
          <Number value={5} />  
          <Number value={12} />  
          <Number value={13} />  
          <Number value={5} />  
          <Number value={16} />**          
          
          10  
          <button>Start</button>  
          
        
    );  
  }  
}</pre>

<pre name="0247" id="0247" class="graf graf--pre graf-after--pre">ReactDOM.render(<Game />, document.getElementById('mountNode'));</pre>

You might want to extract more components such as a `Target` or `Timer` component. While adding components like these might enhance the readability of the code, I am going to keep the example simple and use only two components: `Game` and `Number`.

#### Step #3: making things dynamic

Every time we render a new game, we need to create a new random target number. This is easy. We can use `Math.random()` to get a random number within the `min...max` range using this function:

<pre name="7a70" id="7a70" class="graf graf--pre graf-after--p">// Top-level function</pre>

<pre name="956e" id="956e" class="graf graf--pre graf-after--pre">**const randomNumberBetween = (min, max) =>  
  Math.floor(Math.random() * (max - min + 1)) + min;**</pre>

If we need a target number between `30` and `50`, we can simply use `randomNumberBetween(30, 50)`.

Then, we need to generate the six random challenge numbers. I am going to exclude the number `1` from these numbers and probably not go above `9` for the first level. This allows us to simply use `randomNumberBetween(2, 9)` in a loop to generate all challenge numbers. Easy, right? RIGHT?

This set of random challenge numbers needs to have a subset that actually sums to the random target number that we generated. We cannot just pick any random number. We have to pick some **factors** of the target number (with some of their factorization results), and then some more distracting random numbers. This is hard!

If you were doing this challenge in a coding interview, what you do next might make or break the job offer. What you need to do is to simply ask yourself: is there an easier way?

Take a minute and think about this particular problem. To make things interesting, let’s make the size of the challenge numbers list dynamic. The `Game` component will receive two new properties:

<pre name="2804" id="2804" class="graf graf--pre graf-after--p"><Game **challengeSize={6}** **challengeRange={[2, 9]}** /></pre>

The simple alternative to the factorization problem above is to pick the random challenge numbers **first,** and then compute the target from a random subset of these challenge numbers.

This is easier. We can use `Array.from` to create an array of random numbers with the help of the `randomNumberBetween` function. We can then use the lodash `sampleSize` method to pick a random subset, and then just sum that subset and call it a target.

Since none of these numbers are going to change during a single game session, we can safely define them as instance properties.

Here are the modifications that we need so far:

<pre name="b8e8" id="b8e8" class="graf graf--pre graf-after--p">// In the Game class</pre>

<pre name="07b6" id="07b6" class="graf graf--pre graf-after--pre"> **challengeNumbers = Array  
    .from({ length: this.props.challengeSize })  
    .map(() => randomNumberBetween(...this.props.challengeRange));**</pre>

<pre name="b145" id="b145" class="graf graf--pre graf-after--pre"> **target = _.sampleSize(  
    this.challengeNumbers,  
    this.props.challengeSize - 2  
  ).reduce((acc, curr) => acc + curr, 0);**</pre>

<pre name="b943" id="b943" class="graf graf--pre graf-after--pre">  render() {  
    return (  
        
        **{this.target}**          
          
 **{this.challengeNumbers.map((value, index) =>  
           <Number key={index} value={value} />  
          )}**          
          
          10  
          <button>Start</button>  
          
        
    )  
  }</pre>

Note how I used the `index` value from the `map` call as the `key` for every `Number` component. Remember that this is okay as long as we are not deleting, editing, or re-arranging the list of numbers (which we will not be doing here).

You can see the full code we have so far [here](https://jscomplete.com/repl/?j=S10iws71M).

#### Step #4: deciding what goes on the state

When the **Start** button is clicked, the game will move into a different state and the `10` second timer will start its countdown. Since these are UI changes, a game status and the current value of that timer at any given time should be placed on the state.

When the game is in the `playing` mode, the player can start clicking on challenge numbers. Every click will trigger a UI change. When a number is selected, we need the UI to represent it differently. This means we also need to place the selected numbers on the state as well. We can simply use an array for those.

However, we cannot use the number **values** in this new array, because the list of random challenge numbers might contain repeated values. We need to designate the unique **IDs** of these numbers as selected. We used a number positional **index** as its ID, so we can use that to uniquely select a number.

All of these identified state elements can be defined on the state of the `Game` component. The `Number` component does not need any state.

Here is what we need to place on the `Game` component state so far:

<pre name="d546" id="d546" class="graf graf--pre graf-after--p">// In the Game component</pre>

<pre name="2ffb" id="2ffb" class="graf graf--pre graf-after--pre">**state = {  
  gameStatus: 'new' // new, playing, won, lost  
  remainingSeconds: this.props.initialSeconds,  
  selectedIds: [],  
};**</pre>

Note how I made the initial value for the number of `remainingSeconds` customizable as well. I used a new game-level prop (`initialSeconds`) for that:

<pre name="9ba3" id="9ba3" class="graf graf--pre graf-after--p"><Game   
  challengeSize={6}   
  challengeRange={[2, 9]}   
  **initialSeconds={10}**   
/></pre>

To be honest, we do not need the `gameStatus` to be on the state at all. It is mostly computable. However, I am intentionally making an exception by placing it on the state as a simplified form of **caching** that computation.

Ideally, it’s better to cache this computation as an instance property, but I will keep it on the state to keep things simple.

What about the background colors used for the target number when the player wins or loses a game? Do those need to go on the state?

Not really. Since we have a `gameStatus` element, we can use that to lookup the right background color. The dictionary of background colors can be a simple static `Game` property (or you can pass it down if you want to make it customizable):

<pre name="7bd8" id="7bd8" class="graf graf--pre graf-after--p">// In the Game component</pre>

<pre name="0d09" id="0d09" class="graf graf--pre graf-after--pre"> **static bgColors = {  
    playing: '#ccc',  
    won: 'green',  
    lost: 'red',  
  };**</pre>

You can see the full code we have so far [here](https://jscomplete.com/repl/?j=rkh2YjEJf).

#### Step #5: designing views as functions of data and state

This is really the core of React. Now that we have identified all of the data and state this game needs, we can design the whole UI based on them.

Since the state usually starts with empty values (like the empty `selectedIds` array), it is hard to design the UI without testing actual values. However, mock values can be used to make testing easier:

<pre name="d7a5" id="d7a5" class="graf graf--pre graf-after--p">// Mock states:</pre>

<pre name="97b2" id="97b2" class="graf graf--pre graf-after--pre">**state = {  
  gameStatus: 'playing',  
  remainingSeconds: 7,  
  selectedIds: [0, 3, 4],  
};**</pre>

<pre name="a91a" id="a91a" class="graf graf--pre graf-after--pre">// Also test with  
 **gameStatus: 'lost'**</pre>

<pre name="bf2e" id="bf2e" class="graf graf--pre graf-after--pre">// And  
 **gameStatus: 'won'**</pre>

Using this strategy, we do not have to worry about behavior and user interactions (yet). We can focus on just having the UI designed as functions of data and (mock) state.

The key to executing this step correctly is **making sure child components receive only the minimum data that they actually need to re-render themselves in the various states**. This is probably the most important statement in the entire article.

We only have one child component, so let’s think about what it needs to render itself. We are already passing down its value from the map call, so what else does it need? For example, think about these questions:

*   Does the `Number` component need to be aware of the `selectedIds` array to figure out whether it is a selected number?
*   Does the `Number` component need to be aware of the current `gameStatus` value?

I will admit that answering these questions is not as easy as you might think. While you might be tempted to answer yes to both, the `Number` component does not need to be aware of both `selectedIds` and `gameStatus`. It only needs to be aware of whether or not it can be clicked. If it cannot be clicked, it will need to render itself differently.

Passing anything else to the `Number` component will make it re-render unnecessarily, which is something we should avoid.

We can use a lower opacity to represent a non-clickable number. Let’s make the `Number` component receive a `clickable` prop.

Computing this boolean `clickable` prop should happen in the `Game` component so that you avoid having to pass more data to the `Number` component. Let me give examples about the importance of making sure a child component receives only the minimum data that it needs:

*   If we pass the `gameStatus` value to the `Number` component, then every time the `gameStatus` changes (for example, from `playing` to `won`), React will re-render all six challenge numbers. But in this case, it did not really need to re-render any of them.
*   A Number component does need to re-render when the `gameStatus` changes from `new` to `playing` because of the masking question marks feature at the beginning. To avoid passing down the `gameStatus` to `Number`, we can compute the value displayed in a `Number` component within the `map` function callback in the `Game` component.
*   If we pass the `selectedIds` array down to the `Number` component, then on every click React will re-render all six challenge numbers when it only needed to re-render one number. This is why a `clickable` boolean flag is a much better choice here.

With every prop you pass to a child React component comes great responsibility.

This is more important than you might think. However, React will not optimize the re-rendering of a component automatically. We will have to decide if we want it to do so. This is discussed in step #8 below.

Besides the `clickable` prop, what else does the `Number` component need? Since it is going to be clicked, and we need to place the clicked number’s ID on the `Game` state, the click handler of every `Number` component needs to be aware of its own ID. And we cannot use React’s `key` prop value in this case. Let’s make the `Number` component receive an `id` prop as well.

<pre name="0467" id="0467" class="graf graf--pre graf-after--p">// In the Number component</pre>

<pre name="69e1" id="69e1" class="graf graf--pre graf-after--pre">render() {  
    return (  
       console.log(this.props.id)}** >  
        {this.props.value}  
        
    );  
  }</pre>

To compute whether a number is available and clickable, you can use a simple `indexOf` call on the `selecetdIds` array. Let’s create a function for that:

<pre name="09d9" id="09d9" class="graf graf--pre graf-after--p">// In the Game class  
**isNumberAvailable = (numberIndex) =>  
    this.state.selectedIds.indexOf(numberIndex) === -1;**</pre>

One behavior you probably noticed while playing the game above is that the number squares start out displaying a question mark until the Start button is clicked. We can use a ternary operator to control the value of each `Number` component based on the `gameStatus` value. Here is what we need to change to render a `Number` component inside the `map` call:

<pre name="5e27" id="5e27" class="graf graf--pre graf-after--p"><Number  
  key={index}  
 **id={index}**  value={**this.state.gameStatus === 'new' ? '?' : value**}  
 **clickable={this.isNumberAvailable(index)}** /></pre>

We can use a similar ternary expression for the target number value. We can also control its background color using a lookup call to the static `bgColors` object:

<pre name="edf4" id="edf4" class="graf graf--pre graf-after--p">  
  {**this.state.gameStatus === 'new' ? '?' : this.target**}  
</pre>

Finally, we should show the **Start** button only when the `gameStatus` is `new` . Otherwise we should just show the `remainingSeconds` counter. When the game is `won` or `lost`, let’s show a **Play Again** button. Here are the modifications we need for all that:

<pre name="0a37" id="0a37" class="graf graf--pre graf-after--p">  
 **{this.state.gameStatus === 'new' ? (  
    <button>Start</button>  
  ) : (  
    {this.state.remainingSeconds}  
  )}  
  {['won', 'lost'].includes(this.state.gameStatus) && (  
    <button>Play Again</button>  
  )}** </pre>

You can see the full code we have so far [here](https://jscomplete.com/repl/?j=HkIlnsEJG).

#### Step #6: designing behaviors to change the state

The first behavior that we need to figure out is how to start the game. We need two main actions here: 1) change the `gameStatus` to `playing` and 2) start a timer to decrement the `remainingSeconds` value.

If `remainingSeconds` is decremented all the way to zero, we need to force the game into the `lost` state and stop the timer as well. Otherwise, it will decrement beyond zero.

Here is a function we can use to do all that:

<pre name="2e0d" id="2e0d" class="graf graf--pre graf-after--p">// In the Game class</pre>

<pre name="1329" id="1329" class="graf graf--pre graf-after--pre">**startGame = () => {  
  this.setState({ gameStatus: 'playing' }, () => {  
    this.intervalId = setInterval(() => {  
      this.setState((prevState) => {  
        const newRemainingSeconds = prevState.remainingSeconds - 1;  
        if (newRemainingSeconds === 0) {  
          clearInterval(this.intervalId);  
          return { gameStatus: 'lost', remainingSeconds: 0 };  
        }  
        return { remainingSeconds: newRemainingSeconds };  
      });  
    }, 1000);  
  });  
};**</pre>

Note how I start the timer only after the `setState` call is complete. This is possible using the **second argument function callback** to `setState`.

Next, let’s figure out what should happen when a number is clicked during a game session. Let’s create a `selectNumber` function for that. This function should receive the ID of the clicked number and should only work when the `gameStatus` is `playing`. Every time a number is clicked, we need to add its ID to the `selectedIds` array.

We also need to compute the new `gameStatus` because every click might result in a `won`/`lost` status. Let’s create a `calcGameStatus` function to do that.

Here is one way to implement these two new functions:

<pre name="28cd" id="28cd" class="graf graf--pre graf-after--p">// In the Game class</pre>

<pre name="5a18" id="5a18" class="graf graf--pre graf-after--pre">**selectNumber = (numberIndex) => {  
  if (this.state.gameStatus !== 'playing') {  
    return;  
  }  
  this.setState(  
    (prevState) => ({  
      selectedIds: [...prevState.selectedIds, numberIndex],  
      gameStatus: this.calcGameStatus([  
        ...prevState.selectedIds,  
        numberIndex,  
      ]),  
    }),  
    () => {  
      if (this.state.gameStatus !== 'playing') {  
        clearInterval(this.intervalId);  
      }  
    }  
  );  
};**</pre>

<pre name="3f8f" id="3f8f" class="graf graf--pre graf-after--pre">**calcGameStatus = (selectedIds) => {  
  const sumSelected = selectedIds.reduce(  
    (acc, curr) => acc + this.challengeNumbers[curr],  
    0  
  );  
  if (sumSelected < this.target) {  
    return 'playing';  
  }  
  return sumSelected === this.target ? 'won' : 'lost';  
};**</pre>

Note a few things about the functions above:

*   We used the array **spread operator**to append `numberIndex` to `selectedIds`. This is a handy trick to avoid mutating the original array.
*   Since the new `gameStatus` is to be computed **while** we are updating the state, I passed the new `selectedIds` value to the `calcGameStatus` function rather than using the current `selectedIds` value. It has not been updated yet to include the new `numberIndex` at this point.
*   In `calcGameStatus`, I used a `reduce` call. This computes the current sum after a click using a combination of what is selected and the original `challengeNumbers` array, which holds the actual values of numbers. Then, a few conditionals can do the trick of determining the current game status.
*   Since the timer has to be stopped if the new `gameStatus` is not `playing`, I used the second callback argument for `setState` to implement that logic. This ensures it will use the new `gameStatus` after the async `setState` call is done.

The game is currently completely functional with the exception of the**Play Again** button. You can see the full code we have so far [here](https://jscomplete.com/repl/?j=SJoO0nVJf).

Now, how exactly are we going to implement this **Play Again** action? Can we simply just reset the state of the `Game` component?

Nope. Think about why.

#### Step #7: resetting a React component

The **Play Again** action needs more than a simple reset of the state of the `Game` component. We need to generate a new set of `challengeNumbers` alongwith a new `target` number. In addition, we need to clear any currently running timers and auto-start the game.

We can certainly improve the `startGame` function to do all of that. But React offers an easier way to reset a component: unmount that component and just remount it. This will trigger all initialization code and take care of any timers as well.

We do not really have to worry about the timer part of the state, because that part is controlled by behavior. However, in general, unmounting a component should also clear any timers defined in that component. Always do that:

<pre name="4b6a" id="4b6a" class="graf graf--pre graf-after--p">// In the Game class</pre>

<pre name="b7e5" id="b7e5" class="graf graf--pre graf-after--pre"> **componentWillUnmount() {  
    clearInterval(this.intervalId);  
  }**</pre>

Now, if the `Game` component is unmounted and re-mounted, it will start a completely fresh instance with new random numbers and an empty state. However, to re-mount a component based on a behavior, we will need to introduce a new parent component for `Game` . We will name it `App` . Then we’ll put something on the state of this new parent component which will trigger a UI change.

React has another useful trick we can use to accomplish this task. If any React component is rendered with a certain `key` and later re-rendered with a different `key`, React sees a completely new instance. It then automatically unmounts and re-mounts that component!

All we need to do is have a unique game ID as part of the state of the `App` component, use that as the `key` for the `Game` component, and change it when we need to reset a game.

We also want the game to auto-start when the player clicks **Play Again,** instead of having them click **Start** after **Play Again.** So let’s make the App component also pass down an **autoPlay** prop to **Game** and compute that based on the new **gameId** attribute. Only the first game should not be auto-played.

Here are the modifications that we need:

<pre name="f067" id="f067" class="graf graf--pre graf-after--p">// Create new App component</pre>

<pre name="7bc4" id="7bc4" class="graf graf--pre graf-after--pre">**class App extends React.Component {  
  state = {  
    gameId: 1,  
  };**</pre>

<pre name="5ca9" id="5ca9" class="graf graf--pre graf-after--pre">**resetGame = () =>  
    this.setState((prevState) => ({  
      gameId: prevState.gameId + 1,  
    }));**</pre>

<pre name="7c66" id="7c66" class="graf graf--pre graf-after--pre"> **render() {  
    return (  
      <Game  
        key={this.state.gameId}  
        autoPlay={this.state.gameId > 1}  
        challengeSize={6}  
        challengeRange={[2, 9]}  
        initialSeconds={10}  
        onPlayAgain={this.resetGame}  
      />  
    );  
  }  
}**</pre>

<pre name="1604" id="1604" class="graf graf--pre graf-after--pre">// In the Game class: respect the value of the new autoPlay prop  
 **componentDidMount() {  
    if (this.props.autoPlay) {  
      this.startGame();  
    }  
  }**</pre>

<pre name="5d55" id="5d55" class="graf graf--pre graf-after--pre">// In the Game render call  
// Wire the Play Again action using the parent prop  
<button **onClick={this.props.onPlayAgain}**>  
  Play Again  
</button></pre>

<pre name="f149" id="f149" class="graf graf--pre graf-after--pre">// Render the new App component instead of Game  
ReactDOM.render(**<App />**, document.getElementById('mountNode'));</pre>

You can see the full code we now have [here](https://jscomplete.com/repl/?j=HJrVXJrJG).

#### Step #8: optimize if you can measure

One of the challenging aspects of a React application is avoiding the wasteful rendering of the components that do not need to be re-rendered. We went to great lengths in step #5 not to pass any prop that will cause a `Number` component to re-render unnecessarily.

However, the code as it is now is still wastefully re-rendering most of the `Number` components. To see this in action, use a `componentWillUpdate` method in the `Number` component and just `console.log` something there:

<pre name="7569" id="7569" class="graf graf--pre graf-after--p">// In the Number component  
**componentWillUpdate() {  
  console.log('Number Updated');  
}**</pre>

Then, go ahead and play. On every state change in the `Game` component, you will see that we are re-rendering all 6 `Number` components. This happens when we click the **Start** button and every second after that!



![](https://cdn-images-1.medium.com/max/1600/1*Gun2dDDh21wbMyBmPkJIIQ.png)

The Number component was re-rendered 66 times. How many of these were necessary?



The fact is, a `Number` component should not re-render itself unless the player clicks on it. The `60` re-renders that were triggered by the timer change were wasteful. Furthermore, when the player clicks a number, only that number needs to be re-rendered. Right now, React also re-renders all six numbers when the player selects any number.



![](https://cdn-images-1.medium.com/max/1600/1*JB4ahRqp1hWKGr1LvbjsoQ.png)

36 Number component updates happened when only 9 updates should have happened



Luckily, we have been careful enough to only pass to the `Number` component the exact props that it needs to re-render. Only the challenge number that needs to be re-rendered will receive different values in these props.

This means we can use a conditional in React’s `shouldComponentUpdate` to short-circuit the render operation if all `nextProps` of a `Number` component match the current props.

React’s `PureComponent` class will do exactly that. Go ahead and change the `Number` component to extend `React.PureComponent` instead of `React.Component` and see how the problem magically goes away.

<pre name="f5d4" id="f5d4" class="graf graf--pre graf-after--p">class Number extends **React.PureComponent**</pre>



![](https://cdn-images-1.medium.com/max/1600/1*zz5qM2QVa_7ZrRmuXC2a9A.png)

Exactly ten Number components were updated (initial six + the selected four)



However, is this optimization worth it? We cannot answer that question without measuring. Basically, you need to measure which code uses fewer resources: a component render call or the `if` statement in `React.PureComponent` that compares previous and next state/props. This completely depends on the sizes of the state/props trees and the complexity of what is being re-rendered. Do not just assume one way is better than the other.

You can see the final code [here](https://jscomplete.com/repl/?j=rJj8poQyM). MVP complete. Now, for the love of CSS, can someone please style this game to make it appealing to kids? :)

Do not stop here if you like this. Add more features to the game. For example, keep a score for winning and increase it every time the player wins a round. Maybe make the score value depend on how fast the player wins the round.

You can also make future rounds harder by changing `challengeSize`, challengeRange, and initialSeconds when starting a new game.

The Target Sum game was featured in my **React Native Essential Training course,** which is available on [Lynda](https://www.lynda.com/React-Native-tutorials/React-Native-Essential-Training/560343-2.html) and [LinkedIn Learning](https://www.linkedin.com/learning/react-native-essential-training).

Thanks for reading.











* * *







**Pre-order the full** [**eBook**](https://jscomplete.com/learn-react-js-by-building-simple-games) **which has a few more games like this one:**



[![](https://cdn-images-1.medium.com/max/1600/1*HNs-H8HXZ5WDFq7RXYMqFw.png)](https://jscomplete.com/learn-react-js-by-building-simple-games)

[https://jscomplete.com/learn-react-js-by-building-simple-games](https://jscomplete.com/learn-react-js-by-building-simple-games)







<iframe data-width="600" data-height="400" width="600" height="400" src="https://medium.freecodecamp.org/media/f84ef192a30e1d65b1960de6d2e6c27c?postId=218e0da5be44" data-media-id="f84ef192a30e1d65b1960de6d2e6c27c" allowfullscreen="" frameborder="0"></iframe>












