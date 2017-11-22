---
author: Quincy Larson
authorTwitter: https://twitter.com/ossia
authorFacebook: https://facebook.com/10100956570023241
title: "Our nonprofit needed a cheaper way to send email blasts. So we engineered one."
subTitle: "Every week, I send an email blast to a million people who’ve signed up for freeCodeCamp.org...."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*th13skTPFs53EtCuupOYQA.jpeg
url: https://medium.freecodecamp.org/our-nonprofit-needed-a-cheaper-way-to-send-email-blasts-so-we-engineered-one-167322e3f28e
id: our-nonprofit-needed-a-cheaper-way-to-send-email-blasts-so-we-engineered-one-167322e3f28e
date: 2017-09-15T14:56:46.584Z
tags: [
  "Tech",
  "Startup",
  "Marketing",
  "Open Source",
  "Entrepreneurship"
]
---
# Our nonprofit needed a cheaper way to send email blasts. So we engineered one.







![](https://cdn-images-1.medium.com/max/2000/1*th13skTPFs53EtCuupOYQA.jpeg)







Every week, I send an email blast to a million people who’ve signed up for freeCodeCamp.org.

These are high-deliverability emails — sent through Amazon Web Services — and they only cost our nonprofit $0.0001 each.

This means I’m able to send out all 1,000,000 emails — while avoiding most spam filters — for a grand total of only $100.

And for the past year, I’ve been using a new tool to send these emails. It gives me a convenient browser interface with lots of advanced email campaign features:

*   HTML templates
*   Analytics dashboards
*   Email open tracking (tracking pixels)
*   Click tracking (tracking links)
*   Embeddable sign up widgets
*   Unsubscribe functionality
*   List importing and exporting
*   Role-based data access permissions

We built this tool internally.

It’s completely free.

It’s completely open source.

It’s called **Mail for Good**.

And today, we’re releasing it to the public. It’s going into open beta. And nonprofits around the world can start using it immediately.







![](https://cdn-images-1.medium.com/max/2000/1*GZMRxCypObAcdL3AFTjBDg.png)

A screenshot from Mail for Good’s browser-based interface







### Mail for Good is an ultra-low-cost, high-deliverability email marketing tool for nonprofits.

OK — if you’re jumping out of your chair, already sold on using this, [here’s the GitHub repository](https://github.com/freeCodeCamp/mail-for-good). Go out there and make the world a better place.

But if you’re still wondering whether something like Mail for Good is a good fit for your organization, let me give you some more details.

### Mail for Good is the cheapest way to send high-deliverability email.

It’s free and open source. You just need a server to run it on. We run it on a $10 per month cloud server. You could do that, too. Or you could just run it on one of your existing servers for free.

Then you pay Amazon $1 per 10,000 emails sent through their Simple Email Service.

If you have a million emails on your mailing list, and you send out one email blast each month, this means you’d spend $100 per month.

Let’s say you send one email blast each week. Then you’d spend $400 per month.

Let’s say you send three email blasts per week. Then you’d spend $1,200 per month.

For reference, here’s how much it costs to host a mailing list of one million subscribers on MailChimp — regardless of whether you even send them any emails: **$4,399 per month**.







![](https://cdn-images-1.medium.com/max/2000/1*ebMNX_0lVBNvOyc0M7f1iw.png)

MailChimp’s costs $4,200 + $199 each month for a mailing list of 1,000,000 subscribers.







And the other email campaign tools tools aren’t much cheaper. Most of them won’t even tell you their rates unless you call them.







![](https://cdn-images-1.medium.com/max/2000/1*ka7bwxeLuKqaWlFPtKgbPw.png)







### With Mail for Good, _your_ email list data stays on your server.

You don’t have to worry about a third-party mail service getting hacked and your subscribers’ email addresses getting breached. You control all of your organization’s data.

If you want for one of your team members — or even a volunteer — to be able to design email templates or look at analytics, you can give them permission to do so — without giving them access to your data.

You can also easily import and export your data. And you can maintain as many mailing lists as you want.

### Mail for Good gets new features all the time.

Since Mail for Good is open source (with the permissive BSD-3 license), any organization who uses it can easily contribute back their improvements.

And the freeCodeCamp community is actively contributing and maintaining Mail for Good. So it should continue to steadily improve over time.

Future releases will include features like A/B testing, and integrations with other popular tools used by nonprofits.

Everything is being coordinated right out in the open using GitHub. Anyone can request a specific feature they need for their organization, or report a bug they’ve discovered, [by opening a GitHub issue](https://github.com/freeCodeCamp/mail-for-good/issues).

### Frequently Asked Questions

#### Do I have to be with a nonprofit organization to use Mail for Good?

Anyone can use Mail for Good. We are a nonprofit, and we built this tool with nonprofits in mind. But entrepreneurs, businesses, and even governments could use Mail for Good and save a considerable amount of money in the process.

#### How can I setup Mail for Good?

Unless you have your own servers already, we recommend setting up a cloud server on Amazon Web Services. Amazon is cheap, secure, and many organizations use them — including Netflix. [Here are detailed instructions for how to set up Mail for Good on Amazon](https://github.com/freeCodeCamp/mail-for-good/blob/master/docs/aws_deploy.md).

#### Who built Mail for Good?

Mail for Good has already taken thousands of developer-hours of work so far. Maintaining it and extending its features will take thousands more.

So far all of this has been done by volunteer contributors, over the period of about a year.

Here are some of the people who’ve been instrumental in its development so far:

*   [Andrew Walsh](https://github.com/AndrewGHC)
*   [Ian Hawes](https://github.com/4iar)
*   [Valentin Dupas](https://github.com/zhakkarn)
*   [Carl Kashnier](https://github.com/CarlJKashnier)
*   [Michael D. Johnson](https://github.com/CodeNonprofit)
*   [Joel Bentley](https://github.com/joel-bentley)

#### How can I help this project?

The most immediate way you can help is to use it for your organization’s email blasts. We don’t collect any of your usage data, so the only way we will know what you think of it is if you tell us. You can also report any bugs you encounter.

If you want to contribute code to the project, join [the Mail for Good Gitter chatroom](https://gitter.im/FreeCodeCamp/mail-for-good) and introduce yourself.

Mail for Good is just one of many tools the freeCodeCamp community is building to help nonprofits accomplish more with less. If you want to support our nonprofit’s efforts, you can [set up a monthly donation you can afford](https://www.freecodecamp.org/donate).

Thanks for reading. Happy emailing!








