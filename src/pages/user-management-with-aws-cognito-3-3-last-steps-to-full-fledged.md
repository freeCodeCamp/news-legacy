---
author: Kangze Huang
authorTwitter: none
authorFacebook: none
title: "User Management with AWS Cognito — (3/3) Last Steps to Full-Fledged"
subTitle: "The Complete AWS Web Boilerplate — Part 1C"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ubdzj9K3MrbMb0Ep0UV3IA.png
url: https://medium.freecodecamp.org/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e
id: user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e
date: 2017-01-02T18:31:12.689Z
tags: [
  "JavaScript",
  "Nodejs",
  "AWS",
  "Web Development",
  "Technology"
]
---
# User Management with AWS Cognito — (3/3) Last Steps to Full-Fledged

## The Complete AWS Web Boilerplate — Part 1C



![](https://cdn-images-1.medium.com/max/1600/1*ubdzj9K3MrbMb0Ep0UV3IA.png)



> [**Main Table of Contents Click Here**](https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.uw0npcszi)

> **Part A:** [Initial Setup](https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.pgxyg8q8o)

> **Part B:** [The Core Functionality](https://medium.com/@kangzeroo/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4)

> **Part C:** [Last Steps to Full Fledged](https://medium.com/@kangzeroo/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e#.v3mg316u5)

Download the Github [here](https://github.com/kangzeroo/Kangzeroos-AWS-Cognito-Boilerplate).

### The Last Steps

The last pieces to this grand schema comprise of finishing touches and backend authentication. What we mean by finishing touches include:

> - updateUserInfo( )

> - forgotPassword( )

> - signOutUser( )

> - retreiveUserFromLocalStorage( )

> - Backend Authentication

Backend authentication means checking the JWT token received from Cognito or Facebook to confirm authority to access protected resources. After covering these features, we will have a full fledged user management system completely on AWS. Wow! Let’s get to it.

#### Updating User Information

Any respectable user management system will have the ability to change user attributes, so AWS Cognito is no exception. The React component can be found at `App/src/components/auth/ProfilePage.js`. Our Cognito code is inside `App/src/api/aws/aws-cognito.js`, look for the function `updateUserInfo()`.

<pre name="aa16" id="aa16" class="graf graf--pre graf-after--p">export function updateUserInfo(editedInfo){  
 const p = new Promise((res, rej)=>{  
  const attributeList = []  
  for(let a = 0; a{  
              res(userProfileObject)  
             })  
          })  
        });  
      }  
    });  
 })  
 return p  
}</pre>

We pass in the user object that we got from `buildUserObject()`, but edited to include updated values (in this case, `agentName`). Inside our promise we create an empty `attributeList` array to hold the variables, which feels a lot like `signUpUser()`. That’s because it shares thesame process! We loop through the `editedInfo` object and for each attribute we create an `CognitoUserAttribute` object to add to the `attributeList` array.

After all this is done, we create a `CognitoUser` object from the imported `userPool` to refresh the session so that we can appropriately call `updateAttributes` with the `attributeList` array. That will update our Cognito user with the latest attributes, and in the callback we can `getUserAttributes` again. With the updated attributes, we call `buildUserObject` for use in our React-Redux app. And that’s it! Almost an exact repeat of `signUpUser()`.

#### Forgot Password

This one is also dead simple. As always, create your `CognitoUser` with data from `userData`. Now we can call `forgotPassword`.

<pre name="bb28" id="bb28" class="graf graf--pre graf-after--p">export function forgotPassword(email){  
 const p = new Promise((res, rej)=>{</pre>

<pre name="a576" id="a576" class="graf graf--pre graf-after--pre">   const userData = {  
     Username: email,  
     Pool: userPool  
   }  
  const cognitoUser = new CognitoUser(userData)</pre>

<pre name="61d3" id="61d3" class="graf graf--pre graf-after--pre">  cognitoUser.forgotPassword({  
      onSuccess: function (result) {  
        res({  
          cognitoUser: cognitoUser,  
          thirdArg: this  
        })  
      },  
      onFailure: function(err) {  
         rej(err)  
      },  
      inputVerificationCode: function(data) {  
         res({  
            cognitoUser: cognitoUser,  
            thirdArg: this  
         })  
      }  
  })</pre>

<pre name="b639" id="b639" class="graf graf--pre graf-after--pre"> })  
 return p  
}</pre>

