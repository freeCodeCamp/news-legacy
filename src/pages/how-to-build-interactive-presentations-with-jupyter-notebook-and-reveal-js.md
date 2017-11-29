---
author: Dat Tran
authorTwitter: https://twitter.com/datitran
authorFacebook: https://facebook.com/10210750284257237
title: "How you can ditch PowerPoint and build better slides with Jupyter and Reveal.js"
subTitle: "In this article, I will introduce jupyter2slides — a little side project of mine that lets you easily create beautiful and interactive pr..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*MvyDoOEprAO-lbSuInyA0w.png
url: https://medium.freecodecamp.org/how-to-build-interactive-presentations-with-jupyter-notebook-and-reveal-js-c7e24f4bd9c5
id: how-to-build-interactive-presentations-with-jupyter-notebook-and-reveal-js-c7e24f4bd9c5
date: 2017-10-10T00:33:00.782Z
tags: [
  "Design",
  "Tech",
  "Data Visualization",
  "Web Development",
  "Data Science"
]
---
# How you can ditch PowerPoint and build better slides with Jupyter and Reveal.js



![](https://cdn-images-1.medium.com/max/1600/1*MvyDoOEprAO-lbSuInyA0w.png)

Image Credit: [Rafael Araujo on Pinterest](https://www.pinterest.de/pin/498562621241369901/)



In this article, I will introduce [jupyter2slides](https://github.com/datitran/jupyter2slides) — a little side project of mine that lets you easily create beautiful and interactive presentation slides using [Jupyter](http://jupyter.org/) Notebook and [reveal.js](http://lab.hakim.se/reveal-js/#/).

Here’s what it looks like:



![](https://cdn-images-1.medium.com/max/1600/1*8Hmu8ZyI3NJJWvVEWZlWAg.gif)

[http://interactive-slides.cfapps.io/](http://interactive-slides.cfapps.io/#/)



And this is the corresponding PDF, generated with [DeckTape](https://github.com/astefanutti/decktape):





<iframe data-width="600" data-height="500" width="600" height="500" src="https://medium.freecodecamp.org/media/ce25a02e284b78935ff0f9ffae8b7ce6?postId=c7e24f4bd9c5" data-media-id="ce25a02e284b78935ff0f9ffae8b7ce6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Fcdn.slidesharecdn.com%2Fss_thumbnails%2Finteractiveslides-170814083650-thumbnail-4.jpg%3Fcb%3D1502699920&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





### My motivation for building this

Microsoft PowerPoint is cool. It’s like a Swiss Army knife for consultants, and you can make beautiful slides with it.

When it comes to code, though, PowerPoint sucks. The solution is to use reveal.js. You can use markdown to highlight code, and it’s responsive. But like [LaTeX](https://www.latex-project.org/), it can be tedious.

Another way to use reveal.js is through Jupyter which offers many advantages:

*   In-browser editing for code with automatic syntax highlighting, indentation, and tab completion
*   Ability to run code with the results of computations attached to the code which generated them (literate programming)
*   Supports [Markdown](https://en.wikipedia.org/wiki/Markdown) and many media formats such as HTML, LaTex, audio, and images
*   Supports interactive widgets to manipulate and visualize data
*   Uses tools from the [PyData stack](https://www.numfocus.org/) like Matplotlib, Numpy, and Bokeh as well as others like [Plotly](https://plot.ly/) and [Folium](https://folium.readthedocs.io/en/latest/)

To use reveal.js with Jupyter, you create a notebook and use [nbconvert](http://nbconvert.readthedocs.io/en/stable/) to get reveal.js slides as well. But the standard design is boring:



![](https://cdn-images-1.medium.com/max/1600/1*kq3-BczjCXej2BMu-u4Qyw.png)

Check out [IPython Slides Viewer](http://slideviewer.herokuapp.com/) for some other “default” examples.



### My solution

I’ve worked on a project that lets you generate beautiful presentation slides. The entire code is on [my GitHub repo](https://github.com/datitran/jupyter2slides). Under the hood, it still uses `nbconvert`with reveal.js, but I extended it by:

*   Adding a customized theme which has a cleaner design
*   Enabling the [title footer plugin](https://github.com/e-gor/Reveal.js-Title-Footer) by default
*   Enabling slide numbers by default
*   Adding a Jupyter notebook template with examples like cover and divider slides, markdown syntax, and more
*   Making it easier to push the presentation to [Cloud Foundry](https://www.cloudfoundry.org/) by using [Flask](http://flask.pocoo.org/) and the Python buildpack
*   Including the option to export slides to PDF using [DeckTape](https://github.com/astefanutti/decktape)

### How to get started

To create your own presentation, clone the [repo on GitHub](https://github.com/datitran/jupyter2slides) and go through its readme.







![](https://cdn-images-1.medium.com/max/2000/1*WEgwvN_yuy0-gsgAAmIKIw.gif)

Clone the [repo](https://github.com/datitran/jupyter2slides) to get started.







I hope this project will be of use for you in the future. I look forward to seeing others use this template at conferences like [PyData](https://pydata.org/). I welcome any feedback to improve the slide designs and others’ contributes to the code base.

If you found this article useful, give me a high five 👏🏻 so others can find it too, and share it with your friends. Follow me here on Medium ([Dat Tran](https://medium.com/@datitran)) or on Twitter ([@datitran](https://twitter.com/datitran)) to stay up-to-date with my work. Thanks for reading!








