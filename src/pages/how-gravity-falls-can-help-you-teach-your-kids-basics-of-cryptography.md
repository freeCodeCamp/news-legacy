---
author: Kamil Tustanowski
authorTwitter: https://twitter.com/tustanowskik
authorFacebook: https://facebook.com/1544191442274207
title: "How “Gravity Falls” can help you teach your kids basics of cryptography"
subTitle: "It’s Wednesday evening. My two sons and daughter are ready. I press play and we start a journey that takes us all farther than we ever an..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*i1wUMam8Rgkq-XMwmu7YlA.png
url: https://medium.freecodecamp.org/how-gravity-falls-can-help-you-teach-your-kids-basics-of-cryptography-18e1c6f9ac39
id: how-gravity-falls-can-help-you-teach-your-kids-basics-of-cryptography-18e1c6f9ac39
date: 2017-08-06T12:37:42.231Z
tags: [
  "Life",
  "Technology",
  "Self Improvement",
  "Cryptography",
  "Children"
]
---
# How “Gravity Falls” can help you teach your kids basics of cryptography



![](https://cdn-images-1.medium.com/max/1600/1*i1wUMam8Rgkq-XMwmu7YlA.png)



It’s Wednesday evening. My two sons and daughter are ready. I press play and we start a journey that takes us all farther than we ever anticipated.

We watched the first episode of [Gravity Falls](http://www.imdb.com/title/tt1865718/). The visuals, characters, plot and humor are top notch and we definitely wanted more but… we spotted something at the end of credits. Something we didn’t expect. Something that made watching this series far more interesting and engaging.

An `encrypted message`.

Here’s how we deciphered the codes. And we had a great fun doing this on our own. Without checking any of this in the internet. If I’ve caught your interest, I recommend you to stop reading and try doing this yourself. Then you can come back and read my solutions and explanations below later.

#### **ZHOFRPH WR JUDYLWB IDOOV**

We were certain this was a message. By the looks of it I was guessing that it’s encrypted with some kind of substitution cipher.

> Encrypting using substitution cipher basically substitutes letters with other letters based on some general rule. Decrypting is done by applying this rule in reverse to encrypted text. This kinds of ciphers are not used anymore because they are easy to break i.e. with [cryptoanalysis](http://practicalcryptography.com/ciphers/simple-substitution-cipher/#cryptanalysis). You can find more details on this [wiki page](https://en.wikipedia.org/wiki/Substitution_cipher).

At first we were too excited about the story to focus on the ciphers just yet. We just acknowledged that the ciphers exist and we didn’t know how to decrypt them. I thought we would just break them later but…

After one episode my son had an idea. He wanted to watch show intro. Backwards. I thought `why not` ? Guess what! When you watch it backwards at some point you can hear hidden message:

**Three letters back**

Hmm… `three letters back`. Normally this would’t make any sense. But we had ciphers which we didn’t know how to decode. For us this made perfect sense.

#### Hello Mr. Caesar

> The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is ‘shifted’ a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who apparently used it to communicate with his generals. Read more [here](http://practicalcryptography.com/ciphers/classical-era/caesar/).

I printed english alphabet for everyone from [here](https://en.wikipedia.org/wiki/English_alphabet) and decrypting started:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/22c66241f03526484044c9085433001a?postId=18e1c6f9ac39" data-media-id="22c66241f03526484044c9085433001a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1196004%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





`Z` → `W` because if we move `3` letters back from `Z` we end up with `W`   
`H` → `E`   
…  
`B`→ `Y` because if we move `1` letter back we end up on `A` and the next `2` we have to `count` from the end of alphabet so in the end it’s `Y`

After a while we knew that **ZHOFRPH WR JUDYLWB IDOOV** is actually **WELCOME TO GRAVITY FALLS.**

My kids loved it.

When they were `manually` decrypting next messages I thought that this is great opportunity to actually show them what I’m doing at work. In the way it’s easier for them to understand.

I started new `Swift Playground` because it’s offering awesome way for working with code. And started coding. I wrote this just for fun so please don’t judge 😉:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a13d58142e7c2a977c02bf32de01a3cc?postId=18e1c6f9ac39" data-media-id="a13d58142e7c2a977c02bf32de01a3cc" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1196004%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





When manual decoding was done I sit down with my children in front of a computer. I explained that my code is doing the same things they were doing when decrypting messages. But instead of doing this manually it’s automatic and can used many times. They didn’t understood the code, I would be surprised if they did, but I’m pretty sure they got `the idea`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8ef448b80c685fe51195f0d30a840253?postId=18e1c6f9ac39" data-media-id="8ef448b80c685fe51195f0d30a840253" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1196004%3Fv%3D4%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





#### KZKVI QZN WRKKVI HZBH: “ZFFTSDCJTSTZWHZWFS!”

Everything was great until episode `7`. We started decoding first word and:   
`KZKVI` → `HWHSF`   
Oh-oh, our luck just run out. It was clear that cipher has changed. Luckily there was a `clue` in message we did decrypt for episode `6` :

MR. **CEASAR**IAN WILL BE OUT NEXT WEEK MR. **ATBASH** WILL SUBSTITUTE

`Ceasar cipher` → `Atbash cipher`

#### Hello Mr. Atbash

> The Atbash cipher is a substitution cipher with a specific key where the letters of the alphabet are reversed. I.e. all ‘A’s are replaced with ‘Z’s, all ‘B’s are replaced with ‘Y’s, and so on. It was originally used for the Hebrew alphabet, but can be used for any alphabet. Read more [here](http://practicalcryptography.com/ciphers/classical-era/atbash-cipher/). Atbash encrypted strings can be found even in a Bible. You can read a bit more about this in [here](https://www.gotquestions.org/Atbash-code.html).

This time it was a bit more time consuming because we had to check character index from beginning and then find letter with this index counted from the end of alphabet. Again my kids were decrypting this manually:  
`K` → `P` because index of `K` is `11` and when we count `11` from the end of alphabet we get `P`   
`Z` → `A`   
`K` → `P`   
`V` → `E`   
`I` → `R`   
`KZKVI` → `PAPER` This made sense again.

After a few minutes my daughter approached me and asked whether she decrypted the message properly. She did. But this wasn’t most interesting. I noticed that she wrote something on the printed alphabet page. Above the alphabet indexes `1, 2, 3, …, 26` she added reversed index numbers `26, 25, 24, …, 1`.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ecc86c7cde1f5972c2e9455b4154afa8?postId=18e1c6f9ac39" data-media-id="ecc86c7cde1f5972c2e9455b4154afa8" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1196004%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Thanks to this she didn’t have to count from the end of alphabet anymore. We, programmers, call this `optimization`. I was amazed that she already started to improve her toolset to make job easier.  
Again I prepared small piece of code that was able to decode the messages:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/ba0369bbdeba35cd4a9c183857463d38?postId=18e1c6f9ac39" data-media-id="ba0369bbdeba35cd4a9c183857463d38" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1196004%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### 14–5–24–20 21–16: “6–15–15–20–2–15–20 20–23–15: 7–18–21–14–11–12–5'19 7–18–5–22–5–14–7–5”

All was good until episode `14.`Then out of the blue cipher changed again. We didn’t get any clue this time. Or maybe just missed it?

Well… maybe not exactly without any `clue`. The greatest number in ciphered text was `24` smallest was `2`. Alphabet letters has indexes from `1` to `26`. Based on this we made educated guess that:   
`1` → `A`   
`2` → `B`   
…  
`26` → `Z`

When `14–5–24–20` decoded to `NEXT` we knew that our assumption was correct.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/69e97b9ceaa861ab02bff46249a7f32c?postId=18e1c6f9ac39" data-media-id="69e97b9ceaa861ab02bff46249a7f32c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F1196004%3Fv%3D4%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





It was a bit more annoying because I didn’t want to strip the message from any characters when decoded. If it doesn’t work for you — please remove unsupported `non-aplhanumeric-characters` or add currently unsupported characters to `.replacingOccurrences`. Like I said. Don’t judge 😂

#### 5–19–23–6–21–16 18–9–6 4–16–19 22–12–15–10–20–19–25–19

We failed again when we tried to decrypt first word from message from episode `20`.   
`5–19–23–6–21–16` → `ESWFUP`

Cipher changed. But we didn’t give up easily. `Hint` there is an , encrypted`clue`, that says how to decode this message. But I’m leaving this to you. It’s just too much fun to work on this stuff.

Please note that this series has `two seasons` filled with `mysteries and encrypted messages`. You won’t get bored.

#### The end?

Now when I know that my children like to play with cryptography I have a few ideas on the`next step`. Definitely it’s not the last time they were working with ciphers and encrypted messages.

Thanks for reading! I hope that I was able to interest you a bit with this. If you actually try this with your kids please add a comment about it. I’m very curious whether it was as fun to you as it was for us.








