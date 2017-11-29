---
author: Illia Kolodiazhnyi
authorTwitter: none
authorFacebook: none
title: "How to commit entire directories to GitHub directly from your browser using GitHub.js"
subTitle: "Did you know you can parse a movie database website, then store its data in your own GitHub repository — without ever leaving your browse..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*ixeHa7nfJp7CPSZ2HjSywg.jpeg
url: https://medium.freecodecamp.org/pushing-a-list-of-files-to-the-github-with-javascript-b724c8c09b66
id: pushing-a-list-of-files-to-the-github-with-javascript-b724c8c09b66
date: 2017-01-25T17:02:00.523Z
tags: [
  "Git",
  "Github",
  "JavaScript",
  "Programming",
  "Web Development"
]
---
# How to commit entire directories to GitHub directly from your browser using GitHub.js







![](https://cdn-images-1.medium.com/max/2000/1*ixeHa7nfJp7CPSZ2HjSywg.jpeg)







Did you know you can parse a movie database website, then store its data in your own GitHub repository — without ever leaving your browser?

You can also do things like change a webpage by using your browser’s developer tools, then push the updated code as a commit — together with all its images and other resources.

[GitHub’s HTTP API](https://developer.github.com/v3/) lets you to use pretty much all of GitHub infrastructure. In most cases, it’s transparent and easy to grasp. But there’s one thing that isn’t so easy to do at first glance — making nice commits with lots of files at the same time, like running `git push` from your terminal does.

But don’t worry. By the time you finish reading this article, you’ll be able to use a set of low-level calls to achieve this.

### Getting set up

You’re going to implement a function that will take the data from files and push them with a commit to GitHub, like this:

<pre name="114a" id="114a" class="graf graf--pre graf-after--p">pushFiles(  
    'Making a commit with my adorable files',  
    [  
        {content: 'You are a Wizard, Harry', path: 'harry.txt'},  
        {content: 'May the Force be with you', path: 'jedi.txt'}  
    ]  
);</pre>

There are a few important things to note, though:

*   I’m going to use the [Github-JS](https://github.com/github-tools/github) library to simplify things. It’s a convenient wrapper around the calls to the API.
*   Although there will only be one function to do the job, it will make many requests under the hood. This is due to the way the GitHub API is built — it has to make at least one request per file submitted, then several extra requests.
*   Committing binary files (like images) will require a bit more set up. I have a special section below that covers this.

### An algorithm for success

Take a look at the internal structure of the GitHub repository:



![](https://cdn-images-1.medium.com/max/1600/1*aKyOWPYL24HrnKdXpMegjQ.png)

Repository structure example ([source](https://developer.github.com/v3/git/))



Here is a brief explanation of how this works: the top pointer of every branch points to a particular commit, which points to a tree, which points to a version of a file. Those are basically the type of objects you should care about: _Commit_, _Tree_ and _Blob_ (content of a file).

Each contains a hash string called SHA — it’s actually a checksum hash of the object. So objects point to each other using those SHA values.

On the [Git Data page](https://developer.github.com/v3/git/) of the API, you can find the description of the algorithm to achieve exactly your goal. But here’s how this works in detail:

1.  Retrieves the current freshest _Commit_ and remembers its SHA. It will be needed later to place a new _Commit_ on top of the old one.
2.  Retrieves the _Tree_ of the current _Commit_ and remembers its SHA, too. It will be needed for creating the new _Tree_ to base it on the old one.
3.  Creates new _Blobs_ for each of your files, then saves their SHAs.
4.  Creates a new _Tree_ and passes information about the _Blobs_ it created in step 3 and the SHA of the old _Tree_ retrieved in step 2\. This will create a relation between the old _Commit_ and the new one.
5.  Creates a new _Commit_ using: the SHA of the old _Commit_ retrieved on step 1, the SHA of the _Tree_ created on step 4, and the commit message for the new _Commit_.
6.  Finally, updates the pointer of the branch to point to the newly created _Commit_.

Apart from that, note that there’s also an authentication step, and a step where GitHub sets up the repository and branch you would like to push to.

Now that you have a conceptual understanding of how this works, let’s dive into the fun part — getting things done with code!

### Holy Code!

Let’s keep things simple and use a wrapper function to store the functionality. This exposes a reference to an instance of the [Github API wrapper library](https://github.com/github-tools/github), and along with it several functions for getting the job done:

<pre name="8df7" id="8df7" class="graf graf--pre graf-after--p">function GithubAPI(auth) {  
    let repo;  
    let filesToCommit = [];  
    let currentBranch = {};  
    let newCommit = {};</pre>

<pre name="9230" id="9230" class="graf graf--pre graf-after--pre">    this.gh = new GitHub(auth);</pre>

<pre name="21c3" id="21c3" class="graf graf--pre graf-after--pre">    this.setRepo = function() {}  
    this.setBranch = function() {}  
    this.pushFiles = function() {}</pre>

<pre name="464d" id="464d" class="graf graf--pre graf-after--pre">    function getCurrentCommitSHA() {}  
    function getCurrentTreeSHA() {}  
    function createFiles() {}  
    function createFile() {}  
    function createTree() {}  
    function createCommit() {}  
    function updateHead() {}  
};</pre>

The `setRepo()` just passes arguments to the underlying library and saves the _Repository_ object:

<pre name="fdd8" id="fdd8" class="graf graf--pre graf-after--p">this.setRepo = function(userName, repoName) {  
    repo = this.gh.getRepo(userName, repoName);  
}</pre>

The `setBranch()` is a bit more complicated in logic:

<pre name="d766" id="d766" class="graf graf--pre graf-after--p">this.setBranch = function(branchName) {  
    return repo.listBranches()  
        .then((branches) => {  
            let branchExists = branches.data  
                .find( branch => branch.name === branchName );  
            if (!branchExists) {  
                return repo.createBranch('master', branchName)  
                    .then(() => {  
                        currentBranch.name = branchName;  
                    });  
            } else {  
                currentBranch.name = branchName;  
            }  
        });  
}</pre>

Here you get all branches of the _Repository_ and try to find the one you want to commit to. If it’s not found, the new branch is created based on the `master`.

When you use the `pushFiles()` function, it goes through all the steps we discussed above:

<pre name="e2f9" id="e2f9" class="graf graf--pre graf-after--p">this.pushFiles = function(message, files) {  
    return getCurrentCommitSHA()  
        .then(getCurrentTreeSHA)  
        .then( () => createFiles(files) )  
        .then(createTree)  
        .then( () => createCommit(message) )  
        .then(updateHead)  
        .catch((e) => {  
            console.error(e);  
        });  
}</pre>

It uses a chain of Promises, as every step will make an actual request to the GitHub API.

Step 1 and 2 of the Algorithm aren’t very interesting. They just call API methods and save the SHAs of the current _Commit_ and _Tree_:

<pre name="79fa" id="79fa" class="graf graf--pre graf-after--p">function getCurrentCommitSHA() {  
    return repo.getRef('heads/' + currentBranch.name)  
        .then((ref) => {  
            currentBranch.commitSHA = ref.data.object.sha;  
        });  
}</pre>

<pre name="4739" id="4739" class="graf graf--pre graf-after--pre">function getCurrentTreeSHA() {  
    return repo.getCommit(currentBranch.commitSHA)  
        .then((commit) => {  
            currentBranch.treeSHA = commit.data.tree.sha;  
        });  
}</pre>

Now on Step 3, you need to create _Blob_ objects for each file:

<pre name="30ac" id="30ac" class="graf graf--pre graf-after--p">function createFiles(files) {  
    let promises = [];  
    let length = filesInfo.length;</pre>

<pre name="e8f9" id="e8f9" class="graf graf--pre graf-after--pre">    for (let i = 0; i < length; i++) {  
        promises.push(createFile(files[i]));  
    }</pre>

<pre name="6d45" id="6d45" class="graf graf--pre graf-after--pre">    return Promise.all(promises);  
}</pre>

<pre name="ae21" id="ae21" class="graf graf--pre graf-after--pre">function createFile(file) {  
    return repo.createBlob(file.content)  
        .then((blob) => {  
            filesToCommit.push({  
                sha: blob.data.sha,  
                path: fileInfo.path,  
                mode: '100644',  
                type: 'blob'  
            });  
        });  
}</pre>

Two points to note here:

1.  you need to wait for all _Blobs_ to be created — hence the `Promise.all` expression
2.  the file mode will must be set to `100644` to designate a simple file. GitHub allows [other types](https://developer.github.com/v3/git/trees/#create-a-tree), but you don’t really need them here.

Step 4 and 5 are about creating a new _Tree_ with files (_Blobs_) and a _Commit_ with that _Tree_:

<pre name="8032" id="8032" class="graf graf--pre graf-after--p">function createTree() {  
    return repo.createTree(filesToCommit, currentBranch.treeSHA)  
        .then((tree) => {  
            newCommit.treeSHA = tree.data.sha;  
        });  
}</pre>

<pre name="1425" id="1425" class="graf graf--pre graf-after--pre">function createCommit(message) {  
    return repo.commit(currentBranch.commitSHA, newCommit.treeSHA, message)  
        .then((commit) => {  
            newCommit.sha = commit.data.sha;  
        });  
}</pre>

And the only thing left is Step 6 — update the branch to point to the new _Commit_:

<pre name="e7e4" id="e7e4" class="graf graf--pre graf-after--p">function updateHead() {  
    return repo.updateHead(  
        'heads/' + currentBranch.name,  
        newCommit.sha  
    );  
}</pre>

That’s it! Now you can use this beauty to push your files:

<pre name="6592" id="6592" class="graf graf--pre graf-after--p">let api = new GithubAPI({token: 'API_TOKEN'});  
api.setRepo('GITHUB_USER', 'REPOSITORY');  
api.setBranch('AWESOME_BRANCH')  
    .then( () => api.pushFiles(  
        'Making a commit with my adorable files',  
        [  
            {content: 'You are a Wizard, Harry', path: 'harry.txt'},  
            {content: 'May the Force be with you', path: 'jedi.txt'}  
        ])  
    )  
    .then(function() {  
        console.log('Files committed!');  
    });</pre>

You can find the ready-to-use resulting implementation in this [Gist](https://gist.github.com/iktash/31ccc1d8582bd9dcb15ee468c7326f2d).

### **What About Binary Files?**

Unfortunately, at the moment of writing this article (January 2017) the library used here internally fails to send binary data to GitHub.

I’ve created an [issue](https://github.com/github-tools/github/issues/417) with them to try and resolve the problem. But until it’s settled, we will have to find a workaround for this.

The predicament lies in the `createBlob()` function, which should send the content in Base64 format with proper request structure. But instead, the library handles it like a plain string.

So the temporary workaround I came up with includes forking the library and changing [this line](https://github.com/github-tools/github/blob/master/lib/Repository.js#L253) to the following:

    if (typeof content === 'object') {    postBody = content;} else {    postBody = this._getContentObject(content);}

Basically, you would want the library to allow you to specify the proper object yourself.

Using this tweaked version of the library, you can now push binary files with:

<pre name="31b9" id="31b9" class="graf graf--pre graf-after--p">createBlob({content: base64Content, encoding: 'base64'})</pre>

where the `base64Content` is generated like this:

<pre name="35a0" id="35a0" class="graf graf--pre graf-after--p">let fileReader = new FileReader();  
fileReader.onload = function(e) {  
    let content = e.target.result;  
    //remove the header and leave only the Base64 content itself  
    base64Content = content.replace(/^(.+,)/, '');  
}  
fileReader.readAsDataURL(file);</pre>

I admit that this is hacky, but it’s probably the easiest way to achieve the necessary behavior.

### Now go forth and commit code

GitHub gives you the ability to work with their service smoothly, and from pretty much any environment. I hope this article helped clarify some crucial concepts in relation to using the GitHub API in browser using JavaScript.

Good luck to you all! And let me know what you think about this in the comments.








