---
author: Jonathan Z. White
authorTwitter: https://twitter.com/JonathanZWhite
authorFacebook: none
title: "CSS in JavaScript: The future of component-based styling"
subTitle: "By adopting inline styles, we can get all of the programmatic affordances of JavaScript. This gives us the benefits of something like a C..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*yVKDbwtvfoakj3RZ9g8ARQ.png
url: https://medium.freecodecamp.org/css-in-javascript-the-future-of-component-based-styling-70b161a79a32
id: css-in-javascript-the-future-of-component-based-styling-70b161a79a32
date: 2017-04-25T14:05:07.754Z
tags: [
  "CSS",
  "Tech",
  "JavaScript",
  "UX",
  "Design"
]
---
# CSS in JavaScript: The future of component-based styling







![](https://cdn-images-1.medium.com/max/2000/1*yVKDbwtvfoakj3RZ9g8ARQ.png)

Image by [@jonathanzwhite](https://twitter.com/JonathanZWhite)







By adopting inline styles, we can get all of the programmatic affordances of JavaScript.This gives us the benefits of something like a CSS pre-processor (variables, mixins, and functions). It also solves a lot of the problems that CSS has, such as global namespacing and styling conflicts.

For a deep dive into the problems that CSS in JavaScript solves, check out the famous presentation: [React CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js). For a case study on the performance improvements you get from Aphrodite, you can read [Inline CSS at Khan Academy: Aphrodite](http://engineering.khanacademy.org/posts/aphrodite-inline-css.htm). If you want to learn more about CSS in JavaScript best practices, check out [Airbnb’s styleguide](https://github.com/airbnb/javascript/tree/master/css-in-javascript).

In addition we’ll be using inline JavaScript styles to build components to address some of the fundamentals of design I covered in one of my previous articles: [Before you can master design, you must first master the fundamentals](https://medium.freecodecamp.com/before-you-can-master-design-you-must-first-master-the-fundamentals-1981a2af1fda).

### A motivating example

Let’s start off with a simple example: creating and styling a button.

Normally the component and its associated styles would go in the same file: `Button` and `ButtonStyles`. This is because they fall under the same concern: the view. However, for this example, I broke up the code into multiple gists to make it more digestible.

Here’s the button component:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5e386f91c15b1b930b9f023c7956d2c0?postId=70b161a79a32" data-media-id="5e386f91c15b1b930b9f023c7956d2c0" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This is nothing unexpected — just a stateless React component. Where Aphrodite comes into play is in the `className` property. The function `css` takes in a `styles` object and converts it into css. The `styles` object is created with Aphrodite’s `StyleSheet.create({ ... })` function. You can see the output of `StyleSheet.create({ ... })` with this [Aphrodite playground](https://output.jsbin.com/qoseye?).

**Here is the button stylesheet:**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/657d341e26e7cb53b273ffea39e40da9?postId=70b161a79a32" data-media-id="657d341e26e7cb53b273ffea39e40da9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





One of the benefits of Aphrodite is that migration is straightforward and the learning curve is low. Properties like `border-radius` become `borderRadius` and values become strings. Pseudo-selectors, media queries, and font definitions all work. In addition, vendor prefixes are added automatically.

**Here is the result:**



![](https://cdn-images-1.medium.com/max/1600/1*x1ccRv9UGvcxBvz4TvC4Qg.png)

[One of the benefits of Aphrodite is that migration is straightforward and the learning curve is low.](https://twitter.com/JonathanZWhite)



With this example in mind, **let’s take a look at how we can use Aphrodite to build a basic visual design system**, focusing on the following design fundamentals: typography and spacing.











* * *







### Fundamental №1 —Typography

Let’s start off with typography, a fundamental basis for design. **The first step is to define typography constants**. And unlike Sass or Less, constants for Aphrodite can go in a JavaScript or JSON file.

#### Define typography constants

When creating constants, **use semantic names for your variables**. For example, instead of naming one of your font-sizes `h2`, use a name like `displayLarge` that describes its _role_. Similarly, for font-weights, instead of naming one of your weights `600`, give it a name like `semibold` to describe its _effect_.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/dfa740330fad31b82a37991542110993?postId=70b161a79a32" data-media-id="dfa740330fad31b82a37991542110993" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





It’s important to get the values right for variables like font-sizes and line-heights. This is because they directly affect the vertical rhythm within a design. Vertical rhythm is a concept that helps you achieve consistent spacing between elements.

For more on vertical rhythm, you can read this article: [Why is Vertical Rhythm an Important Typography Practice?](https://zellwk.com/blog/why-vertical-rhythms/)



![](https://cdn-images-1.medium.com/max/1600/1*Ehj9XMvQ9wJNhxWNqwXfKw.png)

[Use a calculator to determine line-heights](https://drewish.com/tools/vertical-rhythm/)



There is a science behind choosing the values for your line-heights and font-sizes. We can use mathematic ratios to generate a set of potential sizes candidates. A few weeks ago, I wrote an article detailing the methodology: [Typography can make or break your design: a process for choosing type](https://medium.freecodecamp.com/typography-can-make-your-design-or-break-it-7be710aadcfe). For determining font-sizes, you use [Modular Scale](http://www.modularscale.com/). For determining line-heights, you can use this [vertical rhythm calculator](https://drewish.com/tools/vertical-rhythm/).

#### Define a heading component

After defining our typography constants, the next step is to create a component to consume the values. **The goal of the component is to enforce consistency in design and implementation for headings across the codebase.**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/07ca3cdb6ff3b1d3ac4fef5db094948b?postId=70b161a79a32" data-media-id="07ca3cdb6ff3b1d3ac4fef5db094948b" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The `Heading` component is a stateless function that takes in a tag as a property and returns the tag with its associated style. This is possible because we defined the tag mappings earlier in the constants file.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/93e17bd59671c0de1e8ab25cd8f4fbe2?postId=70b161a79a32" data-media-id="93e17bd59671c0de1e8ab25cd8f4fbe2" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





At the bottom of the component file, we define our `styles` object. This is where we use the typography constants.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/f76851e92cc6a2abba83fc72be611386?postId=70b161a79a32" data-media-id="f76851e92cc6a2abba83fc72be611386" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





And this is how the `Heading` component would be used:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/8e6b9e553d444dfc45dc2ea933444fd4?postId=70b161a79a32" data-media-id="8e6b9e553d444dfc45dc2ea933444fd4" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





With this approach, **we reduce unexpected variability in our type system**. We avoid the pitfall of a hundred different font sizes by removing the need for global styles and standardizing headings across the codebase. In addition, this approach we took to building the `Heading` component can be applied to building a `Text` component for body copy.

### Fundamental №2 — Spacing

**Spacing controls both vertical and horizontal rhythm in design**. That makes spacing pivotal to establishing a visual design system. Just like in the typography section, the first step to address spacing is to define spacing constants.

#### Define spacing constants

When defining spacing constants for the margins between elements, we can adopt a mathematic approach. Using a `spacingFactor` constant, we can generate a set of distances based on a common factor. **This approach ensures that we have logical and consistent spacing between elements.**





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/67ab106c6a4a52f26a33972641c9fe89?postId=70b161a79a32" data-media-id="67ab106c6a4a52f26a33972641c9fe89" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





The example above uses a linear scale, one to thirteen. However, experiment with different scales and ratios. Designs require different scales based on their purpose, their audience, and the devices they target. As an example, **here are the first six computed distances using the golden ratio** with a `spacingFactor` of eight.

<pre name="8400" id="8400" class="graf graf--pre graf-after--p">Golden Ratio (1:1.618)</pre>

<pre name="de5d" id="de5d" class="graf graf--pre graf-after--pre">8.0 x (1.618 ^ 0) = 8.000  
8.0 x (1.618 ^ 1) = 12.94  
8.0 x (1.618 ^ 2) = 20.94  
8.0 x (1.618 ^ 3) = 33.89  
8.0 x (1.618 ^ 4) = 54.82  
8.0 x (1.618 ^ 5) = 88.71</pre>

This is what the spacing scale would look like in code. I added a helper function to handle the computation and round off the output to its nearest pixel value.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/c908cfc7d002cac11cad9bab7684904d?postId=70b161a79a32" data-media-id="c908cfc7d002cac11cad9bab7684904d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





After defining our spacing constants, we can use them to add margins to elements in our design. **One approach we can take is to import the spacing constants and consume them in components**.

For example, let’s add a `marginBottom` to the `Button` component.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/fca27f7e2622c17c3bfaffc28296d0e1?postId=70b161a79a32" data-media-id="fca27f7e2622c17c3bfaffc28296d0e1" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This works in most scenarios. However, what happens if we want to change the `marginBottom` property of the button based on where the button is place?

One way to achieve variable margins is to override the margin style from the consuming parent component. An alternative approach is to **create a** `Spacing` **component to control the vertical margins on elements**.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/44f15ca9634b6733317307bd8f943716?postId=70b161a79a32" data-media-id="44f15ca9634b6733317307bd8f943716" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





Using this approach, we can remove the responsibility of setting margins out of the child component and into the parent component. **This way, the child component becomes layout agnostic, not requiring any knowledge of where to place itself in relation to other elements.**

This works because components like buttons, inputs, and cards may need variable margins. For example, a button in a form may need larger margins than a button in a navigation bar. The caveat is that if a component always has consistent margins, then it would make more sense to handle margins within the component.

Also you may have noticed that the examples only use `marginBottom`. This is because **defining all your vertical margins in one direction allows you avoid collapsing margins and keep track of the vertical rhythm of your design**. You can read more on this in Harry Robert’s article, [Single-direction margin declarations](https://csswizardry.com/2012/06/single-direction-margin-declarations/).

On a final note, you can also use the spacing constants you defined as padding.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/29386df42956d3ad8eef3443cf0f4559?postId=70b161a79a32" data-media-id="29386df42956d3ad8eef3443cf0f4559" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F5382672%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





By using using the same spacing constants for both margins and padding, you can achieve more visual consistency in your design.

Here’s what the result might look like:



![](https://cdn-images-1.medium.com/max/1600/1*oDkbVmgCJ4ss5fuRNvzoUg.png)

[By using spacing constants for your margins and padding, you can achieve more visual consistency.](https://twitter.com/JonathanZWhite)













* * *







Now that you have a grasp of CSS in JavaScript, go out and experiment. Try incorporating inline JavaScript styles into your next project. I think **you’ll appreciate being able to work in a single context to handle all of your styling and view concerns**.

On the topic of CSS and JavaScript, what are some new developments that you’re excited about? Personally I’m excited about async/await. Leave me a note or send me a [tweet](https://twitter.com/jonathanzwhite) on Twitter.

You can find me on Medium where I publish every week. Or you can follow me on [Twitter](https://twitter.com/JonathanZWhite), where I post non-sensical ramblings about design, front-end development, and virtual reality.

_P.S. If you enjoyed this article, it would mean a lot if you clicked the 💚 and shared with friends._







[![](https://cdn-images-1.medium.com/max/1200/1*mxQhZLqG7l5dMLvxYAklgw.png)](http://mrwhite.space/signup)





[![](https://cdn-images-1.medium.com/max/1200/1*UOsjAdUZ9O0QSyfXOpQPbA.png)](https://twitter.com/JonathanZWhite)










