---
author: Dawid Woldu
authorTwitter: none
authorFacebook: none
title: "A multi-input field messaging app concept"
subTitle: "Some time ago I shared in a Medium article the idea for context aware messenger app. The idea challenged the design limitation behind all..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*YCv5mOQvmmNsyZf1769nww.gif
url: https://medium.freecodecamp.org/multi-input-field-messaging-app-concept-911096778de3
id: multi-input-field-messaging-app-concept-911096778de3
date: 2017-06-19T15:44:42.816Z
tags: [
  "UX",
  "Prototyping",
  "Design",
  "Mobile",
  "Product Design"
]
---
# A multi-input field messaging app concept

Some time ago [I shared in a Medium article](https://medium.com/@dawdus/freeing-the-bubbles-context-aware-messaging-app-8466abdcda27) the idea for context aware messenger app. The idea challenged the design limitation behind all messenger apps allowing you to write only one message at a time.

What I always missed in these apps was a way to save the message I’m currently typing and type and send something else instead. Then a way to get back to previously composed message and continue. Just to stay on topic and keep some order in my conversations.







![](https://cdn-images-1.medium.com/max/2000/1*V1FjQERZI5qae8EgEpdjjg.png)

Left to right: Messages, Slack, Hangouts, Messenger, Whatsapp.







The way I do it today involves the sequence of text field related gestures: **Long press, Select All, Cut, Type in, Send, Long press, Paste, continue.**

My concept allowed to replace that sequence with a single tap, but it was up to the app to recognise the need for saving a message based on the context of the conversation. I built a Quartz Composer prototype to show the feature in action:







![](https://cdn-images-1.medium.com/max/2000/1*Lsq9c3raoWv6ApwNXw8KjQ.gif)







**But I never shared the prototype**, as it wasn’t functional, allowed for only one extra input field and was done solely for the purpose of recording that video. Also Origami prototypes for Quartz Composer didn’t work very well on the device (not mentioning the absence of native keyboard).

**Release of** [**Origami Studio**](http://origami.design) **allowed me to revisit the concept and build fully functional (sort of) prototype to share.**

I ditched the context aware part and allowed for saving as many drafts as you need, whenever you feel like it.

### **Here’s a demo video of the new prototype.**









<iframe data-width="854" data-height="480" width="980" height="551" src="https://medium.freecodecamp.org/media/d7df67a77005882c8f7d9eb78510e9dd?postId=911096778de3" data-media-id="d7df67a77005882c8f7d9eb78510e9dd" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMtTGNjTen1g%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>



Using the multi input messenger in context of a conversation.







### Building in Origami Studio.

I could write a separate article/tutorial for each of the technical challenges I encountered while building the proto, but I’ll limit myself to just briefly list some of them here. Hopefully these short descriptions will be enough to spark some ideas whenever you encounter similar blocks. If not don’t hesitate to [ping me directly](https://twitter.com/dawidwoldu).

### **Multi line input field.**

Text Field component in Origami Studio doesn’t allow for multi line inputs. When you double tap on it to reveal it’s content’s you’ll find the actual Text Input component that does. The problem is it doesn’t have a cursor/caret. So hacked in a cursor by measuring the position of the last letter in the text field.



![](https://cdn-images-1.medium.com/max/1600/1*uLDTzgWOHzIkLT8OsL7Q3Q.gif)



Each time you type a letter I check if it’s a ‘space’ and if it is I append it’s index to an Array of spaces. Then I assume that whenever height of the input increases the text will break at the last recorded space. Then I measure the rest of the text to place a cursor in a correct position of the new line. When you don’t tap the space I just measure the size of the text that fit the line.

### **Building a conversation feed.**

The challenge here was dynamically creating chat bubbles while keeping the correct order in the feed. When bot starts typing you can see the last bubble on the feed with 3 jumping dots. But if you send the message before it finishes typing your bubble should land on the feed before the bot’s bubble. I managed to make it work by keeping two arrays of messages. Temporary one (bot typing) and final and switching between them whenever bot starts typing or sends the message.

I created a JSON config file with the bot messages that allow you to configure what and when the bot is sending and if it should wait for your message(s) to start typing.

<pre name="eb5f" id="eb5f" class="graf graf--pre graf-after--p">{"message":"Ok, I'm dumb. What do you want from me?!", "waitforuser":2,"delay":1}</pre>

**waitforuser **— describes how many user messages should the bot wait for before it starts typing. Zero means it won’t wait for user at all.  
**delay **— time in seconds before bot starts typing.

### **Creating/removing input fields and managing their order.**

Whenever you create input field I’m increasing the count on the Loop patch, but as soon as you don’t need the field anymore I tried to remove the field from the loop and keep the other input fields keep their order and content. It was impossible for me to figure out as **loop patches don’t keep the reference to the actual instance of the element they’re replicating**. I worked around by hiding and reusing unused fields instead of removing them from the loop.

### Downloads!

You can download Origami prototype, JSON file as well as multiline text field component from my [Google Drive](https://drive.google.com/drive/folders/0B9oWvt9KHdw0T2hOcUdlUFMtMVk?usp=sharing).

#### **User’s Manual:**

**Long press on Send button** to save the current text and create new input field. (Yes! It’s undiscoverable. I know.)  
Prototype is optimised for use on the device. (You can’t hide the keyboard)

### **Last minute discovered fun facts:**

* The prototype crashes when using emojis. 👌  
* Multi line input field cursor can behave erratically when typing super fast (I’m sharing anyway).  
* When you send a message in the exact time that bot starts typing, the empty bot message can appear on the feed.  
* Other bug fixes and performance improvements. (What?!)








