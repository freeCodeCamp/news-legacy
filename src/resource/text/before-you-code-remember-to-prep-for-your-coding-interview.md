---
author: Andy Tiffany
authorTwitter: https://twitter.com/firststepcoding
authorFacebook: https://facebook.com/10104515363881438
title: "When it comes to whiteboard coding interviews, remember to PREP"
subTitle: "PREP is a mnemonic I created to help you remember the steps involved in solving whiteboard coding problems. It stands for Parameters, Ret..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vLadxMniF0KW0HWeGkipJw.jpeg
url: https://medium.freecodecamp.org/before-you-code-remember-to-prep-for-your-coding-interview-2ccfb58147db
id: before-you-code-remember-to-prep-for-your-coding-interview-2ccfb58147db
date: 2016-12-21T19:33:05.845Z
tags: [
  "JavaScript",
  "Coding Bootcamps",
  "Learning To Code",
  "Programming",
  "Web Development"
]
---
# When it comes to whiteboard coding interviews, remember to PREP







![](https://cdn-images-1.medium.com/max/2000/1*vLadxMniF0KW0HWeGkipJw.jpeg)







PREP is a mnemonic I created to help you remember the steps involved in solving whiteboard coding problems. It stands for **P**arameters, **R**eturn, **E**xample, **P**seudocode.



![](https://cdn-images-1.medium.com/max/1600/1*vbQ8FGNAlEC4jnxg8Z7Ceg.png)



The mnemonic is new, but the underlying technique is battle tested. This is essentially a beginner-friendly version of [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) that lends itself well to coding challenges.

Let’s get right to it and learn PREP through an example problem. We’ll use JavaScript, but this technique works for just about any programming language.

### Your interviewer asks you to w**rite a function that accepts a sentence and returns the longest word. What do you do?**

#### “P” is for Parameters

Most problems involve writing a function. In this step you need to determine what parameters your function should accept. Then you need to give them meaningful names.

Keywords like “takes in” or “accepts” in the problem statement will guide you here. If it’s unclear, you can also ask the interviewer for clarification. In your case, the statement “accepts a sentence” tells you that the function should accept a single string parameter.

So you’ve determined the _type_ of your parameter. But what should you name it? It might sound simple, but good naming is a crucial programming skill, and it takes practice.

You could call yours “sentenceString,” but calling it “sentence” is more concise and still makes it clear we’re dealing with a string.

Since this is your first step, you also need to think of a meaningful name for your function itself. In your case, “longestWord”is both concise and descriptive. Now that you’ve decided this, you can write the shell for your function like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c258bb4cd67b954b6b19323ddae3b5f4?postId=2ccfb58147db" data-media-id="c258bb4cd67b954b6b19323ddae3b5f4" allowfullscreen="" frameborder="0"></iframe>





#### “R” is for Return

What does this function _return_? Is it a number? A boolean? A string?

Remember: the value a function returns is not the same as what it might display in a print/log statement.

Once again, you can look at the problem statement for clarification. “Returns the longest word” tells you that you’re returning a _word,_ and you know that words are strings. Let’s make this crystal clear by creating a variable to represent this return value and rigging up your function to return it. Even though you aren’t returning the correct answer yet, you’re set up to return the correct type. You have created a placeholder that will make the next steps easier.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/58081db23b460a339e4ecdfa48bca5a0?postId=2ccfb58147db" data-media-id="58081db23b460a339e4ecdfa48bca5a0" allowfullscreen="" frameborder="0"></iframe>





#### “E” is for Example

Even for expert developers, static code is harder to understand than running code. You want to make your code runnable and “alive” as soon as possible. You can breathe life into your function with an example test invocation.

You know that if your function accepts the sentence, “I saw a hippopotamus,” it _should_ return the string “hippopotamus” once it’s properly working. But for now, you just want to see your placeholder value from the last step to confirm your code is runnable and setup correctly.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/7b64d4f80041c044a7653dd41d077e46?postId=2ccfb58147db" data-media-id="7b64d4f80041c044a7653dd41d077e46" allowfullscreen="" frameborder="0"></iframe>





#### The last “P” is for Pseudocode

While it’s tempting to just dive in and start coding now, it would be too easy to get caught up in a detail that could distract you from the bigger picture. You need to devise a strategy first, and _pseudocoding_ is just the tactic for this.

Pseudocode is a series of precise statements written in spoken language comments that describe what you need to do.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2ab3df7be5d12f9ca1669e74f5a4da3a?postId=2ccfb58147db" data-media-id="2ab3df7be5d12f9ca1669e74f5a4da3a" allowfullscreen="" frameborder="0"></iframe>





### You’ve finished PREP. Now you can code!

The four steps in PREP helped you clearly frame the problem and think about how to solve it. In truth, accurate framing is half the battle. Most interviewers will already be impressed to see your methodical approach. At this point, your goal is to just write code that will make your examples and tests pass. You’ll do this by encoding each of your pseudocode steps.

You know you’ve got a working solution when you can run your code and see the correct output.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/e1242b9cfd4ac83f3f1cea583201ce9a?postId=2ccfb58147db" data-media-id="e1242b9cfd4ac83f3f1cea583201ce9a" allowfullscreen="" frameborder="0"></iframe>





You’ve made it through the hardest part now. You can breathe a sigh of relief that you’ve at least gotten to a working solution. At this point, there are just two more questions to think about:

*   Are there any edge cases that would break the code? For example, do you need to take into account sentences that have a period at the end of them? You’ll write more test cases for these edge cases, then fix the code if necessary.
*   Can you make the code cleaner or more efficient now? You should discuss ideas with the interviewer so that they know your thoughts before risking breaking the solution.

That’s it! This process might seem overly mechanical at first, but trust me, it will become second nature — much like the steps in learning to drive. Even after programming for more than 12 years, this is still roughly the sequence I follow when I’m problem solving. I’d more likely use a formal testing framework instead of log statements like we did here, but the steps are the same either way.

Now you try it! Here are a few beginner-level problems you can practice with, in roughly ascending order of difficulty:

1.  Suppose you have an array of string like [ “adios”, “bye”, “ciao” ]. Your task is to write a function called total_characters that accepts such an array as a parameter and returns the summed number of characters across all the strings in the array.
2.  Write a function to flip a coin n times that returns the numbers of times a “heads” was flipped.
3.  _(From_ [_Free Code Camp_](https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range)_)_ We’ll pass you an array of two numbers. Return the sum of those two numbers, and all numbers between them. The lowest number will _not_ always come first. Try using PREP to set this up yourself first, but then feel free to confirm your setup and finish solving it [here](https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range).

PREP has already helped several [First Step Coding](https://firststepcoding.com) learners ace their coding interviews, and I hope it can help you too. Happy coding!

_If you liked this, click the 💚 below so other people will see this here on Medium._








