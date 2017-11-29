---
author: Colm Tuite
authorTwitter: https://twitter.com/colmtuite
authorFacebook: none
title: "How to construct a design system"
subTitle: "Tips for designing and building a consistent design system."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*9XuqeLVHBBLwog_AsU54DQ.png
url: https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117
id: how-to-construct-a-design-system-864adbf2a117
date: 2017-02-22T17:45:22.768Z
tags: [
  "Design",
  "CSS",
  "Style Guides",
  "UI",
  "Product Design"
]
---
# How to construct a design system

## Tips for designing and building a consistent design system.

Without doubt, I get asked about design systems more than anything else. So, having spent the majority of the past few years thinking about how to design, build and present design systems for products like [Marvel](https://blog.marvelapp.com/the-marvel-styleguide/), [Bantam](https://github.com/colmtuite/bantam) and [Modulz](https://github.com/colmtuite/modulz-ui), I figured I’d share some of what I’ve learned along the way.

#### What is a design system?

It’s no secret that designers love a good UI kit. However, beyond just putting together toolkits and style guides, it seems that recently there’s been increasing focus placed on designing systems intended to tie whole products together. Companies like [Shopify](https://www.shopify.com) and [Intercom](https://boards.greenhouse.io/intercom/jobs/588568#.WK1zUxKLSRs) are building in-house teams focused specifically on designing systems. People are starting to realise the importance of systemic design. This is encouraging. Who knows, maybe some day we’ll have a design tool that doesn’t assume we’re starting from scratch every time we open a new document…?

A design system (as it pertains to tech products) is more than a framework, UI toolkit or component library. It’s more than a style guide or set of code guidelines. It’s even more than the sum of those parts. A design system is an evolving ruleset governing the composition of a product.

There are many facets to any good design system — starting with company culture/mission and trickling all the way down to branding, copywriting, component libraries and other design language. The higher level points are arguably the most important aspects of any design system but for the purposes of this article, I’m going to assume that as a company — you know who you are, what your mission is and how your products should look, feel and function.

Once you have those critical factors in place, you can convert that knowledge into a cohesive design language.











* * *







### Designing a style palette

Before we can start designing shiny components, we need to lay the foundations for those components. We need to break the product down into its most bare-bones form.

Even the simplest heading component is a collection of multiple reusable styles…



![](https://cdn-images-1.medium.com/max/1600/1*03lT5NXtjHNYgJloKQhbvA.png)



We need to break things down until we reach the irreducible minimum; the most essential styles. A good place to start is the full list of [CSS style properties](https://www.w3schools.com/cssref/). Most of these properties only accept fixed values and therefore can be reused on every website on the internet. The properties which accept custom values are ultimately what will differentiate our product from other products. These custom values are what will define our global style palette. Our global style palette is what we will use to design and build every single aspect of all of our products.

When we’re finished, not a single style should exist in our product that has not been predefined in our global style palette.

#### Colour

Let’s start with the most obvious style property — the only style property it seems modern design tools understand can be named, stored and reused: colour.

For our primary brand colour, let’s choose blue. For our secondary brand colour, let’s go with its complementary counterpart: orange.



![](https://cdn-images-1.medium.com/max/1600/1*CrR79K_KOhFUxJBCPd53UA.png)

Brand colours



Utilising colour to communicate success and failure is a common design pattern, so let’s add green and red to our colour palette for that purpose. Colours like black and yellow might work well too.



![](https://cdn-images-1.medium.com/max/1600/1*6HuG3meww2tb6w73ooa-2g.png)

Success and failure colours



Lastly, we need some grey colours. Most UIs will need at least the following grey colours:

*   A very light grey for backgrounds
*   A slightly darker grey for borders, lines, strokes or dividers.
*   A medium grey for subheadings and supporting body copy.
*   A dark grey for main headings, body copy and backgrounds.

Of course, you may need more greys. You might need three different shades for body copy. You might prefer two different stroke shades. That’s up to you. The point here is that you predefine whatever styles you need upfront so they are reusable throughout your entire product at a later stage.

As a final touch, we may also want to add tint or shade variations for each of our colours. These can be useful when it comes to designing components for adding light backgrounds or dark strokes.



![](https://cdn-images-1.medium.com/max/1600/1*VfncQaKuCPAhnfRk5iKDyQ.png)

Our final colour palette



#### Shadows

Shadows are another commonly used style property in most UIs. From what I’ve seen, a lot of designers just come up with shadows off-the-cuff while designing components. The same goes for most style properties actually. Designing in isolation like this often leads to inconsistent UIs.

Let’s take a step back and consider what we’re trying to achieve with our shadows. We’re obviously trying to add some perspective to the UI but it’s likely that many components can benefit from the same effect. So let’s abstract the styles away from the individual components and into our global style palette.

These four shadows should be enough to style every component in our system:

*   A subtle shadow to raise interactive components and add affordance.
*   A more pronounced shadow for a hover effect on components.
*   A strong shadow to give perspective to dropdowns/popovers and other similar components.
*   A distant shadow for modal components.



![](https://cdn-images-1.medium.com/max/1600/1*9v3d-bqpkrQJ8KxASLO_-w.png)

Our range of shadows from subtle to distant.



#### Type scale

In order to create an appropriate visual hierarchy on each screen, we will need to define a number of different font sizes.

Just like with notes in a piece of music, our type should adhere to a scale. This helps to sustain a smooth vertical rhythm. This can sound a bit daunting at first, but luckily, some very smart people have already figured it all out for us over the years. [Tim Brown has built a great website](http://www.modularscale.com/?1&em&1.25&web&text) to display various type scales. [Adam Morse](https://twitter.com/mrmrs_) has open-sourced his implementation of the [diatonic type scale](http://ty-p.cc/). I generally find the “Major Third” scale works well for most web products.

The next step is to decide roughly which font sizes we will need, then plot them on our “Major Third” type scale.

*   Default (1em) for standard text that will appear in many places throughout our marketing site, UI etc. 16px is the default browser font size so let’s run with that.
*   A slightly larger size for large body copy in a blog for example.
*   A couple of larger sizes for headings and sub-headings.
*   A very large size for section titles.
*   A ridiculously large size maybe for prices on a pricing page for example.
*   We will also need some smaller sizes for smaller body copy, input hints and other secondary text.



![](https://cdn-images-1.medium.com/max/1600/1*UpNXlLvdk20mEUUrd88PbA.png)

Type scale



#### Border radii

Now it’s just a matter of applying the same process to every single style property that accepts custom values. For rounding corners, we will need the following corner radius values:

*   Small border radius for tiny components like checkboxes, tags and labels.
*   Medium border radius for buttons and inputs and similar components.
*   Large border radius for cards, modals and other large components.



![](https://cdn-images-1.medium.com/max/1600/1*hmPSwH9ZMAAi4DLs1PSZNg.png)

2px, 4px and 8px border radii



_Note: We will also need a 50% border radius for building circular components like avatars etc._

#### Spacing scale

The most commonly used style property in almost any design is whitespace. Whether we’re spacing apart links in a header, spacing apart items in a grid, adding some distance between an avatar and a link or padding out a dropdown component — no whitespace in our product should be arbitrary or unintentional.

Like with type, by adhering to a spacing scale, we can ensure that each of our components and layouts will be uniform. My favourite go-to spacing scale is [Material design’s 8dp grid](https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-baseline-grids). Elliot Dahl has written a [great article about the 8pt grid system](https://medium.com/built-to-adapt/intro-to-the-8-point-grid-system-d2573cde8632#.8unqq6lz0) and its benefits.

Sticking to 8dp increments, we can plot out a number of spacing values that we can use to design every single component and layout in our suite of products.



![](https://cdn-images-1.medium.com/max/1600/1*_bbeOmM0hC5or93Z3XoXJw.png)



We can also use these spacing values to define a set of widths, heights and line-heights that we can reuse for sizing buttons, form inputs, avatars and other similar components. Since these components often appear alongside each other throughout web products, it helps if they follow the same sizing scale to avoid any unwanted discrepancies.

#### Letter spacing

As I mentioned earlier, font size is not the only style property that we need to define text components. Letter spacing is another useful property which we can use to tighten up large headings or allow smaller headings to breathe.

3 or 4 letter spacing values should do the trick.



![](https://cdn-images-1.medium.com/max/1600/1*dhN9LL04x4XnWcSdqW3JbA.png)













* * *







### Building a component library

Now that we’ve defined our global style palette, we can take those building blocks and start building out a component library. For the most part, designing components is not a creative process — we’re simply mapping predefined styles to components.

At this stage, we shouldn’t need a single style that hasn’t already been defined in our style palette. The creative process happened during the style palette design phase. From this point on, whether it’s a colour, font size, margin/padding value, width/height or otherwise, every style we use to design our components and layouts should be plucked from our style palette. Almost nothing new should need to be introduced. That might sound extreme or unreasonable, but on the contrary, this is where I think a lot of people go astray.

Dave Rupert ran this Twitter poll recently asking where to put code that overrides the styling on a button component, if that button is inside a modal component, for example.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/77bc110a12563046badfbef4812368f6?postId=864adbf2a117" data-media-id="77bc110a12563046badfbef4812368f6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F477460555981025280%2FJUGkf8zv_bigger.jpeg&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Harry Roberts (check out this awesome work) then [explained his thoughts on this](https://csswizardry.com/2017/02/code-smells-in-css-revisited/) in his own article. After that, Jonathan Snook [expanded with his own thoughts](https://snook.ca/archives/html_and_css/coding-css-for-context). While I agree with the conclusions both Harry and Jonathan came to, ultimately, I think the whole debate is just unnecessary.

It’s contradictory to design a component with the intention of reusing it globally, then modify that component in just one specific part of the product. This defeats the purpose of creating a global component library in the first place. Whenever I see styles that override other styles, it’s usually either a case of hacking away at a component in order to make it fit in a tight space or tacking on a variation of a component because not enough planning went in during the earlier design stages.

Every time you override a global component in one area of a product, you also erode the consistency of your design system. When you make enough sporadic modifications to components scattered across your product, you no longer have a consistent design system. You just have a design system with an inconsistent mess hanging out the arse of it.

Let’s take a few common components and walk through how we can build them out using only the styles we have defined in our palette above.

#### The humble button

Let’s start with a simple button component to illustrate how it’s possible to construct components using only the styles we pre-defined in our style palette.



![](https://cdn-images-1.medium.com/max/1600/1*fXQ4LmK5e42mtHMk-yHaTw.png)



#### More components

Again, these colours, font sizes, shadows and padding values are all plucked directly from the style palette we predefined above.



![](https://cdn-images-1.medium.com/max/1600/1*OmZv-7xhxr-30U69Ud9vQw.png)



#### Let’s try something a bit fancier…

When we have a few components designed and built out, we can then start combining multiple components to create more complex components like this dropdown component.



![](https://cdn-images-1.medium.com/max/1600/1*Yq8rgzM84YNtQHhwHc-1Mg.png)



This dropdown component doesn’t use a single style outside of the basic style palette we defined earlier. Using this method, we can design an entire component library, then move on to broader layouts and finally onto full screens.











* * *







### Tips for the road

*   Certain components will require values that are not defined in our style palette, for example, the width of a sidebar. Sometimes these values will be just 1/3 the viewport width or something similar. Other times, these values will be arbitrary and non-reusable and that’s perfectly fine. The point is to think about which styles should be reusable (most) and which styles shouldn’t.
*   Let components do their thing. Don’t attempt to add margins to buttons, inputs, headings or other components. At the component level, you should only define the styles which appear uniform in every single instance of that component. Since margins differ on a case-by-case basis, it’s better to apply them using a wrapper `div`. Harry Roberts wrote [an excellent article touching on this point](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).

_I’m working on a full-blown CSS toolkit based on_ [_Bantam CSS framework_](https://github.com/colmtuite/bantam) _that will include all the components shown in this article plus many more. The project is for_ [_Modulz_](https://github.com/colmtuite/modulz-ui)_, a product I’m working on but if you’re interested in using this UI toolkit yourself, let me know on_ [_Twitter_](https://twitter.com/colmtuite)_. If I get enough interest, I’ll open-source it._








