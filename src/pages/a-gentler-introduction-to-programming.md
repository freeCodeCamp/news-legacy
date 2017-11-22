---
author: Nestedman
authorTwitter: https://twitter.com/nestedmann
authorFacebook: https://facebook.com/10209468471929691
title: "A Gentler Introduction to Programming"
subTitle: "This write-up captures what I teach when I get coaching requests. I won’t jump into the code or a setup of any sort. I will teach concept..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*94q4HJ10s6rtvhLcQQuMRw.png
url: https://medium.freecodecamp.org/a-gentler-introduction-to-programming-1f57383a1b2c
id: a-gentler-introduction-to-programming-1f57383a1b2c
date: 2017-10-12T22:29:53.743Z
tags: [
  "Programming",
  "Self Improvement",
  "Technology",
  "Tech",
  "Life Lessons"
]
---
# A Gentler Introduction to Programming







![](https://cdn-images-1.medium.com/max/2000/1*94q4HJ10s6rtvhLcQQuMRw.png)

Illustration by [John Adesanya](https://www.facebook.com/adesanya.john.52)







This write-up captures what I teach when I get coaching requests. I won’t jump into the code or a setup of any sort. I will teach concepts.

If you work in a software development company as a non-programmer, you may wonder what the programmers do. And you hear new buzzwords everyday. This post was written with you in mind. Whether you are a sales person, a medical doctor, attorney, a business lead, or an accountant, if you’ve ever had it in mind to learn how to code, this is a good place to start.

### How this article is organized

This write-up is divided into 4 parts. After reading through each part, you will find a quiz section to help you better recall what you’ve read. Then you’ll find a “going forward” section and answers to the quiz.

Note that each buzzword introduced in this series is in **bold** , such as **algorithm**.



![](https://cdn-images-1.medium.com/max/1600/1*2ZcT0N7-WfVuFmhEnGvChA.png)

_Illustration by_ [_John Adesanya_](https://www.facebook.com/adesanya.john.52)



### Part 1 — What is Programming?

A simple answer would be, “Programming is the act of instructing computers to carry out tasks.” It is often referred to as **coding**.

So then, what is a **computer program**? A computer program is a sequence of instructions that the computer executes.

Computer in the definition above is any device that is capable of processing code. This could be smartphones, ATMs, the Raspberry Pi, Servers to name a few.

#### A Good Analogy for Programming

First, there are patterns to our every day lives. The universe operates in a somewhat predictable way; For example — day and night, seasons, sunrise and sunset. People go through routines such as rising in the morning, going to school or to work. We get instructions from other people such as our superiors at work. How we cook certain recipes can be explained in finite steps.

Second, every time we use smart devices, some code is running in the background. Moving a mouse pointer from one part of your computer screen to the other may seem like a simple task, but in reality, so many lines of code just ran. An act as simple as typing letters into Google Docs leads to lines of code being executed in the background. It’s all code everywhere.

> Computer programs are also referred to as **code**. **Do not use the word ‘codes’** (code should be used as an uncountable noun). Okay, this is not an English class, let’s get back to business.

#### The Natural Language of the Computer

Machines have their natural language like humans do. Computers do not understand the human language. The natural language of computers is the binary code — 1 and 0\. These represent two states: **on (1)** and **off (0)**.

That is the natural language of electronic equipment. It would be hectic for us as humans to communicate with the computer in binary.

#### Enter Programming Languages

To communicate with machines who speak binary, we do so in a language that’s closer to our own natural language. Such as English, French, Swahili or Arabic. Programming languages are close to our natural languages. But they are more structured and must be thoroughly learned.

They could be high level or low level languages. High level programming languages are farther away from the machine language than low level languages. This “farther away” is usually called an **abstraction** , but we will not go into that in this series. Let’s not get distracted :)

The computer needs a way to understand our human language. To do this, we’ll need a translator.

#### What are Translators

Source code refers to code written in a particular programming language. More of this in Part 2.

Translators have the responsibility of converting your source code to the machine language. This is also known as **binary**. Remember ones and zeros. We may refer to the binaries as **Object Code** , the Program or a common word today: **App**.



![](https://cdn-images-1.medium.com/max/1600/1*p9WzPeMBmWNvqD7UfrBgDA.png)



Translators can be any of:

*   Interpreters
*   Compilers
*   A hybrid of Interpreters and Compilers
*   Assemblers

#### Interpreters

Some languages are interpreted. The translator processes the source code line by line and runs every line in the final program or app. This means that interpreted source code starts running until it encounters an error. Then the interpreter stops to report such errors. More of this in detail in Part 3.

Python is a good example of an interpreted programming language.

#### Compilers

Compilers function differently. They convert the source code in its entirety via a compilation process to binary. The binary is then executed. If there were errors in the source code, they are detected during the compilation time and flagged. This interrupts the compilation process, and no binary is generated.

Interpreters translate line by line and execute the line before going on to the next line. Compilers translate all lines of a program to a file (binary) and execute the whole file.

Remember the definition of computer program? It’s a sequence of instructions that is executed by a computer.

An executing program is usually called a process. Such programs use certain resources on the computer system or smartphone such as memory, disk space and the file system. An executing program can also be said to be **running**.

We use the word ‘run’ when we execute a computer program. The time it takes to run such programs is known as the **run-time** of the program.

It is common to see programs referred to as Apps. We also associate programs with the platforms or environment in which they run, or are designed for. There are web apps, which run on web browsers, such as Google Spreadsheet. There are mobile apps, which run on smartphones such as CandyCrush. There are also desktop apps such as the Evernote desktop app.

Again, interpreted source code is executed directly from the source file. Compiled source code is converted to a binary file. The binary file is then executed. Compiled source code may fail during run-time even after successfully compiling. See Part 3.

#### Hybrid Translators

A hybrid translator is a combination of the Interpreter and Compiler. A popular hybrid programming language is **Java**. Java first compiles your source code to an intermediate format known as the **Bytecode**.

The Bytecode is then interpreted and executed by a runtime engine also known as a Virtual machine. This enables the hybrid translators to run the bytecode on various operating systems.

#### Assemblers

There’s the Assembler as well for translating low-level Assembly language to binary.

For this series, we will only focus on the High level languages.

A good way to look at Translators is to see them as a program in themselves. You need to download or get them, install them on your computer system and understand their basic workings.

#### An Often Asked Question

Here’s a question beginners usually ask.

> What language do I learn first?

There are hundreds of programming languages. They are ranked by popularity, community, long term support, pedagogy, business use. They can also be ranked by technicality, such as whether they are functional, imperative, static, strong, or loosely typed.

Some languages are more pedagogical than others. Some languages are for educational purposes and not for business use. There are languages written, for example, for kids to learn how to code.

There are very powerful languages that are easy to setup and learn. **Python** is one such programming language. I usually recommend it to beginners.



![](https://cdn-images-1.medium.com/max/1600/1*4F2RxXUOLynVVFqDCc9JvQ.png)



If you are interested in exploring more on your options for “first language,” [here’s](https://cacm.acm.org/blogs/blog-cacm/176450-python-is-now-the-most-popular-introductory-teaching-language-at-top-u-s-universities/fulltext)some good research by Philip Guo.

When you want to learn a new language, you know now that you would need that **language translator**. This is a program you install and setup on your computer system.

I recommend that you start learning how to use a **CLI** (Command Line Interface). The CLI is the terminal or shell. Think of the terminal as an alternative to a GUI (Graphical User Interface).

In GUIs, you interact with the computer through the mouse pointer. You also depend on visual renditions of directories, and about everything you do.

But, when using a CLI you interact with the computer using commands which you type at the prompt or a **blinking** cursor

    $_

In Windows, the shipped-in terminal is the command prompt. For Mac and Linux users, you already have a default Bash terminal. To get the same experience on Windows, install [Git Bash](https://git-scm.com/) OR [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/powershell-scripting?view=powershell-5.1).

#### Going Forward

Now that you’ve been mildly introduced to what programming is. You need to prepare yourself for your first line of code :)

To get started you will need the following:

*   A computer system  
    At this point, you do not need a sophisticated or very expensive one, you only need a computer that works well.
*   Install the CLI  
    I recommend [this crash course](https://learnpythonthehardway.org/book/appendixa.html) to get you started on how to use the CLI.
*   Install a text editor  
    We will come back to this in Part 2
*   Learn a programming language  
    In this series you will learn the basic elements that make up the fundamental knowledge of most programming languages.

#### Quiz

*   What basic tools do you need to start programming?
*   What command would you use for the following in bash (CLI)?
*   Check your current directory
*   Change to a directory named ‘bin’ (bin is in your current directory)
*   make a new directory called ‘lib’
*   create a new file called ‘book.py’
*   list all the contents the current directory

#### Summary

We have gone through the basics of programming, with an introduction to Translators. The word “source code” is no longer strange to you. We will examine what a source code is in detail in the next part.

#### Answers to the Quiz

What basic tools do you need to start programming?  
A computer, a text editor, the shell(terminal), and a compiler/interpreter

What command would you use for the following in bash(CLI)?

*   Check your current directory: `pwd`
*   Change to a directory named ‘bin’ : `cd bin`
*   make a new directory called ‘lib’: `mkdir lib`
*   create a new file called ‘book.py’: `touch book.py`
*   list all the contents the current directory: `ls`



![](https://cdn-images-1.medium.com/max/1600/1*-GTHOt-YTvwwP67dGsi3Pg.jpeg)

_From Wikimedia Commons, the free media repository_



### Part 2 — Source Code

Now that you understand the concept of programming, we will examine source code.

A source code is basically a file, just like a Microsoft (.doc) file, but slightly different. It is a raw text file, written on very simple editors, like the Windows Notepad. You will recall from the previous section that you need either interpreters or compilers to convert your source code to binary. The source code must be saved in a file, which is passed as an input to the translator.

Depending on the language you are writing, there are designated extensions for saving your source code file. Python’s extension is ‘.py’. Java is ‘.java’. Php is ‘.php’ and PERL is ‘.pl’ to name a few.

When you are done writing your source code, you must run it through the translator. As an example, here’s how to run your Python source code using the `python`command.

#### Getting Started: Your First Program

*   Follow the instructions [here](https://realpython.com/learn/python-first-steps/) to setup Python on your computer system.
*   Install a simple editor to type in your source code. You can use [sublime](https://www.sublimetext.com/3) text editor for a start.
*   Open a new file on your editor, and type in the following:

    print ‘Hello Python!’

*   Remember to save the file as main.py
*   Find the path to the file on your CLI, and type the command below:

    $ python main.py

The result should look like this:



![](https://cdn-images-1.medium.com/max/1600/1*auPeDR1JGbDYXu51xQGfqg.png)



#### The Anatomy of a Typical Source Code

We will now examine the content of a typical source code file. Below are the regular components:

#### Keywords

Short, human readable words, usually known as **keywords**. They are peculiar to the language you are learning, and they are special. We’ll come back to this in a jiffy. You need to learn some of the keywords by heart. Here’s the set of [keywords](https://www.programiz.com/python-programming/keyword-list) recognized and used in Python.



![](https://cdn-images-1.medium.com/max/1600/1*gsTafzc-lQ261udNR81msA.jpeg)



[_https://www.programiz.com/python-programming/keyword-list_](https://www.programiz.com/python-programming/keyword-list)

#### Identifiers

Words invented by You — Yes You, the programmer. These words are generally referred to as **Identifiers**. They could be created by you or other programmers. They are packaged in form of plugins, better known as **Libraries**.

An example of a library is the Math library. It lets you access functions like the square root (Math.sqrt), used in Javascript.

Many programming languages ship with loads of libraries. These are generally referred to as their **SDK** s (Software Development Kits). You will download them together with the compiler to start building technologies, apps and projects. Besides these, there are **frameworks** , designed to help with building on a particular platform such as web or mobile.

Some identifiers are bundled with a language you’re using and may not be used as a user-named identifier. An example is the word **string** in java. Such identifiers, together with keywords are known as **Reserved Words**. They are not keywords, but like keywords, they are also special.

All keywords are reserved words, the inverse is not true.

The words you choose should be meaningful to whoever sees them at first glance.

A common use of identifiers is in naming **variables** , we will look into this in a bit.

#### Basic Data Types

You will also find data of different types in a source code, **numbers** (3, 5.7, -100, 3.142) and **characters** (M, A). In some programming languages, numbers are further broken down into their own types such as **integers**.

Integers can be **Signed** or **Unsigned** , **big** integers, and **small** integers. Big or small actually depends on the amount of memory space reserved for such numbers. There are numbers with decimal parts, usually called **double** and **float** , depending on the language you are learning.

We also have boolean data types which evaluate to true or false.

#### Complex Data Types

The data types explained above are known as the elementary, primary or basic data types. We can build more complex data types from these basic data types.

An **Array** is the simplest form of the complex data type. A **String** is an Array of **characters**. We cannot do without these complex data types and often use them when writing our source code.

A combination of characters is a string. To use an analogy, a string is to a computer what a word is to a human being. The word ‘Thermometer’ is made up of 11 characters — we simply call it a string of characters. String processing is a broad topic in itself to learn, and must be studied by every aspiring programmer.

Complex data types are shipped with most programming languages you use. There are others that we build ourselves as programmers, such as the Class systems. These are also known as ( **OOP** ) Object Oriented Programming.

#### Variables

Variables are simply named memory locations. We sometimes want to keep data in our source code in a place where we can recall the data, to use again. This is usually a memory location which our compiler/interpreter reserves for us. We need to name these memory locations to recall them later. Consider the Python code snippet below:

    pet_name = 'Hippo'print pet_name

`pet_name` is an example of a variable. Because the type of data stored in `pet_name` is a string. It is known as a string variable. There are numeric variables as well. Variables are categorized by their data types.

#### Constants

Constants are values that do not change throughout the lifetime of the program. We use capital letters to enforce that some values are to be constant values. Some languages provide a way to create constant values, while others do not.

Some languages provide the luxury of declaring types that variables should be. We often call these **strongly typed** languages. Java is a good example.

Others do not provide these features. They are **loosely typed** or **dynamic programming languages** . Python is a good example.

Here’s how to declare constant values in JavaScript.

    const petName = 'Hippo'

#### Literals

In every source code, there are data types you use everywhere around your code that will only change if you edit them yourself. We call these literals, which are not to be confused with variables or constants. Literals can be seen once you glance through the source code. They could be strings, numbers, decimals, or other data types.

In the source code snippet above, the word ‘Hippo’ is a literal — a string literal. It will always be ‘Hippo’ until you edit the source code. As you learn to code, you will learn how to manage literals in your source code in a way that is easy to maintain without changing much of your source code.

#### Punctuations/Symbols

In most source code, you will generally find different punctuation marks depending on the programming language. Java has more punctuation marks, for example than Python.

Common punctuation marks include the comma (`,`), semi-colon(`;`), colon(`:`), braces (`{}`), Brackets (`()`), square braces (`[]`), quotation marks (`“ ”`), pipe (`|`), slash (`\`), period (`.`), question mark (`?`), caret(`^`) and percentage (`%`).

Welcome to the world of coding, where punctuation marks are your best friends. You will find yourself typing them a lot.

#### Operators

The chances that you will write code to perform an operation is very high. In the slightest way, you will perform an assignment operation in your source code. We are presented with a large number of operators by the programming languages we use. Examples include addition(`+`), division(`/`) multiplication(`*`), subtraction(`-`) and greater than(`>`).

Operators can generally be classified as follows:

*   Assignment Operators  
    This is sometimes misconstrued as equal-to. Equal to is used to compare two values. Assignment Operator puts a value in a variable, such as `pet_name = 'Hippo'`
*   Arithmetic Operators  
    Comprises operators for carrying out arithmetic tasks such as addition, and subtraction. Some languages provide some arithmetic operators which others may not have. For example the modulus operator (`%`) returns the remainder value in division operations.
*   Relational Operators  
    are used for comparing values. They include greater than, less than, equal-to, not-equal-to. Their representation varies as well depending on what programming language you are learning. `<>` is not equal-to in some languages, while in others, it’s `!=` or `!==.`
*   Logical Operators  
    are used to compute logical operations. The commonly used logical operators are and , or , not. Some languages represent these operators with symbols such as `&&` for and , `||` for or , and `!` for not. Logical Operation values usually evaluate to Boolean values`true` or `false`.

#### Comments

Documentation will be an important aspect of your coding activities. It is how you explain your code to other programmers. This is done via comments that are occasionally added to parts of your code. Through comments, you can guide other programmers through what kind of data your code works with and the kind of output that it generates.

Usually, the compiler ignores lines of code that are comments.

Comments vary across languages. The `#`is used to introduce comments in Python.

Here’s an example of a comment in Python.

    # program snippet to compute fibonacci of N numbers

In Java, C and C++ , there are comments for a single line just like the `#` in Python, but the `//` symbol is used instead. There are multi-line comments as well `/*` … `*/`. You can read more about comments in the language that you have chosen to learn.

#### Whitespace and Tabs

These are spaces created between the code you are writing. This is done when you hit the space-bar or the tab key on your keyboard.

#### Going Forward

Ensure you correctly setup the Python on your computer system, and run your first program.

#### Quiz

Here’s a simple quiz for you.   
Identify the different elements we have studied so far in the Java source code snippet below:

    // a recursive implementation of Factorialimport java.util.Scanner;class RecursiveFactorial {  public static void main(String[] args) {    Scanner input=new Scanner(System.in);    System.out.print("Find the Factorial of: ");    int num=input.nextInt();    System.out.println("Factorial of "+num+" = "+fact(num));  }

     static long fact(int n) {  if(n<2) return 1;  return n*fact(n-1); }}

#### Summary

You have been introduced to what a source code is, and have examined the content of a typical source code.

Compiled or translated, your code might possibly fail to run due to a number of reasons. These reasons are commonly related to errors in your source code. These errors are known as bugs.

The act of finding and removing these bugs is called debugging and is a skill you must learn as a programmer. We will look into what bugs are in the next part.

#### Answers to the Quiz

Identify the different elements we have studied so far in the Java source code snippet below:

Keywords:  
import, class, public, static, void, new, int, long, if, return

Identifiers:  
java, util, Scanner, RecursiveFactorial, main, String, args, input, System, in, out, print, println, num, nextInt, fact, n

Literals:  
String Literals — “Factorial of ” = “Find the Factorial of: ”  
Integer Literals — 2, 1

Operators:  
Assignment Operator `=`  
Concatenator `+` (for joining strings together)  
less than `<`  
multiply `*`  
subtract `-`

Punctuation and Symbols  
`{ } [] ( ) ; .`

Comment  
`//`a recursive implementation of Factorial



![](https://cdn-images-1.medium.com/max/1600/1*SrWHr1ZLi7TdwhHH-8c-ng.png)



### Part 3 — Debugging

Once you start trying out code snippets or you are trying to solve actual problems with code, you will soon realize that there will be moments when your program breaks, is interrupted and stops running.

This is often caused by errors, known as **bugs** or **exceptions** in run-time. The act of finding and removing bugs from our code is **debugging**. You get better at debugging code as you try doing it more. We do not only debug our own code, we can also debug code written by other programmers.

To get started, we need to identify the common bugs likely to surface in our source code.

#### Syntactic Errors

These errors will not allow your source code to compile in compiled programming languages. They are detected at compile-time or during the interpretation of your source code. They can also be detected easily by linters. We will learn a little more about **linters** later.

They are mostly caused when you break the expected form or structure of the language you are coding in. An example is missing a closing bracket in an equation.

#### Semantic Errors

Semantic errors also known as logical errors are the most troublesome of all errors. They cannot be easily detected. A sign that there’s a semantic error is when the program runs successfully but does not produce the desired output.

Consider this example:

    3 + 5 * 6

By [order of precedence](https://en.wikipedia.org/wiki/Order_of_operations), popularly called BODMAS, in Mathematics, we expect the multiplication part to be evaluated first, and then final result will be 33\. If the programmer wanted the addition to evaluate first instead, this will give a different output than the desired output. Errors such as this are semantic errors, having more to do with meaning than structure (syntax).

Parenthesis around `3 + 5` will give the desired output of 48 instead.

    (3 + 5) * 6

#### Run-time Errors

Like semantic errors, run-time errors are never detected at compile time. Unlike semantic errors, run-time errors interrupt the program and prevents it from executing further. They are usually caused by unexpected result of some computation within the source code.

Here’s a good example:

    input = 25x = 0.8/(Math.sqrt(input) - 5)

The code snippet above will compile successfully, but an input of `25` will result in `ZeroDivisionError.` This is a run-time error. Another popular example is the `StackOverflowError` or `IndexOutofBoundError`_._ What is really important is that you identify these errors and learn how to deal with them.

There are errors caused by how your source code makes use of memory and space on the platform or environment in which it is run. They are also run-time errors. Such errors as `OutOfMemoryError`and `HeapError` are usually caused by how much your source code use up resources. A good knowledge of **algorithms** will help you write code that better makes use of resources.

The process of rewriting your code for better performance is called **optimization** , and a not-so-related word is **refactoring**. As you spend more time coding, you should have these in mind as well.

#### Debugging

Here are a few tips on how to go about debugging your code:

*   **Use Linters**  
    Linters are tools that help **read through your source code** to check if they conform the expected standard in the language you are coding in. There are linters for many programming languages. Be sure to get one for the language you are learning.
*   **IDEs over simple editors**  
    You could opt for an **IDE** designed for the language you are learning. IDE stands for Integrated Development Environment. They are software built for writing, debugging, compiling and running code. They usually come with powerful debugging kits, for watching or stepping through your code.   
    Jetbrains make great IDEs such as the Webstorm, and IntelliJ. There’s NetBeans, Komodo, Qt editor, Android Studio, XCode (shipped with Mac) to name a few.
*   **Reading your code aloud**  
    This is usually useful when you are looking for a semantic error. While reading your code aloud, there is a high chance you will read out the error as well. That might jump at you as what was probably wrong.
*   **Read error logs**  
    When the compiler flags an error, be sure to look at the line number or the part of your code flagged.

#### Going Forward

As a beginner, you will be learning to code from books, online tutorials or from videos. You will often type down code as you see them.

Here’s something you should do, when you are done writing or running such code, **learn to break them**. How do you do this?

Change something to see how the code behaves. Do this so that you don’t make assumption about anything and you are pretty sure you understand what is going on.

#### Quiz

1 . What’s the likely bug in the Python code snippet below:

    items = [0,1,2,3,4,5]print items[8]

    //hint: items here is an Array, with 6 items. To retrieve the 4th item for example, you will use items[3]. We start counting from 0.

2\. What is the likely bug in the Python code snippet below:

    input = Hippo'if input == 'Hippo':  print 'Hello, Hippo'

#### Section Summary

Congratulations! The bug word is no longer a strange one to you, and picking out bugs now should not be either. Next, we will look into the common flow of the code that we write everyday.

#### Answers to the Quiz

What’s the likely bug in the Python code snippet below:  
(1) Runtime Error: Index Out of Range Error  
(2) Syntax Error: Missing starting quotation mark on line 1



![](https://cdn-images-1.medium.com/max/1600/1*Sh7FVP4_Ot_zCAKRKB-Ijg.jpeg)

[_http://www.publicdomainpictures.net/_](http://www.publicdomainpictures.net/)



### Part 4 — Basic Coding Flows

#### Line Of Code, Expressions and Statements

The unit of any source code is the **LOC (Line of Code)**. The simplest program is a line of Code. A LOC could be a keyword, a symbol, or a statement. It’s a Line of Code as long as it’s on a separate line of its own.

Let us consider a simple line of code:

`area = 0.5 * base * height`

`0.5 * base * height` is an expression. **An expression** is a combination of operators and operands. In the example given here, the operands are `0.5`, `base`, `height`. You will recall that `0.5` is a floating point literal, `base` and `height` are variables. The operator is the `*`(multiplication).

Expressions may not be meaningful staying on their own as a LOC. When we assign the value of an expression to another variable, in the case above the `area`, what we have is called a statement. It is still a statement when we attach expressions to keywords, example: `return 0.5 * base * height`

For the rest of this section, we will represent a statement as the symbol **S**. The nth statement will be **Sn** amongst a sequence (or set) of statements

To grasp programming quickly, a good starting point is understanding basic coding flows. Basic flows are also referred to as **control flows**. Once you understand these flows, you will find them in many of the programming languages you learn.

Note that the examples given in this write-up are purely basic. You need to refer to the language you are learning to get an in-depth knowledge of the keywords it provides.

Also the basic flows introduced here are different from **design patterns** in programming. Understand these basic flows first. You catch up later with common design patterns in programming as you learn more.

Here are the basic programming flows:

*   Sequential
*   Conditional/Branching
*   Iteration/Repetition/Loops

#### Sequential

This is the most basic flow, where one statement is executed after the other. In the actual sense, every other flow resolves to a sequential flow (more on this later).

    S1S2S3...Sn

In some programming languages like JavaScript, it is possible for S3 to execute before S1\. This happens if S1 is blocked by some tasks that might take more time such as Data Base or File operations, known as **asynchronous tasks**. There are ways around cases like this. Not to worry, it will be a breeze to learn when you pick up the programming language to learn.

#### Conditional/Branching

The statement that executes is determined by conditions. The key keyword here is the `if` keyword. It’s one of the most used coding flow.

Here’s the simplest conditional pattern:

    if (condition) then:   S1

In the example above, either `S1` executes or nothing happens. `S1` is executed only if the condition given is true.

Here’s another conditional pattern:

    if (condition) then:  S1  S2else:  S3  S4

That can be read as either running of `S1`-`S2` or `S3`-`S4` based on the condition given. If the condition is true, `S1` and `S2` will be processed. Otherwise the statements `S3` and `S4` will be processed. This in actual sense is a sequential flow:

    S1S2

We also have the multi-conditional style:

    if (condition1) then:  S1else if (condition2) then:   S2else:  S3

Here if `condition1` is true, then `S1` is processed. Otherwise `condition2` is tested, and if true, `S2` is processed. This can go on and on.

For the multi-conditional style, many programming languages provide the `switch`statement. Here’s the pattern for the switch statement:

    switch value:  case condition1:    S1    break    case condition2:    S2    break

    default:    S3

The `condition1` and `condition2` are compared with the value in the switch statement. If any of them is true to the value, then the statement in the case block is executed.

There are other choices for conditional flow. Some are specific to the language you decide to learn such as the conditional operator (`: ?`), and other keywords that facilitate branching such as `cycle` and `break`. Be sure to spend sometime understanding the condition/branching flow.

#### Iteration/Repetition/Loops

The iteration/repetition flow keeps statement(s) running for as long as some conditions are met, and stops executing the statement(s) once the condition is no longer true.

Here’s the pattern:

    while (condition):  S1  S2

In the example above, statements `S1` and `S2` may execute once, multiple times, or may not execute at all. If the condition given is true the first time the `while`statement is encountered, then `S1` and `S2` will be processed. The `while` condition is checked again, and `S1`and `S2` will be executed for as long as the condition is true.

The moment the condition becomes **false** the execution of `S1` and `S2` stops.

The result of statement above if condition is true thrice will be:

    S1S2S1S2S1S2

What coding flow is that? If you answered sequential, you are very correct. Still as we can see, the other flows resolve to the sequential flow.

Here’s another iteration pattern:

    do:  S1  S2while (condition)

In this example, `S1` and `S2` will execute at lease once or multiple times. This is because they will execute before the condition is tested.

In many programming languages, keywords like the `do` and`while` are provided for implementing the repetition flow. Another common keyword is the `for` keyword. Here’s the common pattern for the `for` statement.

    for (initialvalue; condition; decrement/increment initialvalue):  S1  S2

Many languages have `foreach` used for working through each items in a complex object such as an array, or struct.

#### Quiz

Identify the coding flows in the following Python code snippet:

    numlist=[]cnt=0while cnt >= 0:  m=int(raw_input())  if m < 0:    break  numlist.append(m)  cnt=cnt+1

#### Summary

The flows covered here are the basic flows. There’s a way to group a bunch of code together and give them a name. This way you may call this bunch of code whenever you need them at once. This is referred to as a procedure. In the case where the bunch of code perform some operation and return a value, you have a function.

How procedures and functions are implemented vary with different languages. You cannot skip these to get the basics of any language. They are highly important for organizing your code. In fact, this is where the building blocks of your code starts also known as **modular programming.**

There are other flows that you will learn the moment you understand functions, one that comes to mind is **recursion**.

Yet, you will find that within procedures and functions are still the awesome coding flows we have covered here — sequential, conditional and loops/iterative flow.

### Going Forward

Now you’ve learned the most basic concepts of programming your computer. If you desire to learn more, or want to make a career out of software development, then all you need to do is dive deeper into the deeper waters. There are so many resources to help you learn. Knowing which to pick up based on your level of experience matters a lot.

Try not to get overwhelmed by the new words you hear from the more experienced programmers in your circle of friends. You could keep a pad to note down these terms, but do not be under pressure to find out what they mean. You will catch up as you learn and practice.

Here are a few resources to help jump-start your coding career, and to help build on the foundation you got from here:

*   [https://www.codecademy.com/](https://www.codecademy.com/)   
    Pick the Python course
*   [https://app.pluralsight.com/library/courses/what-is-programming/table-of-contents](https://app.pluralsight.com/library/courses/what-is-programming/table-of-contents)  
    Free Course on Pluralsight

NOTE: I don’t recommend over-reading on the same topic. I believe in acting on the little you’ve learned, that is, practicing. This is why I’m not dumping too many links here for your learning. Feel free to google up or find others based on what you already know if you are not a first-timer.

#### Final Challenge

I hereby challenge you to:  
Take up any of these challenges:

*   Find any simple app online and reproduce it in the programming language you have learned

OR

*   Think of any idea even if it’s as simple as a bucket list app  
    build an app around this idea.

I’ll recommend this [article](https://www.codementor.io/codementorteam/how-to-build-app-from-scratch-beginner-programmer-7z0atq56w) from [codementor](http://codementor.io/) to get you started on this.

#### Answers to the Quiz

Identify the coding flows in the following Python code snippets.

*   Sequential flow
*   Iteration   
    the `while` statement
*   Conditional  
    the `if` statement

Special thanks to [Maya Neria](https://www.linkedin.com/in/maya-neria-5bb18763/?ppe=1), [Joshua Ugba](https://www.linkedin.com/in/joshua-ugba-o-0a193936/) and [Mohini Ufeli](http://medium.com/@mohiniufeli) for reviewing this write-up, [Surajudeen Akande](https://www.linkedin.com/in/sirolad/) for urging me to publish it, the Editorial team at Andela for the reviews, [John Adesanya](https://www.facebook.com/adesanya.john.52) for the illustrations and to my wife, Bukunmi — these lessons started with her desire to learn how to code.

_If you liked this, click on the clap icon so other people will see this here on medium. Also, if you have any questions or observations, use the comment section to share your thoughts._








