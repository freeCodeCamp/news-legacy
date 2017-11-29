---
author: Jonathan Z. White
authorTwitter: https://twitter.com/JonathanZWhite
authorFacebook: none
title: "Designing a styleguide: elements that go into building compelling products"
subTitle: "If you look at companies like Dropbox, Google, and Twitter you’ll notice that they each have their own unique aesthetic. Across all their..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*4yR_gp-2nsOLTDKcvVFYTQ.png
url: https://medium.freecodecamp.org/designing-a-styleguide-elements-that-go-into-functional-and-beautiful-products-ff1621e00a0e
id: designing-a-styleguide-elements-that-go-into-functional-and-beautiful-products-ff1621e00a0e
date: 2016-07-19T15:26:45.699Z
tags: [
	"Design",
	"UX",
	"User Experience",
	"Tech",
	"Web Development"
]
---
# Designing a styleguide: elements that go into building compelling products

If you look at companies like Dropbox, Google, and Twitter you’ll notice that they each have their own unique aesthetic. Across all their products, both mobile and web, there is a sense of consistency and uniformity in their design.

The way that companies and products achieve _consistency_ is through styleguides. A styleguide is a set of standards that aligns designs with a company’s voice and mission.

> Consistency is important because it creates trust. And design is all about creating relationships between products and users.

The goal of this article is to introduce you to some well-thought-out styleguides and branding guidelines. It also details some of the most important elements every styleguide should have.

**Hopefully, these elements and examples will serve as a source of inspiration and influence how you design sustainable products in the future.**

#### Before we get started…

Here are a few suggestions for when you’re designing styleguides.












