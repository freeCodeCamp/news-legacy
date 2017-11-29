---
author: Vijayabharathi Balasubramanian
authorTwitter: none
authorFacebook: none
title: "Regular Expressions Demystified: RegEx isn’t as hard as it looks"
subTitle: "Are you one of those people who stays away from regular expressions because it looks like a foreign language? I was one. Not anymore...."
coverSrc: https://cdn-images-1.medium.com/max/1600/0*kKGQn6RZmO--M8ix.jpg
url: https://medium.freecodecamp.org/regular-expressions-demystified-regex-isnt-as-hard-as-it-looks-617b55cf787
id: regular-expressions-demystified-regex-isnt-as-hard-as-it-looks-617b55cf787
date: 2017-11-23T21:35:28.016Z
tags: [
	"Programming",
	"Tech",
	"Web Development",
	"Tutorial",
	"JavaScript"
]
---
# Regular Expressions Demystified: RegEx isn’t as hard as it looks







![](https://cdn-images-1.medium.com/max/1600/0*kKGQn6RZmO--M8ix.jpg)






Understand Regular Expressions with this practical guide. image source — [Unsplash](https://unsplash.com/photos/q99oeAG46BY)



Are you one of those people who stays away from regular expressions because it looks like a foreign language? I was one. Not anymore.

Think of all those sounds, traffic signs and smells that you can recognize. Regular expressions are no different. It’s like a sign language to analyze strings.

We are going to get our head around regular expressions today. At least, **regularly** used expressions.

Much like any programming language, a regular expression is a succinct language in its own right.

We will know how to put regular expressions to good use by the end of this article. We will solve simple problems and learn loads in the process.

Are you willing to invest 30 minutes and come out enlightened in RegEx? Settle down then.

#### Why regular expressions?

We each have our own ‘why’, don’t we? One may be to test if the string is a valid hex color code. You may be writing a processor library such as [Sass](https://github.com/search?l=&q=regexp+repo%3Asass%2Fsass&ref=advsearch&type=Code&utf8=%E2%9C%93) that leverages RegEx.

I’ll let the universe throw the **why** at you and help you cover the **how**.

### 0\. Get Your Playground Ready

#### References

Most of the time, I find this page adequate to get going: [Regular Expressions from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). In fact, that page is all you need. You can stop reading this post. Right now. Close this tab. 😉

Still with me? Thanks. You need a sandbox to play around in. Luckily, one is available on your browser. Just use the DevTools in your browser’s console.

#### Familiarize yourself with the syntax

To start with, we are going to use the `/expression/.test('string')` syntax.

An `expression` is any regular expression that we build. A `string` is the string under test. The `test` method returns `true` or `false` depending on the match.

Slashes mark the start and end of the expression. Treat them like the double quotes (“) and single quotes (‘) that you use to the mark start and end of a plain string.

The expression between `/` is a literal. **They are treated as literal characters.** Variable names wouldn’t be resolved down to their contents.

To make it dynamic, we’ll have to go via the constructor route, using `new RegEx(variable_name)` syntax. This will come to rescue towards the end of the post.

**Do it right now.** Just type this into your browser console.

    /a/.test("a"); //true/a/.test("b"); //false

If that works, you are ready. Don’t worry about what it is. That’s what we are going to breakdown into pieces in the following lines.

Let’s dive in…

### 1\. Start Small With Letters

Let’s start small. We need to find if a string has a particular character. Look for the character `a` in a string.

Here is the expression in all its glory:

    /a/.test("abc"); //true /a/.test("bcd"); //false /a/.test("cba"); //true

The expression does what we asked for, “Look for `a` in the string under test”. In our case, `abc` and `bca` do have the character `a`. But `bcd` does not have it.

#### Breakdown

Now, that’s a lot of slashes and backslashes. Let’s break them down.

We’ve seen that `/expression/` is how we build regular expressions. So no question about slash there. In fact, we can even **assign it to a variable** and make it look better.

**The same code:**

    let e=/a/; e.test("abc"); //true e.test("bcd"); //false e.test("cba"); //true

The expression between slashes is just a single character `a` in our case. We are looking only for that one character.

#### Reach Multi-Characters

Let’s scale the solution.

What if you want to find more than one character?

Put them in sequence. Treat them as a substring.

Here is an example:

    /ab/.test("abacus"); //true /bac/.test("abacus"); //true  /abc/.test("abacus"); //false /abas/.test("abacus"); //false

The string under test should contain the exact expression within slashes. We get a match if that condition is met.

`bac` is within `abacus`but `abas` is not in `abacus` as it is. Even though we have those characters scrambled, we do not get an exact match.

#### Review Ground Covered

Symbol `/.../` . Slash (/) marks the start and end of the regular expression. Ignore the dots, that’s where we place the pattern. The `/a/` character between slashes is a pattern matched on string under test. The `/abc/` characters between slashes are looked up as a sub-string during the pattern matching test on string under test.

### 2\. Patterns in Numbers

Let’s spice it up a bit. Let’s say you want to find out if a string is full of numeric characters.

Here it is:

    let e=/0|1|2|3|4|5|6|7|8|9/;e.test("42"); //true e.test("The answer is 42"); //true

First of all, the pattern looks pretty long. But the same long streak of characters **can be expressed in just two characters**. I reserved it towards end of this section for a dramatic closure.

The second case shouldn’t be true. We’ll deal with it a bit later.

For now, the pipe symbol (`|`) means **or**. Outside of regular expressions, we’ve used it as a bitwise **or** and conditional **or** with double pipes (||). That’s the same guy.

I could call that easy and call it a day. But you would scream for something better, right? We are developers. We spend the best part of our day thinking about better Bash and Git aliases to save few keystrokes.

Should I type in nine pipe symbols? Nah.

Here we go again:

    e=/[0123456789]/; e.test("42"); //true e.test("The answer is 42"); //still true

This is better. 9 pipes were replaced with 2 square brackets. 7 characters were saved. That’s 77.7% less keystrokes.

By the way, anything within square brackets is considered as `Either this` or `that`. It is a character set. In our case, the string should contain either `0`, or `1`, or `2`, or…bear with me, I promised myself to write 1000 words a day, or `3` or `4` or `5`. All right, let’s stop. You get it.

What are you saying? It still looks quite lengthy? Not satisfied?

Okay, here we go once again:

    e=/[0-9]/; e.test(42); //true e.test("42"); //true e.test("The answer is 42"); //true!

How about that? Looks much cleaner, doesn’t it? Anything within square brackets `[]` means **or**. `0-9` marks a range, meaning zero to nine.

So the test looks for characters from zero to nine in the test string.

As you can see, the test takes numbers too.

#### The prefix and suffix patterns

Let’s now address that failing second case. `The answer is 42` matches our test because our pattern looks for numeric characters somewhere **within** the string. **Not start to end**.

Let’s bring in `^` and ``. Some of the browsers automatically validate it without any extra scripting on the front end.

Validate it once again on the server by actually sending a confirmation email.

Haven’t you seen one such lately? Just try to subscribe to this [pineboat](https://www.pineboat.in/). You’ll get an actual email asking you to confirm that it is yours. That confirmation is a solid proof that your email is valid.

That was smooth sailing, wasn’t it?

#### RegEx for Email

Now that we added the disclaimer, you’d actually want to see a pattern right? No, search for regular expression for an email address. One such result from [perl module](http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html) goes for more than a page.

So, I am not even going to attempt it. Such long regular expressions are generated by computers through pattern builders. Not for mere mortals like us.

### 6\. Match a Strong Password

If you are a coffee person, this is the right time to get a strong one. Because we are at last section of this post, but the longest one so far.

It introduces very few new operators and patterns. But it reuses many patterns. As usual, we reserve the shortest optimized one for last.

The ASCII range is the best part of this post. Because, I learned it while researching for this post.

Now, the problem. Remember that registration form that took several attempts before you could meet their strong password requirements? Weak, good, strong, and very strong? Yeah, we are going to build that validation.

The password should:

*   have a minimum of 4 characters
*   contain lowercase
*   contain uppercase
*   contain a number
*   contain a symbol

This is a tricky one. Once you start consuming letters, you can’t come back to check if they meet any other condition.There in lies our clue. **We can’t look back, but we can look ahead!**

#### Length of the string

Let’s first test if the string password is 4 characters long. Pretty simple. Use `.length` on the password string. Done, right? No, who needs a simple solution? Let’s spice it up.

    //expression with just lookahead//wouldn't consume any charactere1=/^(?=.{4,})$/; e1.test("abc") //falsee1.test("abcd") //false  

    //after lookahead, //pattern to consume character is needed.e2=/^(?=.{4,}).*$/; e2.test("abc") //false e2.test("abcd") //true

*   You may remember `(?=)` from our previous work on [“no duplicates”](https://www.pineboat.in/post/regular-expressions-your-ally/#extension-2-no-duplicates) That’s a look ahead use  
    It does not consume any character
*   The dot (`.`) is an interesting character  
    It means, **any character**.
*   `{4,}`   
    Stands for at least 4 preceding characters with no maximum limit
*   `\d{4}`   
    Would look for exactly 4 numerals
*   `\w{4,20}`   
    Would look for 4 to 20 alpha-numeric characters

Let’s translate `/^(?=.{4,})$/`. “Start from the beginning of the string. Look ahead for at least 4 characters. Don’t remember the match. Come back to the beginning and check if the string ends there.”

Doesn’t sound right. Does it? At least the last bit.

Which is why we brought in the variation `/^(?=.{4,}).*$/`. An extra dot and a star. It reads like this, “Start from the beginning. Look ahead for 4 characters. Don’t remember the match. Come back to the beginning. Consume all the characters using `.*` and see if you reach the end of the string.”

This makes sense now. Doesn’t it?

Which is why `abc` fails and `abcd` passes the pattern.

#### At least One Number

This is going to be easy.

    e=/^(?=.*\d+).*$/ e.test(""); //false e.test("a"); //false e.test("8"); //true e.test("a8b"); //true e.test("ab890"); //true

Start from the beginning of the string `/^`. Look ahead for 0 or more characters `?=.*`. Check if 1 or more numbers follow `\d+`. Once it matches, come back to the beginning (because we were in look ahead). Consume all the characters in the string until end of the string `.*$/`.

#### At Least One Lowercase Letter

This one follows the same patter as above.

    e=/^(?=.*[a-z]+).*$/; e.test(""); //false e.test("A"); //false e.test("a"); //true

Translation? Sure. “Start from the… okay.” Instead of `\d+`, we have `[a-z]+` which is a character set of letters from `a` to `z`.

#### At least One Uppercase Letter

Let’s not overkill. `[A-Z]` instead of `[a-z]` from the previous section will do.

#### At least One Symbol

This is going to be challenging. One way to match symbols is to place a list of symbols in a character set. `/^(?=.*[-+=_)(\*&\^%\$#@!~”’:;|\}]{[/?.>,<]+).*$/.test(“$”)` That’s all the symbols in a character set. Properly escaped where necessary. It’ll take months for me to write it in plain English.

So to save all of us from eternal pain, here is a simple one:

    //considers space as symbol let e1; e1=/^(?=.*[^a-zA-Z0-9])[ -~]+$/ e1.test("_"); //true e1.test(" "); //true  

    //does not take space let e2; e2=/^(?=.*[^a-zA-Z0-9])[!-~]+$/ e2.test(" "); //false e2.test("_"); //true  

    //the underscore exception let e3; e3=/^(?=.*[\W])[!-~]+$/ e3.test("_"); //false

Wait, what’s that `^` coming again from the middle of no where? If you have reached this far, this is where you realize that unassuming innocent `^` that marks start of a string is a double agent. Which means, the end is not too far. He has been exposed.

Within a character set, `^` negates the character set. That is, `[^a-z]` means, any character other than `a` to `z`.

`[^a-zA-Z0-9]` then stands for any character other than lower case alphabets, upper case alphabets, and numerals.

We could have used `\W` instead of the long character set. But `\W` stands for all alpha-numeric characters **including underscore _.** As you can see in the third set of examples above, that will not accept underscore as a valid symbol.

#### CharSet Range

The curious case of `[!-~]`. They stand next to each other in the keyboard, but their ASCII values are diagonally opposite.

Remember a-z? A-Z? 0–9? These are not constants. They are actually based on the ASCII range of their values.

The [ASCII table](http://www.asciitable.com/) has 125 characters. zero (0) to 31 are not relevant to us. Space starts from 32 going all the way up to 126 which is tilda(~). The exclamation mark is 33.

So `[!-~]` covers all the symbols, letters and numbers we need. The seed for this idea came from [another solution](https://stackoverflow.com/questions/8359566/regex-to-match-symbols) to the symbol problem.

#### Assemble the Troops

Bringing it all together, we get this nice looking piece of regular expression `/^(?=.{5,})(?=.*[a-z]+)(?=.*\d+)(?=.*[A-Z]+)(?=.*[^\w])[ -~]+$/`.

That’s starting to haunt and intimidate us. Though we’ve been studying them individually.

This is where the syntax for dynamically building expression object comes in handy. We are going to build each piece separately and assemble them later.

    //start with prefix let p = "^"; 

    //look ahead  // min 4 chars p += "(?=.{4,})"; // lower case p += "(?=.*[a-z]+)"; // upper case p += "(?=.*[A-Z]+)"; // numbers p += "(?=.*\\d+)"; // symbols p += "(?=.*[^ a-zA-Z0-9]+)"; //end of lookaheads  

    //final consumption p += "[ -~]+";  //suffix p += "$"; 

    //Construct RegEx let e = new RegEx(p); // tests e.test("aB0#"); //true  e.test(""); //false e.test("aB0"); //false e.test("ab0#"); //false e.test("AB0#"); //false e.test("aB00"); //false e.test("aB!!"); //false  

    // space is in our control e.test("aB 0"); //false e.test("aB 0!"); //true

If your eyes are not tired yet, you’d have noticed two strange syntax in the above code.

*   One, we didn’t use `/^`, instead we used just `^`. We didn’t use `$/` to end the expression either, instead just `






