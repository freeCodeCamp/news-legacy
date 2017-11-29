---
author: Kevin Kononenko
authorTwitter: https://twitter.com/devmanual
authorFacebook: https://facebook.com/10203738544564981
title: "SQL Tables Explained by Voting in an election"
subTitle: "If you have voted before, then you can understand SQL tables using this wonderfully non-political analogy."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*AdkZ13GSILN6wnK1m3_AmQ.jpeg
url: https://medium.freecodecamp.org/sql-tables-explained-by-voting-in-the-infamous-2016-election-de638dd9db7
id: sql-tables-explained-by-voting-in-the-infamous-2016-election-de638dd9db7
date: 2017-02-06T19:52:41.590Z
tags: [
  "Learn To Code",
  "Sql",
  "Programming",
  "Database",
  "Politics"
]
---
# SQL Tables Explained by Voting in an election

## If you have voted before, then you can understand SQL tables using this wonderfully non-political analogy.

After this particularly controversial election, you probably know more about the U.S. voting system than you would ever want to.

But I bet that you never thought it would help you learn how to organize a relational database.

Fortunately, the basic rules of presidential elections are actually great guidelines to organize SQL tables and understand the concept of [**keys**](https://en.wikipedia.org/wiki/Relational_database). Keys are the most important tool for setting up scalable and efficient SQL databases. They are also the most confusing part when you are just starting!

All you need to know before you read this article are the very basics of SQL- mainly, how tables are organized by rows and columns.

#### Rewind to Election Day

You have just left your voting booth with paper ballot in hand. You head over to the processing machine, and put it in the slot.



![](https://cdn-images-1.medium.com/max/1600/1*yCFBfSc7i0f6-cxmW7yILw.png)



But what happens next? What do you think would be the best way to store your vote for president? Remember that about 136,000,000 other people voted as well in just this election!

Check out the ballot above. You can see that there are three key identifiers that we need to track on the ballot:

1.  The election that this ballot is associated with (2016)
2.  A ballot number (012)
3.  A voter ID, in this case, Social Security Number (012 34 5678)

Your initial thought might be to store this whole thing as one entry, like this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f0c60c377f7b2ee7a32967ddcf239f82?postId=de638dd9db7" data-media-id="f0c60c377f7b2ee7a32967ddcf239f82" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





But let’s think this through, considering that there are over 100 million other voters! Do we really need to store every piece of information on the ballot in every entry in the database? For example, do we really need to list “candidateA” and “candidateB” as the two choices 100 million times? Surely not!

And this does not even consider multiple elections. Imagine if we wanted to view Jennifer Hardy’s voting activity from the past 3 elections. Even then, it would not make sense to have 3 entries in our database that included her full name, SSN, gender etc. with every vote. This encourages bugs and inconsistent information when you update your database to change her party affiliation, for example.

Let’s take a step back and consider some basic principles of the voting system.

1.  One **election** has many **votes** (100 million+)
2.  One **voter** has many **votes** over the course of their lifetime
3.  One **voter** can participate in many **elections** (as many as 20)



![](https://cdn-images-1.medium.com/max/1600/1*bPRsm-WW5RAcfub5TPWSBA.png)



Our three unique IDs- ballot #, social security number, election date- show that there are really three components in this system. If we put all three components in one entry, like we did above, we cannot capture the relationships between them. And we will repeat a lot of information.

#### Connecting Multiple Tables

With our three key identifiers, we have now outlined the three tables that are needed to properly store this information.

1.  **Election** table, with a date, Party A nominee and Party B nominee. Date is the unique identifier because some candidates may run for President twice, but two elections never happen on the same date.
2.  **Vote** table, that includes the ballot number, the SSN of the voter that it is associated with, the election that the ballot is associated with, the issue that is being voted on (president), and a 0 or 1 for which candidate was chosen. 0 stands for Party A, 1 for Party B due to alphabetical order.
3.  **Voter** table, which includes the voter’s first name, last name, Social Security #, year of birth, party affiliation, gender and state registered to vote.

This does a much better job of describing the different pieces of the voting system. There are actually three distinct events.

*   You had to register to vote at some point before voting day! You were added to the voter database. Your SSN is the **primary key,** in this case. That means that it is the unique identifier for that row.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/cb909d5566dc677449ff9df73ac1f8a0?postId=de638dd9db7" data-media-id="cb909d5566dc677449ff9df73ac1f8a0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





*   Each party held a National Convention to finalize their candidates in July 2016 for the November 8 election. This created a new entry in the election table. The date is the **primary key**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/86cf94468c3774e66f98d594efc005f5?postId=de638dd9db7" data-media-id="86cf94468c3774e66f98d594efc005f5" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Now we are back to the original scenario. It’s November 8, 2016\. You just put your ballot in the processing machine. So how should the machine really handle your ballot? First, your ballot should have the minimum amount of information necessary.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/23ae39adda9b1f7800fdd9204a562409?postId=de638dd9db7" data-media-id="23ae39adda9b1f7800fdd9204a562409" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F8312841%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The machine then needs to answer a few questions to determine if the ballot is valid.

*   Have you already voted in this election?
*   Is the ballot connected to the 2016 election, or did you save one from a past election?
*   Are you a registered voter?

Each one of these is a separate SQL query. I want to focus on the first three pieces of info on the ballot above. The ballot ID is the **primary key** for the **votes** table. The SSN and date are actually **foreign keys.** That means that they reference primary keys from the other two tables.

If we want to check if the ballot is coming from a registered voter, we are going to need to use a **table join**. A join references info from multiple tables using the primary/foreign key system. This means that our vote table must store both a unique identifier for the voter, and for the election as a whole. But it also means that we do not need to store all the voter’s info or the election info in that row! We just need a reference to the corresponding table.





<iframe data-width="800" data-height="400" width="700" height="350" src="https://medium.freecodecamp.org/media/49d3eea55442a7cdcaff56ecc0af5a9e?postId=de638dd9db7" data-media-id="49d3eea55442a7cdcaff56ecc0af5a9e" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fupscri.be%2Fmedia%2Fform.jpg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The **primary/foreign key** system forms connections between tables.







![](https://cdn-images-1.medium.com/max/2000/1*IZSx78cNjsvg9NiiVERAnQ.png)







We want to check if Jennifer Hardy is a registered voter after a ballot with Hardy’s name is submitted. We just need to confirm that she has an entry in the **voters** table. We use the SSN **foreign key** from the votes table, and the **primary key** from the voters table to link the two records. We also probably need to check if the state registered on her record matches the state where the vote was processed.

And that is it! If you want to practice, try and set up a database with the last 4 US presidential elections. Add 20 sample votes from 10 voters over the course of the 4 elections. And see if you can write the query that will check if a voter is attempting to submit a 2nd ballot in one election!

If you enjoyed this post, you may also enjoy my [other explanations](https://www.rtfmanual.io/guides/) of challenging CSS and JavaScript topics, such as positioning, Model-View-Controller, and callbacks.

And if you think this might help other people in the same position as you, give it a “heart”!








