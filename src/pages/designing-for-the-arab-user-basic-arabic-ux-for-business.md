---
author: Anna Rubkiewicz
authorTwitter: none
authorFacebook: none
title: "Designing for the Arab User — Basic Arabic UX for Business"
subTitle: "What you’ll read about in this article:..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*V0fcPJS3oA5t990wXkyQjA.png
url: https://medium.freecodecamp.org/designing-for-the-arab-user-basic-arabic-ux-for-business-6ff29d4c7c60
id: designing-for-the-arab-user-basic-arabic-ux-for-business-6ff29d4c7c60
date: 2017-08-15T21:25:25.027Z
tags: [
  "UX",
  "Startup",
  "Design",
  "Entrepreneurship",
  "Tech"
]
---
# Designing for the Arab User — Basic Arabic UX for Business



![](https://cdn-images-1.medium.com/max/1600/1*V0fcPJS3oA5t990wXkyQjA.png)



**What you’ll read about in this article:**

*   Mirroring layout for an Arabic interface is key, but has its limitations,
*   Digits are written from left to right in Arabic, despite a right-to-left interface,
*   Translating text into Arabic is not enough to create an Arabic interface,
*   Not all words can be translated 1:1 in Arabic; some will result with long, descriptive phrases,
*   Arabic script usually requires a bigger font than that used in the Roman alphabet,
*   It is wise to refer Arab users to content in English (only about 5% of global content is in Arabic).











* * *







As a translator with +10 years of experience (English, Arabic, and Polish), as well as former startup employee responsible for [FMCG](https://en.wikipedia.org/wiki/Fast-moving_consumer_goods) product database development, I can’t help but notice an apparent underrepresentation of the Arab World when it comes to content and user-centered design. Interestingly, it doesn’t correspond to low internet penetration in the Middle East, when compared to the rest of the world. As of March 31st, 2017, there were nearly 142 million users in the region. It means that 57.4% of its inhabitants were online — in comparison to the world average of 49.2%([1](http://www.internetworldstats.com/stats5.htm)).

At the same time, **60% of Arabs (and as many as 97% in Saudi Arabia and Egypt) declare that Arabic would be their language of choice** when browsing or shopping online. Meanwhile, **only 5% of global content is in that language** ([2](https://arabiangazette.com/an-online-arabic-content-revolution-in-the-making/)):







![](https://cdn-images-1.medium.com/max/1200/1*WgzwwsNgz2PrsRnhW4efZw.png)





![](https://cdn-images-1.medium.com/max/1200/1*okIRQtvNtSdeFWDIJLWTBw.png)







A report by the International Data Corporation (IDC) also indicates the worldwide IoT market will reach a worth of $1.71 trillion by the end of 2020, of which $6.6 billion will come from the Middle East and Africa ([3](https://www.wamda.com/memakersge/2017/07/digital-middle-east-making)).



![](https://cdn-images-1.medium.com/max/1600/1*rAgB2AceDKskyQcEcByPcQ.png)



The statistics above prove that Middle Eastern societies are as tech-savvy and active on social media as elsewhere in the world ([4](https://www.thenational.ae/uae/facebook-and-twitter-key-to-arab-spring-uprisings-report-1.428773)). Why is it, then, that they must turn to English-language sites and services to fully benefit from new technologies? Also, why do companies miss the incredible business potential of the region by not adjusting themselves to local sociological, linguistic, and cultural specificities?

This does not solely concern small companies with limited exposure or small design teams. As noticed by UX consulting firm Yalantis, even Apple, which aspires to be the leader of innovative design, had not adjusted its iOS for the RTL (right-to-left) user fully until the release of iOS 9 in late-2015 ([5](https://yalantis.com/blog/japanese-chinese-and-arabic-layouts-in-user-interface-and-user-experience-design/)).

Lastly, what may be done for the Arab user, so that he can use his native language, but still benefit from the copious resources in English?

Listed below are several aspects that shall be taken into consideration when designing for the native Arab speaker, whose sense of chronological order, display, etc., differs from users raised in LTR-script countries.

**Mirror, mirror**

Mirroring is often named the 101 rule anyone who wants to launch an app in the Arab World should follow. While it is a generalization, the main concept is that the RTL layout ought to mirror those created for the LTR (left-to-right) user. While most images of movement in the Western world are shown from left to right (i.e. commercials of speeding cars), Arab script-using countries (so not only the Middle East, but also, for instance, Iran and Pakistan), are more likely to perceive progression and forward movement if shown from right to left.



![](https://cdn-images-1.medium.com/max/1600/1*fNe8s0paz20A5a3qryhdsA.jpeg)

While the man to the right is, in fact, running from right to left, I’m pretty sure the story was intended to be read from left to right… Source: [http://gosmellthecoffee.com/archives/9570](http://gosmellthecoffee.com/archives/9570)



This, exhaustively explained by Google’s Material Design guidelines, includes, among others, icons for direction (icons for “forward” and “back”) and other symbols and icons which indicate movement. It does not, however, mean that all symbols shall be changed accordingly. It must be kept in mind that Arabs are simultaneously users of LTR interfaces and programs, hence, certain symbols (think of Facebook or Google search), do not need to be changed.







![](https://cdn-images-1.medium.com/max/2000/1*oTJmqAKaaprikrdIOxZKvQ.png)









![](https://cdn-images-1.medium.com/max/1600/1*VivEH3LvaSSivLL5QS0ocQ.png)

Examples of mirroring — as you can see, storage space and volume are shown from right to left.





![](https://cdn-images-1.medium.com/max/1600/1*CHntddrj3lIpCoRU-8cZgw.png)

Examples of icons that do not need mirroring when used in a RTL interface.





![](https://cdn-images-1.medium.com/max/1600/1*2B2GtZ867GZPsgpDosCiwA.png)

An interesting application of two rules — the direction of the icon is not mirrored, but the number is changed for the Arab user (here, Hindu-Arab digits are used, which are still simultaneously used in the Arab World, along with Arabic numerals). All of the above examples cited from: [https://material.io/guidelines/usability/bidirectionality.html#bidirectionality-rtl-mirroring-guidelines](https://material.io/guidelines/usability/bidirectionality.html#bidirectionality-rtl-mirroring-guidelines)



Another important limitation of mirroring is **bidirectionality**, common not only in Arabic, but also Eastern Asian scripts. Namely, while text is aligned to the right, numbers are still read from left to right. What does that mean for the designer? He or she should take caution and consider that a long sequence of numbers may “clash” with Arabic script, if layout is not designed responsively.

Examples of digits in Arabic sentences:

في فترة ما بين الحربين العالميتين **1919–1939**  
English: _In the years between the war: 1919–1939 (notice how the first date is written on the right and the end date to its left, despite the numbers being read from left to right)._

بلغ عدد سكان بولندا في ديسمبر [2007](https://ar.wikipedia.org/wiki/2007 "2007") حوالي **38,116,000** نسمة  
English: In December, 2007, the number of inhabitants of Poland reached about **38,116,000.**

An interesting fact is that Arabs currently also use Hindu-Arabic numerals (mentioned above), which are also written from left to right.

**Translation and verification**

I can not underline strongly enough that it won’t just do the job to hire an interpreter to translate text into Arabic and consider the job of creating an Arabic version of a site/app done. Its a semi-tragedy to see a LTR design with Arabic script applied in place of, let’s say, English text. Its a full-fledged tragedy — and one that I have witnessed multiple times — when companies try using Arabic script, but, after processing text in a CMS or editor, letters fall apart and no longer form words. The only thing worse than a chaotic, unpractical design is one where Arabic letters are disconnected on screen/book/product cover and no longer constitute words.

This is a common mistake which has roots in the fact that Arabic letters take on different shapes, depending on their place in a given word:



![](https://cdn-images-1.medium.com/max/1600/1*nlcu6B_Lu3CpHUJRiyU--w.png)

Source: [http://tjhomeschooling.blogspot.com/2015/11/thm-sadaqa-group-has-nice-simple-arabic.html](http://tjhomeschooling.blogspot.com/2015/11/thm-sadaqa-group-has-nice-simple-arabic.html)



If we don’t know how to read the Arabic script, we are **at risk of having whole sentences displayed in an unreadable form**. Below is an example which shows two errors:

*   the letters are in their isolated form (so do not form words)
*   the letters are written from left to right instead of right to left (so, backwards).



![](https://cdn-images-1.medium.com/max/1600/1*crI4cFwHA7T5vgyyZWJnYw.jpeg)

Source: [http://www.arabicgenie.com/wp-content/uploads/2009/08/disconnected-lefttoright.jpg](http://www.arabicgenie.com/wp-content/uploads/2009/08/disconnected-lefttoright.jpg)



Hence, it is best to always have an Arabic-speaking person proof read any translated text before having it sent into production. Also, if there was one font I would recommend to use for translating text into non-Roman scripts, it would be [**Noto**](https://www.google.com/get/noto/), a **universal font designed by Google.** It will, at least, eliminate the risk of “tofu”:



![](https://cdn-images-1.medium.com/max/1600/1*Cr8ElYmR21GooTaZbYImtA.gif)

Source: [http://www.monotype.com/resources/case-studies/more-than-800-languages-in-a-single-typeface-creating-noto-for-google/](http://www.monotype.com/resources/case-studies/more-than-800-languages-in-a-single-typeface-creating-noto-for-google/)



**1:1 translations**

Avoiding technical errors is not the only thing to look out for, as word to word translation doesn’t always cut it either. While certain Arab countries are quite liberal with the use of foreign words in case of no literal equivalent, some prefer to use descriptive translations. The first case is especially true of apps which are designed for the young customer, and are often created in local, colloquial dialects. Others, such as apps used for work or academic purposes, applicable for multiple Arabic markets, are more likely to be written in Modern Standard Arabic (MSA), which is quite formal and standardized. As a result, a word of 10 letters in English, translated to formal Arabic, may result in a descriptive Arabic phrase of 2–3 words (thus taking up more space). Also, keep in might that there are relatively few abbreviations in Arabic, so no shortcuts there.

Here are some examples of words with their translation in Arabic (notice the lenght of the words):

TV — تلفزيون (this is a loanword read: te-le-fee-syoo-n)

KFC — دجاج كنتاكي

TV show — برنامج تلفزيوني

Another challenge is that most Arabic letters are written together, many have dots (look at: ب, ت, ج, ث, ي), and, in certain cases, diacritics (small symbols for vowels) are written above the letters (read into it [here](https://en.wiktionary.org/wiki/vowelization#English)). This all means that, in order to make reading comfortable for the end user, **a bigger font may be required** than that used for the same word in English.

The following example shows Arabic font 3 points larger than English text (first image) and fonts of same size (second image):



![](https://cdn-images-1.medium.com/max/1600/1*yf-ujv_ZEC_0IaXVYIepOg.png)





![](https://cdn-images-1.medium.com/max/1600/1*p2Eu646-Gz8VwxoLaTripQ.png)



> To read more about the Arabic alphabet, click [here](http://www.arabic-course.com/arabic-alphabet.html).

I worked on a similar language task while employed at an FMCG-targeted startup. The product, a daily shopping app, was to accommodate both Polish and English-language speakers. The original JSON texts, written in English, were then to be translated into Polish, and eventually launched in Apple Store and Google Play for Polish-speaking users. While Polish vocabulary is rich, and both the original and target languages are LTR scripts, it was quite a challenge to translate all strings of text so that they do not derange the layout, and maintain consistent communication style (casual) in both languages. It is therefore crucial that translators be engaged in the design process, have access to prototypes, and are aware of where each translated text will go in the app.

**English language Internet as an alternative**

While various reports indicate that Arab users are online and would very much appreciate browsing and using services in Arabic, it will take years for online businesses and services to deliver the amount and type of content that would make a monolingual experience possible. Device interfaces, available fully in Arabic, are one thing; another is performing a task, such as searching for a complex topic in Arabic or purchasing online, and finding sufficient information in the given language.

Wikipedia’s referring system is a great example of how a user may be referred to information in English, if their language of choice was not enough. The same could successfully be applied by other websites — an Arabic interface user could be referred to English language content, or English results could be incorporated in results of an Arabic language search.

This would definitely enhance user experience and, in effect, raise sales and exposure of a given service. Let us imagine a product we have in stock, but with no content available in Arabic apart from the product name. This should not stop us from showing an Arab consumer product information in English — he or she is more likely to purchase if an English description, terms of delivery, and availability details are available in place of empty fields. A properly designed interface should make this flexible LTR and RTL mix possible.

**Conclusion**

Designing for Arab script users does not finish with having content translated from a foreign language. It requires consideration, attention to detail, and the conscience that, while common practices, such as mirroring, may be applied, Arab users are already used to certain tools and solutions of left-to-right interfaces. Businesses should observe the MENA market, its local startup scene, online trends, and sociopolitical changes. This, among other arguments I will write about in future posts, shall provide a consistent way to communicate and deliver services for the Arab market.











* * *







_If you’re looking for Arabic UX consultations for your business/project, you’re more than welcome to contact me through my_ [_LinkedIn_](https://www.linkedin.com/in/annarubkiewicz/) _page._

**Recommended reading:**

A great 3-part guideline for creating Arabic interfaces:  
[http://uxbert.com/designing-an-arabic-user-experience-usability-arabic-user-interfaces/](http://uxbert.com/designing-an-arabic-user-experience-usability-arabic-user-interfaces/)

Harvard Business Review on understanding the Arab Consumer:  
[https://hbr.org/2013/05/understanding-the-arab-consumer](https://hbr.org/2013/05/understanding-the-arab-consumer)

Smashing Magazine on Web Design in the Arab World:  
[https://www.smashingmagazine.com/2010/09/showcase-of-web-design-in-the-arab-world/](https://www.smashingmagazine.com/2010/09/showcase-of-web-design-in-the-arab-world/)

Why is it so difficult to design Arabic typefaces:  
[https://www.wired.com/2015/10/why-its-so-hard-to-design-arabic-typefaces/](https://www.wired.com/2015/10/why-its-so-hard-to-design-arabic-typefaces/)

Arabic website design resources by CXPartners:  
[https://www.cxpartners.co.uk/our-thinking/arabic-website-design-resources/](https://www.cxpartners.co.uk/our-thinking/arabic-website-design-resources/)

A fascinating article and app for those interested in designing for Urdu speakers:  
[http://wahibhaq.com/blog/introducing-urdu-font-comparator-app/](http://wahibhaq.com/blog/introducing-urdu-font-comparator-app/)








