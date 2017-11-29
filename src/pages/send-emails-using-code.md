---
author: Arjun Krishna Babu
authorTwitter: none
authorFacebook: none
title: "How to send emails using Python"
subTitle: "As a learning exercise, I recently dug into Python 3 to see how I could fire off a bunch of emails. There may be more straightforward met..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*qTKddOEkMZiri9ldfzBauQ.jpeg
url: https://medium.freecodecamp.org/send-emails-using-code-4fcea9df63f
id: send-emails-using-code-4fcea9df63f
date: 2016-10-07T16:14:20.437Z
tags: [
  "Python",
  "Programming",
  "Web Development",
  "Tech",
  "Marketing"
]
---
# How to send emails using Python







![](https://cdn-images-1.medium.com/max/2000/1*qTKddOEkMZiri9ldfzBauQ.jpeg)







As a learning exercise, I recently dug into Python 3 to see how I could fire off a bunch of emails. There may be more straightforward methods of doing this in a production environment, but the following worked well for me.

So, here’s a scenario: You have the names and email addresses of a bunch of contacts. And you want to send a message to each one of those contacts, while adding a _“Dear [name]”_ at the top of the message.

For simplicity’s sake you can store the contact details in a file rather than a database. You can also store the template of the message you wish to send in a file.

The [smtplib](https://docs.python.org/3/library/smtplib.html) module of Python is basically all you need to send simple emails, without any subject line or such additional information. But for _real_ emails, you do need a subject line and lots of information — maybe even pictures and attachments.

This is where Python’s [email package](https://docs.python.org/3/library/email.html) comes in. Keep in mind that it’s not possible to send an email message using the `email` package alone. You need a combination of both `email` and `smtplib`.

Be sure to check out the comprehensive official documentation for both of these.

Here are four basic steps for sending emails using Python:

1.  Set up the SMTP server and log into your account.
2.  Create the `MIMEMultipart` message object and load it with appropriate headers for `From`, `To`, and `Subject` fields.
3.  Add your message body.
4.  Send the message using the SMTP server object.

Now let me walk you through the whole process.

Let’s say you have a contacts file `mycontacts.txt` as follows:

    user@computer ~ $ cat mycontacts.txtjohn johndoe@example.comkatie katie2016@example.com

Each line represents a single contact. We have the name followed by the email address. I’m storing everything in lowercase. I’ll leave it to the programming logic to convert any fields to upper-case or sentence-case if necessary. All of that is pretty easy in Python.

Next, we have the message template file `message.txt`.

    user@computer ~ $ cat message.txt 

    Dear ${PERSON_NAME}, 

    This is a test message. Have a great weekend! 

    Yours Truly

Notice the word “`${PERSON_NAME}`”? That is a [template string](https://docs.python.org/3.5/library/string.html#template-strings) in Python. Template strings can easily be replaced with other strings; in this example, `${PERSON_NAME}` is going to be replaced with the actual name of the person, as you’ll see shortly.

Now let’s start with the Python code. First up, we need to read the contacts from the `mycontacts.txt` file. We might as well generalize this bit into its own function.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/184b7e8a1fb01bcb5085728c028a68e3?postId=4fcea9df63f" data-media-id="184b7e8a1fb01bcb5085728c028a68e3" allowfullscreen="" frameborder="0"></iframe>





The function `get_contacts()` takes a filename as its argument. It will open the file, read each line (i.e., each contact), split it into name and email, and then append them into two separate lists. Finally, the two lists are returned from the function.

We also need a function to read in a template file (like `message.txt`) and return a `Template` object made from its contents.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b2b267f67f1c50338708d21c79674e89?postId=4fcea9df63f" data-media-id="b2b267f67f1c50338708d21c79674e89" allowfullscreen="" frameborder="0"></iframe>





Just like the previous function, this one takes a filename as its argument.

To send the email, you need to make use of [SMTP (Simple Mail Transfer Protocol)](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol). As mentioned earlier, Python provides libraries to handle this task.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/3bea5ac908f18f111185ddd2da5ee2a0?postId=4fcea9df63f" data-media-id="3bea5ac908f18f111185ddd2da5ee2a0" allowfullscreen="" frameborder="0"></iframe>





In the above code snippet, you’re importing the `smtplib` and then creating an [SMTP instance](https://docs.python.org/3/library/smtplib.html#smtplib.SMTP) that encapsulates an SMTP connection. It takes as parameter the host address and a port number, both of which entirely depends on the SMPT settings of your particular email service provider. For instance, in the case of Outlook, line 4 above would instead be:

    s = smtplib.SMTP(host='smtp-mail.outlook.com', port=587)

You should use the host address and port number of your particular email service provider for the whole thing to work.

`MY_ADDRESS` and `PASSWORD` above are two variables that holds the full email address and password of the account you’re going to use.

Now would be a good time to fetch the contact information and the message templates using the functions we defined above.

    names, emails = get_contacts('mycontacts.txt')  # read contactsmessage_template = read_template('message.txt')

Now, for each of those contacts, let’s send the mail separately.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/2719b6f59ee9b2d32f614e781d96b65c?postId=4fcea9df63f" data-media-id="2719b6f59ee9b2d32f614e781d96b65c" allowfullscreen="" frameborder="0"></iframe>





For each `name` and `email` (from the contacts file), you’re creating a [MIMEMultipart](https://docs.python.org/3/library/email.mime.html#email.mime.multipart.MIMEMultipart) object, setting up the `From`, `To`, `Subject` content-type headers as a keyword dictionary, and then attaching the message body to the `MIMEMultipart` object as plain text. You might want to read the documentation to find out more about other MIME types you can experiment with.

Also note that on line 10 above, I’m replacing `${PERSON_NAME}` with the actual name extracted from the contacts file using the [templating mechanism in Python](https://docs.python.org/3.5/library/string.html#template-strings).

In this particular example I’m deleting the `MIMEMultipart` object and re-creating it each time you iterate through the loop.

Once that is done, you can send the message using the handy [send_message()](https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.send_message) function of the SMTP object you created earlier.

Here’s the full code:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6e7a0385ea4ada30dc76299feee54d71?postId=4fcea9df63f" data-media-id="6e7a0385ea4ada30dc76299feee54d71" allowfullscreen="" frameborder="0"></iframe>





There you go! I believe the code is now fairly clear.

Feel free to copy and tweak it as necessary.

Apart from the official Python docs, I would also like to mention [this resource](http://naelshiab.com/tutorial-send-email-python/) which helped me a lot.

Happy coding :)











* * *







_I originally published this article_ [_here_](http://arjunkrishnababu96.github.io/Send-Emails-Using-Code/)_. If you liked this article, please hit the small heart below. Thanks!_








