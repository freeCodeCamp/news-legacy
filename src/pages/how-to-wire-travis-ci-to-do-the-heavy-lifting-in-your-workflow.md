---
author: Vijayabharathi Balasubramanian
authorTwitter: none
authorFacebook: none
title: "How to use Travis CI and GitHub for your web development workflow’s heavy lifting"
subTitle: "It’s common to hack together apps on CodePen when you are starting out. But there will be a time when you will want to publish your own w..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*KuG9pmpZOl03m_EM9eAQCw.jpeg
url: https://medium.freecodecamp.org/how-to-wire-travis-ci-to-do-the-heavy-lifting-in-your-workflow-72693c855696
id: how-to-wire-travis-ci-to-do-the-heavy-lifting-in-your-workflow-72693c855696
date: 2017-09-27T19:11:12.158Z
tags: [
  "Github",
  "React",
  "Web Development",
  "Technology",
  "Productivity"
]
---
# How to use Travis CI and GitHub for your web development workflow’s heavy lifting







![](https://cdn-images-1.medium.com/max/2000/1*KuG9pmpZOl03m_EM9eAQCw.jpeg)

It all becomes easier with continuous integration via Travis CI







It’s common to hack together apps on [CodePen](https://codepen.io/) when you are starting out. But there will be a time when you will want to publish your own web apps to the whole world. They could be side projects or projects for a client. A good development workflow will make a world of difference at this point.

We are going to set up a development workflow using the following tools:

*   create-react-app
*   npm scripts
*   Travis-CI

We’ll wire Travis CI and GitHub together. At the end, we’ll to get a nice and shiny badge Like the one below.

But more than the look, the badge signifies a function. It’s a sign of Travis CI testing, building and publishing our commits to GitHub. Travis CI publishes only if the tests pass.

Get ready to place these badges on your repository:



![](https://cdn-images-1.medium.com/max/1600/1*cI5UNTkT3JdED0K9BS95Jw.jpeg)



I have organized the whole workflow in stages. One sitting should do for each stage. That’s within about 50 minutes.

### Stage 1 : Run create-react-app locally

#### Get your git repository ready

The first thing is to create a new repository on [GitHub](https://github.com/). If you don't already have an account, now is the time to register for one. Public repositories are free. When you create a new repository, GitHub lets you to create files for `.gitignore`, `license` and `README.md`.

If you are starting with Git for the first time, you can read this free [book](https://git-scm.com/book/en/v2) online. There is also a [help](https://help.github.com/) section on GitHub.

Here is how our new repository will look:



![](https://cdn-images-1.medium.com/max/1600/0*Vs79AoKEhQOk7k6n.png)



All right, let’s get that on our terminal. Do you see that bright green button on the above image showing **Clone or download**. That’ll give us the URL to the repository. On your terminal, run this command:

    git clone git@github.com:pineboat/react-continuous-deployment.git

That command will download the contents of the repository into a new directory. It names the directory the same as the repository. In our case, the directory name will be **react-continuous-deployment**.

If you want to make sure a link to original repository is ready, use the command:

`git remote -v`

Now that we are set to push our changes to GitHub, let’s get React up and running.

#### Up and running with `create-react-app`

Starting a fresh react project from scratch might take longer than you’d expect. Especially when you are not using any predefined scaffolds. There are several solutions out there that we can use to get started. I chose official [Create React App](https://github.com/facebookincubator/create-react-app) because I’ve tried it first and stuck with it. When you don’t have to micromanage your configurations, it gives you a clean start so you can hit the ground coding.

As the repository `README.md` file shows, you only have to install it once globally. Then you can use it to scaffold as many project as you like.

To install it type:

    npm install -g create-react-app

Once that’s installed, you can run it from any directory to create a new app. Let’s give it our repository’s name:

    create-react-app react-continuous-deployment

That will **not** create a new folder as we already have the folder created by Git. Instead it will start installing necessary `node_modules` and scaffold scripts within the existing folder.

If you want a fresh application, you can use:

`create-react-app fancy-app-name`

Then you’ll need to create a Git repository and connect it to GitHub. That is not too difficult. You can use this [help](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) page from GitHub.

Has that installation finished yet? It shouldn’t take more than 5 minutes. It took me about 15 minutes. Don’t let that scare you. Unless you’re like me, and you are using a 150 mb/s 4G data card that gives you about 512kbps of download speed on its best day.

The nice thing is, the installation moved our old `README.md` file aside. The terminal shows this sweet message:

    You had a `README.md` file, we renamed it to `README.old.md`

The terminal should also have shown you the enormous list of packages in a tree structure. This can look scary. But most of these are dependencies between packages. They are there to help you develop your app. The final product will only have necessary JavaScript files such as `react.js` and `react-dom.js`. We’ll go there in a while.

For now, let’s wake up our application. Once the installation is over,   
`create-react-app` will give us a list of commands which will be handy.

Here is a catalog for reference:

*   `npm start`  
    Starts the development server
*   `npm run build`  
    Bundles the app into static files for production
*   `npm test`  
    Starts the test runner
*   `npm run eject`   
    Removes the single dependency build from your project See [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject)
*   `npm run deploy`   
    To deploy the build to gh-pages branch

`npm start` and `npm test` built-in node commands are recognized by default. You need to run other scripts such as build, eject and deploy using an extra run flag:   
`npm run script_name`

We’d add a few more in the process as we go. Now it’s time to load our site on a browser. Get inside the application directory and run:

    npm start

Like magic, a new browser tab opens and you see a nice React wheel turning. The view must be challenging you to build the next best app the internet is about to witness.

So this is what we get:



![](https://cdn-images-1.medium.com/max/1600/0*ZFgBeEisdZkQQW4W.gif)



That is a pretty neat GIF (Graphics Interchange Format) isn’t it? Except for my cursor coming in. I captured this GIF with a tool called [Peek.](https://github.com/phw/peek) Check it out when you need it.

Well done! I hope that didn’t take more than 45 minutes. If you are running into issues, pay attention to the error messages and try to fix them.

When you are close to the point of frustration, head over to [Stack Overflow](https://stackoverflow.com/) for help. Or leave your questions in the comments below.

Before we hack into any of the files, let’s get the code committed and pushed to GitHub repository. These commands will do:

    git status git add --all git commit -m "Initial Scaffold, this is your own message"

*   `git status`   
    Shows a list of changes we’ve made
*   `git add`   
    Adds those changes to a temporary place called `stage` before we push it to the cloud

If you run `git status` again, it will report that

    Your branch is ahead of 'origin/master' by 1 commit. (use "git push" to publish your local commits) nothing to commit, working directory clean

That’s right, we have made and committed changes locally. There are no uncommitted changes. But we are ahead of the cloud version of our repository. It’s time to publish them to a safe house, which is GitHub.

All you need to run is:  
`git push origin master`

You’ll get a nice report showing a hash like `fb74259..045ec7a`, which is a reference for our commit. Of course, your hash will be different.

Check your GitHub repository. Are you surprised to see a long `README.md`?Remember that `create-react-app` has replaced our tiny `README.md` with its own. It’s huge and helpful, so we’ll keep it for now before we write our own.

### Stage 2: Porting site over to GitHub Pages

#### Build the static site

Let’s take a look at the final build.

You only have to run:

`npm run build`

Make sure that you are within the application directory for all the commands. We’ll get this nice text showing us what has happened and what else can we do:

    $ npm run build > react-continuous-deployment@0.1.0 build /home/weebee/Projects/blog_projects/react-continuous-deployment> react-scripts buildCreating an optimized production build...Compiled successfully.File sizes after gzip:  48.12 KB  build/static/js/main.9fdf0e48.js  288 B     build/static/css/main.cacbacc7.cssThe project was built assuming it is hosted at the server root.To override this, specify the homepage in your package.json.For example, add this to build it for GitHub Pages:  "homepage" : "http://myname.github.io/myapp",The build folder is ready to be deployed.You may serve it with a static server:  npm install -g serve  serve -s build

The `npm run build` command does what we asked for. It builds our app, and optimizes and [minifies](https://en.wikipedia.org/wiki/Minification_%28programming%29) our assets. And it places everything in a folder called **build**.

Towards the bottom, the suggestion is to install the `serve` npm package to start a local server. Most of the time, if you are on Linux, you’ll already have Python installed. It’s quite easy to start a local server if you have Python.

Step into the `**build**` directory and start a server, see following commands:

    cd buildpython -m SimpleHTTPServer

Python command by default starts the server on port 8000\. So, `http://localhost:8000` will serve the production version of the website. It uses assets from your local **build** directory that we just created.

If that looks good, we are going to send it over to GitHub pages.

#### Primer on GitHub pages

GitHub pages are hosting solution provided by GitHub for repositories. There are few places where you can host your site, all within a repository:

*   You can use **master** branch (the default one) to host your website  
    If you have an `index.html`, it’ll show up. Otherwise, your `README.md` will show up.
*   You can also use **docs** folder in a master branch to host your site  
    The use case would be when you have a software or library developed on GitHub. You might want to host the documentation along in the same repository.
*   You can use the **gh-pages** branch to host your site

There is an exception. Your repository name should not be `<your_user_name>.github.io` or `<orgname>.github.io`

These are special names and they limit you to using the **master** branch.

Once you host your website, you can load it in the following URLs. It depends on whether your repository is under your account or an organization account:

    https://<your_user_name>.github.io/<your_repository_name>/ 

    https://<organization_name>.github.io/<your_repository_name>/

With that understanding, let’s equip our repository to go live.

#### Publish to GitHub pages

The new `README.md` given to us by the `create-react-app` has a separate section on GitHub pages. There are few things we need to do.

#### **Check additions to** `**package.json**` **file**

    "homepage": "http://<user_name>.github.io/<your_repository_name", "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build"}

**Note**: Usually, the last section or entry in a JSON doesn’t need a comma, all others should have one.

#### Install gh-pages package

This one is easy. Just run the following command while you are inside the project directory:

`npm install --save gh-pages`

The `--save` flag will add `gh-pages` as a dependency to `package.json`. This is to ensure anyone else who clones your project can also get it when they run `npm install`.

Here is a snapshot of `git diff` command showing all we have added since `package.json` was created.



![](https://cdn-images-1.medium.com/max/1600/0*j_RARNCE-aljvNX3.png)



#### Deploy to gh-pages branch

Let’s run `npm run deploy`. It will automatically run `predeploy`, to generate the production build we’ve seen earlier. It will then deploy the build to our repository under a new branch named **gh-pages**.

Check if you get a `Published` status as the last statement. If so, you’ve successfully deployed the production build to GitHub. Here is the output:



![](https://cdn-images-1.medium.com/max/1600/0*rgIQn_1bPY6JPvay.png)



#### Select gh-pages branch to be published

Let’s head over to the GitHub repository and publish our site. Open up the repository and go to settings tab at the top. It looks like this image below, wait a minute! GitHub has automatically published the **gh-pages** branch. There is nothing more to do. It also shows the URL in which we can access the site.

The sub-title above should actually say **Do nothing**. It’s all done and ready for us to consume.



![](https://cdn-images-1.medium.com/max/1600/0*m-QERXCUFDKKj-7E.png)



**Note**: The URL shown for my repository may be misleading you. That’s because I have created this repository under an organization named PineBoat, which is my blog. GitHub places this under my custom domain which isn’t something I expected when I tried this. Yours will differ.

So far, so good. If you have you had prior experience in Git and Node packages, you should have had no trouble reaching this far. In fact, the default `README.md` was enough to help me this far. If you have had no experience, I hope you enjoyed the journey.

But we are aspiring for a continuous deployment workflow. We are starting to navigate some uncharted waters. One would argue nothing is uncharted in the Internet. I would agree, yet create my own map.

### Stage 3: Continuous Deployment

This is where we bring in bots to do most of the deployment that we did in stage 2.

#### Wire in Travis CI for automatic build

Let’s get Travis CI to do the deploying for us. There is no harm in building and deploying your site on your own. As we have seen, all it takes is a few more minutes of our valuable time.

However, when you run into larger projects of scale it’s better to let trusted bots do some of the jobs. Travis CI is one such service.

We can take advantage of Travis CI to build and deploy whenever we commit our code to the repository.

#### Sign Up to Travis CI

It would be annoying if I start with “if you have a GitHub account” now. I’m sure you have one by now and we can use that to sign up to Travis CI.

#### Connect to GitHub Repository

Watch out for the permissions. If your repository does not get listed, click on the **sync** button and refresh the page. I had to grant permission to the “PineBoat” organization before I could see the repository.

Travis CI shows you the steps. Flick that switch against your repository to connect it.

Click on the repository name to open it up. It’ll show a build status as **unknown** and a larger note saying **No builds for this repository**.



![](https://cdn-images-1.medium.com/max/1600/0*oKNcZTaP9AvJ_q4l.png)



Not for long. Let’s change it.

#### Add `.travis.yml` to the repository

Here is the `.travis.yml` that needs to be added. Have a look, and stay with me while I clear up some of the questions you might have.

    language: node_js

    node_js: - "node"

    after_success: - git config --global user.name "vijayabharathi" - git config --global user.email "[email protected]" - git remote rm origin - git remote add origin https://vijayabharathib:${GH_TOKEN}@github.com/pineboat/react-continuous-deployment.git - npm run deploy

Be careful with the `git remote add origin`, it’s one long line. The `YAML` syntax is slightly different from `JSON`. [This page](http://docs.ansible.com/ansible/latest/YAMLSyntax.html) might help. Now it’s time to break it down. You may have figured out most of those messages.

**Here it is in plain English:**

*   This is a node project. Get the latest node version
*   Since Travis runs `npm test` by default, we are asking it to do things after the test is successful
*   Add your Git username and email
*   Then add `git remote origin` for the repository  
    Use your user name and the GH_TOKEN generated as credentials
*   Finally, run the `npm run deploy` command  
    If you recall, this will run `npm run predeploy` before running `npm run deploy`

#### Commit and watch Travis CI build

Keep your Travis CI repository page open. On your terminal add changes, commit and push them to GitHub.

In case you need a reminder, here is the list of commands:

    git add --all git commit -m "add .travis.yml configuration for automatic build" git push origin master

If you switch to the Travis CI page, you’ll see the page coming alive once `git push` is over or within a few seconds. The build starts automatically and you’ll know if it is successful.

Here is my Travis CI page showing nice green status.



![](https://cdn-images-1.medium.com/max/1600/0*-VRvaW2OdhmkEhQe.png)



The log shown is no less than 2500 lines. I’m glad Travis-CI shows only what we need to see.

A clear indication of steps followed as shown below in the image:



![](https://cdn-images-1.medium.com/max/1600/0*OUqyevFCYksP2KBC.png)



### Spot check, did we really succeed?

This is where automated tests that run on production may come in handy.

But that’s for another day. The [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/) can wait until we finish this wiring. Let’s manually check if Travis CI really did publish to GitHub pages.

#### Another trial, this time with changes to code

Last time, we couldn’t see any difference in our application after deployment. That’s because we didn’t make any. So there was no way to tell if the build was successful. You can load gh-pages branch and look into the commits, but I digress.

Now, let’s make some small changes. It’s time to take the React wheel back in time.

We’ll only make two changes.

Within `src/App.css` file, there is a section for animation named `@keyframes App-logo-spin`. Change that `360deg` to `-360deg`. This is to spin the wheel counter clockwise.

Load the `src/logo.svg` file and change the fill color from `#61DAFB` to `#DA61FB`. If your server is running via `npm start`, you can already see a purple wheel running counter clockwise. If not, add the changes to the stash, commit and push them to the repository. Watch if the build is successful in Travis-CI and then head over to your Github page.

Load `your_user_name.github.io/repository_name`. You should see the purple wheel instead of the blue one.

Alas, I don’t see that purple wheel. I still see the default blue one.

#### Fix the missing GH_TOKEN

Though Travis CI reported that all is well, it’s not. If you open up the **gh-pages** branch, you’ll see the original commit we made from local terminal. No other commits. That means, the `after_success` commands were not so successful.

If you expand the `npm run deploy` section in the Travis build log, you’ll see some **authentication errors.** That’s because we haven't given Travis CI permission to write to our repository.

You can create a new token from [Personal access tokens](https://github.com/settings/tokens) page from GitHub.com. Remember to give access to public repository alone. Just one tickmark against `public_repo` will do. **Don’t miss this.** Once you generate a token, copy it. GitHub rightly warns that you will not be able to see it again.

Head over to Travis CI, click on **More Options** for your repository and choose **settings**. It’ll show several sections, but **Environment Variables** is the one to look for.

Name the token as `GH_TOKEN` and past the token under value field. Click add. **Do not** switch on the **Display value in logs** as it might be visible to people if you send the logs out. The token is equivalent to your password.

That’s it, now Travis-CI can write to our repository.

Go back to the **Current** tab of the repository and click on **Restart build**. Once the build is over, you can check the logs and check the **gh-pages** branch on GitHub. You should see a new commit.

Congrats! That’s our first automated deployment. How about the `github.io` website itself? No amount of refresh would bring the much needed purple wheel. Don’t loose hope yet.

#### Ask service worker to take a break

Still the wheel is bleeding blue. But **gh-pages** branch in the repository shows a second commit. Let’s compare the `index.html` on the repository and on the web page source. They are pointing at different CSS and JavaScript files. The hash suffix is our clue.

This seems to be the result of energetic JavaScript service worker. It has cached the page for offline use. But this conclusion needs more research. In the mean time, let’s just stop the service worker and clear the storage.

If you are on Chrome, **Developer Tools** can be accessed from menu or by pressing `F12`. The **Application** tab on Chrome DevTools has **Clear Storage** section. Check all entries and finally click on that **Clear site data**.

Refresh and boom! Here is our reverse wheel in bright purple. Now it’s time for celebration.



![](https://cdn-images-1.medium.com/max/1600/0*uJjmXE5EkbdSisEm.gif)



**Note**: there must be a better way to do this storage clean up automatically. Would be a pain if we have to stop and clean service worker and storage each time to get the changes online. That’s a topic for more research.

### Stage 4: Badge of honor from Travis CI

There is one final task in front of us. That is to get a shiny Travis CI build status badge over to our repository’s `README.md` file.

Open up Travis CI and click on the **build:passing** badge. It’ll show a dialog with options to port the image. Leave the branch as **master**. Select **Markdown** instead of **Image URL**. Copy the text you are given.

Paste it into the `README.old.md`, which was left to us by `create-react-app` previously. Write your own content.

You can delete the default `README.md` from the repository and rename the `README.old.md` to `README.md`.

Add the changes to Git staging, commit and push to the cloud. Now the repository should show the batch you always wanted. Here is the URL shown for our pet project.

    https://travis-ci.org/pineboat/react-continuous-deployment.svg?branch=master

You can add that url to the `README.md` at the top. Here is the image:



![](https://cdn-images-1.medium.com/max/1600/1*cI5UNTkT3JdED0K9BS95Jw.jpeg)

We are done here! Time to celebrate.



I’d like to leave you with a question. If you are working in a large teams using similar workflow, what are the challenges you face and how would you solve them? Write a comment and let me know.

Thank you so much for reading. I hope you found it useful.

This was originally published at [pineboat.in](https://www.pineboat.in/post/travis-to-deploy-react-to-github-pages/).

Clapping shows how much you appreciated this article.








