---
author: TJ Holowaychuk
authorTwitter: https://twitter.com/tjholowaychuk
authorFacebook: none
title: "Up – deploy serverless apps in seconds"
subTitle: "Last year I wrote Blueprints for Up, describing how most of the building blocks are available to create a great serverless experience on ..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*8KijrYCm1j0_XvrACQD_fQ.png
url: https://medium.freecodecamp.org/up-b3db1ca930ee
id: up-b3db1ca930ee
date: 2017-08-11T00:20:34.032Z
tags: [
  "AWS",
  "Tech",
  "Serverless",
  "Web Development",
  "Programming"
]
---
# Up – deploy serverless apps in seconds







![](https://cdn-images-1.medium.com/max/2000/1*8KijrYCm1j0_XvrACQD_fQ.png)







Last year I wrote [Blueprints for Up](https://medium.com/@tjholowaychuk/blueprints-for-up-1-5f8197179275), describing how most of the building blocks are available to create a great serverless experience on AWS with minimal effort. This post talks about the initial alpha release of [**Up**](https://github.com/apex/up).

Why focus on serverless? For starters it’s cost-effective since you pay on-demand, only for what you use. Serverless options are self-healing, as each request is isolated and considered to be “stateless.” And finally it scales indefinitely with ease — there are no machines or clusters to manage. Deploy your code and you’re done.

Roughly a month ago I decided to start working on it over at [**apex/up**](https://github.com/apex/up), and wrote the first small serverless sample application [**tj/gh-polls**](https://github.com/tj/gh-polls) for live SVG GitHub user polls. It worked well and costs less than $1/month to serve millions of polls, so I thought I’d go ahead with the project and see if I can offer open-source and commercial variants.

The long-term goal is to provide a “Bring your own Heroku” of sorts, supporting many platforms. While Platform-as-a-Service is nothing new, the serverless ecosystem is making this kind of program increasingly trivial. This said, AWS and others often suffer in terms of UX due to the flexibility they provide. Up abstracts the complexity away, while still providing you with a virtually ops-free solution.

### Installation

You can install Up with the following command, and view the [temporary documentation](https://github.com/apex/up/tree/master/docs) to get started. Or if you’re sketched out by install scripts, grab a [binary release](https://github.com/apex/up/releases). (Keep in mind that this project is still early on.)

<pre name="ee0e" id="ee0e" class="graf graf--pre graf-after--p">curl -sfL [https://raw.githubusercontent.com/apex/up/master/install.sh](https://raw.githubusercontent.com/apex/up/master/install.sh) | sh</pre>

To upgrade to the latest version at any time just run:

<pre name="5acf" id="5acf" class="graf graf--pre graf-after--p">up upgrade</pre>

You may also install via NPM:

<pre name="d3f7" id="d3f7" class="graf graf--pre graf-after--p">npm install -g up</pre>

### Features

What features does the early alpha provide? Let’s take a look! Keep in mind that Up is not a hosted service, so you’ll need an AWS account and [AWS credentials](https://github.com/apex/up/blob/master/docs/aws-credentials.md). If you’re not familiar at all with AWS you may want to hold off until that process is streamlined.

The first question I always get is: how does up(1) differ from [apex(1)](https://github.com/apex/apex)? Apex focuses on deploying functions, for pipelines and event processing, while Up focuses on apps, apis, and static sites, aka single deployable units. Apex does not provision API Gateway, SSL certs, or DNS for you, nor does it provide URL rewriting, script injection and so on.

#### Single command serverless apps

Up lets you deploy apps, apis, and static sites with a single command. To create an application all you need is a single file, in the case of Node.js, an `./app.js` listening on `PORT` which is provided by Up. Note that if you’re using a `package.json` Up will detect and utilize the `start` and `build` scripts.

<pre name="fc20" id="fc20" class="graf graf--pre graf-after--p">const http = require('http')  
const { PORT = 3000 } = process.env</pre>

<pre name="74cc" id="74cc" class="graf graf--pre graf-after--pre">http.createServer((req, res) => {  
  res.end('Hello World\n')  
}).listen(PORT)</pre>

Additional [runtimes](https://github.com/apex/up/blob/master/docs/runtimes.md) are supported out of the box, such as `main.go` for Golang, so you can deploy Golang, Python, Crystal, or Node.js applications in seconds.

<pre name="7ed3" id="7ed3" class="graf graf--pre graf-after--p">package main</pre>

<pre name="7b58" id="7b58" class="graf graf--pre graf-after--pre">import (  
 "fmt"  
 "log"  
 "net/http"  
 "os"  
)</pre>

<pre name="3d68" id="3d68" class="graf graf--pre graf-after--pre">func main() {  
 addr := ":" + os.Getenv("PORT")  
 http.HandleFunc("/", hello)  
 log.Fatal(http.ListenAndServe(addr, nil))  
}</pre>

<pre name="2ebf" id="2ebf" class="graf graf--pre graf-after--pre">func hello(w http.ResponseWriter, r *http.Request) {  
 fmt.Fprintln(w, "Hello World from Go")  
}</pre>

To deploy the application type `up` to create the resources required, and deploy the application itself. There are no smoke and mirrors here, once it says “complete”, you’re done, the app is immediately available — there is no remote build process.







![](https://cdn-images-1.medium.com/max/2000/1*tBYR5HXeDDVkb_Pv2MCj1A.png)







The subsequent deploys will be even quicker since the stack is already provisioned:







![](https://cdn-images-1.medium.com/max/2000/1*2w2WHDTfTT-7GsMtNPklXw.png)







Test out your app with `up url --open` to view it in the browser, `up url --copy` to save the URL to the clipboard, or try it with curl:

<pre name="d93d" id="d93d" class="graf graf--pre graf-after--p">curl `up url`  
Hello World</pre>

To delete the app and its resources just type `up stack delete`:







![](https://cdn-images-1.medium.com/max/2000/1*FUdhBTtDHaZ2CEPHR7PGqg.png)







Deploy to the staging or production environments using `up staging` or `up production` , and `up url --open production` for example. Note that custom domains are not yet available, [they will be shortly](https://github.com/apex/up/issues/166). Later you’ll also be able to “promote” a release to other stages.

#### Reverse proxy

One feature which makes Up unique is that it doesn’t just simply deploy your code, it places a Golang reverse proxy in front of your application. This provides many features such as URL rewriting, redirection, script injection and more, which we’ll look at further in the post.

#### Infrastructure as code

Up follows modern best practices in terms of configuration, as all changes to the infrastructure can be previewed before applying, and the use of IAM policies can also restrict developer access to prevent mishaps. A side benefit is that it helps self-document your infrastructure as well.

Here’s an example of configuring some (dummy) DNS records and free SSL certificates via AWS ACM which utilizes LetsEncrypt.

<pre name="6dc5" id="6dc5" class="graf graf--pre graf-after--p">{  
  "name": "app",  
  "dns": {  
    "myapp.com": [  
      {  
        "name": "myapp.com",  
        "type": "A",  
        "ttl": 300,  
        "value": ["35.161.83.243"]  
      },  
      {  
        "name": "blog.myapp.com",  
        "type": "CNAME",  
        "ttl": 300,  
        "value": ["34.209.172.67"]  
      },  
      {  
        "name": "api.myapp.com",  
        "type": "A",  
        "ttl": 300,  
        "value": ["54.187.185.18"]  
      }  
    ]  
  },  
  "certs": [  
    {  
      "domains": ["myapp.com", "*.myapp.com"]  
    }  
  ]  
}</pre>

When you deploy the application the first time via `up` all the permissions required, API Gateway, Lambda function, ACM certs, Route53 DNS records and others are created for you.

[ChangeSets](https://github.com/apex/up/issues/115) are not yet implemented but you will be able to preview further changes with `up stack plan` and commit them with `up stack apply`, much like you would with Terraform.

Check out the [configuration documentation](https://github.com/apex/up/blob/master/docs/configuration.md) for more information.

#### Global deploys

The `regions` array allows you to specify target regions for your app. For example if you’re only interested in a single region you’d use:

<pre name="4a17" id="4a17" class="graf graf--pre graf-after--p">{  
  "regions": ["us-west-2"]  
}</pre>

If your customers are concentrated in North America, you may want to use all of the US and CA regions:

<pre name="04f9" id="04f9" class="graf graf--pre graf-after--p">{  
  "regions": ["us-*", "ca-*"]  
}</pre>

Lastly of course you can target all 14 regions currently supported:

<pre name="68d2" id="68d2" class="graf graf--pre graf-after--p">{  
  "regions": ["*"]  
}</pre>

Multi-region support is still a work-in-progress as a few new AWS features are required to tie things together.

#### Static file serving

Up supports static file serving out of the box, with HTTP cache support, so you can use CloudFront or any other CDN in front of your application to dramatically reduce latency.

By default the working directory is served (`.`) when `type` is “static”, however you may provide a `static.dir` as well:

    {  "name": "app",  "type": "static",  "static": {    "dir": "public"  }}

#### Build hooks

The build hooks allow you to define custom actions when deploying or performing other operations. A common example would be to bundle Node.js apps using Webpack or Browserify, greatly reducing the file size, as node_modules is _huge_.

<pre name="8469" id="8469" class="graf graf--pre graf-after--p">{  
  "name": "app",  
  "hooks": {  
    "build": "browserify --node server.js > app.js",  
    "clean": "rm app.js"  
  }  
}</pre>

#### Script and stylesheet injection

Up allows you to inject scripts and styles, either inline or paths in a declarative manner. It even supports a number of “canned” scripts for Google Analytics and [Segment](https://segment.com), just copy & paste your write key.

<pre name="c96d" id="c96d" class="graf graf--pre graf-after--p">{  
  "name": "site",  
  "type": "static",  
  "inject": {  
    "head": [  
      {  
        "type": "segment",  
        "value": "API_KEY"  
      },  
      {  
        "type": "inline style",  
        "file": "/css/primer.css"  
      }  
    ],  
    "body": [  
      {  
        "type": "script",  
        "value": "/app.js"  
      }  
    ]  
  }  
}</pre>

#### Rewrites and redirects

Up supports redirects and URL rewriting via the `redirects` object, which maps path patterns to a new location. If `status` is omitted (or 200) then it is a rewrite, otherwise it is a redirect.

<pre name="f45b" id="f45b" class="graf graf--pre graf-after--p">{  
  "name": "app",  
  "type": "static",  
  "redirects": {  
    "/blog": {  
      "location": "[https://blog.apex.sh/](https://blog.apex.sh/)",  
      "status": 301  
    },  
    "/docs/:section/guides/:guide": {  
      "location": "/help/:section/:guide",  
      "status": 302  
    },  
    "/store/*": {  
      "location": "/shop/:splat"  
    }  
  }  
}</pre>

A common use-case for rewrites is for SPAs (Single Page Apps), where you want to serve the `index.html` file regardless of the path. Unless of course the file exists.

<pre name="51fb" id="51fb" class="graf graf--pre graf-after--p">{  
  "name": "app",  
  "type": "static",  
  "redirects": {  
    "/*": {  
      "location": "/",  
      "status": 200  
    }  
  }  
}</pre>

If you want to force the rule regardless of a file existing, just add `"force": true` .

#### Environment variables

Secrets will be in the next release, however for now plain-text environment variables are supported:

<pre name="854f" id="854f" class="graf graf--pre graf-after--p">{  
  "name": "api",  
  "environment": {  
    "API_FEATURE_FOO": "1",  
    "API_FEATURE_BAR": "0"  
  }  
}</pre>

#### CORS support

The [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) support allows you to to specify which (if any) domains can access your API from the browser. If you wish to allow any site to access your API, just enable it:

<pre name="0b6b" id="0b6b" class="graf graf--pre graf-after--p">{  
  "cors": {  
    "enable": true  
  }  
}</pre>

You can also customize access, for example restricting API access to your front-end or SPA only.

<pre name="3202" id="3202" class="graf graf--pre graf-after--p">{  
  "cors": {  
    "allowed_origins": ["[https://myapp.com](https://myapp.com)"],  
    "allowed_methods": ["HEAD", "GET", "POST", "PUT", "DELETE"],  
    "allowed_headers": ["Content-Type", "Authorization"]  
  }  
}</pre>

#### Logging

For the low price of $0.5/GB you can utilize CloudWatch logs for structured log querying and tailing. Up implements a custom [query language](https://github.com/apex/up/blob/master/internal/logs/parser/grammar.peg) used to improve upon what CloudWatch provides, purpose-built for querying structured JSON logs.







![](https://cdn-images-1.medium.com/max/2000/1*hrON4pH_WzN6CajaiU-ZYw.png)







You can query existing logs:

<pre name="140e" id="140e" class="graf graf--pre graf-after--p">up logs</pre>

Tail live logs:

<pre name="e6e2" id="e6e2" class="graf graf--pre graf-after--p">up logs -f</pre>

Or filter on either of them, for example only showing 200 GET / HEAD requests that take more than 5 milliseconds to complete:

<pre name="f5c5" id="f5c5" class="graf graf--pre graf-after--p">up logs 'method in ("GET", "HEAD") status = 200 duration >= 5'</pre>



![](https://cdn-images-1.medium.com/max/1600/1*Nhc5eiMM24gbiICFW7kBLg.png)



The query language is quite flexible, here are some more examples from `up help logs`

<pre name="045b" id="045b" class="graf graf--pre graf-after--p">Show logs from the past 5 minutes.  
$ up logs</pre>

<pre name="3082" id="3082" class="graf graf--pre graf-after--pre">Show logs from the past 30 minutes.  
$ up logs -s 30m</pre>

<pre name="7a01" id="7a01" class="graf graf--pre graf-after--pre">Show logs from the past 5 hours.  
$ up logs -s 5h</pre>

<pre name="492d" id="492d" class="graf graf--pre graf-after--pre">Show live log output.  
$ up logs -f</pre>

<pre name="2c72" id="2c72" class="graf graf--pre graf-after--pre">Show error logs.  
$ up logs error</pre>

<pre name="7488" id="7488" class="graf graf--pre graf-after--pre">Show error and fatal logs.  
$ up logs 'error or fatal'</pre>

<pre name="584a" id="584a" class="graf graf--pre graf-after--pre">Show non-info logs.  
$ up logs 'not info'</pre>

<pre name="9610" id="9610" class="graf graf--pre graf-after--pre">Show logs with a specific message.  
$ up logs 'message = "user login"'</pre>

<pre name="fccb" id="fccb" class="graf graf--pre graf-after--pre">Show 200 responses with latency above 150ms.  
$ up logs 'status = 200 duration > 150'</pre>

<pre name="df5c" id="df5c" class="graf graf--pre graf-after--pre">Show 4xx and 5xx responses.  
$ up logs 'status >= 400'</pre>

<pre name="6496" id="6496" class="graf graf--pre graf-after--pre">Show emails containing [@apex](http://twitter.com/apex "Twitter profile for @apex").sh.  
$ up logs 'user.email contains "[@apex](http://twitter.com/apex "Twitter profile for @apex").sh"'</pre>

<pre name="30ec" id="30ec" class="graf graf--pre graf-after--pre">Show emails ending with [@apex](http://twitter.com/apex "Twitter profile for @apex").sh.  
$ up logs 'user.email = "*@apex.sh"'</pre>

<pre name="d5f8" id="d5f8" class="graf graf--pre graf-after--pre">Show emails starting with tj@.  
$ up logs 'user.email = "tj@*"'</pre>

<pre name="88ce" id="88ce" class="graf graf--pre graf-after--pre">Show errors from /tobi and /loki  
$ up logs 'error and (path = "/tobi" or path = "/loki")'</pre>

<pre name="f4be" id="f4be" class="graf graf--pre graf-after--pre">Show the same as above with 'in'  
$ up logs 'error and path in ("/tobi", "/loki")'</pre>

<pre name="304d" id="304d" class="graf graf--pre graf-after--pre">Show logs with a more complex query.  
$ up logs 'method in ("POST", "PUT") ip = "207.*" status = 200 duration >= 50'</pre>

<pre name="fd7f" id="fd7f" class="graf graf--pre graf-after--pre">Pipe JSON error logs to the jq tool.  
$ up logs error | jq</pre>

Note that the `and` keyword is implied, though you can use it if you prefer.

#### Cold start times

This is a property of AWS Lambda as a platform, but the cold start times are typically well below 1 second, and in the future I plan on providing an option to keep them warm.

#### Config validation

The `up config` command outputs the resolved configuration, complete with defaults and inferred runtime settings – it also serves the dual purpose of validating configuration, as any error will result in exit > 0.

#### Crash recovery

Another benefit of using Up as a reverse proxy is performing crash recovery — restarting your server upon crashes and re-attempting the request before responding to the client with an error.

For example suppose your Node.js application crashes with an uncaught exception due to an intermittent database issue, Up can retry this request before ever responding to the client. Later this behaviour will be more customizable.

#### Continuous integration friendly

It’s hard to call this a feature, but thanks to Golang’s relatively small and isolated binaries, you can install Up in a CI in a second or two.

#### HTTP/2

Up supports HTTP/2 out of the box via API Gateway, reducing the latency for serving apps and sites with with many assets. I’ll do more comprehensive testing against many platforms in the future, but Up’s latency is already favourable:



![](https://cdn-images-1.medium.com/max/1600/1*psg0kJND1UCryXEa0D3VBA.jpeg)



#### Error pages

Up provides a default error page which you may customize with `error_pages` if you’d like to provide a support email or tweak the color.

    {  "name": "site",  "type": "static",  "error_pages": {    "variables": {      "support_email": "support@apex.sh",      "color": "#228ae6"    }  }}

By default it looks like this:







![](https://cdn-images-1.medium.com/max/2000/1*_Mdj6uTCGvYTCoXsNOSD6w.png)







If you’d like to provide custom templates you may create one or more of the following files. The most specific file takes precedence.

*   `error.html` – Matches any 4xx or 5xx
*   `5xx.html` – Matches any 5xx error
*   `4xx.html` – Matches any 4xx error
*   `CODE.html` – Matches a specific code such as 404.html

Check out the [docs](https://github.com/apex/up/blob/master/docs/configuration.md#error-pages) to read more about templating.

### Scaling and cost

So you’ve made it this far, but how well does Up scale? Currently API Gateway and AWS are the target platform, so you’re not required to make any changes in order to scale, just deploy your code and it’s done. You pay only for what you actually use, on-demand, and no manual intervention is required for scaling.

AWS offers 1,000,000 requests per month for free, but you can use [http://serverlesscalc.com](http://serverlesscalc.com/) to plug in your expected traffic. In the future Up will provide additional platforms, so that if one becomes prohibitively expensive, you can migrate to another!

### The Future

That’s all for now! It may not look like much, but it’s clocking-in above 10,000 lines of code already, and I’ve just begun development. Take a look at the issue queue for a small look at what to expect in the future, assuming the project becomes sustainable.

If you find the free version useful please consider donating on [OpenCollective](https://opencollective.com/apex-up), as I do not make any money working on it. I will be working on early access to the Pro version shortly, with a discounted annual price for early adopters. Either the Pro or Enterprise editions will provide the source as well, so internal hotfixes and customizations can be made.











* * *







Make sure to follow the [GitHub repo](https://github.com/apex/up) for updates. Cheers!