[Styleguides help create consistency and uniformity in products.](https://marvelapp.com/styleguide/design/typography)



*   Design your product first and then create a styleguide. Don’t start by creating a styleguide. First figure out what works and what doesn’t work. Then standardize it.
*   You’ll never be fully happy with your styleguide. That’s okay. Creating a universal design language is an iterative process.
*   Have a strong understanding of the voice and message you want your product to convey before writing a styleguide.

#### Principles

Styleguides should always have a page on design principles. Design principles are a set of guidelines that influence how designers approach and solve problems when building a product.












[Design principles from Apple’s Human Interface Guidelines.](https://developer.apple.com/ios/human-interface-guidelines/)



One of the key characteristics of a good design principle is that it isn’t obvious or too broad. A good design principle should be specific enough to help a designer make decisions.

Let’s take a look at Apple’s [Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/), which has a section on design principles. One of their principles is **direct manipulation**.

> The direct manipulation of onscreen content engages people and facilitates understanding… Through direct manipulation, they can see the immediate, visible results of their actions.

This description explains that direct manipulation is a principle that governs and mediates physical and digital interactions. It helps designers choose modes of interactions, such as swiping and rotating.

When coming up with design principles, less is more. Start off with three guiding principles and iterate from there.

For more on design principles, check out Julie Zhuo’s [A Matter of Principle](https://medium.com/the-year-of-the-looking-glass/a-matter-of-principle-4f5e6ad076bb#.uwunhtmjq) article. It has hugely influenced how I think about design principles.

#### Typography

Typography is key to achieving unity across multiple products and designs. Every styleguide should have a few sections detailing typography specifications.

It’s important to limit the number of typefaces and sizes you use in order to keep your designs simple. As a general rule of thumb, start with at most two fonts — one for your headers, and one for your bodies. Most of the time, you won’t need any more than that.












[Typography from Google’s Material Design Guidelines](https://material.google.com/style/typography.html)



Also, include example use cases of typography to help other designers and developers understand when to use things like bold or italics.












[Examples of type in use help designers understand how to use the font.](https://www.behance.net/gallery/7226653/Medium-Brand-Development)



If you have trouble picking fonts, check out [Typewolf](https://www.typewolf.com/) and [FontPair](http://fontpair.co/). For font sizing check out [Modular Scale](http://www.modularscale.com/) and its accompanying article [More Meaningful Typography](http://alistapart.com/article/more-meaningful-typography).

Also keep in mind that fonts aren’t set in stone. You can always change them later.

#### Imagery

Show, don’t tell. Imagery is a powerful tool in the hands of a designer. Images are dynamic. They convey meaning at first glance, and evoke emotions.

If you have have the assets, consider including a section that details what kinds of images other designers should use to convey your product’s voice and identity.














Nike is a good example of a company that uses images to convey their brand. Their photos have a cinematic quality that inspires you to participate in their mission and brand.

Imagery isn’t only limited to photographs. Companies like Dropbox rarely use photographs in their designs. Instead, they convey their personality through illustrations.












[Dropbox conveys their personality through illustrations.](https://dribbble.com/search?q=dropbox)



Here is an example of Hubspot’s imagery styleguide.














Notice how they describe the tone and goal of the photography before providing examples.

With guidelines for what images to use, designers can better communicate meaning to users and ultimately immerse them into a cohesive experience.











* * *







#### Grids and spacing

Good design cares about whitespace as much as content. Styleguides should reflect this mentality and include a section on grids and spacing.

It’s important to establish a grid system that works for every use case. In the section on grids, include information like the number of columns and rows, margins, and example uses.

For reading on grids, see [A guide to creating grid systems that are built around your content](http://www.iamtomnewton.com/blog/grid-guide/ "A guide to creating grid systems that are built around your content") as a primer. And follow it up with [Modular Design For Grids](https://designshack.net/articles/layouts/modular-design-the-complete-primer-for-beginners/).












[Mailchimp’s grid system consists of 8 flexible columns with 30px gutters between columns.](https://ux.mailchimp.com/patterns#grid-gutter)



Spacing should have its own section. Consistent spacing across a product creates a sense of uniformity and balance.












[Marvel codified their spacing.](https://marvelapp.com/styleguide/design/layout)



Having a list of margin sizes is useful to both designers and developers. In particular, developers can codify the space scale into [Sass](http://sass-lang.com/) variables.

For example, using the Marvel spacing styleguide as a reference, the Sass counterpart might look like this:

<pre name="ca61" id="ca61" class="graf graf--pre graf-after--p">$space-smaller: 5px;  
$space-small: 10px;  
$space-medium: 20px;  
$space-large: 40px;  
$space-larger: 80px;  
$space-largest: 240px;</pre>

#### Color

Color is another essential element in styleguides. Color helps establish visual hierarchies and create emotional resonance.

Color sections in styleguides make the lives of designers easier. Instead of spending time fretting about which colors to use, designers can reference the styleguide. This allows them to focus on content.

As Buffer puts it in their styleguide:

> Using colors consistently brings a sense of familiarity and unity to a product. Buffer’s color scheme aims to be clear, unobtrusive and friendly.












[Buffer’s color styleguide is useful to both designers and developers.](https://buffer.com/style-guide)



In the example above, Buffer names each of their colors. This is particularly useful to developers because they can turn the colors into Sass variables:

<pre name="ee56" id="ee56" class="graf graf--pre graf-after--p">$primaryColor = #168eea;  
$headingColor = #323b43;  
$bodyColor = #59626a;  
$borderColor = #ced7df;  
$lightBorderColor = #eff3f6;  
$fillColor = #f4f7f9;</pre>

Notice how Buffer uses _primaryColor_ instead of a name like _brandBlue_. Choose names that describe the role of the color instead of the color itself. This approach makes it easier for both designers and engineers to adjust their color values without having to change the name.

If you want to learn more about choosing color, check out the article I wrote on [Designing in Color](https://medium.freecodecamp.com/designing-in-color-abd358660a7b#.qfryvjkhq).

#### Components

A lot of designers and developers think about UIs as collections of components. The idea is that each UI component is its own entity. For example, a card is a single component.












[Sample components from Airbnb’s blog post on their new design language.](http://airbnb.design/building-a-visual-language/)



Using this approach, designers can re-use components across multiple products and designs. This creates design consistency. It also minimizes the amount of time designers spend re-inventing the wheel designing UI components that already exist within an organization.

Component-based thinking also helps engineers. Design components can translate neatly into code. From an engineering perspective, components are like lego blocks that you can compose together.












[Components can be composed to create interfaces.](https://www.behance.net/gallery/35378175/Dashboard-UI-Kit-Mastering-Dashboard-Interfaces)



While you’ll often see components in UI and pattern libraries, it’s also useful to include components in styleguides for other designers to reference.












[Mapbox breaks their UI down into multiple components.](https://www.mapbox.com/base/styling/forms/)



For example, [Mapbox](https://www.mapbox.com/base/styling/forms/) has a styleguide that includes all of their commonly used components. This includes buttons, inputs, and forms. This way their designers and developers know what UI components are already available.

If you want to learn more about components check Brad Frost’s [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/) article.











* * *







Principles, typography, imagery, grids and spacing, color, and components. This list isn’t exhaustive, but these six topics form the basis of a good styleguide.

What are your thoughts on styleguides? What are some of the lessons that you’ve learned in the process of creating styleguides? Leave a note below or [tweet](https://twitter.com/JonathanZWhite) at me.

If you enjoyed this article, you might enjoy _Photos and stories from a designer._

[**Photos and stories from a designer**  
_Some of the best designers are also some of the best storytellers._medium.com](https://medium.com/@JonathanZWhite/photos-and-stories-from-a-designer-5ee97750ae5 "https://medium.com/@JonathanZWhite/photos-and-stories-from-a-designer-5ee97750ae5")[](https://medium.com/@JonathanZWhite/photos-and-stories-from-a-designer-5ee97750ae5)

You can find me on Medium where I publish every week. Or you can follow me on [Twitter](https://twitter.com/JonathanZWhite), where I post non-sensical ramblings about design, front-end development, and virtual reality.

_P.S. If you enjoyed this article, it would mean a lot if you click the 💚 and share with friends._







 [


](https://atomspace.co/) 





 [


](https://twitter.com/JonathanZWhite) 










