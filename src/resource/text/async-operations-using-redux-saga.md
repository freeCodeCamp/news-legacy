---
author: Andrés Mijares
authorTwitter: https://twitter.com/andresmijares25
authorFacebook: https://facebook.com/10151981656096685
title: "Async operations using redux-saga"
subTitle: "UPDATE August/2017:..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*gbEYdLgV3eZ-tuqYlMeUhQ.png
url: https://medium.freecodecamp.org/async-operations-using-redux-saga-2ba02ae077b3
id: async-operations-using-redux-saga-2ba02ae077b3
date: 2016-08-09T14:09:37.772Z
tags: [
  "React",
  "JavaScript",
  "Redux",
  "Web Development",
  "Programming"
]
---
# Async operations using redux-saga







![](https://cdn-images-1.medium.com/max/2000/1*gbEYdLgV3eZ-tuqYlMeUhQ.png)







**UPDATE August/2017:**

*   I published a second part of this article, [Redux-saga common patterns](https://medium.com/shiftgig-blog/redux-saga-common-patterns-48437892e11c)

**UPDATE April/2017:**

*   Thanks [Eduardo](https://medium.com/@oieduardorabelo) for translating this article to **Portuguese,** [find it here](https://medium.com/@oieduardorabelo/redux-saga-voc%C3%AA-no-controle-das-opera%C3%A7%C3%B5es-ass%C3%ADncronas-71c9e6b3aabc).
*   Also this unknown guy for translating this article to **Chinese,** [find it here](http://www.jianshu.com/p/ea1647712df0).

A few days ago my colleague gave a talk about managing async operations. He was using several tools to extend the capabilities of redux. Listening to him really drove home the realities of [JavaScript Fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.1ol2mk46u).

Let’s face it: if you’re used to doing your job and using technologies based on your needs — and not for the sake of technology itself — setting up a React ecosystem can prove frustrating and time consuming.

I’ve spent the last two years working on Angular projects and enjoying the Model-View-Controller state of the art. And I must say that — even if the learning curve was an issue coming from a Backbone.js background — learning Angular has really paid off. I got a better job, and I also had the chance to collaborate on interesting projects. I learned a lot from Angular’s supportive community.

Those were really cool days, but, well, _The Fatigue Must Go On_ (trademark pending), and I’m moving on with the fashion: React, Redux, and Sagas.

A few years ago, I came across with an article titled [Flattening Promise Chains](http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/) by [Thomas Burleson](https://twitter.com/thomasburleson). I learned a lot from reading it. Even two years later, I still recall a lot of these insights.

These days I’ve been migrating to React and I’ve found lot of power in Redux and using sagas to manage async operations. So I am writing this to borrow from Thomas’ post and create a similar approach using [redux-saga](https://github.com/yelouafi/redux-saga). Here’s hoping this returns the favor to the universe and helps some folks understand how these important technologies work.

_Disclaimer: I will work with the same scenario and extend it, I hope (if i’m lucky) to create a discussion about both approaches. I will assume the reader has some basic understanding of Promises, React, Redux and (d’oh!)... JavaScript._

### First things first.

According to [Yassine Elouafi](https://twitter.com/yassineelouafi2), creator of the redux-saga:

> redux-saga is a library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

Basically a helper library which allows us to organize all the asynchronous and distributed operations based on Sagas and ES6 Function Generators. If you want to know more about the Saga pattern itself, [Caitie McCaffrey](https://twitter.com/caitie?lang=en) made a great job in this [video](https://www.youtube.com/watch?v=xDuwrtwYHu8) and more about Functions Generators. Check this free Egghead [video](https://egghead.io/lessons/ecmascript-6-generators) (at least it was free when I posted this article).

### The Flight Dashboard Case

Thomas set a case that we are going to recreate. The final code is [here](https://github.com/andresmijares/async-redux-saga), and the demo is [here](http://async-redux-saga.surge.sh/).

The scenario goes like this:



![](https://cdn-images-1.medium.com/max/1600/1*EZqUBpSYoucCykBA4z36Pg.jpeg)

Image by Thomas Burleson



As we can see, a sequence of three APIs call: getDeparture -> getFlight ->getForecast, so our API service class looks like this:

<pre name="53e2" id="53e2" class="graf graf--pre graf-after--p">class TravelServiceApi {</pre>

<pre name="5c5f" id="5c5f" class="graf graf--pre graf-after--pre"> static getUser() {  
   return new Promise((resolve) => {  
     setTimeout(() => {  
       resolve({  
            email : "somemockemail@email.com",  
            repository: "http://github.com/username"  
       });  
     }, 3000);  
   });  
 }</pre>

<pre name="7775" id="7775" class="graf graf--pre graf-after--pre"> static getDeparture(user) {  
  return new Promise((resolve) => {  
   setTimeout(() => {  
    resolve({  
      userID : user.email,  
      flightID : “AR1973”,  
      date : “10/27/2016 16:00PM”  
     });  
    }, 2500);  
   });  
 }</pre>

<pre name="c031" id="c031" class="graf graf--pre graf-after--pre"> static getForecast(date) {  
  return new Promise((resolve) => {  
      setTimeout(() => {  
        resolve({  
            date: date,  
            forecast: "rain"  
        });  
      }, 2000);  
   });  
  }</pre>

<pre name="27f3" id="27f3" class="graf graf--pre graf-after--pre">}</pre>

This is a straight-forward API with some mocked information that will allow us to set the scenario. First we need to have a user. Then with that information, we’ll get the departure, the flight, and the forecast so we can create several ugly dashboards panels, which look like this:







![](https://cdn-images-1.medium.com/max/2000/1*lXxqe4jIY3CUiQtbzsmcLw.png)







The React components can be found [here](https://github.com/andresmijares/async-redux-saga/blob/master/src/components/Dashboard.js). They’re three different components with a representation on the redux store given by three reducers, which look like this:

<pre name="0887" id="0887" class="graf graf--pre graf-after--p">const dashboard = (state = {}, action) => {  
 switch(action.type) {  
  case ‘FETCH_DASHBOARD_SUCCESS’:  
  return Object.assign({}, state, action.payload);  
  default :  
  return state;  
 }  
};</pre>

We use a different reducer for each panel, with three different scenarios, which give the component access to the piece of the user using the _StateToProps_ redux function:

<pre name="2800" id="2800" class="graf graf--pre graf-after--p">const mapStateToProps =(state) => ({  
 user : state.user,  
 dashboard : state.dashboard  
});</pre>

After everything is setup (yeah I know I did not explain a lot of stuff, but I want to focus only on the sagas…) we are ready to play!

### Show me the Sagas

William Deming said once:

> If you can’t describe what you are doing as a process, then you don’t know what you are doing.

Ok, let’s create a step by step process of how to work with Redux Saga.

#### 1\. Register the Sagas

I will use my own word to describe which method are exposed by the API. if you need more technical detail, feel free to refer to the documentation [here](https://yelouafi.github.io/redux-saga/docs/api/index.html).

First we need to create our saga generator and register them:

<pre name="0958" id="0958" class="graf graf--pre graf-after--p">function* rootSaga() {  
  yield[  
    fork(loadUser),  
    takeLatest('LOAD_DASHBOARD', loadDashboardSequenced)  
  ];  
}</pre>

Redux saga expose several methods called **_Effects_**_,_ we are going to define several of them:

*   **Fork** performs a non-blocking operation on the function passed.
*   **Take** pauses until action received.
*   **Race** runs effects simultaneously, then cancels them all once one finishes.
*   **Call** runs a function. If it returns a promise, pauses the saga until the promise is resolved.
*   **Put** dispatches an action.
*   **Select** Runs a selector function to get data from the state
*   **takeLatest** means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
*   **takeEvery** will return results for all the calls triggered.

We just registered two different sagas. We are going to define them later. So far, we take one for the user using **fork** and another **takeLatest,** which is going to wait for an action called “**LOAD_DASHBOARD**” to be executed. More info in step 3.

#### 2\. Inject the Saga Middleware into the Redux store.

When we define the Redux store and initialize it, most of time it will look like this:

<pre name="55c0" id="55c0" class="graf graf--pre graf-after--p">const sagaMiddleware = createSagaMiddleware();  
const store = createStore(rootReducer, [], compose(  
      applyMiddleware(sagaMiddleware)    
);  
sagaMiddleware.run(rootSaga); /* inject our sagas into the middleware*/</pre>

#### 3\. Create the Sagas.

First, we are going to define the sequence of the **loadUser** Saga:

<pre name="2a30" id="2a30" class="graf graf--pre graf-after--p">function* loadUser() {  
  try {  
   //1st step  
    const user = yield call(getUser);  
   //2nd step  
    yield put({type: 'FETCH_USER_SUCCESS', payload: user});</pre>

<pre name="4352" id="4352" class="graf graf--pre graf-after--pre">  } catch(error) {  
    yield put({type: 'FETCH_FAILED', error});  
  }  
}</pre>

We can read it like this:

*   First, call a function called **getUser**, and assign the result to the const **user**.
*   Later, dispatch an action called **FETCH_USER_SUCCESS** and pass the value of **user** to be consumed by the store.
*   If something goes bad, dispatch an action called **FETCH_FAILED.**

As you can see, it’s really cool that we can add the result of a yield operation to a variable.

Now we’re going to create the sequenced saga:

<pre name="99d1" id="99d1" class="graf graf--pre graf-after--p">function* loadDashboardSequenced() {</pre>

<pre name="b59f" id="b59f" class="graf graf--pre graf-after--pre"> try {  

  yield take(‘FETCH_USER_SUCCESS’);</pre>

<pre name="4844" id="4844" class="graf graf--pre graf-after--pre">  const user = yield select(state => state.user);  

  const departure = yield call(loadDeparture, user);</pre>

<pre name="928a" id="928a" class="graf graf--pre graf-after--pre">  const flight = yield call(loadFlight, departure.flightID);</pre>

<pre name="ba1e" id="ba1e" class="graf graf--pre graf-after--pre">  const forecast = yield call(loadForecast, departure.date);</pre>

<pre name="d697" id="d697" class="graf graf--pre graf-after--pre">  yield put({type: ‘FETCH_DASHBOARD_SUCCESS’, payload: {forecast,  flight, departure} });</pre>

<pre name="d593" id="d593" class="graf graf--pre graf-after--pre">  } catch(error) {  
    yield put({type: ‘FETCH_FAILED’, error: error.message});  
  }</pre>

<pre name="d894" id="d894" class="graf graf--pre graf-after--pre">}</pre>

We can read the saga as follows:

*   Wait for the **FETCH_USER_SUCCESS** action to be dispatched. This basically will be on hold until an event triggers it. We use the **take** effect for this.
*   We take a value from the store. The **select** effect receives a function which has access to the store. We assign the user information to the constant user.
*   We exec an async operation to load the departure information, and pass the user as parameter using the **call** Effect.
*   After the **loadDeparture** is finished, we execute the **loadFlight** with the departure object fetched in the previous operation.
*   The same will apply with the forecast, we need to wait until the flight is loaded to execute the next **call** effect.
*   Finally, once all the operations are finished, we use the **put** Effect to dispatch and action to the store and send all the arguments using the information loaded during the whole saga.

As you can see, a saga is a collection of steps that wait from previous actions to modify their behaviors. Once finished, all the information is ready to be consumed in the store.

Pretty neat, eh?

Now let’s check a different case. Consider **getFlight** and **getForecast** can be triggered at the same time. They don’t need for one to finish in order to start the other, so we can create a different panel for that case.



![](https://cdn-images-1.medium.com/max/1600/1*3K1KYdXiF-XT_bWfPAcAqw.png)

Image by Thomas Burleson



#### Non-blocking Saga

In order to execute two non-blocking operations, we need to make a little modification to our previous saga:

<pre name="061c" id="061c" class="graf graf--pre graf-after--p">function* loadDashboardNonSequenced() {  
  try {  
    //Wait for the user to be loaded  
    yield take('FETCH_USER_SUCCESS');</pre>

<pre name="2a67" id="2a67" class="graf graf--pre graf-after--pre">    //Take the user info from the store  
    const user = yield select(getUserFromState);</pre>

<pre name="0d86" id="0d86" class="graf graf--pre graf-after--pre">    //Get Departure information  
    const departure = yield call(loadDeparture, user);</pre>

<pre name="e0b7" id="e0b7" class="graf graf--pre graf-after--pre">    //Here is when the magic happens  
    const [flight, forecast] = yield [call(loadFlight, departure.flightID), call(loadForecast, departure.date)];</pre>

<pre name="ba8e" id="ba8e" class="graf graf--pre graf-after--pre">    //Tell the store we are ready to be displayed  
    yield put({type: 'FETCH_DASHBOARD2_SUCCESS', payload: {departure, flight, forecast}});</pre>

<pre name="1116" id="1116" class="graf graf--pre graf-after--pre">} catch(error) {  
    yield put({type: 'FETCH_FAILED', error: error.message});  
  }  
}  

</pre>

We have to register the yield as an array:

<pre name="2393" id="2393" class="graf graf--pre graf-after--p">const [flight, forecast] = yield [call(loadFlight, departure.flightID), call(loadForecast, departure.date)];</pre>

So both operations are called in parallel, but at the end of the day we can will wait for both to end to update the UI if needed.

Then we need to register the saga into the rootSaga:

<pre name="55a4" id="55a4" class="graf graf--pre graf-after--p">function* rootSaga() {  
  yield[  
    fork(loadUser),  
    takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),  
    takeLatest('LOAD_DASHBOARD2' loadDashboardNonSequenced)</pre>

<pre name="96a1" id="96a1" class="graf graf--pre graf-after--pre">  ];  
}</pre>

What if we need to update the UI as soon as operation is finished?

Don’t worry — I’ve got your back.

#### **Non Sequenced and Non Blocking Sagas**

We can also isolate our sagas and combine them, meaning they can work independently. That’s exactly what we need. Let’s take a look.

**Step #1**: We isolate the Forecast and the Flight Saga. They both depend on departure.

<pre name="150f" id="150f" class="graf graf--pre graf-after--p">/* **************Flight Saga************** */  
function* isolatedFlight() {  
  try {  
    /* departure will take the value of the object passed by the put*/  
    const departure = yield take('FETCH_DEPARTURE3_SUCCESS');  

    const flight = yield call(loadFlight, departure.flightID);  

    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {flight}});</pre>

<pre name="cb92" id="cb92" class="graf graf--pre graf-after--pre">  } catch (error) {  
    yield put({type: 'FETCH_FAILED', error: error.message});  
  }  
}  

</pre>

<pre name="0962" id="0962" class="graf graf--pre graf-after--pre">/* **************Forecast Saga************** */  
function* isolatedForecast() {  
    try {  
      /* departure will take the value of the object passed by the put*/  
     const departure = yield take('FETCH_DEPARTURE3_SUCCESS');</pre>

<pre name="8604" id="8604" class="graf graf--pre graf-after--pre">     const forecast = yield call(loadForecast, departure.date);  

     yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: { forecast, }});</pre>

<pre name="52ad" id="52ad" class="graf graf--pre graf-after--pre">} catch(error) {  
      yield put({type: 'FETCH_FAILED', error: error.message});  
    }  
}</pre>

Notice something very important here? This is how we architect our sagas:

*   They both are waiting for the same **Action Event** (FETCH_DEPARTURE3_SUCCESS) to start.
*   They will receive a value when this event is triggered. More detail on this in the next step.
*   They will execute their async operation using the **call Effect**and both will trigger the same event after completion. But they both send different data to the store. Thanks to the power of Redux, we can do this without any modification to our reducer.

**Step #2**: Let’s make the changes to the departure sequence and make sure it sends a departure value with two other sagas:

<pre name="4d5b" id="4d5b" class="graf graf--pre graf-after--p">function* loadDashboardNonSequencedNonBlocking() {  
  try {  
    //Wait for the action to start  
    yield take('FETCH_USER_SUCCESS');</pre>

<pre name="d00f" id="d00f" class="graf graf--pre graf-after--pre">    //Take the user info from the store  
    const user = yield select(getUserFromState);</pre>

<pre name="4044" id="4044" class="graf graf--pre graf-after--pre">    //Get Departure information  
    const departure = yield call(loadDeparture, user);</pre>

<pre name="0801" id="0801" class="graf graf--pre graf-after--pre">    //Update the store so the UI get updated  
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: { departure, }});</pre>

<pre name="cdba" id="cdba" class="graf graf--pre graf-after--pre">    //trigger actions for Forecast and Flight to start...  
    //We can pass and object into the put statement  
    yield put({type: 'FETCH_DEPARTURE3_SUCCESS', departure});</pre>

<pre name="213a" id="213a" class="graf graf--pre graf-after--pre">  } catch(error) {  
    yield put({type: 'FETCH_FAILED', error: error.message});  
  }  
}</pre>

Nothing different here until we get to the **put Effect**.we can pass an object to the actions and it will be yielded into the departure const in the departure and flight saga. I love this.

Feel free to see the [demo](http://async-redux-saga.surge.sh), and notice how the third panel loads the forecast before the flight because the timeout is higher, to simulate a slower request.

In a production app, I’d probably do things a little different. I just wanted to point out that you can pass values when using the **put** effect.

#### What about testing?

> You do test your code… right?

Sagas are easy to test, but they are coupled with your steps, are set into the sequenced due to the nature of generators. Let’s see an example. (And feel free to check the all the test in the [repo](https://github.com/andresmijares/async-redux-saga) into the sagas folder):

<pre name="fc30" id="fc30" class="graf graf--pre graf-after--p">describe('Sequenced Saga', () => {  
  const saga = loadDashboardSequenced();  
  let output = null;</pre>

<pre name="bd79" id="bd79" class="graf graf--pre graf-after--pre">it('should take fetch users success', () => {  
      output = saga.next().value;  
      let expected = take('FETCH_USER_SUCCESS');  
      expect(output).toEqual(expected);  
  });</pre>

<pre name="a041" id="a041" class="graf graf--pre graf-after--pre">it('should select the state from store', () => {  
      output = saga.next().value;  
      let expected = select(getUserFromState);  
      expect(output).toEqual(expected);  
  });</pre>

<pre name="4e07" id="4e07" class="graf graf--pre graf-after--pre">it('should call LoadDeparture with the user obj', (done) => {  
    output = saga.next(user).value;  
    let expected = call(loadDeparture, user);  
    done();  
    expect(output).toEqual(expected);  
  });</pre>

<pre name="7377" id="7377" class="graf graf--pre graf-after--pre">it('should Load the flight with the flightId', (done) => {  
    let output = saga.next(departure).value;  
    let expected = call(loadFlight, departure.flightID);  
    done();  
    expect(output).toEqual(expected);  
  });</pre>

<pre name="cf00" id="cf00" class="graf graf--pre graf-after--pre">it('should load the forecast with the departure date', (done) => {  
      output = saga.next(flight).value;  
      let expected = call(loadForecast, departure.date);  
      done();  
      expect(output).toEqual(expected);  
    });</pre>

<pre name="e7b4" id="e7b4" class="graf graf--pre graf-after--pre">it('should put Fetch dashboard success', (done) => {  
       output = saga.next(forecast, departure, flight ).value;  
       let expected = put({type: 'FETCH_DASHBOARD_SUCCESS', payload: {forecast, flight, departure}});  
       const finished = saga.next().done;  
       done();  
       expect(finished).toEqual(true);  
       expect(output).toEqual(expected);  
    });  
});</pre>

1.  Make sure you import all the effect and functions helpers that you are going to test.
2.  When you store a value on the yield, you need to pass the mock data to the next function. Notice the third, forth and fifth test.
3.  Behind the scene, each generator moves to the next line after a yield when the next method is called. This is why we use the **saga.next().value** here.
4.  This sequence is set in stone. If you change the steps on the saga, the test won’t pass.

### **Conclusion.**

I really like to test new technologies and in the front end development, we find new stuff almost on daily basis. It’s like a fashion: once something is accepted by the community, it’s like everyone wants to use it. Sometimes I find a lot of value in these things, but it’s still important to sit down and check to see whether we really need something.

I’ve found _thunks_ easier to implement and maintain. But for more complex operation, Redux-Saga does a really great job.

Once again, I thank Thomas for the inspiration for this post. I hope someone finds as much inspiration in this post as I did in his :).

If you have any questions, feel free to [tweet at me](http://twitter.com/andresmijares25). I’m happy to help.

If you happen to be more interested about this topic, feel free to check the part 2 of this serie [Redux-saga common patterns.](https://medium.com/shiftgig-blog/redux-saga-common-patterns-48437892e11c)











* * *







Finally feel free to check my open source projects at the moment:

*   [**React Calendar Multiday**](https://github.com/sgrepo/react-calendar-multiday)








