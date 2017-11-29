---
author: Alex Beregszaszi
authorTwitter: none
authorFacebook: none
title: "What do cryptic Github comments mean?"
subTitle: "Are you new to Github and/or contributing to open source projects? Have you seen short messages like LGTM, ACK, NACK, etc. and wondered w..."
coverSrc: placeholder
url: https://medium.freecodecamp.org/what-do-cryptic-github-comments-mean-9c1912bcc0a4
id: what-do-cryptic-github-comments-mean-9c1912bcc0a4
date: 2016-03-24T15:47:38.619Z
tags: [
  "Github",
  "Open Source",
  "Programming",
  "Learning",
  "Tech"
]
---
# What do cryptic Github comments mean?

Are you new to Github and/or contributing to open source projects? Have you seen short messages like LGTM, ACK, NACK, etc. and wondered what they mean?

Here you go:

*   LGTM — looks good to me
*   ACK — _acknowledgement_, i.e. agreed/accepted change
*   NACK/NAK —_negative acknowledgement_, i.e. disagree with change and/or concept
*   RFC — request for comments, i.e. I think this is a good idea, lets discuss
*   WIP — work in progress, do not merge yet
*   AFAIK/AFAICT — as far as I know / can tell
*   IIRC — if I recall correctly
*   IANAL — “I am not a lawyer”, _but I smell licensing issues_

Many projects in the crypto space also use the following (_popularised_ by [Bitcoin](https://github.com/bitcoin/bitcoin/issues/6100)’s [_hacker lingo_](https://twitter.com/jgarzik/status/601815506291531776)):

*   Concept ACK — agree with the concept, but haven’t reviewed the changes
*   utACK (aka. Untested ACK) — agree with the changes and reviewed them, but didn’t test
*   Tested ACK — agree with the changes, reviewed and tested

These answers are usually part of the code review process and you would find them in _issues_ or _pull requests_ in Github.

_Honorary mention:_ **_+1_** as the short form of ACK (and in many cases, Concept ACK). After the [famous “Dear Github” letter](https://github.com/dear-github/dear-github), the platform has introduced [proper reactions](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) to declutter comments. No, this is not about making Github your next Facebook :)











* * *







You would also see the ACKs be included in commit messages, like how the Linux kernel does it since Git is being used:

<pre name="b795" id="b795" class="graf graf--pre graf-after--p">Add get_random_long().  

Signed-off-by: Daniel Cashman <dcashman@android.com>  
Acked-by: Kees Cook <keescook@chromium.org>  
Cc: "Theodore Ts'o" <tytso@mit.edu>  
Cc: Arnd Bergmann   
Cc: Greg Kroah-Hartman <gregkh@linuxfoundation.org>  
Cc: Catalin Marinas <catalin.marinas@arm.com>  
Cc: Will Deacon <will.deacon@arm.com>  
Cc: Ralf Baechle <ralf@linux-mips.org>  
Cc: Benjamin Herrenschmidt <benh@kernel.crashing.org>  
Cc: Paul Mackerras <paulus@samba.org>  
Cc: Michael Ellerman <mpe@ellerman.id.au>  
Cc: David S. Miller <davem@davemloft.net>  
Cc: Thomas Gleixner <tglx@linutronix.de>  
Cc: Ingo Molnar <mingo@redhat.com>  
Cc: H. Peter Anvin <hpa@zytor.com>  
Cc: Al Viro <viro@zeniv.linux.org.uk>  
Cc: Nick Kralevich <nnk@google.com>  
Cc: Jeff Vander Stoep <jeffv@google.com>  
Cc: Mark Salyzyn <salyzyn@android.com>  
Signed-off-by: Andrew Morton   
Signed-off-by: Linus Torvalds <torvalds@linux-foundation.org></pre>

Check out the “[How to Get Your Change Into the Linux Kernel](https://www.kernel.org/doc/Documentation/SubmittingPatches)” guide for a thorough explanation.











* * *







Similar short answers are used widely in software engineering and the open source community as they make communication more efficient.

You have surely seen the following in source code — TODO, FIXME, XXX and NOTE — and only wondered what _XXX_ means?

Interested to see a lot more acronyms with explanation and perhaps a bit of history? Check out [The Jargon File](http://www.catb.org/jargon/html/index.html). It is the definitive source since 1975.











* * *







**Bonus trivia**: where does ACK/NACK comes from?

I would say it came from networking/interface protocols, perhaps the popularity of TCP caused widespread usage.

> _SYN, SYN/ACK, ACK, FIN, ACK, FIN, ACK._








