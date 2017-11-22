---
author: Jason Prechtel
authorTwitter: https://twitter.com/jasonprechtel
authorFacebook: https://facebook.com/10100200549933537
title: "Why I’m Suing the FCC"
subTitle: "After over four months of confusion, controversy, and complete failures of Cybersecurity 101, the Federal Communication Commission’s “Res..."
coverSrc: placeholder
url: https://medium.freecodecamp.org/why-im-suing-the-fcc-887764b35499
id: why-im-suing-the-fcc-887764b35499
date: 2017-09-15T13:11:01.305Z
tags: [
  "Net Neutrality",
  "Politics",
  "Tech",
  "Technology",
  "News"
]
---
# Why I’m Suing the FCC

After over four months of confusion, controversy, and complete failures of Cybersecurity 101, the Federal Communication Commission’s “[Restoring Internet Freedom](https://www.fcc.gov/restoring-internet-freedom)” proposal — a set of rule-changes that could dismantle [Net Neutrality](https://en.wikipedia.org/wiki/Net_neutrality) and forever alter the fabric of the internet — ended up with [22,149,776](https://www.fcc.gov/ecfs/search/filings?proceedings_name=17-108&sort=date_disseminated,DESC) online public comments in response.

But we still don’t know how many of those were left by **_actual people_**.

In short, that’s why I began an investigation that has resulted in [this lawsuit](http://jasonprechtel.com/FOIA/Prechtel-v-FCC.pdf).

To tell the long story, let’s first review what happened over the last several months:

*   FCC Commissioner Ajit Pai announced [a proposed rule](https://apps.fcc.gov/edocs_public/attachmatch/DOC-344614A1.pdf) to change broadband internet regulation from Title II to Title I, along with a period for the public to leave comments that could shape the agency’s final decision.
*   On the same day the “Restoring Internet Freedom” fact sheet was released, [another public notice](https://apps.fcc.gov/edocs_public/attachmatch/DOC-344623A1.pdf) issuing guidance on how to comment on the proceeding was released, which stated “we anticipate that some may wish to submit a large number of comments from multiple individuals, **each with the same or similar content**” and “we anticipate that during some periods of the comment cycle, ECFS [Electronic Comment Filing System] may experience much higher volumes of traffic, and that **some of this traffic may be malicious in nature**.”
*   John Oliver called on his viewers to [comment against the proposal](https://www.youtube.com/watch?v=92vuuZt7wak), only for the [FCC website to crash](http://thehill.com/policy/technology/332414-fcc-says-it-was-victim-of-cyberattack-after-john-oliver-show) in what may (or may not) have been a [coordinated cyberattack](http://www.zdnet.com/article/cio-diary-lessons-from-the-fcc-bot-swarm/).
*   Public comments under real people’s names were found to have been posted [without their knowledge](http://thehill.com/policy/technology/335154-the-individuals-whose-identities-were-used-to-file-fake-anti-net-neutrality).
*   [Multiple](https://medium.com/@csinchok/an-analysis-of-the-anti-title-ii-bots-463f184829bc) [analyses](https://www.recode.net/2017/8/30/16223210/net-neutrality-fcc-21-million-record-comments-duplicates-suspicious-data) claimed that up to millions of comments (pro- or anti-) were likely faked.
*   Members of Congress [demanded investigations](https://www.engadget.com/2017/08/17/congressmen-call-investigation-fcc-cyberattack/) from multiple agencies into the alleged cyberattack.
*   On the last day of the extended deadline to comment, someone figured out that one part of the commenting system could be used to upload [any kind of file to FCC.gov](https://medium.com/contratastic/the-fcc-gov-website-lets-you-upload-documents-and-host-them-there-bdcd5c1a5b8b), capping off an already-fraught public feedback process with even more red flags.

This kind of public commenting period isn’t unusual for the FCC. The agency [regularly announces new proceedings](https://www.fcc.gov/proceedings-actions) and is obliged to allow the public to weigh in on these, either by submitting comments online or by mail.

For this particular proposal, the agency had three online submission methods:

1.  Submitting a single comment through the ECFS form on their website
2.  Submitting a properly-formatted Restoring Internet Freedom ECFS Bulk Upload Template (with multiple individual names and comments) to a special submission widget [created just for this ruling](https://www.fcc.gov/restoring-internet-freedom-comments-wc-docket-no-17-108)
3.  Submitting comments straight into the FCC’s database through their [Application Programming Interface (API)](https://www.fcc.gov/ecfs/public-api-docs.html), by use of a [Data.gov-registered API key](https://api.data.gov/signup/) that requires a first name, last name, and valid email address

All three of these methods were easy to fake comments with. However, it’s the last two methods that allowed for the key problem with the “Restoring Internet Freedom” commenting process: **_anyone could submit comments in bulk_**.

Fortunately, these bulk comments couldn’t be sent completely anonymously. The Bulk Upload Template method also required the submission of the uploader’s email address. The API method required a valid email address to receive the necessary Data.gov API key to begin with — plus, the entire point of an API key system is to give (and track) individual user access to a given server.

Realizing this, I submitted a Freedom of Information Act request to the FCC on June 4, asking for the following:

1.  All public API keys, including associated registration names and e-mail addresses, that were used to submit online comments via ECFS to Proceeding 17–108, “Restoring Internet Freedom” between Apr 26, 2017 and today, and copies of all data files submitted through these API keys for the same.
2.  Logs of all times and dates that said public API keys were used to submit online comments via ECFS to Proceeding 17–108, “Restoring Internet Freedom” between Apr 26, 2017 and today.
3.  E-mail addresses associated with all .CSV comment uploads, along with all .CSV files uploaded in response to Proceeding 17–108, “Restoring Internet Freedom” between Apr 26, 2017 and today (including any accepted .CSV submissions that did NOT use the FCC’s “Restoring Internet Freedom ECFS Bulk Upload Template” .CSV file template).
4.  Logs of all times and dates that said e-mail addresses submitted online comments via the FCC’s online .CSV submission box to Proceeding 17–108, “Restoring Internet Freedom” between Apr 26, 2017 and today.
5.  All e-mail inquiries to [ECFSHelp@fcc.gov](mailto:ECFSHelp@fcc.gov)regarding .CSV comment submissions in response to Proceeding 17–108, “Restoring Internet Freedom” between Apr 26, 2017 and today.

Normally, FOIA requests receive responses from designated FOIA Liaisons at government agencies. Instead, I received an email on June 14 from FCC Associate CIO Kevin Baker, acknowledging my request and informing me that they were extending their legal deadline to respond to my request from July 3 to July 18.

I never heard from the FCC again.

As the agency is legally obliged to respond to my request, and as the underlying questions behind my request still haven’t been answered, I have filed a lawsuit against the FCC for their refusal to conduct a reasonably timely search for the records, and have demanded the release of these records.

Even now, over three months after my FOIA request, and even after I’ve filed a lawsuit, this request is **_still_** listed as “[under agency review](https://foiaonline.regulations.gov/foia/action/public/view/request?objectId=090004d28136a9dc)”.

Of course, these requested records are only through June 4, and will leave out three months worth of millions of comments. However, this sample size should be enough to determine:

1.  If any suspicious uploading patterns with repeat offenders took place during the timeframe of the May 7–8 alleged cyberattack
2.  If any groups of comments submitted by particular email addresses correlate with what other previous comment analyses suspect are fake comments
3.  If any suspicious email address URLs (lobbyists, PR firms, .gov addresses, non-US domain names, etc.) were allowed to submit bulk comments

If there ends up being any eye-opening evidence of what the FCC itself called “malicious in nature” traffic, they will have a lot of explaining to do to American citizens, businesses, and Congressmen alike.

Regardless of your own views on how the internet ought to be regulated, there is a blatant government transparency issue at hand here.

After all, how are we supposed to trust in the integrity of the FCC’s decision-making process when they won’t divulge records showing how millions of comments **_that are already public_** were submitted to begin with, and by who?

Edit: Special thanks to Matt Topic and Josh Burday at [Lovey & Loevy](https://loevy.com/) for taking my case. Matt previously represented me in a [FOIA lawsuit](https://loevy.com/content/uploads/2014/07/Jason-Prechtel-v.-Chicago-Transit-Authority.pdf) against the [Chicago Transit Authority](https://www.chicagoreader.com/chicago/jason-prechtel-interview-ventra-cta/Content?oid=18650024) in 2014.








