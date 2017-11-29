---
author: Gajus Kuizinas
authorTwitter: https://twitter.com/kuizinas
authorFacebook: none
title: "Reducing CSS bundle size 70% by cutting the class names and using scope isolation"
subTitle: "Just like Google does it"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*mGuDYFM56iyLi1MgZPC8bw.png
url: https://medium.freecodecamp.org/reducing-css-bundle-size-70-by-cutting-the-class-names-and-using-scope-isolation-625440de600b
id: reducing-css-bundle-size-70-by-cutting-the-class-names-and-using-scope-isolation-625440de600b
date: 2017-07-12T22:50:35.901Z
tags: [
  "JavaScript",
  "Webpack",
  "CSS",
  "SEO",
  "Web Development"
]
---
# Reducing CSS bundle size 70% by cutting the class names and using scope isolation

## Just like Google does it

At the beginning of this year I have quit consulting and set out to build [GO2CINEMA](https://go2cinema.com/) — Fast, simple and secure way to book cinema tickets in the UK. I have done a splendid job making it _fast, simple and secure_. Somewhere along the way, I’ve gotten obsessed with the critical rendering path optimization ⚡️.

I have solved pre-rendering of the HTML using [ūsus](https://github.com/gajus/usus). ūsus renders HTML of single page applications (SPA) and [inlines the CSS used to render the page](https://medium.com/@gajus/pre-rendering-spa-for-seo-and-improved-perceived-page-loading-speed-47075aa16d24). However, I did not like inlining 70 KB into every HTML document, esp. most of it being the CSS class names.

#### Just like Google does it

Have you ever peeked into the source code of [https://www.google.com/](https://www.google.com/)? The first thing you will notice is that the CSS class names are no more than a couple of characters long.



![](https://cdn-images-1.medium.com/max/1600/1*mGuDYFM56iyLi1MgZPC8bw.png)

google.com HTML



But how?

#### Shortcomings of the CSS minifiers

There is one thing a minifier cannot do – change the selector names. This is because a CSS minifier does not control the HTML output. Meanwhile, CSS names can get long.

If you are using CSS modules, your CSS modules are likely going to include stylesheet file name, local identifier name and a random hash. The class name template is described using [css-loader](https://github.com/webpack-contrib/css-loader) `[localIdentName](https://github.com/webpack-contrib/css-loader)` configuration, e.g. `[name]___[local]___[hash:base64:5]`. Therefore, a generated class name will look something like this `.MovieView___movie-title___yvKVV` ; if you like descriptive names, it can get a lot longer, e.g `.MovieView___movie-description-with-summary-paragraph___yvKVV` .

#### Renaming CSS class names at the compilation time

However, if you are using [webpack](https://webpack.js.org/) and [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules), you are in luck 🍀 – you can rename class names at the compilation time using [css-loader](https://github.com/webpack-contrib/css-loader) `[getLocalIdent](https://github.com/webpack-contrib/css-loader)` configuration and the equivalent babel-plugin-react-css-modules `[generateScopedName](https://github.com/gajus/babel-plugin-react-css-modules#configuration)` configuration.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/a8c7a67872e39ad4e79d12246968f147?postId=625440de600b" data-media-id="a8c7a67872e39ad4e79d12246968f147" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F973543%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





The cool thing about `generateScopedName` is that the same instance of the function can be used for Babel and webpack build process:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/346b7a2eeca6a4641a73b4d133262207?postId=625440de600b" data-media-id="346b7a2eeca6a4641a73b4d133262207" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F973543%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





#### Making the names short

Thanks to `babel-plugin-react-css-modules` and `css-loader` sharing the same logic to generate the CSS class names, we can change the class names to whatever we like, even a random hash. However, instead of a random hash, I wanted the shortest possible class names.

To generate the shortest class names, I have created class name index and used the `[incstr](https://github.com/grabantot/incstr)` module to generate incremental IDs for every entry in the index.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d544348c95b027fd1db72600afb0ba8a?postId=625440de600b" data-media-id="d544348c95b027fd1db72600afb0ba8a" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F973543%3Fv%3D3%26s%3D400&amp;key=4fce0568f2ce49e8b54624ef71a8a5bd" allowfullscreen="" frameborder="0"></iframe>





This guarantees short and unique class names. Now, instead of `.MovieView___movie-title___yvKVV` and `.MovieView___movie-description-with-summary-paragraph___yvKVV` our class names have become `.a_a`, `.b_a`, etc.

This has reduced [GO2CINEMA](https://go2cinema.com/) CSS bundle size from 140 KB to 53KB.

#### Using Scope isolation to further reduce the bundle size

There is a good reason I have added `_` into the CSS class name separating the component name and the local identifier name – the distinction is useful for minification.

[csso](https://github.com/css/csso) (CSS minifier) has [scopes](https://github.com/css/csso#scopes) configuration. Scopes define lists of class names that are exclusively used on some markup, i.e. selectors from different scopes don’t match the same element. This information allows the optimizer to move rules more aggressive.

To leverage this, use [csso-webpack-plugin](https://github.com/zoobestik/csso-webpack-plugin) to post-process the CSS bundle:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/d699484457c78a4a0556e8530eafe82c?postId=625440de600b" data-media-id="d699484457c78a4a0556e8530eafe82c" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F973543%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





This has reduced [GO2CINEMA](https://go2cinema.com/) CSS bundle size from 53 KB to 47 KB.

#### Is it worth it?

The first argument against such minification is that the compression algorithms will do it for you. GO2CINEMA CSS bundle compressed using the [Brotli](https://en.wikipedia.org/wiki/Brotli) algorithm saves a mere 1 KB compared to the original bundle with the long class names.

On the other hand, setting up this minification is a one-time investment and it reduces the size of the document that needs to be parsed. It has other benefits, such as deterring scapers that rely on the CSS class names to navigate or accidentally matching CSS selectors of the ad-blocker [blacklists](https://gist.github.com/spyesx/42fe84c0ef757d1c38a4).

Meanwhile, you can see a demo of this minification being used on the GO2CINEMA movie and venue pages, e.g.

*   [https://go2cinema.com/movies/wonder-woman-2017-1305237](https://go2cinema.com/movies/wonder-woman-2017-1305237)
*   [https://go2cinema.com/venues/odeon-oxford-magdalen-st-1001053](https://go2cinema.com/venues/odeon-oxford-magdalen-st-1001053)

#### Can you help me with GO2CINEMA?

[GO2CINEMA](https://go2cinema.com/) is my baby. I love working working on it 😍. However, it is my first startup this decade and there are a lot of things I need help with.

If you can give feedback, an SEO advice, a business advice, know an angel investor, know someone who can write an article about [GO2CINEMA](https://go2cinema.com/), make a tweet, invite me to a conference, a radio talk show, etc. or just want to express your support/ curiosity and say “Hi!”, email me at gajus@gajus.com or DM via Twitter, [https://twitter.com/kuizinas](https://twitter.com/kuizinas).








