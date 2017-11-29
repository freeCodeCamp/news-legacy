---
author: Mariya Yao
authorTwitter: https://twitter.com/thinkmariya
authorFacebook: none
title: "If we want AI to work for us — not against us — we need collaborative design"
subTitle: "The trope “there’s an app for that” is becoming “there’s an AI for that.”..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*VBJAnRAdaf13nnzc0J5Ehg.jpeg
url: https://medium.freecodecamp.org/if-we-want-ai-to-work-for-us-and-not-against-us-we-need-collaborative-design-a627175e5d60
id: if-we-want-ai-to-work-for-us-and-not-against-us-we-need-collaborative-design-a627175e5d60
date: 2017-08-31T22:05:23.000Z
tags: [
  "Machine Learning",
  "Technology",
  "Artificial Intelligence",
  "Tech",
  "Startup"
]
---
# If we want AI to work for us — not against us — we need collaborative design







![](https://cdn-images-1.medium.com/max/2000/1*VBJAnRAdaf13nnzc0J5Ehg.jpeg)







The trope “there’s an app for that” is becoming “there’s an AI for that.”

Want to assess the narrative quality of a story? Disney’s got [an AI for that](https://www.engadget.com/2017/08/21/disney-research-taught-ai-to-judge-short-stories/).

Got a shortage of doctors but still need to treat patients? IBM Watson prescribes the same treatment plan as human physicians [99% of the time](https://futurism.com/ibms-watson-ai-recommends-same-treatment-as-doctors-in-99-of-cancer-cases/).

Tired of waiting for George R.R. Martin to finish writing Game of Thrones? Rest easy, because a neural network has [done the hard work for him](https://motherboard.vice.com/en_us/article/evvq3n/game-of-thrones-winds-of-winter-neural-network).

But is all this rapid-fire progress good for humanity? Elon Musk, our favorite AI alarmist, recently [took down](https://techcrunch.com/2017/07/25/elon-musk-mark-zuckerberg-artificial-intelligence/) Mark Zuckerberg’s positive outlook on AI. He dismissed the latter’s views as “limited”.

Whether you’re in Camp Zuck of “AI is awesome” or in Camp Musk of “AI will doom us all”, one fact is clear. With AI touching all aspects of our lives, intelligent technology needs deliberate design to reflect and serve human needs and values.

### Biased AI has unexpected and severe consequences

Software applications used by U.S. government agencies for crime litigation and prevention algorithmically generate information that influence human decisions about sentencing, bail, and parole. Some of these programs have been found to [erroneously attribute](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) a much higher likelihood of committing further criminal activity to black defendants. The same algorithms also err in attributing much lower risk assessment scores to white defendants.

According to [a study](https://www.cmu.edu/news/stories/archives/2015/july/online-ads-research.html) from Carnegie Mellon University, Google served targeted ads for getting high-paying jobs (those that pay more than $200,000) much more often to men (1,800 times) than women (just a paltry 300).

It is unclear if the discrepancy is the result of advertisers’ preferences. Or if it is an inadvertent outcome of machine learning (ML) algorithms behind the ad recommendation engine. The outcome is that a professional landscape that already demonstrates preferential treatment for one gender over another is being reinforced at scale with technology.

In the field of healthcare, AI systems are at risk of producing unreliable insights even if algorithms were perfectly implemented. Underlying healthcare data is driven by social inequalities. Poorer communities lack access to digital healthcare. This leaves a gaping hole in the trove of medical information that AI systems feed to algorithms. Randomized control trials often [exclude](https://qz.com/1023448/if-youre-not-a-white-male-artificial-intelligences-use-in-healthcare-could-be-dangerous/) groups such as pregnant women, the elderly, or those suffering from other medical complications.

A Princeton University study [demonstrated](http://spectrum.ieee.org/tech-talk/robotics/artificial-intelligence/ai-learns-gender-and-racial-biases-from-language) that ML systems inherit human biases found in English language texts. Since language is a reflection of culture and society, our everyday biases get picked up in the mathematical models behind natural language processing (NLP) tasks. Failing to carefully review and de-bias such models has real-world consequences. Google’s Perspective API is intended to analyze online conversations and flag “toxic” content. But it [unintentionally flags](https://blog.conceptnet.io/2017/08/12/you-werent-supposed-to-actually-implement-it-google/) non-white entities like names and food as being far more toxic than their white counterparts.

Many gender, economic and racial biases in AI have been documented over the last few years.

With AI also becoming integral in the fields of security, defense and warfare, how do we design systems that don’t backfire?

### Mechanisms and manifestos are a start…

AI systems can’t only succeed in completing their core tasks. They must do so without harming human society. Designing safe and ethical AI is a monumental challenge, but a critical one to tackle now.

In a [joint study](http://www.popsci.com/google-researches-big-red-button-to-stop-dangerous-ai), Google DeepMind and The Future of Humanity Institute explored the possibility of AI going rogue. They recommended that AI be designed to have a ”big red button” that can be activated by a human operator to “prevent an AI agent from continuing a harmful sequence of actions.” In practical terms, this red button will be a trigger or a signal that will “trick” the machine to internally make a decision to stop, without recognizing it as a shutdown signal by an external agent.

Meanwhile, the world’s largest association of technical professionals Institute of Electrical and Electronics Engineers (IEEE) published its [General Principles for Ethically Aligned Design](https://standards.ieee.org/develop/indconn/ec/ead_general_principles.pdf). It covers all types of artificial intelligence and autonomous systems.

The document sets a general standard for designers to ensure that AI and autonomous systems:

1.  do not infringe human rights
2.  that they are transparent to a wide range of stakeholders
3.  that their benefits and associated risks can be extended or minimized
4.  that accountability for their design and operation is clearly laid out

#### …but collaborative design is critical for success

Hypothetical fail-safe mechanisms and hopeful manifestos are important. But they are insufficient to address the myriad of ways that AI systems can go wrong. Creations adopt the biases of their creators. Homogeneous development teams, insular thinking, and lack of perspective lie at the [root](https://www.topbots.com/fighting-homogenous-thinking-algorithmic-bias-ai/) of many of the challenges already manifesting in AI today.

Diversity and user-centered design in technology have never been so important. Luckily, as AI education and tooling becomes [more accessible](https://www.topbots.com/artificial-intelligence-deep-learning-education-free/), designers and other domain experts are increasingly empowered to contribute to a field that was previously reserved for academics and a niche community of experts.

### Three approaches to enhance collaboration in AI

#### **Approach #1: Build user-friendly products to collect better data for AI**

Elaine Lee, an AI Designer at eBay [emphasizes](https://uxdesign.cc/design-makes-ai-smarter-34a346e92b47) that human input and user generated data are critical for smarter AI. If the products collecting requisite data to power AI systems do not encourage positive engagement, then the data generated from user interactions tend to be incomplete, incorrect, or compromised. In Lee’s words, “We need to design experiences that incentivize engagement and improve AI.”

Google Design’s Jess Holbrook recommends a [7-step](https://medium.com/google-design/human-centered-machine-learning-a770d10562cd) approach to designing human-centered ML systems. He cautions against relying on algorithms to tell you what problems to solve. Instead he encourages designers to build systems that enable “co-learning and adaptation” between man and machine as technologies evolve. Holbrook also points out that many legitimate problems do not need ML to be successfully solved.

Collaborating with users seems like a common sense procedure. But few companies go beyond cursory user research and passive behavioral data collection. The next step is to enable a productive, long-term feedback loop so that users of AI systems actively define the functionality and vision of your technology,. Yet also perform important tasks like flagging and minimizing biases.

#### **Approach: #2: Prioritize domain expertise and business value over algorithms**

Michael Schrage, research fellow at MIT Sloan, [argues](https://hbr.org/2017/04/ai-wont-change-companies-without-great-ux) that “strategically speaking, a brilliant data-driven algorithm typically matters less than thoughtful UX design. Thoughtful UX designs can better train machine learning systems to become even smarter.

“In order to develop “thoughtful UX”, you need domain expertise and business value. A common pattern in both academia and industry engineering teams is the propensity to optimize for tactical wins over strategic initiatives. While brilliant minds worry about achieving marginal improvements in competition benchmarks, the nitty gritty issues of productizing and operationalizing AI for real-world use cases is often ignored. Who cares if you can solve a problem with 99% accuracy, if no one needs that problem solved? Or your tool is so arcane, no one is sure what problem it’s trying to solve in the first place?

“In working with Fortune 500 enterprises looking to re-invent their workflows with automation and AI, a complaint I commonly hear about promising AI startups is this: “These guys seem really smart and their product has a lot of bells and whistles. But they don’t understand my business.”

#### **Approach #3: Empower human designers with machine intelligence**

Designing AI is yet another challenge where human and machine can combine forces for superior results. Software developer, author and inventor Patrick Hebron [demonstrates](https://medium.com/artists-and-machine-intelligence/rethinking-design-tools-in-the-age-of-machine-learning-369f3f07ab6c) that machine learning can be used to simplify design tools without limiting creativity or removing control from human designers.

Hebron describes several ways ML can transform how people interact with design tools. These include emergent feature sets, design through exploration, design by description, process organization, and conversational interfaces. He believes these approaches can streamline the design process and enable human designers to focus on the creative and imaginative side of the process instead of the technical aspects (i.e., how to use a particular design software). This way, “designers will lead the tool, not the other way around.”

Designing AI is yet another challenge where human and machine can combine forces for superior results. Software developer, author and inventor Patrick Hebron [demonstrates](https://medium.com/artists-and-machine-intelligence/rethinking-design-tools-in-the-age-of-machine-learning-369f3f07ab6c) that machine learning can be used to simplify design tools without limiting creativity or removing control from human designers.

Hebron describes several ways ML can transform how people interact with design tools. These include emergent feature sets, design through exploration, design by description, process organization, and conversational interfaces. He believes these approaches can streamline the design process, and enable human designers to focus on the creative and imaginative side of the process instead of the technical aspects such as how to use a particular design software. This way, “designers will lead the tool, not the other way around.”

The field of “AI Design” is nascent. We are still figuring out which best practices we should preserve and what new ones we need to invented. But many promising AI-driven creative tools [already exist](https://www.topbots.com/artificial-intelligence-creativity-art-design/). Greater access to tools and education mean that experts from all fields and functions can help evolve a field that is traditionally driven by an elite few. With AI’s exponential impact on all aspects of our lives, this collaboration will be essential to developing technology that works for everyone, everyday.

Thanks for reading. You can read more of my writing on AI by following me here and checking out the [TOPBOTS blog](https://www.topbots.com/collaborative-design-critical-ai/?utm_medium=article&utm_source=Medium&utm_campaign=collaborativeai).








