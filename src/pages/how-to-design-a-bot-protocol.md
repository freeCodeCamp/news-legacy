---
author: Alex Bunardzic
authorTwitter: https://twitter.com/alexbunardzic
authorFacebook: https://facebook.com/10201434943950243
title: "How to Design a Bot Protocol"
subTitle: "One of the biggest fallacies about the present bot craze is that bots need to be capable of offering nuanced, sophisticated conversationa..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*xjG1GNLJJeikWDyBttJGzw.jpeg
url: https://medium.freecodecamp.org/how-to-design-a-bot-protocol-4b7584fc8d2c
id: how-to-design-a-bot-protocol-4b7584fc8d2c
date: 2016-04-21T21:11:40.355Z
tags: [
  "Artificial Intelligence",
  "Bots",
  "Conversational UI",
  "Tech",
  "AI"
]
---
# How to Design a Bot Protocol







![](https://cdn-images-1.medium.com/max/2000/1*xjG1GNLJJeikWDyBttJGzw.jpeg)







One of the biggest fallacies about the present bot craze is that bots need to be capable of offering nuanced, sophisticated conversational experience ([How does your bot say ‘ketchup’?](https://medium.com/hh-design/how-does-your-bot-say-ketchup-9bdc3fd3cb86#.4jacwzd65)). That sentiment is completely unsubstantiated, and is probably based on seeing too many fancy Hollywood sci-fi movies.

In reality, bots are merely an extension of the regular human behavior that we can observe in various social situations. And because bots are yet another of the many ways we go about automating information processing, they obey the exact same constraints that other software products obey as well. In a word, bots obey certain behavioral pattern known as _communication protocol_.

#### What is a Protocol?

When two parties communicate, they do so by exchanging messages. That process of messaging could be primitive, as in sending smoke signals:



![](https://cdn-images-1.medium.com/max/1600/1*uAcHQTkujc87dS35ecPUGA.png)



Or, it could be more advanced, less messy, such as for example making a phone call, or sending a text message.

Regardless of the mechanism being used to exchange messages, what is really critical is the mutual agreement and understanding by all involved parties regarding the meaning of each message. What is of paramount importance in all such scenarios is avoiding free form, loosey-goosey chitchat.

Consider a typical exchange of messaging that occurs when a pilot is approaching the air traffic control tower. It would be extremely hazardous in such dangerous situations to allow for the pilot and the air traffic control operator to engage in open-ended, unstructured banter. Instead, they follow a predefined, predetermined communication protocol.

Each sentence uttered by either the pilot or the traffic control officer always ends with the keyword ‘over’. That keyword signals to the other party that the person who was talking has finished talking and is now listening with undivided attention. Furthermore, the person who was doing the listening always begins their talking with the keyword ‘roger’ (or ‘roger so far’), signalling that they have fully understood what the other person was saying (sometimes ‘roger’ can be replaced with ‘wilco’, implying ‘will comply’, meaning that the message was received loud and clear).

As is quite obvious from the above example, communication protocol that is implemented in highly hazardous situations (such as landing an airplane) must by necessity be extremely constrained and rigid. No deviation in the syntax of the messages being exchanged is allowed. Strict adherence to such rules assures clear, unencumbered communication.

#### Protocols in Less Critical Situations

Not all situations where people communicate are as critical and potentially dangerous as landing an airplane. Still, it does not necessarily mean that it is okay to throw all caution to the wind when dealing with communication issues in less intense situations.

Consider for a moment how people communicate when crossing the border. Upon approaching the border, travellers get interrogated by the border crossing officer. It is the officer who sets the tone of the conversation, and travellers are best advised to comply and follow the officer’s lead. That means answering all questions with short, pointed sentences, often with terse ‘yes’ or ‘no’ statements. Such an impromptu established protocol ensures smooth and efficient border crossing, while allowing security officers to perform their duties without a hitch.

Most people don’t seem to have any problems picking up on such cues, and are typically following the proposed impromptu protocol without any difficulties.

Or, consider an even less critical situation, such as the communication protocol that occurs when we enter a social function of some sorts (for example, an evening at the theatre). Upon entering the theatre, we get greeted by the concierge. It is the concierge that sets the tone of the conversation, and most people gladly comply. This compliance ensures smooth and effective service, as we get greeted and subsequently get ushered into the building. A few short, courteous sentences get exchanged before we are shown the coat check area and are then led to our seats.

#### Protocol Sets the Tone of the Conversation

Regardless of how intense, or how relaxed the conversation may be, there is always an underlying, often times tacit communication protocol. Even when doing some leisure shopping, we notice how the conversation between the customers and the staff obeys certain more or less formal communication protocol.

It is usually that people who lack social skills and who disobey those tacit protocols get viewed and judged as being obnoxious and unpleasant. So we see that complying with pre-established protocols is a sign of well adjusted behaviour.

It is also usually the serving side of the interaction (such as a receptionist at the doctor’s office, or a host at the social function etc.) who sets the protocol and the tone of the conversation. If there are any hard and fast rules that must be interjected into the conversation, such rules are brought up at the very outset of the conversation. By bringing up any rules, the serving party sets the formal tone of the conversation, and is also then responsible for handling any issues, exceptions and oddities that may occur during the session.

The important thing to note is how natural, how normal this upfront setting of the tone feels to us. Whenever we find ourselves in a situation where no tacit rules and no specific protocol had been set, we tend to feel uneasy, unsure what our next move should be.

#### Bots must set the Protocol

Despite some of the recent excitable and exaggerated claims, mainstream emergence of bots is not a revolutionary technological advancement. Mainstream bots are a mere evolutionary extension of our regular and ongoing attempts to automate as many mundane tasks as possible.

As a matter of fact, bots are not really all that different from the good old crusty GUI applications. Recall how, any time we login to a GUI app, we are obeying certain communication protocol. The app sets the tone, and is guiding us through the experience. The only difference between the GUI apps and the bots is that with the GUI (as the name implies), most of the messages that are presented to us by the underlying service are pictorial/graphical. With bots, most of the messages presented to us by the underlying service are textual.

And if we scratch the surface on GUI apps, we realize that all those graphical representations actually get translated into textual commands and then get sent to the back-end service for processing. For example, if I am communicating with a bot, I can say: “Get me the status of my order.” And if I am communicating with a GUI app, I can click/tap on the “Order status” link, and that action will get converted by the browser into a textual statement — something like “GET [http://domain.com/user/1/order?id=42](http://domain.com/user/1/order?id=42) HTTP/1.1”. In both cases (GUI and the bot), the response will come back as text. Same difference, really.

The only substantial difference is, when communicating with bots, I can rely on my intuitive grasp of the natural language, while if I wanted to send a text message to the GUI app, I would have to gain formal training in how to formulate syntactically correct string which the back-end service will understand.

But the main point remains — both the GUI apps and the bots set the communication protocol and set the tone. It is definitely _not_ the user who sets the tone. The user either obeys the proposed protocol and complies with the tone of the conversation, or abandons in frustration all attempts to enjoy the available service.

This may sound rude and inconsiderate on the first pass, but it is actually a desirable thing. As we’ve seen, clear, unambiguous and coherent communication is absolutely not possible without establishing crisp boundaries by setting the tone and defining some ground rules. Otherwise we risk the danger of ending up with some blabbering mess of a system that is neither good for the end-users nor for the businesses offering the services.

#### What do Businesses Value?

If you’re responsible for running a business, then you’re most likely going to agree with the statement that one of the most important things in business is _predictability_. No one likes to be in the position of uncertainty, especially if a lot of other people’s future might be at stake.

This is why it is of utmost importance that trust be established when offering automation services to a business. Any service that a business would be willing to invest in must offer ironclad assurances of predictability and repeatability. In summary, the automation services must offer coherent, consistent, fully controllable behavior.

It is precisely because of such primary business values that service bots must come with fully baked, crisp communication protocols which unambiguously set the tone of the conversation. As bot builders, we must be able to demonstrate to the businesses that our bots are fully predictable. We can only accomplish that by demonstrating how they exhibit repeatable, fully controllable behavior.

#### Bots Keep Track of User Interaction

One important facet of the bots that differentiates them from the traditional GUI apps is their undivided attention to the human user. While GUI apps don’t care who is operating them, bots definitely do care. Unlike GUI apps, which propose the ‘one size fits all’ approach to offering automated services, bots propose highly personalized services. The personalization is embodied within the conversation thread that transpires between the human user and the bot.

Despite the fact that different users are interacting with the same bot, the history of their interaction is totally unique. There couldn’t possibly be two discussion threads alike, and the variety of information exchange is endless.

Another important point is that bots retain the memory of each individual step of each individual user, and can recollect and summarize what transpired in a given context. GUI apps were never designed with similar intentions, which makes them appear really crude, almost barbaric in comparison.

#### Bots and Context Switching

When humans communicate, they use their common-sense skills to signal to each other when the context of the conversation changes. For example, upon the initial contact, the short-lived context (often called ‘meet and greet’) gets established. That context is usually set by using common opening lines, such as “Hi, how are you?”, “Hello there!”, “How do you do?”, “How are you doing?” etc. Depending on whether the meet-and-greet session happens between strangers or between old friends, the opening lines may change. But the overall tone remains pretty much predictable, as is the tacit intention to quickly end the ephemeral meet-and-greet situation and move on to a more concrete interaction.

Following the initial greeting, the context usually switches very abruptly and that switching is signalled by the change of the tone of the conversation. Depending on whether the meeting is informal, or a more formal business or even legal session, the appropriate tone will take over and prevail.

A bot that is incapable of detecting and performing similar context switching is a completely useless bot. Building a bot that is only capable of behaving in a simplistic, knee-jerk fashion by always maintaining the same tone of the conversation is not going to garner much attention among the user base.

Because of that danger, we need to establish some guidelines on how to implement a sturdy, viable bot protocol.

#### Bot Protocol Guidelines

Generally speaking, any bot offering conversational experiences to human users must provide four levels of communication protocol:

1.  _Command protocol_
2.  _Keyword protocol_
3.  _Structured phrase protocol_
4.  _Free form (informal) protocol_

The above four protocols are ordered with regards to their strictness and rigidity — from the most constrained, strict and rigidly formal (i.e. command protocol) down to the least strict and least formal (casual chitchat, or banter).

#### Command Protocol

With commands, we’re back to the command line interface ([CLI](https://en.wikipedia.org/wiki/Command-line_interface)). Using a command line interface is usually the domain of computer programmers and system administrators. It does require certain level of formal training, as computer operating systems are not built with conversational experiences in mind. The strictness of the command syntax is required so that the underlying operating system can execute commands with the least possible amount of ambiguity.

In the world of bots, this strictness must be softened because the intended audience is not highly trained professionals. Casual users must not be expected to know how to formulate syntactically correct commands. A bot must serve as an intermediary broker, or a concierge. This broker must be able to accept commands issued by users. The broker will then translate the commands into a more syntactically correct form. Syntactically correct form is needed for the back-end machinery so it can process the request without the risk of introducing unwanted side effects.

For that reason, commands offered by the bots must be single word commands. Keeping in mind that bots are also expected to respond to single word messages that may not be strict commands, we must design bot commands in such a way that they immediately stand out. Typically, that means that a bot command must be constructed in such a way that it starts with a special character. For example, a command requesting a reminder from the bot about what commands it understands would typically start with a ‘/’ (forward slash) character. There is a semantic difference between saying ‘help’ and ‘/help’. The first message (a simple ‘help’) is not interpreted by a bot as a command. The second message (so-called _slash command_ ‘/help’) gets interpreted by a bot as a command. The outcome of processing that command would be vastly different from the outcome of processing a simple ‘help’ message.

#### Keyword Protocol

Unlike bot commands, keywords are less formalized, less strict messages that users send to the bot. Unlike bot commands, the main responsibility of keywords is to govern the switching of the _conversation context_.

In the case of bot commands, there is no context switching — the bot recognizes the command and simply executes it. The user may ask the bot for _/help_ as many times as the user wishes to, the bot will always reply with exact same list of commands it understands. Depending on the nature of the command issued by the user, the bot may ask for subsequent confirmation. But there will always be commands that simply get executed in a knee-jerk fashion (for example, it would be ludicrous if the bot were to ask the user “Are you sure you want me to execute the _/help_ command?”)

Keywords are different from commands in that they are meant to alert the bot that the context of the conversation has changed. Similar to commands, keywords are formatted as single word instructions, punctuated with a special character (typically a ‘@’ character).

For example, a user may be in the middle of a conversation with the bot discussing best places to have lunch, when the user interrupts the context by saying “Bot, please check with my @doctor when is she available for an appointment?” In this message, the word _@doctor_ is the keyword that triggers bot’s understanding that the context must change. Upon receiving the message containing that keyword, the bot will switch the context from discussing places for lunch to working on figuring out the next available slot for the doctor’s appointment.

Unlike commands, the keywords communication protocol often implies that the bot may ask subsequent questions. Those subsequent questions, triggered by the presence of the pre-established _@keyword_, will always be asked within the newly established context. In the above example, since the user pulled the _@doctor_ keyword and abruptly switched the context, the bot may reply with a subsequent question (or a series of subsequent questions, as the case may be).

Depending on how the bot was trained, the followup question may be: “Is this an urgent matter?”, or it could be: “Is it necessary that you see your doctor? Would another doctor in the office be okay, in case your doctor happens to be absent?” Or, if the bot is simplistic, it may merely just go ahead and schedule the appointment for the earliest available slot, without doing any further consulting with the user.

#### Structured Phrase Protocol

Typical human conversation very rarely consists of terse, one word exchanges. Most of the time, we converse by exchanging various idioms and phrases that serve as building blocks for more elaborate sentences.

In order to make the experience of chatting with the bot feel intuitive and natural, we must enable our bots to deal with short phrases, and even short sentences. Similar to commands and keywords, those structured phrases and sentences must be predefined and engineered by the bot creators.

Because idioms and phrases imply more casual tone of the conversation, the outcome resulting from processing a structured phrase will, out of necessity, be less deterministic than the outcome of a command or a single keyword. If you recall how businesses frown upon unpredictability and non-deterministic outcomes, you will more readily understand why we prefer to relegate less critical processing to structured phrases. It goes without saying that the less structured, less formalized a message sent to the bot is, the less capable will the bot be to process the message in a predictable, deterministic fashion.

Here we are towing a fine line between opening up our services to a more casual mode of communication vs. guaranteed minimum quality of service in terms of accuracy, precision, correctness, consistency, coherence and repeatability. Acknowledging the importance of casual mode of communication, we are nevertheless apprehensive when it comes to delegating any critical processing to those less formalized messages.

Another thing that makes structured phrase processing important is the necessity for establishing assertive pace when servicing user requests. If we were to insist on only staying within the confines of highly formalized, one word commands and keywords, we would in effect end up with stilted conversation threads. Users will not feel compelled to return to chatting with bots if the conversation feels so rigid and cold; we need to establish a flow and a definitive pace that will keep users engaged and ultimately satisfied with the quality of service.

That’s why it is of paramount importance to enable our bots to deal with a number of common phrases that people tend to use in everyday parlance. Phrases such as “What do you know about…” or “Can you tell me about…” etc. is something that all of us use throughout our daily activities. It only feels normal and natural to send messages starting with such structured phrases. The bots will then recognize that the message they’ve received is formulated as an inquiry, and will process that inquiry by reaching deep into the back-end resources.

It is also natural that a less officially sounding phrase, such as “what do you know about…” will set the tone where the answer doesn’t have to be 100% correct. The overall intention of the conversation is much looser than is the conversation containing a command or a keyword.

#### Free Form (Informal) Protocol

Finally, we must expect that users will send messages that do not comply with any of the above three protocols. There will be many messages that do not contain commands, keywords, nor structured, predefined phrases. It is up to us, bot creators, to decide how to deal with such unstructured messages.

One way to handle such unstructured, fuzzy scenarios is to be outright honest and to always politely reply with “I don’t know”, or “I’m not sure I understand” phrase. It’s a copout, to be sure, but at least it is 100% honest.

However, if the bots are always going to field any unstructured messages with a blunt “I don’t know”, they will quickly lose any charisma and attractiveness for the users. It is therefore much more desirable to make attempts to meet the user halfway, and at least try to reply to some of the unstructured messages.

We are now entering the territory that is sometimes called ‘chitchat’, or ‘banter’. Banter and chitchat happen a lot in everyday life, even in some of the more formalized situations. So long as we train our bots to project a clear signal to the users that their chitchat answers to the unstructured messages are also light hearted, informal messages thrown back at the users, the risk of being misunderstood gets minimized.

Here is where humor plays a useful role. If the dosage of humor is appropriate, chatting with bots can be quite amusing and entertaining. Also, throwing in a bit of trivia could go a long way toward breaking the ice and maintaining the always important pace of the conversation.

#### Avoiding the Rabbit Hole

When bots are engaged in informal chatting with users, there is always clear and present danger that the focus and momentum could fizzle out at any moment. Reaching an impasse in the conversation is never desirable, so we must take precautionary measures to avoid going down the proverbial rabbit hole.

Bots must be designed to keep track of the informal chitchat with the user and to detect when the chitchat reaches the much dreaded point of no return. Depending on the context (and on the particular user profile as well), that point of no return will vary widely. In general, any conversation session that ends up with a lot of informal, semi-joking messages and overall banter is at a risk of becoming meaningless. Once the user becomes aware that their chat with the bot is not only meaningless but also a waste 0f time, the user will develop a tendency to avoid future interactions.

What may be useful from the bot design blueprint standpoint is to work on allocating the ‘banter budget’ per conversation thread. This ‘banter budget’ should be expressible in the number of consecutive informal messages exchanged between the user and the bot. The ‘banter budget’ should also be configurable, so that the bot can be calibrated in real time, as the situation dictates.

When the given conversation thread exhausts its ‘banter budget’, the bot must break the proverbial glass and push the proverbial panic button. This event that is tripping the wire must not be visible to the user. All the bot does when pushing the panic button is issue a message that will attempt to bring the conversation back to the more structured path. There are many possible ways to accomplish that, for example one way would be for the bot to interject and politely remind the user about some of the more structured services available to them. The bot could also at that point offer a refresher on the available commands, available keywords, or even common structured phrases. This is actually a very useful behavioural pattern, because in most cases the users have most certainly forgotten those annoying details.

Useful phrases such as “hey, did you know you can ask me to notify you of any deals on such-and-such?” could be used to pull the conversation out of the doldrums created by sending one too many lame knock-knock jokes.

#### Bots must be Non-Intrusive

As I was building my first bots and trying them out in the wild, I’ve noticed that most people would primarily struggle with the issue of trust. Part of those issues were down to people plainly not understanding that bots are merely an extension of the already existing automated services.

To my astonishment, some people confided in me how they don’t like the fact that the bot is sitting there, eavesdropping on all their activities. They failed to understand that bots only have access to messages sent directly to them, so that was yet another hurdle I had to pass in order to get them to try the bots.

One way that I found works when appeasing people’s anxieties regarding the bots is to offer a very clear service level agreement (SLA) with the bots. The moment the user approaches a bot, it is that bot’s duty to explain to the user that the bot will only have access to messages sent directly to it. Also, it helps if the bot very clearly explains that it will never send a message to the user unless the user first sends the message to it.

#### Opting In and Out

Similar to how the market is regulated to give us, the consumers, the power to opt in or out of being contacted by businesses (be it via telemarketing or email spam etc.), bots must also offer the same ability. By default, bots are not supposed to ever send us any messages. They are there only to respond to the messages we send to them.

However, there are many scenarios where we, the end-users, would benefit from being contacted by a bot. But in order to make that happen, a bot must be configured to explicitly ask the user for the permission to send them the message out of the blue. Furthermore, it is bot’s obligation to enable users to set their preference as to when and how should the message coming from the bot be delivered.

#### Conclusion

The only way bots will be embraced by the marketplace at large is by establishing a clear, predictable communication protocol. In this article I have argued that a bot protocol can and must be nuanced, from the most rigid and constrained one (commands) down to the most flexible, unconstrained banter.

The reasons for this constraint lie in the pressing need for establishing and maintaining predictability, repeatability and consistency. These features help businesses make projections and plan for the future, hence the prevalent disdain for bots who are ‘innovative’, ‘creative’, full of surprises (both pleasant and unpleasant).

Unless we are building a bot that would offer some entertainment value (such as a standup comedian bot, for example), we must make sure that our bot implements very strict set of commands, keywords, structured phrases and other features that can reliably be demonstrated to the users.

_Intrigued? Want to learn more about the bot revolution? Read more detailed explanations here:_

[The Age of Self-Serve is Coming to an End](https://medium.freecodecamp.com/the-age-of-self-serve-is-coming-to-an-end-ae632f7151b2#.tjlvovkhc)  
[Only No Ux Is Good UX](https://medium.com/bots-for-business/https-medium-com-alexbunardzic-only-no-ux-is-good-ux-c24a7cbd12f4#.aqpbs89oj)  
[Stop Building Lame Bots!](https://medium.com/bots-for-business/stop-building-lame-bots-b093dcd5f28b#.c3k9kcprv)  
[Four Types Of Bots](https://chatbotsmagazine.com/four-types-of-bots-432501e79a2f#.9tuz1winx)  
[Is There A Downside To Conversational Interfaces?](https://chatbotsmagazine.com/is-there-a-downside-to-conversational-interfaces-55bed7220c2f#.l43a0r4j4)  
[Are Bots just a Fad? Are GUIs really Superior?](https://medium.com/@alexbunardzic/are-bots-just-a-fad-are-guis-really-superior-a1f52007d2b9#.a7zvp7kx2)  
[Breaking The Fourth Wall In Software](https://medium.freecodecamp.com/breaking-the-fourth-wall-in-software-d08a25df34b7#.jvkf8g6e2)  
[Bots Are The Anti-Apps](https://medium.com/bots-for-business/bots-are-the-anti-apps-869639cfa179#.gf5x3rw22)  
[How Much NLP Do Bots Need?](https://medium.com/bots-for-business/how-much-nlp-do-bots-need-a9fd55d64094#.9r83gcpve)  
[Screens Are For Consumption, Not For Interaction](https://medium.com/bots-for-business/screens-are-for-consumption-not-for-interaction-6151fb8db6d7#.4qh22p38n)








