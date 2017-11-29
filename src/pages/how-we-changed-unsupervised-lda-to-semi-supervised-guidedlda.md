---
author: Vikash Singh
authorTwitter: https://twitter.com/vi3k6i5
authorFacebook: https://facebook.com/1041689419214801
title: "How our startup switched from Unsupervised LDA to Semi-Supervised GuidedLDA"
subTitle: "This is the story of how and why we had to write our own form of Latent Dirichlet Allocation (LDA). I also talk about why we needed to bu..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*34tkrlrhSOdsBZy0ZRr6ow.jpeg
url: https://medium.freecodecamp.org/how-we-changed-unsupervised-lda-to-semi-supervised-guidedlda-e36a95f3a164
id: how-we-changed-unsupervised-lda-to-semi-supervised-guidedlda-e36a95f3a164
date: 2017-10-16T07:11:00.710Z
tags: [
  "Machine Learning",
  "Data Science",
  "Tech",
  "Programming",
  "Technology"
]
---
# How our startup switched from Unsupervised LDA to Semi-Supervised GuidedLDA







![](https://cdn-images-1.medium.com/max/2000/1*34tkrlrhSOdsBZy0ZRr6ow.jpeg)

Photo by [Uroš Jovičić](https://unsplash.com/photos/3jBU9TbKW7o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)







This is the story of how and why we had to write our own form of [Latent Dirichlet Allocation](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation) (LDA). I also talk about why we needed to build a Guided Topic Model (GuidedLDA), and the process of open sourcing everything on [GitHub](https://github.com/vi3k6i5/guidedlda).

### **What Is LDA (Topic Modeling)?**

Lets say that you have a set of News Articles which were documents. By reading those articles you will be able to tell if they are about Sports, Politics or Science.

For the following titles you will agree that 1 and 5 are about Politics, 2 and 4 about Sports, and 3 and 6 about Science:







![](https://cdn-images-1.medium.com/max/2000/1*lhiPVM0SmNA6lLoXkoKyXA.png)

Sample Titles from News Articles.







For a human being it’s not a challenge to figure out which topic a news article belongs to. But how can we teach a computer to understand the same topics?

This is where topic modeling comes into picture. Topic modeling is an unsupervised class of machine learning Algorithms. These models are generally good at grouping words together into topics. LDA is [the most popular](https://www.analyticsvidhya.com/blog/2016/08/beginners-guide-to-topic-modeling-in-python/) topic modeling technique.







![](https://cdn-images-1.medium.com/max/2000/1*GOmQ7gnPDib0FW1yaniyDg.png)

Words grouped together to form topics







Once we have the words grouped into topics, we can now see which group of words the news articles and document talks about. Then we can classify it into that group or topic.



![](https://cdn-images-1.medium.com/max/1600/1*sOrYD13DKo3mUciTUy6LSQ.png)

classify new documents based on previously classified words.



As we can see, this new News Article talks about **Nobel Prize**. We can now predict that this document talks about **Science** topic.

**Note**: Words are not grouped directly into topics. Rather a probability is calculated such as “What is the probability of a word belonging to a topic?”.

It’s given by **_p(t|w)._** Or probability of topic **_t_** given word **_w_**. At it’s core it’s just [Bayesian_probability](https://en.wikipedia.org/wiki/Bayesian_probability).

I would love to talk more about it, but don’t want to deviate from the core problem. If you are interested, you can read more about it [here](https://tedunderwood.com/2012/04/07/topic-modeling-made-just-simple-enough/).

### **So What Is Guided LDA?**

Topic modeling is generally an unsupervised learning algorithm. We know that **Space** and **Tech**are topics of their own. But if we don’t get many articles about them or if they get mentioned together, they might get classified into one topic.

I ran into a similar problem recently. I work as a Data Scientist at [Belong.co](https://medium.com/u/559d189d881) and Natural Language Processing is half of my work. Recently I was doing LDA topic modeling on our data corpus. Most of the topics came out as I was expecting them to. But some of the topics did not make sense.

A couple of the topics were overlapping and some of the topics which I was expecting to come out were not there. Something of this sort happened, Space and Tech got merged together.







![](https://cdn-images-1.medium.com/max/2000/1*U2bi875Rn80MUrBEyriO9g.png)

Space and Tech are getting merged together







In a supervised learning algorithm you can go back and debug where you went wrong in the decision making process. Perhaps you needed more features. Or more training data. Or maybe better loss function, metrics, and sampling.

But where to begin when the model is unsupervised? We decided to debug…



![](https://cdn-images-1.medium.com/max/1600/1*YXVr2zDo76OOBXKDnMlCPg.jpeg)

That moment in history when we decided to debug LDA…



We found that the topics that were getting blended together didn’t have enough documents to stand out.



![](https://cdn-images-1.medium.com/max/1600/1*L-IBXL6JlRu6ZYTmCVaEUA.png)

Space and Tech topics are getting merged together.



We decided to tell the model to keep Space and Tech separate. The idea was to set some seed words for Space and some seed words for Tech. Then guide the model to converge around those terms.







![](https://cdn-images-1.medium.com/max/2000/1*x-LyhAlx0KczZ04t4ski4g.png)

Seeded Words set for Topic ids







It was a simple and intuitive idea, but we couldn’t find any implementation of a GuidedLDA. There were very few papers which talked about guiding the LDA.

We referred to the Paper by Jagadeesh Jagarlamudi, Hal Daume III and Raghavendra Udupa [Incorporating Lexical Priors into Topic Models](http://www.umiacs.umd.edu/~jags/pdfs/GuidedLDA.pdf). The paper talks about how the priors (in this case **priors** mean seeded words) can be set into the model to guide it in a certain direction. We will get into the details in a bit.

Once we made those changes, the model converged the way we wanted it to.



![](https://cdn-images-1.medium.com/max/1600/1*2t3R1uKBwdfpACttEOt0Bw.png)

Space and Tech topics are separated after seeding topics.



### **So How did we change LDA to GuidedLDA?**

To explain this part, we will have to get into the details of how LDA works. I will try my best to keep it simple. If you don’t want to get into it, you can skip ahead to the **Using GuidedLDA** section.

The way regular LDA works is, first each word is randomly assigned to a topic. This initialization can be controlled with Dirichlet priors via the Alpha parameter. That’s where LDA (Latent Dirichlet Allocation) gets it’s name. This randomness could be uniform initialization if the alpha is large, or skewed initialization when the alpha is small. Let’s go ahead with uniform initialization for now.



![](https://cdn-images-1.medium.com/max/1600/1*RojQi7m5yBGHSD0Q0HGGYg.png)

Default initialization with uniform word topic distribution.



The next step is to find out which term belongs to which topic. This is the topic modeling part of the algorithm. LDA goes for a very simple approach by finding the topic for one term at a time.

Say you want to find a topic for the term **Blue Origin**. The LDA will first assume that every other term in the corpus is assigned to the right topic. In the last step we had uniformly distributed each term in all topics, so we will assume that is the correct topic for those terms.

Then we compute which terms **Blue Origin** frequently comes along with. Then, which is the most common topic among those terms. We will assign **Blue Origin** to that topic.

**Blue Origin** will probably go near whichever topic **SpaceX** and **NASA** are in. Now you can see that **NASA**, **SpaceX** and **_Blue_ Origin** are little closer to each other than they were before this step. Then we will move to the next term and repeat the process. We will repeat this entire process enough number of times needed to cause the model to converge.

The formula for this will be:  
`Probability` of **_Blue Origin_** to fit in topic `Z` {0,1,2,..} when it occurs in a `document` is equal to the number of times **_Blue Origin_** is assigned to topic `Z` multiplied by the number of other `words` in that document that already belong to `Z`, divided by total the number of times any word is assigned to topic `Z`.

Here’s the actual formula:



![](https://cdn-images-1.medium.com/max/1600/1*zbQ4v-jKMG0e5e5KeKtUnQ.png)



For each Document **(**`**D**`**)** and for each word **(**`**W**`**)** in that document, we will calculate the probability of that word belonging to each topic **(**`**Z**`**)**.

<pre name="6be4" id="6be4" class="graf graf--pre graf-after--p">for **_d_** in all_documents_D:  
    for **_w_** in all_words_W_in_d:  
        for **_z_** in all_topics_Z:  
            w_in_z = count(across all documents **_w_** belongs to **_z_**)  
            d_in_z = count(in **_d_** all words that belong to **_z_**)  
            tokens_in_z = count(all assignments in z)  
            p(z| w, d) = w_in_z * d_in_z / tokens_in_z  
        # so **_w_** belong to max p(**_z_**)  
        # whichever topic the probability was maximum for w  
        w_z = max(p(z| w, d))</pre>

The initial results will be wrong. But we will run this entire process multiple times and with each iteration they will get better. Over time they will converge to form word topic distribution.

### **What changes when we seed the documents?**

Say we want to seed `**SpaceX**`, `**NASA**` to converge towards `**topic_0**`. During initialization we can give some extra boost to `**SpaceX**` and `**NASA**` to lie in this specific topic.

We can control this parameter of how much extra boost should be given to a term. In our algorithm we call it `**seed_confidence**` and it can range between 0 and 1\. With a `**seed_confidence**` of 0.1 you can bias the seeded words by 10% more towards the seeded topics.



![](https://cdn-images-1.medium.com/max/1600/1*kMxQ47DFkpxIDBCyXeff6w.png)

Seeded Initialisation with modified word topic distribution.



In the above shown initialization, `**NASA**` and `**SpaceX**` are being seeded for `**Topic_0**`, `**Apple**` and `**Google**` for `**Topic_1**`, and `**Physics**` and `**Chemistry**` for `**Topic_2**`.

Now when we run the above process we will have higher count for seeded words belonging to the seeded topics. The formula will remain the same for GuidedLDA and the convergence will change towards the seeded topics.

<pre name="e22d" id="e22d" class="graf graf--pre graf-after--p"># for seeded words belonging to seeded topics  
# this count will be higher now for seeded z.</pre>

<pre name="b306" id="b306" class="graf graf--pre graf-after--pre">w_in_z = count(across all documents **_w_** belongs to **_z_**)</pre>

<pre name="fd18" id="fd18" class="graf graf--pre graf-after--pre"># Thus probability of p belonging to seeded z will be higher</pre>

<pre name="86d1" id="86d1" class="graf graf--pre graf-after--pre">p(z| w, d) ∝ w_in_z</pre>

Hence guiding the LDA. Or GuidedLDA.

We tried a lot of different approaches before finally making this one work.

### Using GuidedLDA

GuidedLDA is a python library that I have open sourced on [GitHub repo](https://github.com/vi3k6i5/guidedlda).

You can install it with a simple pip install:

<pre name="2307" id="2307" class="graf graf--pre graf-after--p">pip install guidedlda</pre>

The code to use it is fairly simple. Create a dictionary for `seed_topics` with `word_id` to `topic_id` map. And pass it to the `model.fit()` method.

1.  `seed_confidence` can vary between 0 to 1.
2.  `seed_topics` is the dictionary {`word_id` to `topic_id`}
3.  `X` is the [document term matrix](https://en.wikipedia.org/wiki/Document-term_matrix).

<pre name="de16" id="de16" class="graf graf--pre graf-after--li">seed_topics = {  
    'NASA': 0, 'SpaceX': 0,  
    'Apple': 1, 'Google': 1,  
    'Physics': 2, 'Chemistry': 2,  
}  
model.fit(X, seed_topics=seed_topics, seed_confidence=0.15).</pre>





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/16f31be0d99a366adec684ab3d6f5e02?postId=e36a95f3a164" data-media-id="16f31be0d99a366adec684ab3d6f5e02" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F3116482%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



GuidedLDA seeded topic modeling example.



Documentation for GuidedLDA is linked [here](http://guidedlda.readthedocs.io/).

#### Credits

A major part of the code is borrowed from [python LDA library](https://github.com/lda-project/lda).

A huge shoutout to the authors of that library : [Allen Riddell](https://twitter.com/ariddell) and [Tim Hopper](https://twitter.com/tdhopper).

Special thanks to [Vinodh Ravindranath](https://www.linkedin.com/in/vinodhkumarr/), who mentored me throughout the project.

By using GuidedLDA we were able to separate out topics which had smaller representation in the corpus and guide the classification of documents.

We have seen success with this model in production. But still, the Algorithm and the implementation is at an early stage. We request you to try it out and share your thoughts, experiments and results. Would love to hear from you.








