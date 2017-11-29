---
author: Colm Tuite
authorTwitter: https://twitter.com/colmtuite
authorFacebook: none
title: "Design tools are running out of track. Here’s how we can fix them."
subTitle: "Rarely a day goes by where I don’t spend at least some time thinking about design tools. A few years ago, I built a design tool which was..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_VWdbAYvJcC4A8_uHGj_jQ.jpeg
url: https://medium.freecodecamp.org/design-tools-are-running-out-of-track-94f21b6ae939
id: design-tools-are-running-out-of-track-94f21b6ae939
date: 2017-09-11T10:30:59.448Z
tags: [
  "Design",
  "Web Development",
  "Web Design",
  "Technology",
  "Startup"
]
---
# Design tools are running out of track. Here’s how we can fix them.







![](https://cdn-images-1.medium.com/max/2000/1*_VWdbAYvJcC4A8_uHGj_jQ.jpeg)







Rarely a day goes by where I don’t spend at least some time thinking about design tools. A few years ago, I built a design tool which [was acquired by Marvel](https://techcrunch.com/2015/10/12/prototyping-app-marvel-acquires-design-tool-plexi/). That was over two years ago but since then the landscape hasn’t changed much, nor has my passion for improving it.

Recently, I tweeted about design tools — a thing which has been known to happen from time to time.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/6d66836e15a7f54a9e2290cb665365de?postId=94f21b6ae939" data-media-id="6d66836e15a7f54a9e2290cb665365de" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F864164353771229187%2FCatw6Nmh_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





I wasn’t the only one to speak my mind that day, others chimed in too.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/e1bf7a989e77962a2649e49b7e1dcae7?postId=94f21b6ae939" data-media-id="e1bf7a989e77962a2649e49b7e1dcae7" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F885265825099161600%2FVggScmJW_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





July 28, 2017 was not a good day for design tools.





<iframe data-width="500" data-height="185" width="500" height="185" src="https://medium.freecodecamp.org/media/3848a621c300188590503ea480d0562d?postId=94f21b6ae939" data-media-id="3848a621c300188590503ea480d0562d" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F833785170285178881%2FloBb32g3_400x400.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





There’s a lot of great insight buried in these Twitter threads but for a long time, I’ve been wanting to take the time to dive deep into just what it is that I think is so fundamentally broken about the current design tool model, as well as hint at the direction I think we should be headed.

### We are all just drawing pictures. It’s insane.

Almost all popular design tools export to images. This is problematic for a number of reasons:

1.  You cannot interact with an image. Prototyping tools empower us to add screen transitions and simple interactions to images. However, as our products continue to demand more advanced screen transitions and micro-interactions, images simply cannot keep up.
2.  Images are not fluid. Communicating responsive design decisions through images is usually a difficult task.
3.  Images are not stateful. In order to effectively communicate the various states for a UI, often many images are necessary.
4.  Bitmap images are resolution dependent. With the advent of retina devices, images can sometimes render poorly.
5.  Images files tend to be heavy and are often cumbersome to store, manage or share.

As long as design tools continue to export images, they will _never_ be able to produce accurate representations of our products. This lack of accuracy hinders communication between designers and developers. As long as designers continue to use a woefully inadequate medium to communicate their work, that work will _always_ be open to misinterpretation.

This is a very significant point because, at their core, almost all design tools convert vector shapes to images. Photoshop, Illustrator, Marvel, Adobe XD, Sketch and Figma are all the same in this regard. Yet images can only partially communicate design intent. As our products continue to adopt and support complex interactions, voice input, video input, augmented reality, virtual reality, temperature sensitivity etc., the value these tools provide will diminish rapidly. Image-based design is a dead end.

Our design tools should manipulate the _actual product_, not a picture of it.

### Our products are interactive. Our tools are static.

I touched on this in my previous point but it’s super critical so I figured I’d elaborate a little.

Think of the amount of simple interactions which are commonplace in almost all of our products yet cannot be communicated through our design tools. Here’s a brief list off the top of my head:

*   Hovering a button
*   Focusing an input
*   Checking a checkbox
*   Tabbed content
*   Scroll areas
*   Tab index for focused states
*   Keyboard shortcuts

Sure, some of these features can be mimicked with some hacky engineering but one has to wonder, what on Earth is the point? Why can’t designers just design the _actual product?!_ Ultimately, all mockups are disposable, yet designers spend months tweaking them to perfection. That time would be much better spent tweaking the actual product.

I won’t go too far down the “should designers code” rabbit hole but I’m not suggesting we all write code. I’m just saying there is no good reason why our design tools can’t support direct manipulation of our live products.

Framer does a better job than most in this department, supporting advanced and detailed interactions. The rest of the pack are _very_ far behind.

### Our tools should support the web’s layout paradigm

Until about a year ago, the only way to build layouts on the web was to use the `display: table` and `vertical-align` CSS properties. Now we have Flexbox and soon we will have CSS grid. These three layout engines function pretty similarly, utilising the flow of the DOM. Almost all websites are built using one of these three layout systems.

So, it makes sense that our design tools support the same layout model. Right?

Well, almost all design tools ignore these layout systems, instead opting to position each layer absolutely within its artboard. This opens a chasm between how the web functions and how our design tools function, introducing many issues:

*   Responsive design becomes very difficult because each layer must be rearranged manually for every breakpoint. Alternatively, a constraint-based layout system can be introduced but that adds complexity, steepens learning curves and ultimately prevents developers from transferring the layout directly to the web.
*   Since each layer is outside the flow of the document, manipulating content becomes tricky. For example, if you want to add an item to a list, you must manually reposition the other items in that list. Of course, repeat functions and other fancy features can be introduced to ease the pain but again, this introduces added complexity and complicates something that the DOM gives us for free.
*   Absolute positioning naturally leads to fixed pixel coordinates and dimensions. This breeds inflexibility and, again, is a huge departure from how the web functions. The web is built on fluid units like em, rem, vh, vw and %. Our tools should support these units by default.

Design tools shouldn’t need to resemble or reflect the web and its nuances — they should just BE the web.

### A monolithic tool is not the way

Good design happens in stages. A well-structured design system has a few distinct layers:

1.  **Style palette** A collection of colors, shadows, spacing, border radii, typefaces, font sizes, animations and other styles which form your brand identity. Currently, most design tools only support color palettes. Until they support the other style properties, it will be extremely laborious to design systematically.
2.  **Assets** This includes elements like icons, illustrations and images. There are some phenomenal image editors out there and Figma’s vector tool is excellent but when it comes to SVG support, our design tools leave a lot to be desired.
3.  **Component library**  
    A component is a collection of styles and assets which renders data to a single element in a variety of variations. Examples include buttons, inputs, badges etc. As I mentioned, Figma and Sketch have recently abstracted this process away from the main drawing flow — it’s a pity they’re just pictures of components and not _actual_ components.
4.  **Modules**  
    A module/composition is a collection of components which renders data to an encapsulated piece of UI in a variety of states. Examples might include header bars, tab menus, login forms, tables etc. Since modules are just complex components, I’m guessing Figma and Sketch can handle these too. Though there may be some merit to separating the two.
5.  **Screens** A screen is a collection of modules, components and data to form a complete UI which the user can interact with.

Most design tools provide features which support each of these design stages to some extent at least. The problem is that all of the stages are conflated. Almost all design tools offer just one mode — the drawing mode. You create a set of artboards and just start drawing pictures. Only very recently have tools like Sketch and Figma abstracted components/symbols away from the main drawing mode — which is weird because in front-end development, components have been abstracted for many years.

While designing a style palette, I don’t need to see artboards or vector tools. I want to see tools for choosing harmonious colors. I want presets for things like an 8dp spacing scale or a selection of type scales.

Designing an icon requires a completely different mode of thinking to designing a user flow. A simple SVG editor which allowed me to draw native SVG rectangles, circles, lines and paths, then exported optimised SVG code would be ideal.

While designing a component, I should no longer be thinking about individual styles — I should simply be choosing styles from my predefined style palette. I can’t just start tweaking styles for one component because that would introduce inconsistency, diluting the effectiveness of my design system. Once a style palette is in place, it should only be editable at the source.

Similarly, while composing a module, I should only be exposed to my predefined component library. There should be no style properties in a sidebar. No vector tools. Just a library of reusable components which I can drag and drop to compose modules.

The same goes for composing screens. At this point, we’re just reusing components and modules to build a UI. We’re not thinking about styles or shapes or other creative endeavours. We’re primarily focused on designing the content and user flows.

Each of these design stages could take place in separate tools entirely or just different modes within the same tool. I don’t think it matters much. One thing is for sure though, most current design tools fail to even acknowledge the process.

### Our tools should encourage good design

Designers have the rare luxury of being able to add an infinite number of unique styles to a project without any noticeable repercussions. Need a slightly larger font size? Just bump it up. No biggie. Need a slightly brighter colour? Just tweak it. It’s cool. You could even create multiple artboards in the same project, each using slightly different values for similar styles and it would probably go unnoticed.

Your design tool is never going to tell you that you can’t do something. It’s never going to pull you up for using an off-brand color. It’s never going to prevent you from using a whitespace value which doesn’t belong in your spacing scale. It’s never going to warn you that 20% of the population literally cannot see that light gray text you’ve just designed.

And why not…? Because design tools don’t care.

Design tools are so waywardly enamoured with a vision for unlimited creativity that they have lost sight of what it means to design sensibly, to design inclusively, to design systematically.

Put simply, design tools allow us to do whatever the hell we want. To some extent, this level of boundless creativity is useful, especially in the ideation phases. As UI designers though, the majority of our workflow doesn’t call for much creativity. Rather, our workflow calls for reuse, repetition, familiarity and standardisation; needs that our tools do little to satisfy.

This unlimited freedom is at odds with the reality of web development. Since developers are working with the _actual_ product, they must all work with the same code. Developers cannot simply add isolated font sizes or random color values to the codebase. Firstly, a linter (an alert message warning about poorly written code) would likely start screaming immediately. If not, then their shoddy craftsmanship would probably be apprehended during a code review. If it somehow managed to slip through the cracks, a noticeable performance impact would eventually sound the alarm.

One of the most disruptive problems I see on product teams is the disconnect between design and development teams. Developers have been working with strict guidelines and constraints for years. Unless our design tools adopt these same constraints, the gap will _never_ narrow.

### We should be designing with live data

Live data has been incorporated to some extent by a lot of tools, which is great to see. Adobe XD have some really neat features for generating fake data that resembles typical live data. [Invision Craft](https://www.invisionapp.com/craft) also provides some cool live data features for Sketch.

Live data shouldn’t stop with text, though. Other elements like images and video can have a huge impact on the user experience by significantly increasing load times. If you’re working on the web, browser dev tools allow you to throttle the connection to resemble a variety of internet speeds. Then, you can see first-hand how a new piece of content might affect the user experience.

Do our design tools afford us these luxuries?

In a word: no.

The closer we get to designing the actual product, the more helpful and impactful our design work can be.

### The web is open. Our tools should be, too.

One of the truly beautiful things about the web is its open accessibility. A website can be viewed in any web browser on just about any device.

How does that compare with design tools? Well, a few days ago, my brother David asked me for a design review of an app he is building. He sent me a Sketch file. When I opened it, this happened…



![](https://cdn-images-1.medium.com/max/1600/1*FZZ1xV5kFsJ_qBNiHbzEtQ.png)



Most design tools are walled gardens. If one colleague is working in Photoshop, another colleague can’t open that project in Sketch. It’s not even enough to have your whole team using the same tool — they must also be using the same version of that tool.

Marvel and Figma do a good job here, offering free plans and innovative collaboration features.

### So, what is the future of design tools?

Innovation in design tooling is extremely valuable and there’s been a lot of it recently. At Airbnb design tools, [Jon Gold](https://twitter.com/jongold) and [Benjamin Wilkins](https://twitter.com/thatbenlifetho) have been working on [React-Sketchapp](https://github.com/airbnb/react-sketchapp) which takes React components and renders them inside Sketch. Jon and Ben have also been working on a [mind-blowing new tool](https://www.youtube.com/watch?v=z5XxgxBz3Fo) which takes napkin sketches and somehow turns them into React components.

[Adam Morse](https://twitter.com/mrmrs_), [Brent Jackson](https://twitter.com/jxnblk) and [John Otander](https://twitter.com/4lpine) are working on a suite of tools at [Compositor](https://twitter.com/getcompositor) which basically [solve all of the problems](https://twitter.com/getcompositor/status/897946464269291521) in this article and maybe the world.

I’m working on [Modulz](https://twitter.com/Modulz), a new design tool and [open-source design system](https://www.modulz.co/showcase/) which also aims to solve the problems I mentioned in this article. If you’re interested, follow along on Twitter for updates.

While innovation in tooling is important, the real challenge is education. The design community is simply not ready for a systematic design tool. Many designers have little to no interest in building systems. For some, the JPG is the end goal — the Dribbble likes.

We need to somehow inspire a culture of accountability. Developers have had a culture of accountability for years. They have tools to keep their code in check. If a developer repeatedly deviates from their strict code guidelines, you can be sure the issue will be addressed.

Meanwhile, designers frequently amass mountains of layers in complete disarray with little regard given to layer naming, grouping, and ordering. It’s very much each to their own. Since the output (raster image) is unaffected by the input (vector layers), there’s no real burden placed on designers to be organized. Designers often excuse this lack of organization by romanticizing the art of design, painting themselves as magicians who need to be left to their own devices in order to perform.

We must also inspire a culture of inclusion. We should actively discourage malpractice like ultra light text colors which makes text difficult to read for many people, or super high-quality typefaces which make webpages slow to load, or patternless UI elements which make things difficult to understand for color blind people. Currently, this type of malpractice is applauded among the design community. If we’re to welcome a smart design tool, we must invert this culture.

If a systematic design tool is to win our hearts, it must first educate.








