---
author: Jackson Bates
authorTwitter: https://twitter.com/JacksonBates
authorFacebook: https://facebook.com/10156746137960434
title: "How to implement your first password-less login system"
subTitle: "You may have heard that there are 360 Million Reasons to Destroy All Passwords and that Passwords are Obsolete. But that doesn’t really h..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Mx4X6zSgYa2nd2eF5LImvg.gif
url: https://medium.freecodecamp.org/how-to-implement-your-first-password-less-login-system-8141b6f9ddf2
id: how-to-implement-your-first-password-less-login-system-8141b6f9ddf2
date: 2016-09-20T06:04:07.301Z
tags: [
  "Security",
  "Web Development",
  "Programming",
  "Tech",
  "Startup"
]
---
# How to implement your first password-less login system



![](https://cdn-images-1.medium.com/max/1600/1*Mx4X6zSgYa2nd2eF5LImvg.gif)

Who knows what profanity lurks behind those asterisks? Source: [Gizmodo](http://gizmodo.com/the-case-for-shitty-passwords-1605902705), via [Giphy](https://giphy.com/gifs/case-using-passwords-WSZ6pluVj5EyY)



You may have heard that there are [360 Million Reasons to Destroy All Passwords](https://medium.freecodecamp.com/360-million-reasons-to-destroy-all-passwords-9a100b2b5001#.e45q1htgn) and that [Passwords are Obsolete](https://medium.com/p/9ed56d483eb). But that doesn’t really help you actually make a passwordless authentication system, does it?

Doing authentication well can be hard and fraught with potential security traps. The good news is that there are some lovely little JavaScript libraries that can do some of that heavy lifting for us. And they provide lots of code snippets to help us get started.

So, here’s the skinny on how I implemented a passwordless authentication system in my recent Free Code Camp [Voting App](https://pollz.herokuapp.com/login) project.

Before we get started, note that you’ll need a working knowledge of Node.js and npm.

### What you’ll need:

*   A passwordless authentication library: [Passwordless](http://passwordless.net)
*   An email library: [EmailJS](https://github.com/eleith/emailjs)
*   A new, single purpose email address: [Microsoft Outlook](https://signup.live.com/signup?wa=wsignin1.0&ct=1473911386&rver=6.6.6556.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f&id=292841&CBCXT=out&bk=1473911387&uiflavor=web&uaid=b9b59510e54e4c20a9d7b5e3e5890614&mkt=EN-US&lc=1033&lic=1) (don’t worry — I’ll explain later)
*   A ‘Can-Do’ attitude and nimble copy-pasta fingers



![](https://cdn-images-1.medium.com/max/1600/1*7c2eyV7cmehcZD89ERlV7w.jpeg)



### Let’s get started!

#### Register your single purpose email address

Pick the most professional and meaningful name for the account you can think of. For example, since my app was called “Pollz,” I registered the email address _pollz.tokendelivery@outlook.com_. This way I communicate to the recipient that it’s a single purpose email address related to the app they just tried to sign into.

Note that it’s better to send from a ‘proper’ domain if you own one, but this tutorial assumes you want something quick and dirty up and running to test the concept.

You may need to take a few extra steps like verifying your account before it will let you send emails automatically via your app. So if things don’t work later on, check the inbox for any messages from Outlook and follow their advice.

#### Install and Require the Node Modules

From the terminal install the following npm packages:

<pre name="f981" id="f981" class="graf graf--pre graf-after--p">// Add 'sudo' at the beginning if you need it!  
npm install --save passwordless  
npm install --save passwordless-mongostore  
npm install --save emailjs</pre>

That installs the base requirements. You’ll also be using other crucial Node libraries, which you may already have installed for your project. If not, install these, too:

<pre name="a40f" id="a40f" class="graf graf--pre graf-after--p">npm install --save express-sessions  
npm install --save body-parser  
npm install --save cookie-parser</pre>

Now, assuming you have a separate server.js and routes.js file, include the following in the top of the appropriate files. If you don’t have separate files, you can mush them all together and smother them in delicious spaghetti sauce:

<pre name="b2ab" id="b2ab" class="graf graf--pre graf-after--p">// Note: Don't forget all the other modules you usually include!  
// (Express, Mongo etc...)</pre>

<pre name="d5fe" id="d5fe" class="graf graf--pre graf-after--pre">// server.js  
var cookieParser = require( 'cookie-parser' );  
var expressSession = require( 'express-session' );  
var passwordless = require( 'passwordless' );  
var MongoStore = require( 'passwordless-mongostore' );  
var email = require( 'emailjs' );</pre>

<pre name="1a63" id="1a63" class="graf graf--pre graf-after--pre">// -------------------------------------------------- //</pre>

<pre name="a224" id="a224" class="graf graf--pre graf-after--pre">// routes.js  
var bodyParser = require( 'body-parser' );  
var urlencodedParser = bodyParser.urlencoded( { extended: false });  
var passwordless = require( 'passwordless' );</pre>

#### Set up delivery

Next, in the server.js file, we will include the code snippet that handles sending the authentication tokens to our users:

<pre name="d26f" id="d26f" class="graf graf--pre graf-after--p">// server.js  
var yourEmail = 'pollz.[tokendelivery@outlook.com](mailto:tokendelivery.pollz@outlook.com)';  
var yourPwd = process.env.OUTLOOK_PASSWORD;  
var yourSmtp = 'smtp-mail.outlook.com';  
var smtpServer  = email.server.connect({  
  user:    yourEmail,   
  password: yourPwd,  
  timeout: 60000,  
  host: yourSmtp,   
  tls: { ciphers: 'SSLv3' }  
});</pre>

<pre name="a63f" id="a63f" class="graf graf--pre graf-after--pre">// MongoDB setup (given default can be used)  
var pathToMongoDb = url;</pre>

<pre name="e90b" id="e90b" class="graf graf--pre graf-after--pre">// Path to be send via email  
var host = '[https://pollz.herokuapp.com/'](https://pollz.herokuapp.com/%27);</pre>

The above code is making some assumptions you need to know about.

Firstly, change the value of the ‘yourEmail’ variable to the new address you set up.

Secondly, the ‘yourPwd’ variable you see there doesn’t mean my password is the super-obscure ‘process.env.OUTLOOK_PASSWORD’, nor does it mean you should go ahead and just put your password in there.

‘process.env.***’ is used to access _environment variables_ in Node. Basically, you can hard code those variables in your local system in a ‘[dotenv](https://www.npmjs.com/package/dotenv)’ file, or in Heroku via the settings for your app, and then refer to them as above. This means you’re not committing sensitive information to public GitHub repositories for all to see. It’s a little outside the scope of this tutorial, but the fine manual can tell you more: [process.env](https://nodejs.org/api/process.html#process_process_env).

The ‘pathToMongoDB’ URL you see there is the same MongoDB path I use to connect to Mongo elsewhere in my app. If you’ve connected to Mongo, you can use the same url again.

Be sure to change the ‘host’ URL to your own app’s URL.

#### Configure Passwordless

<pre name="070b" id="070b" class="graf graf--pre graf-after--h4">// server.js   
// Setup of Passwordless</pre>

<pre name="9dd4" id="9dd4" class="graf graf--pre graf-after--pre">passwordless.init( new MongoStore( pathToMongoDb ));</pre>

<pre name="cdbf" id="cdbf" class="graf graf--pre graf-after--pre">passwordless.addDelivery(  
  function( tokenToSend, uidToSend, recipient, callback ) {  
    // Send out token  
    smtpServer.send({  
      text: 'Hello!\nYou can now access your account here:'  
      + host + '?token=' + tokenToSend + '&uid='  
      + encodeURIComponent(uidToSend),  
      from: yourEmail,   
      to: recipient,  
      subject: 'Token for ' + host,  
      attachment: [  
        {  
          data: "<html>INSERT HTML STRING LINKING TO TOKEN</html>",  
          alternative: true  
        }  
      ]  
      }, function( err, message ) {   
        if( err ) {  
          console.log( err );  
        }  
          callback( err );  
        });  
});</pre>

Scary code-block, right? But not complete gibberish, I hope.

There’s two things happening here:

1.  Initializing Passwordless, and setting a store for the tokens.
2.  Adding a delivery mechanism and building what the email will contain.

Read it closely and it should make sense. Beware that you include the appropriate number of closing parentheses and curly braces. I burned 45 minutes on that very issue last night on my latest app.Not kidding.

#### Get your middleware in place

Middleware is like underwear: forgetting it can lead to discomfort, but putting it on in the wrong order can lead to embarrassment.

You may already have included this more generic Express middleware, but if not, you need to:

<pre name="76bf" id="76bf" class="graf graf--pre graf-after--p">// server.js  
// Standard express setup</pre>

<pre name="6f38" id="6f38" class="graf graf--pre graf-after--pre">app.use( cookieParser() );  
app.use( expressSession(   
  {  
    secret: 'quincylarsonisaprinceamongmen',  
    saveUninitialized: false,   
    resave: false,   
    cookie: { maxAge: 60*60*24*365*10 }  
  }));</pre>

Then the particular middleware you need for passwordless can be included like this:

<pre name="73d5" id="73d5" class="graf graf--pre graf-after--p">// server.js  
// Passwordless middleware</pre>

<pre name="8734" id="8734" class="graf graf--pre graf-after--pre">app.use( passwordless.sessionSupport() );  
app.use( passwordless.acceptToken( { successRedirect: '/' }));</pre>

I put all this immediately after the Passwordless initialization snippets, and include the ‘standard’ middleware **_before_** the ‘passwordless’ middleware. ‘sessionSupport’ depends on ‘expressSession’, so the order matters. Anything else leads to chafing.

#### Set up some test routes

There are only a few essential routes. We need to let users log in and log out, and there needs to be a way to differentiate restricted pages from public pages for non-authenticated users.

Note: This portion assumes you have set up the Express Router for your app.

**Login:**

<pre name="1aa9" id="1aa9" class="graf graf--pre graf-after--p">// routes.js</pre>

<pre name="af35" id="af35" class="graf graf--pre graf-after--pre">// GET /login  
router.get( '/login', function( req, res ) {  
    res.render( 'login' );   
});</pre>

<pre name="7436" id="7436" class="graf graf--pre graf-after--pre">// POST /sendtoken  
router.post( '/sendtoken',  
  urlencodedParser,   
  passwordless.requestToken(  
    // Simply accept every user*  
    function( user, delivery, callback ) {  
      callback( null, user );  
  }),  
  function( req, res ) {  
    res.render( 'pages/sent', { user: req.user });  
});</pre>

In the POST request above, we’re using the simplest and fastest mechanism for logging someone in. You are more likely to want to use the email address that is passed from the login form (we’ll see that in a minute) to look for the user in your database, or create a new one. You can see the more detailed method for that in the [Passwordless documentation](https://passwordless.net/getstarted).

The POST request includes the ‘urlencodedParser’ variable we set earlier. We do this so that we can read the form data, but we only apply it to this specific route. You can read more about this security consideration here: [Dangerous Use Of Body Parser](https://fosterelli.co/dangerous-use-of-express-body-parser.html). A special thanks to [Jeremy](http://crookedcode.com/) for this tip!

Notice also in that POST request, the ‘sent’ page renders with a ‘user’ email address being passed in. This is accessible in the views templates and can be used and passed around as necessary. We’ll be using an EJS nav bar to demonstrate that soon.

**Logout:**

<pre name="ac7e" id="ac7e" class="graf graf--pre graf-after--p">// routes.js  
// GET logout  
router.get( '/logout', passwordless.logout(),  
 function( req, res ) {  
  res.redirect( '/' );  
});</pre>

You hopefully noticed that this simple GET request takes an extra argument nestled snugly between the URL endpoint and the callback function that processes the request. This ‘passwordless.logout()’ method does all the behind the scenes work necessary to promptly forget the user.

**Restricted pages:**

<pre name="0956" id="0956" class="graf graf--pre graf-after--p">// routes.js  
// GET restricted site  
router.get( '/restricted',   
  passwordless.restricted({  
    failureRedirect: '/login'  
  }),  
  function( req, res ) {  
    res.render( 'pages/restricted' , { user: req.user });  
});</pre>

The format for restricted pages is pretty easy to parse, too. Similar to the logout pattern, we have the route, ‘/restricted’, followed by the ‘passwordless.restricted()’ method, followed by the callback function that processes the HTTP request. The difference here is that ‘passwordless.restricted()’ takes an object as an argument that specifies the endpoint we redirect to if the user is not authenticated.

#### Views

One of the most important views in this tutorial is the humble login page. Set it up how you like, but include this form to request the email address of your user:

<pre name="e23f" id="e23f" class="graf graf--pre graf-after--p"><!-- views/pages/login.ejs -->  
<form action='/sendtoken' method='POST'>  
    
    <label for='user'>Email</label>  
    <input name='user' type='email' aria-required='true'>  
    
  <br>  
  <input type='submit' value='Login / Register'>  
</form></pre>

We’re running out of time. Style it on your own dime.

It is important that you have included the ‘body-parser’ middleware mentioned earlier in order for you to be able to handle the data POSTed from this form.

A final view worth looking at would be one that incorporates the authenticated user value we saw up in the routes section.

Here’s an example of a really simple nav bar that changes according to whether the user is authenticated or not:

<pre name="f1ce" id="f1ce" class="graf graf--pre graf-after--p"><!-- views/partials/navbar.ejs -->  
<nav>  
    <ul>  
      <% if(user) { %>  
        <li>Hi, <%= user %>! </li>  
        <li>(logout)</li>  
      <% } else { %>  
        <li>Login</li>  
      <% } %>  
    </ul>  
</nav></pre>

If you’re unfamiliar with EJS syntax, it’s the reason for the weird ‘<% %>’ tags in the markup. I have used 4 space indentation for the HTML, but allowed the EJS tags to sit in their own 2 space indentation so you can see them more easily. Aren’t I good to you?

The markup above can be parsed in English as ‘If there is a user, print a list item that says “Hi, <username>!” and another list item that lets them log out; otherwise only show a list item with a login link’.

Here’s what the more complete version looks like in the voting app:



![](https://cdn-images-1.medium.com/max/1600/1*Z1dzL1swU1CZSJXTu7Zw0Q.png)

Logged out





![](https://cdn-images-1.medium.com/max/1600/1*xEcmtscHM5W1prf6HVdmAQ.png)

Logged in













* * *







### And that’s it. But there’s more…

That’s all you need to know to get up and running with Passwordless authentication.

There are some caveats to be aware of:

**Outlook is a little slow.**I haven’t narrowed the cause down precisely, but I believe it is due to the TLS ‘SSLv3’ cipher Outlook requires. I’m no expert, but that’s my best guess. That’s also why I recommend setting an absurdly long ‘timeout’ in the email config section (I picked 60 seconds).

**Why not use Gmail, then?** A good question, and it was the first thing I tried. My emailjs script kept failing once I pushed the app to Heroku, but the Heroku logs weren’t providing much detail. It simply said I was making a ‘bad request.’ A little poking around on the internet suggested that maybe Google might be waiting for me to register my app with them and pay for the privilege. I did not do that. I just jumped ship to Outlook instead.

**Is there a better service than Outlook, then?** If you have you own domain and the ability to configure the DNS records for it, you should try SparkPost and the SparkPost node client library. It’s a little more grunt work, but it’s nice and fast, and they send you a laptop sticker if you can successfully send an email through them. I’m using it in my latest app. It’s aces.











* * *







So there you have it, there is no excuse for you to ever ask your users for their passwords ever again!