`forgotPassword()` basically initializes the process and returns a `CognitoUser` object to be used in React-Redux. In the callback object, we only use `onSuccess` and `onFailure`. `inputVerificationCode` is not used here like how it is used in the [Github docs (see case 12)](https://github.com/aws/amazon-cognito-identity-js) since we want to make a prettier interface instead of using `prompt()` to ask for input. In `onSucccess`, we return CognitoUser to our React component because we want the password reset page to contain pre-filled info (eg. `email`). When the new password is submitted, `confirmPassword()` just needs to accept a `PIN`, `password` and the `this` declaration from the AWS api call. This is what it looks like in the React-Redux app, from `App/src/components/Auth/ResetPassword.js`.

<pre name="152e" id="152e" class="graf graf--pre graf-after--p">verifyPin(){  
  if(this.props.password == this.props.confirm_password){  
     this.state.cognitoUserPackage.cognitoUser  
       .confirmPassword(this.state.pin, this.state.password, this.state.cognitoUserPackage.thirdArg)  
     setTimeout(()=>{  
       browserHistory.push("/auth/login")  
     }, 500)  
  }  
 }</pre>

And that’s all there is to resetting a password — Not too complicated, not much code.

#### Sign Out User

Signing out users is really simple. We call `getCurrentUser()` to instantiate our `CognitoUser` object so that we can use its `signOut()` function. Now your user is logged out!

<pre name="08dd" id="08dd" class="graf graf--pre graf-after--p">export function signOutUser(){  
 const p = new Promise((res, rej)=>{  
  const cognitoUser = userPool.getCurrentUser()  
  cognitoUser.signOut()  
 })  
 return p  
}</pre>

How do we execute this from the UI? In our React-Redux boilerplate, app routing is handled by `react-router` while app state is handled by Redux. We must combine the two to integrate visual user authentication. Our goals here are:

> — Show different screens for authenticated or unauthenticated visitors

> — Restrict app access to unauthorized visitors

Ok so here we go. First, let’s observe our Redux state expressed in`App/src/reducers/AuthReducer.js`. Our state model looks like this:

<pre name="eec0" id="eec0" class="graf graf--pre graf-after--p">const INITIAL_STATE = {  
  authenticated: false,  
  user: null  
}</pre>

When we logged in, we set the Redux state `authenticated` to true, and `user` to the return value of `buildUserObject()` in `App/src/api/aws/aws-cognito.js` . Thus `INITIAL_STATE.authenticated` will be used as a check universally throughout our app to determine if the user is authenticated. In our app boilerplate, we access this Redux state variable as `this.props.authenticated`. So at our side-menu component located at `App/src/components/SideMenu/SideMenu.js`, find this clip of code:

<pre name="bd27" id="bd27" class="graf graf--pre graf-after--p">  
        <SideHeader />  
        <SideOption text='Home' link='/' />  
        {  
           this.props.authenticated  
           ?  
           <SideOption text='Sign Out' link='/auth/signout' />  
           :  
           <SideOption text='Login' link='/auth/login' />  
        }  
</pre>

After `<SideOption text=’Home’ link=’/’ />`, inside the curly brackets `{ }` , we have a ternary operation (aka conditional operator). This will check if the first argument `this.props.authenticated` is truthy, and if true will display `<SideOption text=’Sign Out’ link=’/auth/signout’ />`. If false, will display `<SideOption text=’Login’ link=’/auth/login’ />`. And there we have it! Different views for authenticated & unauthenticated visitors.

Next, go to the code expressing our `react-router` located at `App/src/index.js` and find this code snip:

<pre name="7886" id="7886" class="graf graf--pre graf-after--p"><Route path='/' component={App}>  
        <IndexRoute component={Home} />  
        <Route path='auth'>  
          <Route path='login' component={Login}></Route>  
          <Route path='signup' component={SignUp}></Route>  
          <Route path='signout' component={SignOut}></Route>  
          <Route path='verify_account' component={VerifyAccount}></Route>  
          <Route path='forgot_password' component={ResetPassword}></Route>  
          <Route path='authenticated_page' component={RequireAuth(AuthenticatedPage)}></Route>  
        </Route>  
</Route></pre>

A quick run-down of our app’s url tree. At `[http://ourApp.com/](http://ourApp.com/)` we go to the Home component represented as `App/src/components/home.js`. At `[http://ourApp.com/auth/login](http://ourApp.com/auth/login)` is the Login component represented as `App/src/components/Auth/Login.js`. But at `[http://ourApp.com/auth/authenticated_page](http://ourApp.com/auth/authenticated_page)` we have this slightly different route

<pre name="7826" id="7826" class="graf graf--pre graf-after--p"><Route path=’authenticated_page’ component={RequireAuth(AuthenticatedPage)}></Route></pre>

This route has `RequireAuth()` wrapping the `AuthenticatedPage` component. If we go to RequireAuth() at App/src/components/auth/RequireAuth.js, we find another component, but with no generated HTML (that is, no UI). This is a higher-order component (HOC) which only adds functionality. In this case, the HOC checks if the Redux state variable `this.props.authenticated` is truthy. If it is not truthy, we simply redirect the url to a different url path (in this case, `[http://ourApp.com/auth/login](http://ourApp.com/auth/login%29.)`[).](http://ourApp.com/auth/login%29.) Done, that’s the auth checker!

<pre name="70c7" id="70c7" class="graf graf--pre graf-after--p">componentWillMount(){  
   if(!this.props.authenticated){  
    browserHistory.push('/auth/login')  
   }  
}</pre>

Now go back to `App/src/index.js` to implement the auth checking. We simply wrap the visual component inside our non-visual HCO like a function:

<pre name="30ed" id="30ed" class="graf graf--pre graf-after--p"><Route path='authenticated_page' component={RequireAuth(AuthenticatedPage)}></Route></pre>

And that’s the 2nd objective complete. The final part is our general purpose signout HCO. Go to `App/src/components/auth/SignOut.js` and find this snip of code:

<pre name="41d3" id="41d3" class="graf graf--pre graf-after--p">componentWillMount(){  
    signOutUser()  
  // signoutLandlord() is a function from `actions` coming from index.js  
  this.props.logoutUserFromReduxState()  
  setTimeout(()=>{  
   browserHistory.push('/auth/login')  
  }, 500)  
 }</pre>

The `signOutUser()` function is the one we wrote in `App/src/api/aws/aws-cognit.js`. Next `this.props.logoutUserFromReduxState()` sets our Redux state variable `authenticated` to false. Finally we change the url address and app view using `browserHistory.push(‘/auth/login’)` after half a second (So that we can display a goodbye message).

And that’s it! You can now control every visual view of your app with authentication in mind! Let’s continue on to the next part.

#### Retrieve User From Local Storage

We don’t want our users to have to re-login each time they visit the web app. Ideally, we want their login to be saved and auto-logged in each visit until they log out. Since it is insecure to save a user’s password, we will instead store the JWT token. This is actually managed for us by AWS Cognito. Go to `App/src/components/Auth/Login.js` and find the following lines of code:

<pre name="7092" id="7092" class="graf graf--pre graf-after--p">componentDidMount(){  
  const savedEmail = localStorage.getItem('User_Email')  
  if(savedEmail){  
   this.setState({  
    email: savedEmail  
   })  
  }  
  retrieveUserFromLocalStorage()  
   .then((data)=>{  
    this.props.setUserToReduxState(data)  
   })  
 }</pre>

The `componentDidMount()` function will be ran once after the component mounts onto the web page, which is when we want to check if a user has a saved login already. We can ignore the first part, which just checks for a saved email and sets it to the React component’s state. The important part here is `retrieveUserFromLocalStorage()`, which returns a `userProfileObject` that we can save to the Redux state. Recall that the `userProfileObject` is used by the web app as a representation of who the user is, and all their attributes such as name, age, height..etc. Straightforward, so let’s look at the juicy stuff: the AWS function. Go to `App/src/api/aws/aws-cognito.js` and find the function `retrieveUserFromLocalStorage()`.

<pre name="b7fe" id="b7fe" class="graf graf--pre graf-after--p">export function retrieveUserFromLocalStorage(){  
 const p = new Promise((res, rej)=>{  
     const cognitoUser = userPool.getCurrentUser();  
     if (cognitoUser != null) {  
         cognitoUser.getSession(function(err, session) {  
             if (err) {  
                rej(err)  
                return  
             }  
             localStorage.setItem('user_token', session.getAccessToken().getJwtToken());  
             const loginsObj = {  
                 [USERPOOL_ID] : session.getIdToken().getJwtToken()  
             }  
         AWS.config.credentials = new AWS.CognitoIdentityCredentials({  
                 IdentityPoolId : IDENTITY_POOL_ID,  
                 Logins : loginsObj  
             })  
             AWS.config.credentials.refresh(function(){  
              console.log(AWS.config.credentials)  
              res(buildUserObject(cognitoUser))  
             })  
         });  
     }else{  
      rej('Failed to retrieve user from localStorage')  
     }  
 })  
 return p  
}</pre>

So what’s happening here? First we create a `CognitoUser` object using the `userPool` imported from `aws_profile.js`. However, this time we are using the `getCurrentUser()` function which will pull from previous session memory — a useful feature that AWS Cognito handles for us! If we receive a non-null value back from `getCurrentUser()`, then we can assume its a valid `CognitoUser` object and call `getSession()` to access the latest session variables. The variable we care about is the JWT token in `session.getAccessToken().getJwtToken()` which we will save to `localStorage` and place in our `loginsObj` (Recall from Part 2, Sign In). This will register our login to Federated Identities. Now all we have to do is use that to set our AWS credentials and refresh them before we call `buildUserObject()` and return it to the React-Redux app. With the `userProfileObject` that is returned from `buildUserObject()`, we are logged in!

#### Backend Authentication

Alright, so all this front-end stuff is great, but to have the complete package we need backend authentication too. Let’s say we have a resource in our backend that we only want to show to logged in users. To request that resource, we will not use a email+password because that would be insecure sending the password for each request. Instead we will use the JWT token that Cognito supplied to us. We simply decrypt the token on the backend and check it against Cognito token references. Let’s walk through how to do that as a general process:

I have included the code for this backend written in NodeJS, but the general process works with any backend. See `/Bonus_Backend/` for the code. Now let’s start the process at the frontend (`/App/`).

First we send the JWT token from our client front-end in a HTTP header. The library we use for `http` requests is `axios`, but you can use any that you like as long as you know how to include a header attribute. In axios, you simply put an object with a headers key-value as the 3rd argument to the `POST` function. Find this in action at `App/src/api/myAPI.js`.

<pre name="0ddf" id="0ddf" class="graf graf--pre graf-after--p">const API_URL = '24.74.347.34' // your backend IP</pre>

<pre name="36ec" id="36ec" class="graf graf--pre graf-after--pre">export function getBackendResource(){  
  const jwtConfig = {headers: {"jwt": localStorage.getItem("user_token")}}  
   const p = new Promise((res, rej)=>{  
    axios.post(API_URL+"/auth_test", null, jwtConfig)  
     .then((data)=>{  
      res(data.data)  
     })  
     .catch((err)=>{  
       rej(err)  
     })  
   })  
   return p  
}</pre>

Next we must download the JWT set that AWS Cognito provides for us. Go to the Cognito page in the AWS console and find your region (eg. `us-east-1`) and your userPoolId (eg. `us-east-1_Fa9dl8sWt`). Now use them to replace the below placeholders, and follow the link.

<pre name="1886" id="1886" class="graf graf--pre graf-after--p">https://cognito-idp.{region}.amazonaws.com/{userPoolId}/.well-known/jwks.json</pre>

You should arrive at a page with text like this:

<pre name="8a2c" id="8a2c" class="graf graf--pre graf-after--p">{    
   **"keys"**:[    
      {    
         **"alg"**:"RS256",  
         **"e"**:"AQAB",  
         **"kid"**:"I7Kw/O0QymLQ8A0pPaXNcv5je7BNYXMCW1HdziUTyrQ=",  
         **"kty"**:"RSA",  
         **"n"**:"uIqZqU64ytLpQr3J86NMpjxZBRubRzovkQv22oAeHoxO_w4EZuvEeodCV7WxVatHwcVyH0VrkRsqcoigajJO5Xz3s-Ttz_ozhE8wP-BI3DUPOUNtGiKZirNLf9jluScrCUsyyim2UrF4ub-hsxGSt32GFRMfqrkvz0Ral4K4oeIiBNnX8cu_pbSlDgriBLAh8ago41XhqqSFtWwlP-x_KHJc13RBgETj7HOfEm5tr6ibJlMazL3FOoXehfXQw9Yr0752A2hTKAB8reUJXuAwcyTUa8ZEO6IcnhQiaPmIgltxdm-SHdoPqwR_SQxYzZfQzU9uE78ogWT-xP29Gr08Xw",  
         **"use"**:"sig"  
      },  
      {    
         **"alg"**:"RS256",  
         **"e"**:"AQAB",  
         **"kid"**:"fxyn6hg0ziTNer+mBzqmxqGe38uh4neQPorXo3GAa/s=",  
         **"kty"**:"RSA",  
         **"n"**:"hMAECS0ALyFaP7OY4ZN5SXqPpkKOdp_RfNAmeCXhK98rmEnD_9Zzqb5oVviZZoqQ5xEZQBRR7a2JOZxL_JZWX7ObteHMSfNZywk8E9FN4XPMJxStZk5JSceKBd5SPYdLzTR58LFMg4OKONA5aJ1sYUu11zq6yMdUBvEJlwBjBrH4lfSkJ_jg4zSeKxsRcM72oAQ_yCnzO5giPoMjyY8VtqCj7NW_7njyQ-bD1WiGaNCkgBxWwYL_13zCxMJxNopa2vHoca0xn9bct-ysS8zIaB3DjNo_8-GGp_HJ4kNW0TczcILtl4mrl81srGzulvuK-mGF0T31IDY-tZWS3IgQYQ",  
         **"use"**:"sig"  
      }  
   ]  
}</pre>

Save this as its own file `jwt_set.json` in your backend (`Example_Backend/App/api/jwt_set.json`) so that it can be referenced by your authentication process. The authentication process (function) should run before any protected resource is accessed. The authentication process looks like this code found at `Example_Backend/App/api/authCheck.js`:

<pre name="d4e3" id="d4e3" class="graf graf--pre graf-after--p">const jwt = require('jsonwebtoken');  
const jwkToPem = require('jwk-to-pem');  
const jwt_set = require('./jwt_set.json')</pre>

<pre name="dbea" id="dbea" class="graf graf--pre graf-after--pre">const userPool_Id = "[https://cognito-idp.us-east-1.amazonaws.com/](https://cognito-idp.us-east-1.amazonaws.com/us-east-1_htLwYcn4h)`us-east-1_6i5p2Fwao`"</pre>

<pre name="4a9e" id="4a9e" class="graf graf--pre graf-after--pre">const pems = {}  
for(let i = 0; i<jwt_set.keys.length; i++){  
 const jwk = {  
  kty: jwt_set.keys[i].kty,  
  n: jwt_set.keys[i].n,  
  e: jwt_set.keys[i].e  
 }  
 // convert jwk object into PEM  
 const pem = jwkToPem(jwk)  
 // append PEM to the pems object, with the kid as the identifier  
 pems[jwt_set.keys[i].kid] = pem  
}</pre>

<pre name="1cfb" id="1cfb" class="graf graf--pre graf-after--pre">exports.authCheck = function(req, res, next){  
 const jwtToken = req.headers.jwt  
 ValidateToken(pems, jwtToken)  
   .then((data)=>{  
    console.log(data)  
    next()  
   })  
   .catch((err)=>{  
    console.log(err)  
    res.send(err)  
   })  
}</pre>

<pre name="34b4" id="34b4" class="graf graf--pre graf-after--pre">function ValidateToken(pems, jwtToken){  
 const p = new Promise((res, rej)=>{  
  const decodedJWT = jwt.decode(jwtToken, {complete: true})  
  // reject if its not a valid JWT token  
  if(!decodedJWT){  
   console.log("Not a valid JWT token")  
   rej("Not a valid JWT token")  
  }  
  // reject if ISS is not matching our userPool Id  
  if(decodedJWT.payload.iss != userPool_Id){  
   console.log("invalid issuer")  
   rej({  
    message: "invalid issuer",  
    iss: decodedJWT.payload  
   })  
  }  
  // Reject the jwt if it's not an 'Access Token'  
  if (decodedJWT.payload.token_use != 'access') {  
         console.log("Not an access token")  
         rej("Not an access token")  
     }  
     // Get jwtToken `kid` from header  
  const kid = decodedJWT.header.kid  
  // check if there is a matching pem, using the `kid` as the identifier  
  const pem = pems[kid]  
  // if there is no matching pem for this `kid`, reject the token  
  if(!pem){  
   console.log('Invalid access token')  
   rej('Invalid access token')  
  }  
  console.log("Decoding the JWT with PEM!")  
  // verify the signature of the JWT token to ensure its really coming from your User Pool  
  jwt.verify(jwtToken, pem, {issuer: userPool_Id}, function(err, payload){  
   if(err){  
    console.log("Unauthorized signature for this JWT Token")  
    rej("Unauthorized signature for this JWT Token")  
   }else{  
    // if payload exists, then the token is verified!  
    res(payload)  
   }  
  })  
 })  
 return p  
}</pre>

Ok it’s a bit long, we lets break this down one-by-one. First we import the nodeJS dependencies we want and install them.

<pre name="fe05" id="fe05" class="graf graf--pre graf-after--p">$ npm install jsonwebtoken --save  
$ npm install jwk-to-pem --save</pre>

And then we include the `jwt_set.json` as well as our Identity Pool Id. That’s 3 dependencies and 1 constant.

<pre name="2f12" id="2f12" class="graf graf--pre graf-after--p">const jwt = require('jsonwebtoken');  
const jwkToPem = require('jwk-to-pem');  
const jwt_set = require('./jwt_set.json')</pre>

<pre name="46e0" id="46e0" class="graf graf--pre graf-after--pre">const userPool_Id = "[https://cognito-idp.us-east-1.amazonaws.com/](https://cognito-idp.us-east-1.amazonaws.com/us-east-1_htLwYcn4h)`us-east-1_6i5p2Fwao`"</pre>

We create 1 more constant called `pems`, which is created by the `for` loop executed upon loading of the file.

<pre name="fc2a" id="fc2a" class="graf graf--pre graf-after--p">const pems = {}  
for(let i = 0; i<jwt_set.keys.length; i++){  
 // take the jwt_set key and create a jwk object for conversion into PEM  
 const jwk = {  
  kty: jwt_set.keys[i].kty,  
  n: jwt_set.keys[i].n,  
  e: jwt_set.keys[i].e  
 }  
 // convert jwk object into PEM  
 const pem = jwkToPem(jwk)  
 // append PEM to the pems object, with the kid as the identifier  
 pems[jwt_set.keys[i].kid] = pem  
}</pre>

At a high level, what is happening is that for each key in `jwt_set.json`, we are creating a `PEM` object to be the value of that jwt_set key’s `kid`. We don’t need to know exactly what is happening, but basically we are creating a `PEM` that can be used to match against the `jwt` `kid` coming from the header of incoming http requests as a means of verifying authentication. If you feel like you need to know exactly what these terms mean, check out [The Anatomy of a JSON Web Token](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token) by Chris Sevilleja.

Anyways, moving on we have the `authCheck` function that validates the incoming jwt token from the header using `ValidateToken()`. Pretty simple.

<pre name="667c" id="667c" class="graf graf--pre graf-after--p">exports.authCheck = function(req, res, next){  
 const jwtToken = req.headers.jwt  
 ValidateToken(pems, jwtToken)  
   .then((data)=>{  
    console.log(data)  
    next()  
   })  
   .catch((err)=>{  
    console.log(err)  
    res.send(err)  
   })  
}</pre>

`authCheck()` is used elsewhere in your backend as the function called before accessing a protected resource. For a `NodeJS` `Express` backend, it would look like this:

<pre name="9a62" id="9a62" class="graf graf--pre graf-after--p">const authCheck = require('./api/authCheck').authCheck</pre>

<pre name="9622" id="9622" class="graf graf--pre graf-after--pre">// auth route  
app.get('/auth_test', authCheck, function(req, res, next){  
 console.log("Passed the auth test!")  
 res.send("Nice job! Your token passed the auth test!")  
});</pre>

Finally let’s look at `ValidateToken()`, which can be broken down into 6 smaller parts. Pass in the `pems` constant and the `jwt` from the `http` request header. Now follow the 6 steps of the validation process and if all pass, the JWT token is accepted! The promise will be resolved and `authCheck()` will allow access to our protected resource.

<pre name="458c" id="458c" class="graf graf--pre graf-after--p">function ValidateToken(pems, jwtToken){  
 const p = new Promise((res, rej)=>{</pre>

<pre name="2b54" id="2b54" class="graf graf--pre graf-after--pre">  // PART 1: Decode the JWT token  
  const decodedJWT = jwt.decode(jwtToken, {complete: true})</pre>

<pre name="1a29" id="1a29" class="graf graf--pre graf-after--pre">  // PART 2: Check if its a valid JWT token  
  if(!decodedJWT){  
   console.log("Not a valid JWT token")  
   rej("Not a valid JWT token")  
  }</pre>

<pre name="bde6" id="bde6" class="graf graf--pre graf-after--pre">  // PART 3: Check if ISS matches our userPool Id  
  if(decodedJWT.payload.iss != userPool_Id){  
   console.log("invalid issuer")  
   rej({  
    message: "invalid issuer",  
    iss: decodedJWT.payload  
   })  
  }</pre>

<pre name="b080" id="b080" class="graf graf--pre graf-after--pre">  // PART 4: Check that the jwt is an AWS 'Access Token'  
  if (decodedJWT.payload.token_use != 'access') {  
     console.log("Not an access token")  
     rej("Not an access token")  
  }</pre>

<pre name="8f3c" id="8f3c" class="graf graf--pre graf-after--pre">  // PART 5: Match the PEM against the request KID  
  const kid = decodedJWT.header.kid  
  const pem = pems[kid]  
  if(!pem){  
   console.log('Invalid access token')  
   rej('Invalid access token')  
  }  
  console.log("Decoding the JWT with PEM!")</pre>

<pre name="0a50" id="0a50" class="graf graf--pre graf-after--pre">  // PART 6: Verify the signature of the JWT token to ensure its really coming from your User Pool  
  jwt.verify(jwtToken, pem, {issuer: userPool_Id}, function(err, payload){  
   if(err){  
    console.log("Unauthorized signature for this JWT Token")  
    rej("Unauthorized signature for this JWT Token")  
   }else{  
    // if payload exists, then the token is verified!  
    res(payload)  
   }  
  })  
 })  
 return p  
}</pre>

So that’s our backend auth checker. To integrate it, go to `Example_Backend/App/router.js` where we receive incoming http requests.

<pre name="a53d" id="a53d" class="graf graf--pre graf-after--p">// routes  
const Authentication = require('./routes/auth_routes');</pre>

<pre name="c2a8" id="c2a8" class="graf graf--pre graf-after--pre">// router middlewear  
const authCheck = require('./api/authCheck').authCheck</pre>

<pre name="9795" id="9795" class="graf graf--pre graf-after--pre">module.exports = function(app){  
 // Auth related routes  
 app.get('/auth_test', authCheck, Authentication.authtest);  
}</pre>

All we have to do is add it as the 2nd argument to our ExpressJS route. If you have a different backend, the same general process applies.

And that’s it, backend authentication using our same AWS Cognito environment. How powerful!

#### Conclusion

Congratulations for following this long tutorial on AWS Cognito and Federated Identities! By completing this to the end, you can now enjoy top-notch user management designed by the world’s largest cloud services provider. Much of the functionality you receive with AWS would take weeks and lots of expert knowledge to implement if you were to make a custom system. Nor is there any guarantee you would implement a custom user management system well, without exposing your users to security flaws and holes. By using Amazon, you can rest at night knowing all that is taken care of for you by a multi-billion dollar internet company.

So there we have it: A complete user management system ready for real-world use. If you think you benefited or learned a lot from this tutorial series, please share and subscribe! I will be publishing more practical AWS tutorials in the coming months so be sure to stay tuned. See you next time!

> [**Main Table of Contents Click Here**](https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.uw0npcszi)

> **Part A:** [Initial Setup](https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.pgxyg8q8o)

> **Part B:** [The Core Functionality](https://medium.com/@kangzeroo/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4)

> **Part C:** [Last Steps to Full Fledged](https://medium.com/@kangzeroo/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e#.v3mg316u5)








