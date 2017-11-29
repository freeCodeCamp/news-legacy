---
author: Guido Schmitz
authorTwitter: https://twitter.com/guidsen
authorFacebook: https://facebook.com/1289567887722714
title: "Move Fast and Don’t Break Things"
subTitle: "An intro to Test Driven Development"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*ZQnE-uRaQeaJBXgJB5D9Fg.png
url: https://medium.freecodecamp.org/how-test-driven-development-increased-my-confidence-of-shipping-new-code-without-breaking-things-a759a570bd95
id: how-test-driven-development-increased-my-confidence-of-shipping-new-code-without-breaking-things-a759a570bd95
date: 2016-08-28T15:44:51.100Z
tags: [
  "Software Development",
  "Web Development",
  "Tech",
  "Programming",
  "JavaScript"
]
---
# Move Fast and Don’t Break Things

## An intro to Test Driven Development

When I started writing code, I never wrote any tests. I assumed that my code didn’t contain any bugs. I sort of figured that everything would just keep on working when I changed a line of code here or there, or shipped new features entirely.

Boy, was I wrong.

While my application remained functional, weird bugs began creeping in. And things just got worse as my codebase grew.

Soon I got anxious whenever adding new code to my codebase, thinking my next line of code could be the one that brings the whole app crashing down.



![](https://cdn-images-1.medium.com/max/1600/1*AmCx9MGHN-tz9_HYbOpWkg.gif)



That’s when I discovered Test Driven Development (TDD).

TDD is a methodology that can increase your confidence when shipping new features. It makes you less likely to break your application.

When beginning with TDD there are [three simple rules](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd) you should follow:

1.  write a failing test before you write any production code
2.  write one test at a time, and make sure it fails before moving on
3.  don’t write any more production code than is necessary to make the currently failing test pass

Then you can go in and refactor the production code you wrote.

This process as a whole is often referred to as Red Light (failing test) -> Green Light (passing test) -> Refactor

### Reaping the Benefits

By following these three rules, TDD can help you with:

*   **Debugging.** Imagine working on a project where you _never_ end up with several modules torn to shreds, hoping that you can somehow pull them all back together by your deadline.
*   **Courage.** If you have a beautiful design and architecture, but have no tests, you are still afraid to change the code. At the same time, if you have a broad suite of tests, you can go back and safely refactor sub-par code.
*   **Documentation.** Unit tests are like code examples. When you want to know how to call a method, you’ll have tests handy that call that method every way it can be called, and these cannot get out of sync with your production code.
*   **Design.** Each module will be _testable_ by definition. And another word for _testable_ is _decoupled_. In order to write your tests first, you have to decouple the units you are testing from the rest of the system. This practice is invaluable.
*   **Professionalism.** Given that these benefits are real, the bottom line is that it would be _unprofessional_ not to adopt the practice that yields them.

### Structuring your Tests

Every test should follow a structure like this one:

*   **Setup:** Mocking a function or adding some rows to your database
*   **Execute:** Calling the method you want to test
*   **Assert:** Verifying that your results are correct
*   **Teardown:** Cleaning up the modified database records or mocked objects

If you want to learn more about test structure, here’s a great read that will show you some best (and worst) practices for writing unit tests:

[**Writing Great Unit Tests: Best and Worst Practices**  
_What’s the difference between a good unit test and a bad one? How do you learn how to write good unit tests? It’s far…_blog.stevensanderson.com](http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/ "http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/")[](http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/)

### Fitting TDD into your Workflow

Let me take you through a example of what this might look like with a real world step-by-step TDD example.

We’ll make a function that detects a specific mention format in a string and replaces it with the user’s name. The mention format looks like:

@(userId)

Now that we have a simple case, we will write a test for it. I will use the JavaScript [Tape](https://github.com/substack/tape) test framework in this example because it’s relatively easy to use:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/01eb2ad0ab0c5d7565e79cc2594a1ac2?postId=a759a570bd95" data-media-id="01eb2ad0ab0c5d7565e79cc2594a1ac2" allowfullscreen="" frameborder="0"></iframe>





I’ve created a file called _parse-mentionable-text.js_ that returns “OK”.

#### Red Light

Let me run the test to see if it fails.



![](https://cdn-images-1.medium.com/max/1600/1*PorfQkV4VOItPPADuhdohw.png)



Good. When the test fails, we can be sure that the functionality didn’t work when we started.

This is an important step. In a big code base, you can sometimes write a test for a piece of logic, but because of some side-effect, it will surprise you and actually pass when you expect it to fail. This means that you need to redesign your test. Remember — you have to start with a failing test.

#### Green Light

After our test has failed, we have to make this test pass with minimal code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2f92b59cf12112ee7c3b5f69ca132378?postId=a759a570bd95" data-media-id="2f92b59cf12112ee7c3b5f69ca132378" allowfullscreen="" frameborder="0"></iframe>





To check whether our implementation meets our requirements, we have to run the test again:



![](https://cdn-images-1.medium.com/max/1600/1*IbJn7LC0blnbQ4VYOehY1Q.png)



#### Refactor

Great! Everything works the way we want it to. Now it’s time to clean up the code and make it prettier and more readable:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/440a7d8be74d345018332e6a75dbab54?postId=a759a570bd95" data-media-id="440a7d8be74d345018332e6a75dbab54" allowfullscreen="" frameborder="0"></iframe>





The best part is after you’ve refactored your code, you can check and see whether the function still meets your requirements by running the test again.

Writing tests first will change the way you code. It will increase your confidence when shipping new code. It will lessen your fear of breaking things, and help you move faster.











* * *







_Do you want to learn more about Test Driven Development?_

_If you’re using ReactJS, I’ve also written a post about testing your React components, which you can view_ [_here_](https://medium.com/javascript-world/testing-your-react-components-with-enzyme-5f1c7f185b58#.nsfy9ymuk)_._

_I send out interesting articles about JavaScript & ReactJS every week._ [**_You can subscribe here to gain free JavaScript knowledge_**](http://bit.ly/1R9Qwd9d2)**_._**

_Oh, and click the 💚 below so other people will see this article here on Medium. Thanks for reading._



![](https://cdn-images-1.medium.com/max/1600/1*prif7-04oPf8Dqo1gvSDsQ.gif)










