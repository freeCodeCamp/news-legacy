---
author: Jonathan Z. White
authorTwitter: https://twitter.com/JonathanZWhite
authorFacebook: none
title: "From Zero to Front-end Hero (Part 1)"
subTitle: "I remember when I first started learning front-end development. I encountered so many articles, and was so overwhelmed by how much materi..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*vcUBRwST9B4bJcVCbailhw.png
url: https://medium.freecodecamp.org/from-zero-to-front-end-hero-part-1-7d4f7f0bff02
id: from-zero-to-front-end-hero-part-1-7d4f7f0bff02
date: 2016-05-17T13:59:16.984Z
tags: [
  "CSS",
  "Web Development",
  "Front End Development",
  "Tech",
  "JavaScript"
]
---
# From Zero to Front-end Hero (Part 1)

I remember when I first started learning front-end development. I encountered so many articles, and was so overwhelmed by how much material I would need to learn that I didn’t even know where to start.

This guide will help you navigate learning front-end development. It provides learning resources that I found effective in the past, along with supplementary explanations.

To keep this guide digestible, I broke it up into two parts. Part one goes over developing interfaces with HTML and CSS. Part two goes over Javascript, frameworks, and design patterns. If you’re familiar with HTML and CSS you can skip to part two which covers everything Javascript.

