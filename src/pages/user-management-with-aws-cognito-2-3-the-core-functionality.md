---
author: Kangze Huang
authorTwitter: none
authorFacebook: none
title: "User Management with AWS Cognito — (2/3) The Core Functionality"
subTitle: "The Complete AWS Web Boilerplate — Tutorial 1B"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ubdzj9K3MrbMb0Ep0UV3IA.png
url: https://medium.freecodecamp.org/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4
id: user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4
date: 2017-01-02T18:30:20.713Z
tags: [
  "JavaScript",
  "AWS",
  "Web Development",
  "Startup",
  "Tech"
]
---
# User Management with AWS Cognito — (2/3) The Core Functionality

## The Complete AWS Web Boilerplate — Tutorial 1B



![](https://cdn-images-1.medium.com/max/1600/1*ubdzj9K3MrbMb0Ep0UV3IA.png)



> [**Main Table of Contents Click Here**](https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.uw0npcszi)

> **Part A:** [Initial Setup](https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.pgxyg8q8o)

> **Part B:** [The Core Functionality](https://medium.com/@kangzeroo/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4)

> **Part C:** [Last Steps to Full Fledged](https://medium.com/@kangzeroo/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e#.v3mg316u5)

Download the Github [here](https://github.com/kangzeroo/Kangzeroos-AWS-Cognito-Boilerplate).

### The Javascript Cognito SDK

Great! You should only be here if you finished the initial setup for Cognito and Federated Identities. Now that we have everything set up, its time to walk through the Javascript code. Download the [Kangzeroo boilerplate on Github](https://github.com/kangzeroo/Kangzeroos-ES6-React-Redux-Boilerplate) and be sure to enter the Cognito branch where we will be doing our work.

<pre name="eb49" id="eb49" class="graf graf--pre graf-after--p">$ git clone [https://github.com/kangzeroo/Kangzeroos-Complete-AWS-Web-Boilerplate.git](https://github.com/kangzeroo/Kangzeroos-Complete-AWS-Web-Boilerplate.git)  
$ cd Kangzeroos-Complete-AWS-Web-Boilerplate  
$ git checkout Cognito  
$ cd App</pre>

The boilerplate uses the [Amazon-Cognito-Identity-JS library found on github](https://github.com/aws/amazon-cognito-identity-js). This library makes it really easy to use programatic AWS Cognito, but the same functionality can be found in the native `aws-sdk`. So let’s go and install our dependencies and load up the app.

<pre name="3d6a" id="3d6a" class="graf graf--pre graf-after--p">$ npm install  
$ npm run start</pre>

#### AWS Profile Setup

Navigate to `App/src/components/Auth` where we will find all the React components related to Cognito authentication. Yes, this tutorial uses React, but you can easily apply the same lessons to other JS frameworks. Go to `App/src/api/aws/aws-cognito.js` which is where the bulk of the AWS Cognito code resides. Let’s take a look at the dependencies and how we can setup our own AWS profile.

<pre name="5ede" id="5ede" class="graf graf--pre graf-after--p">// aws-cognito.js</pre>

<pre name="3a50" id="3a50" class="graf graf--pre graf-after--pre">import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoIdentityCredentials, WebIdentityCredentials } from 'amazon-cognito-identity-js';</pre>

<pre name="ed59" id="ed59" class="graf graf--pre graf-after--pre">import { userPool, LANDLORD_USERPOOL_ID, LANDLORD_IDENTITY_POOL_ID, TENANT_IDENTITY_POOL_ID } from './aws_profile'</pre>

<pre name="bc87" id="bc87" class="graf graf--pre graf-after--pre">import uuid from 'node-uuid'</pre>

We import a variety of functions from `amazon-cognito-identity-js` as well as from `./aws_profile.js`. The functions from `amazon-cognito-identity-js` will be explained as we go along. What we want to focus on is the `./aws_profile.js` stuff. Here is where we put our Cognito params such as our userPoolId and AppIds. Let’s take a look at `./aws_profile.js`.

<pre name="b477" id="b477" class="graf graf--pre graf-after--p">import { CognitoUserPool } from 'amazon-cognito-identity-js';  
import 'amazon-cognito-js'</pre>

<pre name="8e10" id="8e10" class="graf graf--pre graf-after--pre">const REGION = "us-east-1"  
const USER_POOL_ID = 'us-east-1_6i5p2Fwao'  
const CLIENT_ID = '5jr0qvudipsikhk2n1ltcq684b'</pre>

<pre name="d682" id="d682" class="graf graf--pre graf-after--pre">AWS.config.update({  
 region: REGION  
})</pre>

<pre name="1268" id="1268" class="graf graf--pre graf-after--pre">const userData = {  
    UserPoolId : USER_POOL_ID,  
    ClientId : CLIENT_ID  
}</pre>

<pre name="2992" id="2992" class="graf graf--pre graf-after--pre">export const userPool = new CognitoUserPool(userData);</pre>

<pre name="3d3d" id="3d3d" class="graf graf--pre graf-after--pre">export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID</pre>

<pre name="742c" id="742c" class="graf graf--pre graf-after--pre">export const IDENTITY_POOL_ID = 'us-east-1:65bd1e7d-546c-4f8c-b1bc-9e3e571cfaa7'</pre>

Here we are setting up our AWS `region`, Cognito `USER_POOL_ID`, and Cognito App `CLIENT_ID`. We are also creating a `CognitoUserPool` object from our `USER_POOL_ID` and `CLIENT_ID`, which holds the bulk of our Cognito functions. `CognitoUserPool` has functions for everything ranging from password resets to authenticating a new user. We create `CognitoUserPool` here so that we don’t have to re-instantiate it again for each function. We also set up our `USERPOOL_ID` which is a url that is required in some Cognito functions, and comprised of `USER_POOL_ID` and `region`. Finally, we also export a ARN of our Federated Identities pool, which is also required in some Cognito functions. All in all, this is just setup and you only need to copy and paste your own values.

Last setup set, we will create an array of our user attributes at the top of our `aws_cognito.js` file. Fill in the array with your own user attributes, and don’t forget to prefix any custom attributes with `custom:` for `const attrs`. `const landlordAttrs` does not require the `custom:` prefix.

<pre name="3198" id="3198" class="graf graf--pre graf-after--p">// we create an array of all attributes, without the `custom:` prefix.   
// This will be used for building the React-Redux object in plain JS, hence no AWS Cognito related name requirements  
const landlordAttrs = ["email", "agentName", "id"]</pre>

<pre name="1d29" id="1d29" class="graf graf--pre graf-after--pre">// we create an array of all our desired attributes for changing, and we loop through this array to access the key name.  
// This will be used for AWS Cognito related name requirements  
const attrs = ["custom:agentName"]</pre>

Now after setup and before beginning the actual code, I should say that this boilerplate is complete. You don’t necessarily need to know what’s going on behind the scenes. You can just use this boilerplate and all features will work out of the box: signup, login, email verification, password reset, user attribute changes and saved logins using JWT. Note that any emails you use in Cognito must be verified by AWS, until you [request to leave the AWS SES sandbox](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html) (in which case you will be able to message any email). If you’re here for just the working boilerplate, this is as far as you need to read. If you want to know what’s going on, continue reading!

#### Sign Up Users

Let’s look at the first auth component called `SignUp.js`. I won’t spend time explaining the React side of things, as that is not the purpose of this tutorial. Go find this function:

<pre name="044b" id="044b" class="graf graf--pre graf-after--p">signup(){</pre>

<pre name="8afb" id="8afb" class="graf graf--pre graf-after--pre">...</pre>

<pre name="23b2" id="23b2" class="graf graf--pre graf-after--pre">// call the AWS Cognito function that we named `signUpUser`  
    signUpUser(this.state)  
     .then(({email})=>{  
      // if successful, then save the email to localStorage so we can pre-fill the email form on the login & verify account screens  
      localStorage.setItem('User_Email', email)  
      // re-route to the verify account screen  
      browserHistory.push('/auth/verify_account')  
     })</pre>

<pre name="9ec8" id="9ec8" class="graf graf--pre graf-after--pre">...</pre>

<pre name="e571" id="e571" class="graf graf--pre graf-after--pre">}</pre>

Here we are calling `signUpUser()` and passing in the React component state, which looks like this:

<pre name="6f40" id="6f40" class="graf graf--pre graf-after--p">this.state = {  
   email: "",  
   agentName: "",  
   password: "",  
   confirmPassword: "",  
   errorMessage: null,  
   loading: false  
}</pre>

We will only be using the email and password attributes of the state when we pass it into `signUpUser()`. The`signUpUser()` function is located in `App/src/api/aws/aws-cognito.js`.

<pre name="774a" id="774a" class="graf graf--pre graf-after--p">export function signUpUser({email, agentName, password}){  
 const p = new Promise((res, rej)=>{</pre>

<pre name="e0f9" id="e0f9" class="graf graf--pre graf-after--pre">  const attributeList = []</pre>

<pre name="ab82" id="ab82" class="graf graf--pre graf-after--pre">  const dataEmail = {  
      Name : 'email',  
      Value : email  
  }  
  const dataAgentName = {  
      Name : 'custom:agentName',  
      Value : agentName  
  }</pre>

<pre name="2923" id="2923" class="graf graf--pre graf-after--pre">  const attributeEmail = new CognitoUserAttribute(dataEmail)  
  const attributeAgentName = new CognitoUserAttribute(dataAgentName)</pre>

<pre name="6266" id="6266" class="graf graf--pre graf-after--pre">  attributeList.push(attributeEmail, attributeAgentName)</pre>

<pre name="0f93" id="0f93" class="graf graf--pre graf-after--pre">  userPool.signUp(email, password, attributeList, null, function(err, result){  
      if (err) {  
          rej(err)  
          return  
      }  
      res({email})  
  })  
 })  
 return p  
}</pre>

`signUpUser()` accepts an object that should have 3 attributes: `email`, `password` and `agentName`. In order to save it as an attribute of our Cognito user, we must make a `CognitoUserAttribute` object for each. We do this by creating a `dataEmail` and `dataAgentName` object with the name of the attribute and its value. These objects will be passed into the `CognitoUserAttribute` function that converts it into AWS Cognito readable objects that we have titled `attributeEmail` and `attributeAgentName`. Note that `dataAgentName.name` is prefixed with `custom:` to specify to Cognito that `agentName` is a custom user attribute. Now that we have our `CognitoUserAttribute` objects, we will push them into the `attributeList` array.

The next line of code is what actually registers this new user. We use the `userPool` object that we imported from `./aws_profile.js` and call its `signUp` function. The first 3 arguments are the unique identifier `email`, `password`, and the `attributeList` array. The fourth argument is null, and the fifth is the callback. In the callback, we reject the promise if an error occurred, and if no errors, then we resolve the promise. In the boilerplate, we return the email to be saved to localStorage in our React component, but this is not mandatory. You can resolve the promise with nothing. The new Cognito user has been created. But in order to use the new user, they need to be able to verify their account. The AWS infrastructure for this has already been set up, so now all we have to do is walk through the code of the verification function.

#### Verify Account

We won’t be spending too much time on this part of the code, so I will first explain the React-Redux component at a high level, and then go into detail with the AWS stuff.

At a high level what happens after a user signs up is that they are redirected by `react-router` to the `/verify_account` url where the `App/src/components/Auth/VerifyAccount.js` component appears. When the component is mounted, the email field is auto-filled by accessing the `localStorage`. Then we have the option to enter the verification PIN sent to the user’s email, or choose to reset & resend the verification PIN. Let’s take a look at the `resetVerificationPIN()` function in `App/src/api/aws/aws-cognito.js`.

<pre name="626d" id="626d" class="graf graf--pre graf-after--p">export function resetVerificationPIN(email){  
 const p = new Promise((res, rej)=>{  
  const userData = {  
   Username: email,  
   Pool: userPool  
  }  
  const cognitoUser = new CognitoUser(userData)  
  cognitoUser.resendConfirmationCode(function(err, result) {  
         if (err) {  
          rej(err)  
          return  
         }  
         res()  
     })  
 })  
 return p  
}</pre>

When we call this function, we only need to pass in the email. Cognito will automatically check that the email exists and throw an error if it does not. Like in `SignUp.js`, we create a `userData` object containing our user’s email and the userPool imported from `./aws_profile.js` in order to create a vliad `CognitoUser` object. Using `CognitoUser` object, we can call `resendConfirmationCode()` to have the PIN be sent again. And that’s it!

Now let’s look at the `verifyUserAccount()` function:

<pre name="1230" id="1230" class="graf graf--pre graf-after--p">export function verifyUserAccount({email, pin}){  
 const p = new Promise((res, rej)=>{  
  const userData = {  
   Username: email,  
   Pool: userPool  
  }  
  const cognitoUser = new CognitoUser(userData)  
  cognitoUser.confirmRegistration(pin, true, function(err, result) {  
         if (err) {  
             console.log(err);  
             rej(err)  
             return;  
         }  
         if(result == "SUCCESS"){  
          console.log("Successfully verified account!")  
          cognitoUser.signOut()  
          res()  
         }else{  
          rej("Could not verify account")  
         }  
     })  
 })  
 return p  
}</pre>

`verifyUserAccount()` accepts an object as its only argument, containing 2 essential attributes `email` and `pin`. We create another `userData` object to create a `CognitoUser` in order to call the `confirmRegistration()` function. In `confirmRegistration()` we pass in the `pin`, `true`, and a callback. If the confirmation succeeds, then we log out the cognitoUser (so that we can login again and refresh the user). If it fails, then we reject the promise. Pretty easy since the SDK has abstracted a lot of the details. Upon successful verification, the React component should re-direct you to the Login page.

#### Sign In Users

Let’s look at the next component `App/src/components/Auth/Login.js`. Find the following function:

<pre name="e855" id="e855" class="graf graf--pre graf-after--p">signin(){  
  this.setState({loading: true})  
  signInUser({  
   email: this.state.email,  
   password: this.state.password  
  }).then((`userProfileObject`)=>{  
   localStorage.setItem('User_Email', this.state.email)  
   this.props.setUser(`userProfileObject`)  
   browserHistory.push('/authenticated_page')  
  })  
  .catch((err)=>{  
   this.setState({  
    errorMessage: err.message,  
    loading: false  
   })  
  })  
 }</pre>

What is happening here? First we call the `signInUser()` Cognito function to sign in and grab user details from Cognito. Next in the promise chain, we save the user email to `localStorage` so that we can automatically set the email next login. We also save the user to the Redux state using `this.props.setUser()`, which is a Redux action function located at `App/src/actions/auth_actions.js`. We won’t cover the React-Redux stuff as it is not the focus of this tutorial. Let’s look at the AWS Cognito function.

Find `signInUser()` at `App/src/api/aws/aws-cognito.js`. This is what it looks like:

<pre name="7d72" id="7d72" class="graf graf--pre graf-after--p">export function signInUser({email, password}){  
 const p = new Promise((res, rej)=>{</pre>

<pre name="8a2d" id="8a2d" class="graf graf--pre graf-after--pre">  const authenticationDetails = new AuthenticationDetails({  
   Username: email,  
   Password: password  
  })</pre>

<pre name="4e51" id="4e51" class="graf graf--pre graf-after--pre">  const userData = {  
   Username: email,  
   Pool: userPool  
  }  
  const cognitoUser = new CognitoUser(userData)</pre>

<pre name="9254" id="9254" class="graf graf--pre graf-after--pre">  authenticateUser(cognitoUser, authenticationDetails)  
   .then(()=>{  
    return buildUserObject(cognitoUser)  
   })  
   .then((userProfileObject)=>{  
    res(userProfileObject)  
   })  
   .catch((err)=>{  
    rej(err)  
   })</pre>

<pre name="4ddd" id="4ddd" class="graf graf--pre graf-after--pre"> })  
 return p  
}</pre>

We create an `AuthenticationDetails` Cognito object containing the user `email` and `password`. We also create a `CognitoUser` object to use for its `authenticateUser()` function, but notice `authenticateUser()` is not declared anywhere in the function or at the top of the page where we list dependencies. This is because `authenticateUser()` is another function declared further down the page. Another function declared in the page is `buildUserObject()`, which takes the user attributes from Cognito and formats them into a user object that we want to use in the Redux state. At the end of the promise chain, we return the `userProfileObject` that `buildUserObject()` outputs. Let’s walk through the promise chain starting with `authenticateUser()`.

<pre name="9f0d" id="9f0d" class="graf graf--pre graf-after--p">function authenticateUser(cognitoUser, authenticationDetails){  
 const p = new Promise((res, rej)=>{</pre>

<pre name="29d8" id="29d8" class="graf graf--pre graf-after--pre">  cognitoUser.authenticateUser(authenticationDetails, {</pre>

<pre name="f74c" id="f74c" class="graf graf--pre graf-after--pre">         onSuccess: function (result) {  
             localStorage.setItem('user_token', result.accessToken.jwtToken)  
             const loginsObj = {  
                 [USERPOOL_ID]: result.getIdToken().getJwtToken()  
             }  
       AWS.config.credentials = new AWS.CognitoIdentityCredentials({  
                 IdentityPoolId : IDENTITY_POOL_ID,   
                 Logins : loginsObj  
             })  
             AWS.config.credentials.refresh(function(){  
              console.log(AWS.config.credentials)  
             })  
             res()  
         },</pre>

<pre name="3d2e" id="3d2e" class="graf graf--pre graf-after--pre">         onFailure: function(err) {  
             rej(err)  
         }</pre>

<pre name="9016" id="9016" class="graf graf--pre graf-after--pre">     })</pre>

<pre name="3229" id="3229" class="graf graf--pre graf-after--pre"> })  
 return p  
}</pre>

`authenticateUser()` takes the `cognitoUser` and `authenticationDetails` arguments and uses it for 2 things. `cognitoUser` has a function in it called `authenticateUser()` which we will call for logging into AWS Cognito. The first argument we pass in is `authenticationDetails` (which contains the email+password), and the second argument is an object with a `onSuccess` and `onFailure` callback. Pretty straightforward, `onFailure` will simply reject the promise chain. `onSuccess` will contain `result`, which will have a JWT token used for future authentication without needing to enter a password. We save the JWT to `localStorage` and retrieve it whenever we need it (backend authentication for resources or automatic login). Next we create a `loginsObj` which contains a key-value of our `USER_POOL_ID` and the JWT token. We pass in this `loginsObj` to an instance of `AWS.config.credentials` using `new AWS.CognitoIdentityCredentials()`, along with the `IdentityPoolId`. What this does is register a login with AWS Federated Identities. Recall that Federated Identities is used for managing logins from multiple sources, so it makes sense that we use Federated Identities to record a login success per each login.

After setting up `AWS.config.credentials`, we can now use the Cognito authentication to request other Amazon services. Of course those services need to be configured to whitelist a certain Cognito auth (and reject other requests), but that will be shown in future tutorials on a per-service basis. Anyways, after we setup `AWS.config.credentials` it is important to refresh the credentials using `AWS.config.credentials.refresh` so that AWS will use the latest one we just added.

Now let’s move on to the next step in the `signInUser()` promise chain: `buildUserObject()`.

<pre name="7370" id="7370" class="graf graf--pre graf-after--p">function buildUserObject(cognitoUser){  
 const p = new Promise((res, rej)=>{  
  cognitoUser.getUserAttributes(function(err, result) {  
         if (err) {  
              rej(err)  
              return  
         }  
         let userProfileObject = {}  
         for (let i = 0; i < result.length; i++) {  
           if(result[i].getName().indexOf('custom:') >= 0){  
              let name = result[i].getName().slice(7, result[i].getName().length)  
              userProfileObject[name] = result[i].getValue()  
           }else{  
              userProfileObject[result[i].getName()] = result[i].getValue()  
           }  
         }  
         res(userProfileObject)  
     })  
 })  
 return p  
}</pre>

First the `cognitoUser` object is passed in and used to call its `getUserAttributes()` method. Like always, we reject the promise if an error occurs. If success, then we proceed to create an empty`userProfileObject` that will have a structure matching what we want on our React-Redux front end. The `result` object that we get from the success callback is an array of CognitoUserAttribute objects (recall the`AttributeList` array from `signUpUser()`). We iterate through this array using a for-loop and get the names of each attribute, stripping away the `custom:` prefix if needed. Then we also include the value of the attribute, and add the key-value pair to the `userProfileObject`. By the end of the loop, we will have our finished `userProfileObject` in plain JS. We return the `userProfileObject` and complete the `signInUser()` promise chain. Let’s see the `signInUser()` flow again and observe the flow at a high level.

<pre name="0c5f" id="0c5f" class="graf graf--pre graf-after--p">export function signInUser({email, password}){  
 const p = new Promise((res, rej)=>{</pre>

<pre name="b758" id="b758" class="graf graf--pre graf-after--pre">const authenticationDetails = new AuthenticationDetails({  
   Username: email,  
   Password: password  
  })</pre>

<pre name="b141" id="b141" class="graf graf--pre graf-after--pre">const userData = {  
   Username: email,  
   Pool: userPool  
  }  
  const cognitoUser = new CognitoUser(userData)</pre>

<pre name="7289" id="7289" class="graf graf--pre graf-after--pre">authenticateUser(cognitoUser, authenticationDetails)  
   .then(()=>{  
    return buildUserObject(cognitoUser)  
   })  
   .then((userProfileObject)=>{  
    res(userProfileObject)  
   })  
   .catch((err)=>{  
    rej(err)  
   })</pre>

<pre name="776a" id="776a" class="graf graf--pre graf-after--pre">})  
 return p  
}</pre>

When we finally resolve the `signInUser()` promise, we return the `userProfileObject` to the React component. In the React component `Login.js`, observe what we do after `signInUser()`.

<pre name="be90" id="be90" class="graf graf--pre graf-after--p">signin(){  
  this.setState({loading: true})  
  signInUser({  
   email: this.state.email,  
   password: this.state.password  
  }).then((`userProfileObject`)=>{  
   localStorage.setItem('User_Email', this.state.email)  
   this.props.setUser(`userProfileObject`)  
   browserHistory.push('/authenticated_page')    
  })  
  .catch((err)=>{  
   this.setState({  
    errorMessage: err.message,  
    loading: false  
   })  
  })  
 }</pre>

We save the user’s email to `localStorage` for future use, and add the `userProfileObject` to the Redux state. If any errors occurred in the entire process, they will be caught and displayed in `this.state.errorMessage`. And that’s it! A quick note to point out: `this.props.setUser()` is a Redux action that will set the `userProfileObject` to be accessible throughout the Redux app, we well as toggle a boolean `state.auth.authenticated` to `true`. The Redux app uses `state.auth.authenticated` as a means of determining whether a certain page should be rendered or not. For example, we only want to show a user profile page if there is a user logged in.

#### Wrapping Up Part 2

Wow, this has been a long article! But we’re not done yet. There are a few more topics we need to cover, including `updateUserInfo()`, `forgotPassword()`, `retrieveUserFromLocalStorage()`, `signOutUser()` and backend authentication of JWT tokens for restricted resources. I did say this was a COMPLETE AWS tutorial didn’t I? Anyways, continue reading if you feel like you need to know what’s happening under the hood. Just remember that at any time, you can stop reading and just use the boilerplate as is and it will just work. I hope you have found this series useful so far. See you in Cognito Part 3!

> [**Main Table of Contents Click Here**](https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.uw0npcszi)

> **Part A:** [Initial Setup](https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.pgxyg8q8o)

> **Part B:** [The Core Functionality](https://medium.com/@kangzeroo/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4)

> **Part C:** [Last Steps to Full Fledged](https://medium.com/@kangzeroo/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e#.v3mg316u5)








