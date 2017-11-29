---
author: Sam Corcos
authorTwitter: https://twitter.com/SamCorcos
authorFacebook: https://facebook.com/10156115947080004
title: "Is It “Computer Science” or “Programming”?"
subTitle: "An education policy white paper (hint: they’re not the same thing)"
coverSrc: https://cdn-images-1.medium.com/max/2000/1*hVBCwtCkDzfOPl6PcgEjBA.jpeg
url: https://medium.freecodecamp.org/is-it-computer-science-or-programming-c01383dacc9c
id: is-it-computer-science-or-programming-c01383dacc9c
date: 2015-11-12T20:04:29.312Z
tags: [
  "Education",
  "Education Reform",
  "Computer Science",
  "Programming",
  "Tech"
]
---
# Is It “Computer Science” or “Programming”?

## _An education policy white paper (hint: they’re not the same thing)_

_by_ [_Lewis Ellis_](https://github.com/lewisjellis) _and_ [_Sam Corcos_](https://github.com/samcorcos)

Advocates of computer science education have been pushing for improvements to pre-university computer science education, often bemoaning its underrepresentation and lack of recognition in our high schools.

These complaints are not without merit: as of November 2015, **only 27 U.S. states recognize** computer science as a math or science class, and **90% of high schools have no offerings** in the field. Statesmen, entrepreneurs, and celebrities have encouraged a shift towards greater computer science education.

> There just aren’t enough people who are trained and have these skills today.  
> —Mark Zuckerberg, Facebook

With so many public advocates coming forward — especially surrounding Code.org’s “Hour of Code” campaign in December of 2014 — computer science education has become a mainstream issue. Visitors to Code.org are asked if they agree with the notion that “Every student in every school should have the opportunity to learn computer science,” and to sign their name to show support. Nearly 2 million people have done so, myself included.

> It’s important moving forward in the future, which is now, that everybody learn it. — Chris Bosh, Miami Heat

But there’s a subtlety at play when you try to get more specific and ask someone exactly _what_ they support. Do you support “programming” or “computer science” courses? **Contrary to what you may think, these two subjects are about as different as Latin is to linear algebra**. Allow me to explain.

> Give it a shot, and don’t let anyone tell you you can’t — President Obama

#### What is computer science?



![](https://cdn-images-1.medium.com/max/1600/1*DLvEABmN4BAGKUlgsP_yNQ.png)



**It’s math**. As a computer science major myself, I can tell you first hand that computer science involves writing very little code — especially at the higher levels. If I had to arbitrarily assign a percentage to “math v. programming”, I would say that computer science is at least 80% math and at most 20% programming.

In computer science you learn about sorting algorithms, finite state machines, turing machines, parsers, lexers, tokenizers, lambda calculus, monads, monoids, functors, lists, maps, maybes, lenses, and futures, to name a few.

It is very common for computer science courses to have a mathematics prerequisite. **Algorithms and data structures are heavily reliant on a background in math**.

Also contrary to popular opinion, **computer science majors are not necessarily good programmers**. Granted, they show a higher aptitude towards becoming a good programmer, but they rarely know how to code anything useful coming out of college with a computer science degree.

#### What is programming?

<pre name="1eb5" id="1eb5" class="graf graf--pre graf-after--h4">function fibonacci(n) {  
   if (n < 2) {  
     return 1;  
   } else {  
     return fibonacci(n - 2) + fibonacci(n - 1);  
   }  
}</pre>

**It’s somewhere between a foreign language and formal logic**. A word you will hear a lot in programming is “syntax”, which is how a particular programming language structures its logic. This might sound familiar because it’s the same word — not coincidentally — that foreign language classes use to describe the structure of sentences.

Programming does not require a highly mathematical background, and much like a foreign language, the only way to become a better programmer is to practice. Most people who start programming are surprised to discover how easy it is to learn and how little math is involved. As a friend once described it to me, “Once it stops looking like _The Matrix_, it’s actually pretty easy.” In my experience, this change of perception usually takes less than a month.

An example to illustrate the difference: In programming you generate a random number with the function **Math.random()**. In computer science, you learn how to build algorithms that make truly random numbers that can be used in a function like Math.random() to generate a random number.

#### Problem description

I taught myself to program in middle school and was disappointed with the limited computer science offerings at my high school*. In college, I taught computer science (CS) to many of my peers as an undergraduate TA for seven semesters, and also organized and ran four instances of a high-school-level programming contest** totaling over 1000 participants. I’ve spent significant time interacting with CS students and instructors at both the secondary and post-secondary level.

I’ve also explicitly discussed CS education with numerous high school teachers, learning of their successes, difficulties, and abject failures. Much of what I’ve heard has lined up with a 2013 survey by the _Computer Science Teachers Association_, which found that:

> 40 percent of teachers said the greatest challenge in teaching computer science is a lack of support or interest from school staff. Another 35 percent said a lack of student interest or enrollment was the greatest challenge. Rapidly changing technology and a lack of curriculum resources were cited as the greatest challenge by 30.5 percent and 23.5 percent of teachers, respectively.

The conversations I’ve had with teachers reflect the results of that study. One major problem these teachers have told me about is how they grade their programming assignments. They would typically receive submissions from their students by email, then run and evaluate them manually on their own computer. This archaic system takes an order of magnitude more time to grade than the widely-used submission systems and auto-graders used in most universities.

They explain that without the enrollment numbers, staffing, or financial backing of a university CS department, they don’t have the resources to develop or invest in something more sophisticated. Even if they did, schools typically only have one computer science teacher who would stand to benefit. Nonetheless, these teachers would always have inspiring stories of the students they’ve taught, the curiosity they’ve helped spark, and the exciting things their students have gone on to do.

One challenge is convincing students to take a computer science course if it is offered. This is primarily due to the fact that it is often offered exclusively as an elective. A series of missing incentives has been stunting the growth of computer science education in a negatively-reinforcing spiral. When a class doesn’t count for anything, there is:

1.  No incentive for students to take it, and thus…
2.  no incentive for schools to offer it, and thus…
3.  no incentive for teachers to train to teach it.

It would be unfortunate if students who would otherwise be interested are turned away from the field prematurely by poorly implemented or under-supported graduation requirements.

The existing high school advanced placement (AP) _Computer Science A_ curriculum is actually mostly a programming course. It teaches object-oriented programming with Java, and its exam consists entirely of questions such as, “Here’s a piece of code, what does it do?” and, “Here’s a problem, write a program to solve it.”

The recently introduced AP _Computer Science Principles_, on the other hand, focuses on higher-level computational thinking, with programming being only one of seven “big ideas” covered by the curriculum. It discusses topics from audio and video to how the internet works, how we keep things secure, and the impacts computer systems can and do have on the world. It’s so unmarried to programming that it doesn’t even require teachers to use a specific programming language.

Of course, part of the confusion comes from history: AP Computer Science A (and formerly AP CS AB) was largely the only show in town for decades, and it was a programming course being called Computer Science. The AP Computer Science Principles curriculum is the kind of broad foundation course suited for the more general “Computer Science” name.

This new AP Computer Science Principles curriculum was introduced in late 2014 for launch during the 2016–17 school year, and 60 million students participated in “Hour of Code” in 2014, compared to just 20 million in 2013\. We now have 27 states recognizing computer science courses as more than just an elective, and the rate of adoption is increasing.

But in spite of these improvements, our education system is moving too slowly and without a clear understanding of the direction in which we are going.

#### Special challenges of teaching programming

**Curriculum for computer science courses is fairly uniform and well established**. The mathematical underpinning of the subject matter has not changed in decades so teaching a class from year to year with the same, refined lectures is practical.

**Programming, on the other hand, is quite different**. There are dozens of major programming languages, each with varying use cases, complexity, and performance. Not only are there dozens of languages, but there are also hundreds of frameworks around these languages that change at an even faster rate. This makes it nearly impossible to teach an up-to-date course on the subject, but there are ways around this problem, to be discussed later.

Most college-level programming courses (inappropriately named “computer science”) teach a programming language called Java. Java was introduced by Oracle in the mid-1990s and was wildly popular and is still widely used today. Without going into too much detail, Java is not the programming language that students should be learning now: 20 years after the release of Java. The programming language of the future is a language called JavaScript, _which, in spite of its similar name, is actually in no way related to Java_.

**JavaScript is the most widely known programming language and it is the most employable language**. Most of the next-generation web frameworks are run entirely on JavaScript, including Angular (supported by Google), React (supported by Facebook), and Meteor. JavaScript allows you to build full-featured software, websites, mobile apps, and just about anything else you can think of. And thanks to a massive investment in the language from Google (for more information, see [V8](https://code.google.com/p/v8/)), JavaScript is now more than 5 times faster than Python, the currently favored programming language of science and academia.

Even with everything JavaScript has going for it, it’s difficult for me to say that all programming courses should teach JavaScript, at least at the introductory level. The efficacy of programming languages changes over time, so **setting an inflexible curriculum could do more harm than good**, which is how we ended up with classes teaching Java held over from the 90s.

Certain programming languages are also better at doing certain tasks. C++ is a very old language that is still among the most efficient languages available. Python also has a vast array of resources available that make machine learning much more practical than an implementation in JavaScript.

Another major challenge of teaching programming is the difficulty of setting curricula and measuring effectiveness. Also, as mentioned above, grading is a laborious process that is — ironically — completed manually in most classrooms.

#### Policy options

When students are asked about what got them interested in computer science, a common thread quickly becomes apparent: they liked computer science after only a brief exposure to the topic. I’ve never heard anyone say that it took a long time to develop an interest in the subject; they just needed an introduction, and curiosity took care of the rest.

This brings me to a study done some years ago that suggested an incredible related result. The original paper is [here](http://www.eis.mdx.ac.uk/research/PhDArea/saeed/SD_PPIG_2009.pdf), and Jeff Atwood provides a great summary [here](http://blog.codinghorror.com/separating-programming-sheep-from-non-programming-goats/). From the paper’s abstract:

> An experiment found two distinct populations of students: one could build and consistently apply a mental model of program execution; the other appeared either unable to build a model or to apply one consistently. The first group performed very much better in their end-of-course examination than the second in terms of success or failure … We show that consistency does have a strong effect on success in early learning to program but background programming experience, on the other hand, has little or no effect.”

To quote Jeff Atwood’s take, this means that “the act of programming seems literally unteachable to a sizable subset of incoming computer science students.” This is not just numbers telling a story; every computer science educator I’ve asked has had some similar hunch that things just haven’t quite clicked for some sizable portion of their class.

I’ve seen it first hand over and over in my time as a teaching assistant for various intro-sequence programming-heavy CS courses. Every semester there would be a number of students who, not for lack of trying, simply could not make it through the course. It was prototypical: they would invest 20 or 30 hours per week, triple that of the average student, trying to get through each assignment, often spending 10 or sometimes even 20 hours in office hours seeking guidance, confirming understanding, and asking questions.

As teaching assistants (TAs) we would do everything we could, but it was always painful seeing these students put forth so much effort while so many others breeze by in comparison, spending 5 or 10 hours per assignment and rarely needing help.

It happened every semester, in every intro CS course, to a not-insignificant portion of the class. These are some of the brightest students in the world at the University of Pennsylvania, and once they find that CS isn’t a good fit for them, they go on to be researchers, bankers, doctors, and lawyers. If these otherwise perfectly intelligent and hardworking students are finding that it’s not for them, how can we possibly expect every high school student to learn any serious amount of programming?

Even if we dismiss the notion that many people just don’t grasp programming as well as others, Dan Bricklin, a decorated technologist best known for inventing the electronic spreadsheet, offers another take:

> Programming is a very error-prone business, especially with “typed-statement” systems. Most of them are very intolerant of errors (even simple typos)…Unless you are totally immersed in that particular programming system…it is very hard for most people to do …this is not to say that many people can’t get immersed in systems that require such understanding. They do in many parts of their lives.

> For example, lawyers and tax accountants routinely work with such complexity in their contracts and planning. Doctors work with an untold number of variables…It’s just that people who aren’t professional or hobbyist programmers usually don’t want to get so immersed in something that is infrequently done and not part of the rest of their lives. The question really isn’t “Why Johnny can’t program” but rather “Why Johnny won’t or doesn’t choose to program”.

Instead of splitting people into performance-based buckets, he considers motivations and complexity and suggests that maybe there’s some self-selection going on. Maybe some people just don’t want to invest heavily in something for which they see correspondingly little use. Maybe some people like some flavors of complexity but not others.

Sam Altman, President of Y Combinator (the famous seed fund which helped Dropbox, Airbnb, and countless other technology companies get off the ground), recently tweeted a concise summary of this notion:

> Everyone should have the opportunity to learn to code. But it’s not the answer to everything. Not everyone will like it or be good at it. I will never like or be good at football. A world where CS is the only option would be a sad one indeed.

So what does all this mean? Programming isn’t for everyone. Not everyone will like or be good at it; the same goes for computer science. But it is imperative that students have the opportunity to try computer science sooner rather than later, so as to decide for themselves if they want to learn more.

Now that we’ve covered much of the background, there are four policy options that should be considered:

1.  Should all schools offer CS classes?
2.  Should all schools offer programming classes?
3.  Should all schools require CS classes?
4.  Should all schools require programming classes?

The first would oblige schools to offer a computer science class with the current curriculum; as a basic introduction to the field, the current curriculum will suffice. **This policy option is absolutely worth implementing**. Most people assume this is inevitable, but it only comes about with changes in legislation.

The second would oblige schools to offer a programming course. Unfortunately, this would be new for public schools and would require a new curriculum and additional training for teachers. Online resources, such as CodeAcademy, CodeSchool, KhanAcademy, and dozens of others have done a tremendous job making curriculum that is easily accessible and cutting edge. **The coupling of classroom learning with some of these online resources might be the key to teaching programming courses**. This policy option is only worth implementing if there are sufficient resources dedicated to making it work.

The third option would require students to take a computer science class as a graduation requirement. This is likely to happen at some point in the future, **but it is premature to require it in 2015**. The resources, teacher training, and public support are insufficient to make this work. That said, the math one learns in computer science is no less applicable to long-term success than geometry or calculus.

The fourth option would require students to take a programming course as a graduation requirement. This would mean learning a programming language, such as JavaScript, C++, Haskel, etc. While this would be a useful skill for many people, **it is entirely unnecessary to require it in the classroom**. Unlike English, math, or history, programming is a skill that lacks wide applicability outside of the act of programming itself.

#### Policy recommendations

Some measures are easy to support unconditionally: Yes, a good computer science class should count as more than an elective. Yes, more schools should offer computer science classes. Yes, we want more people to learn computer science. But beyond these more easily supported suggestions, it’s not as clear what should be done.

**One recommendation is to make a broad introductory CS course accessible to every student**. We only need to offer enough for students to try it out and see if they like it. If they do, and they want to learn more, the course served its purpose, and hopefully more in-depth offerings are also available. If they don’t, the course should have still taught some useful understandings, not just a bunch of programming specifics that the uninterested student is likely to never use again.

**Another recommendation is to set clear certification pathways and curricula for computer science teachers**. Few states have done this, but it helps make teaching computer science more accessible to interested teachers. That leads to more computer science teachers, which enables more schools to offer computer science classes. It also helps us know when we have enough CS teachers to consider bigger future initiatives, which will require more resources than are currently available.

As a broad policy, I would recommend the following, in order of importance:

<pre name="0004" id="0004" class="graf graf--pre graf-after--p">1\. All high schools should offer computer science courses, with the current curriculum.</pre>

<pre name="58f7" id="58f7" class="graf graf--pre graf-after--pre">2\. Computer science courses should satisfy a math or science course requirement.</pre>

<pre name="0094" id="0094" class="graf graf--pre graf-after--pre">3\. All students should have the option to take at least an introductory computer science or programming course.</pre>

<pre name="9d36" id="9d36" class="graf graf--pre graf-after--pre">4\. Programming courses, where taught, should be offered in a modern language, such as JavaScript.</pre>

To whomever may be reading this, I’m quite interested to hear what you think and I look forward to reading your comments.

#### Additional

_Photos courtesy of_ [_Unsplash_](https://unsplash.com/)

* Fortunately my high school did offer one CS class, and my computer science teacher was great. But there was only one of him, and he taught lots of other classes, and not many people took his CS class, so there wasn’t much hope for anything further.

** PClassic.org











* * *







_Sam Corcos is the lead developer and co-founder of_ [_Sightline Maps_](http://sightlinemaps.com)_, the most intuitive platform for 3D printing topographical maps, as well as_[_LearnPhoenix.io_](http://learnphoenix.io)_, an advanced tutorial site for building scaleable production apps with Phoenix and React._