[**From Zero to Front-end Hero (Part 2)**  
_A complete guide to learning front-end development_medium.com](https://medium.com/p/adfa4824da9b "https://medium.com/p/adfa4824da9b")[](https://medium.com/p/adfa4824da9b)

### HTML and CSS basics

In front-end development, everything starts with [HTML](https://en.wikipedia.org/wiki/HTML) and [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets). HTML and CSS control what you see on a web page. HTML dictates content while CSS handles styling and layout.



![](https://cdn-images-1.medium.com/max/1600/1*1msCRn-wDUzuGtI1yPUbAA.gif)

[From code to interface](https://dribbble.com/shots/1746086-Liberio-Code-to-Interface)



To get started, read the [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction) and [CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/What_is_CSS) tutorials by Mozilla Developer Network(MDN). The MDN provides chapter-by-chapter explanations of important HTML and CSS concepts. In addition, each chapter is only a page long, with interactive demos linked out to CodePen and JSFiddle.

After completing those tutorials, take a look at the [Make a Website](https://www.codecademy.com/learn/make-a-website) course by CodeAcademy. This tutorial only takes a few hours to complete, and is a good primer for building websites with HTML and CSS. If you want more, [Building web forms](https://www.codecademy.com/courses/web-beginner-en-Vfmnp/0/2?curriculum_id=50b91eda28c2fb212300039e) is another tutorial by CodeAcademy that takes you through building and styling a web form.

For practice with CSS, try out [CSS Diner](http://flukeout.github.io/). It’s a fun CSS challenge game. Another important aspect of HTML and CSS are layouts. [LearnLayout](http://learnlayout.com/) is an interactive tutorial that shows you how to create layouts with HTML and CSS.

Also, learn how to use [Google Fonts](https://www.google.com/fonts) with [Basics of Google Font API](https://css-tricks.com/snippets/css/basics-of-google-font-api/) by CSSTricks. Typography is a fundamental building block of interfaces. When you have time, I would highly recommend you read this free online book, [Professional Web Typography](https://prowebtype.com/) by Donny Truong. It teaches you everything you need to know about typography as a front-end developer.

Throughout these resources, don’t worry too much about memorizing things. Instead, focus on understanding how HTML and CSS work together.











* * *







### Practicing HTML and CSS Basics

Now that you have a basic grasp of HTML and CSS, let’s have some fun. In this section, there are two experiments designed to give you practice building websites and interfaces. I use the term “experiments” because in experiments, you learn as much from your failure as you do from your success.

#### Experiment 1

In our first experiment, we are going to use [CodePen](http://codepen.io/). CodePen is a front-end playground where you can code HTML and CSS without having to store files locally. It also has live previews that update as soon as you save your code.

By using CodePen, you kill two birds with one stone. On one hand, you practice HTML and CSS. On the other hand, you create a basic progress portfolio. We are also going to use [Dribbble](https://dribbble.com/), which is a site full of design inspiration.

Go to Dribbble and find a design that is simple enough to code in a few hours. I selected a few designs to get you started: [1](https://dribbble.com/shots/2262761-Mobile-Blog-App-Interface/attachments/424147), [2](https://dribbble.com/shots/2492038-Task-List-App/attachments/489171), [3](https://dribbble.com/shots/2144170-Day-014-Location-Card/attachments/392323), [4](https://dribbble.com/shots/2639709-Confirm-Reservation/attachments/528798), and [5](https://dribbble.com/shots/2314157-Daily-UI-Day-1/attachments/439137). I chose mobile-first web designs because they are less complex than their desktop counterparts. However, feel free to choose desktop designs as well.



![](https://cdn-images-1.medium.com/max/1600/1*fJ77FSYZ3uadewW0Z8F_ZA.png)



After you’ve decided on a design, go ahead and try coding it in CodePen. If you get stuck, remember that [StackOverflow](http://stackoverflow.com/) is your friend. Another useful practice is to go on websites like [Medium](http://medium.com/), [AirBnB](http://www.airbnb.com/), and [Dropbox](http://www.dropbox.com/) and using the i[nspector tool](https://developer.chrome.com/devtools) to see how they achieve different layouts and styles. Also, take a look at some of the [pens on CodePen](http://codepen.io/pens/). I picked out a few good references:

*   [Menu App Interface](http://codepen.io/ManarKamel/pen/BooXJw)
*   [Twitter Widget](http://codepen.io/cameronbaney/pen/gfjLJ)
*   [Article News Card](http://codepen.io/jonathanzwhite/pen/GZVKmE)
*   [Simple Flat Menu](http://codepen.io/Jeplaa/pen/adnoH)

If your copy looks different from the original, don’t be discouraged. Keep practicing with different designs and you’ll notice improvement each time.

If you don’t have a design background, it’s likely your design eye is underdeveloped. A front-end developer with a good design eye will be able to identify good designs and replicate them perfectly. I wrote an article a few weeks ago on how to [develop your design eye](https://medium.com/@JonathanZWhite/developing-your-eye-for-design-cce944bbeae4#.tsg9204dm).

#### Experiment 2

Hopefully the first experiment gave you some confidence with writing HTML and CSS. For experiment 2, we’re going to take a look at some sites, then code a few of their components.

Some websites use CSS frameworks or obfuscate their CSS classnames, making it hard for you to read their source code. That is why I selected a few well-designed websites with easy to read source code.

*   [Dropbox for Business](https://www.dropbox.com/business): Try replicating their [hero](https://en.wikipedia.org/wiki/Hero_image) section
*   [AirBnB](https://www.airbnb.com/): Try replicating their footer
*   [PayPal](https://www.paypal.com/home): Try replicating their navigation bar
*   [Invision](http://www.invisionapp.com): Try replicating their signup section at the bottom of the page
*   [Stripe](https://stripe.com/us/pricing): Try replicating their payments section

Once again, the focus of experiment 2 is not to recreate the entire page. Although that certainly wouldn’t hurt! Choose a couple of key components like a navigation bar or a hero section to code. I provided a suggestions next to the list of sites but feel free to choose other components.



![](https://cdn-images-1.medium.com/max/1600/1*RGfXwH8rD3vQPAGIwhikVA.png)



You can code this experiment in [CodePen](http://codepen.io/) or store it locally. If you choose to store it locally, you can either download this [example project](https://github.com/murtaugh/HTML5-Reset) as a boilerplate or create the files from scratch. I suggest using an editor like [Atom](https://atom.io/) or [Sublime](https://www.sublimetext.com/).

Also, keep in mind that for any website, you can always see its HTML and CSS. Just right click the page or a component on the page, click _inspect_, and a panel will pop up with the HTML on the left and the CSS on the right. Once you are done or get stuck, use the inspector to see how your HTML and CSS compare.











* * *







### HTML and CSS Best Practices

So far what you’ve been learning are the basics of HTML and CSS. The next step is to learn best practices. Best practices are a set of informal rules that improve the quality of your code.

#### **Semantic Markup**

One of the best practices for HTML and CSS is to write semantic markup. Good web semantics means using appropriate HTML tags and meaningful CSS class names to convey structural meaning.

For example, the _h1_ tag tells us that the text it wraps is an important heading. Another example would be the _footer_ tag, which tells us that the element belongs at the bottom of the page. For further reading, read [A Look Into Proper HTML5 Semantics](http://www.hongkiat.com/blog/html-5-semantics/) and [What Makes For a Semantic Class Name](https://css-tricks.com/semantic-class-names/) by CSSTricks.

#### **CSS Naming Conventions**

The next important best practice for CSS is proper naming conventions. Good naming conventions, like semantic markup, convey meaning and help make our code predictable, readable, and maintainable. You can read about the different naming conventions in the article [OOCSS, ACSS, BEM, SMACSS: what are they? What should I use?](http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/)

In general, I suggest trying out simple naming conventions that make intuitive sense to you. Over time, you’ll discover ones that work best for you. To see how companies like Medium utilize naming conventions like BEM, read [Medium’s CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.ef81j61eg). In that article, you’ll also learn that coming up with an effective set of CSS conventions is an iterative process.

#### CSS Reset

Browsers have small styling inconsistencies from margins to line-heights. For this reason, always reset your CSS. [MeyerWeb](http://meyerweb.com/eric/tools/css/reset/index.html) is a popular reset. If you want to dig deeper, you can read [Create Your Own Simple Reset.css File](http://code.tutsplus.com/tutorials/weekend-quick-tip-create-your-own-resetcss-file--net-206).

#### **Cross Browser Support**

Cross browser support means that your code supports most up-to-date browsers. Some CSS properties like _transition_ need [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) to work properly in across different browsers. You can read more about vendor prefixes in this article, [CSS Vendor Prefixes](http://webdesign.about.com/od/css/a/css-vendor-prefixes.htm). The main take away is that you should test your website across multiple browsers including Chrome, Firefox, and Safari.



![](https://cdn-images-1.medium.com/max/1600/1*pCAitbJZl5eai2oNdzIphA.png)



#### **CSS Preprocessors and Postprocessors**

Since the introduction of CSS in 1990s, CSS has come a long way. Since UI systems have become increasingly complex, people came up with tools known as preprocessors and postprocessors to manage complexity.

CSS preprocessors are CSS language extensions that add bells and whistles like variables, mixins, and inheritance. The two main CSS preprocessors are [Sass](http://sass-lang.com/guide) and [Less](http://lesscss.org/). In 2016, Sass is generally more widely used. Bootstrap, the popular responsive CSS framework, is switching from Less to Sass as well. Also, when most people talk about Sass, they’re actually talking about [SCSS](https://www.sitepoint.com/whats-difference-sass-scss/).



![](https://cdn-images-1.medium.com/max/1600/1*7Px9Kzaw8-eLCf2D41yauQ.png)



CSS postprocessors apply changes to CSS after it has been either hand written or compiled by a preprocessor. For example, some postprocessors like [PostCSS](https://github.com/postcss/postcss) have plugins that add browser vendor prefixes automatically.

When you first discover CSS preprocessors and postprocessors, it’s tempting to use them everywhere. However, start off simple and add extensions like variables and mixins only when necessary. The article I suggested earlier, [Medium’s CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.ef81j61eg), also covers how much is too much when it comes to preprocessors.

#### **Grid Systems and Responsiveness**

Grid systems are CSS structures that let you stack elements horizontally and vertically.



![](https://cdn-images-1.medium.com/max/1600/1*SqbRKZTnd78gsQEOPPAt1g.png)



Grid frameworks like [Bootstrap](http://getbootstrap.com/), [Skeleton](http://getskeleton.com/), and [Foundation](http://foundation.zurb.com/) provide stylesheets that manage rows and columns in layouts. While grid frameworks are useful, it’s also important to understand how grids work. [Understanding CSS Grid Systems](http://www.sitepoint.com/understanding-css-grid-systems/) and [Don’t Overthink Grids](https://css-tricks.com/dont-overthink-it-grids/) are great overviews.

One of the main purposes of grid systems is to add _responsiveness_ to your website. Responsiveness means that your website resizes based on window width. A lot of times responsiveness is achieved by using [CSS media queries](http://www.w3schools.com/css/css_rwd_mediaqueries.asp), CSS rules that only only apply to certain screen widths.



![](https://cdn-images-1.medium.com/max/1600/1*EERzyzZhHJ5FWXKi2PNxuA.gif)



You can read more about media queries in [Intro to Media Queries](https://varvy.com/mobile/media-queries.html). Also, because we have entered a [mobile-first](http://zurb.com/word/mobile-first) era, check out [An Introduction to Mobile-First Media Queries](http://www.sitepoint.com/introduction-mobile-first-media-queries/).











* * *







### Practicing HTML and CSS Best Practices

Now that you are armed with best practices, let’s battle test them. The goal of these next two experiments is to practice writing clean code and observing the long term effect of best practices on readability and maintainability.

#### Experiment 3

For experiment 3, pick one of your previous experiments and refactor your code using some of the best practices you’ve learned. Refactoring means editing your code so that it’s easier to read and less complex.

Being able to effectively refactor code is an important skill of a front-end developer. Creating quality code is an iterative process. [CSS Architectures: Refactor Your CSS](https://www.sitepoint.com/css-architectures-refactor-your-css/) is a good starting point for refactoring your code.



![](https://cdn-images-1.medium.com/max/1600/1*u0dt7ROmLrAV4sm7uqtxWA.png)

[It’s not at all important to get it right the first time. It’s vitally important to get it right the last time.](https://dribbble.com/shots/2035328-Fixel-Development-Icon)



Here are a few things to ask yourself when you are refactoring your code.

*   Are your class names ambiguous? 6 months from now, will you still understand what your class name means?
*   Is your HTML and CSS semantic? When glancing at your code are you able to quickly discern structural and relational meaning?
*   Are you reusing the same hex color code over and over again in your code? Would it make more sense to refactor it into a [Sass variable](http://webdesign.tutsplus.com/articles/understanding-variable-scope-in-sass--cms-23498)?
*   Does your code work just as well on Safari as it does on Chrome?
*   Could you replace some of your layout code with a grid system like [Skeleton](http://getskeleton.com/)?
*   Are you using the _!important_ flag often? How can you fix that?

#### Experiment 4

The last experiment put what you’ve learned about best practices to use. However, the effects of best practices often don’t become apparent until you apply them to a bigger project.

For the last experiment, build yourself a portfolio website. As a front-end, your portfolio site is one of your most important digital assets. A portfolio is a site that showcases your work. More importantly, it’s an on-going record that helps you track your progress and development. So even if you only have 1 or 2 things to show, put it up.



![](https://cdn-images-1.medium.com/max/1600/1*0Yyx08kVpfchZodM7DkHZA.jpeg)

[ShiftBrain Studio](http://www.shiftbrain.co.jp/)



To get started, follow along with Adham Dannaway’s article, [My (Simple) Workflow To Design And Develop A Portfolio Website](https://www.smashingmagazine.com/2013/06/workflow-design-develop-modern-portfolio-website/ "Read 'My (Simple) Workflow To Design And Develop A Portfolio Website'")

If your first portfolio iteration isn’t perfect, _that’s okay_. Portfolios go through many iterations. And, what’s important that you built it with your own skills.

### Stay current

While HTML and CSS won’t go out of vogue anytime soon, it’s important to stay up to date with the front-end landscape.



![](https://cdn-images-1.medium.com/max/1600/1*a-UBbU05CgPwMgkFFeDHXg.jpeg)

[The front-end landscape is constantly changing](http://www.deviantart.com/art/Fantasy-Island-160026050)



Below is a list of websites, blogs, and forums that are both enjoyable to read and informative.

*   [CSSTricks](https://css-tricks.com/)
*   [Smashing Magazine](https://www.smashingmagazine.com/)
*   [Designer News](https://www.designernews.co/)
*   [Nettuts+](http://code.tutsplus.com/)
*   [CSS Wizard](http://csswizardry.com/)











* * *







### Learn by example

Finally, the best way to learn is by example. Here are a set of styleguides and code conventions that will teach you how to be a more effective front-end.

#### **Styleguides**



![](https://cdn-images-1.medium.com/max/1600/1*792UDPCcmauyc7MDehMHYg.png)

[Typography styleguide](https://dribbble.com/shots/1570099-Style-guide-typography-page/attachments/241293)



Web styleguides are collections of CSS components and patterns that can be reused across a website. The key thing to note from these styleguides is how component based HTML and CSS approaches allow you to reuse code to keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

*   [Mapbox](https://www.mapbox.com/base/styling/)
*   [LonelyPlanet](http://rizzo.lonelyplanet.com/styleguide/design-elements/colours)
*   [SalesForce](https://www.lightningdesignsystem.com/)
*   [MailChimp](http://ux.mailchimp.com/patterns/)

#### **Code Conventions**

Code conventions designed to make your code readable and maintainable. Some of these links like [CSS Guidelines](http://cssguidelin.es/) are guidelines for writing better HTML and CSS while other links like [Github internal CSS toolkit and guidelines](https://github.com/primer/primer) are examples of quality code.

*   [CSS Guidelines](http://cssguidelin.es/)
*   [Github internal CSS toolkit and guidelines](https://github.com/primer/primer)
*   [AirBnB’s CSS Styleguide](https://github.com/airbnb/css)











* * *







### Wrap up

Hopefully by the end of this article, you are familiar with HTML and CSS and have a few projects under your belt. The best way to learn front-end is by building projects and experimentation. Remember, every front-end developer has to start somewhere. And it’s better to start today than tomorrow.

This article is the first of a two part series. The second article covers adding interactivity with Javascript and Javascript libraries/frameworks. Also, if you want me to elaborate on anything or have any questions, feel free to leave a note or [Tweet](https://twitter.com/jonathanzwhite) out to me.

[**From Zero to Front-end Hero (Part 2)**  
_A complete guide to learning front-end development_medium.com](https://medium.com/p/adfa4824da9b "https://medium.com/p/adfa4824da9b")[](https://medium.com/p/adfa4824da9b)

_P.S. If you liked this article, it would mean a lot if you hit the recommend button or share with friends._











* * *







If you want more, you can follow me on [Twitter](https://twitter.com/JonathanZWhite) where I post non-sensical ramblings about design, front-end development, bots, and machine learning.







[![](https://cdn-images-1.medium.com/max/1200/1*UOsjAdUZ9O0QSyfXOpQPbA.png)](https://twitter.com/JonathanZWhite)





[![](https://cdn-images-1.medium.com/max/1200/1*mxQhZLqG7l5dMLvxYAklgw.png)](http://mrwhite.space/signup)










