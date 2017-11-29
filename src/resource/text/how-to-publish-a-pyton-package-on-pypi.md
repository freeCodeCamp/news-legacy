---
author: Marco Massenzio
authorTwitter: none
authorFacebook: none
title: "How to publish your own Python Package on PyPi"
subTitle: "Want to share your Python code with other developers? Want to make your users’ lives easier when installing your package? Then you should..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*OebmlFYpKPFJJ-qT2qSfiA.jpeg
url: https://medium.freecodecamp.org/how-to-publish-a-pyton-package-on-pypi-a89e9522ce24
id: how-to-publish-a-pyton-package-on-pypi-a89e9522ce24
date: 2016-09-19T02:09:02.000Z
tags: [
  "Python",
  "Tech",
  "Cloud Computing",
  "Programming",
  "Software Development"
]
---
# How to publish your own Python Package on PyPi



![](https://cdn-images-1.medium.com/max/1600/1*OebmlFYpKPFJJ-qT2qSfiA.jpeg)

Python is one the most powerful, yet friendly programming languages today.



Want to share your Python code with other developers? Want to make your users’ lives easier when installing your package? Then you should publish your Python packages to PyPi.

The good news is that it is now easier than ever. This is a short guide that will walk you through the process and point you toward relevant documentation along the way.

### Step #1: Create a setup.py file

The arguments for _setup()_ are documented [here](https://packaging.python.org/distributing/#setup-args) and are non-trivial. A good example to go by is my [filecrypt](https://github.com/massenz/filecrypt) project’s _setup.py_ file.

Below is a brief excerpt. Again, be sure to [read the documentation](https://packaging.python.org/distributing/#setup-args) for more info on this, since it explains what all these arguments mean much better than I could, even with a full Medium article to do it:

<pre name="55f8" id="55f8" class="graf graf--pre graf-after--p">setup(name='crytto',  
      description='An OpenSSL-based file encryption   
                   and decryption utility',  
      long_description=long_description,  
      version='0.2.0',  
      url='https://github.com/massenz/filecrypt',  
      author='M. Massenzio',  
      author_email='marco@alertavert.com',  
      license='Apache2',  
      classifiers=[  
          'Development Status :: 4 - Beta',  
          'Intended Audience :: System Administrators',  
          'License :: OSI Approved :: Apache Software License',  
          'Programming Language :: Python :: 3'  
      ],  
      packages=['crytto'],  
      install_requires=[  
          'PyYAML>=3.11',  
          'sh>=1.11'  
      ],  
      entry_points={  
          'console_scripts': [  
              'encrypt=crytto.main:run'  
          ]  
      }  
)</pre>

**Note:** Do **not** confuse setuptools with distutils — here’s the correct import for setup.py:

<pre name="90aa" id="90aa" class="graf graf--pre graf-after--p">from setuptools import setup</pre>

The trickiest part is figuring out package names and the correct configuration for your _script files._ It’s probably best to decide these in advance, but you can always rectify these while crafting your setup.py.

The biggest challenge is to come up with a top-level package name that does not conflict with an existing one. As far as I can tell, it’s currently mostly a process of trial-and-error.

Once the setup.py is in decent shape, you can try and build a wheel:

<pre name="af15" id="af15" class="graf graf--pre graf-after--p">python setup.py bdist_wheel</pre>

After doing that, it’s good practice to create a new virtualenv, and try to install the new package in that one:

<pre name="fe73" id="fe73" class="graf graf--pre graf-after--p">virtualenv test_env  
./test_env/bin/activate  
pip install dist/my-project.whl</pre>

This is particularly useful for testing out whether the _console_scripts_ have been correctly configured.

If you use _classifiers_ as in:

<pre name="2492" id="2492" class="graf graf--pre graf-after--p">classifiers=[   
    'Development Status :: 4 - Beta',   
    'Intended Audience :: System Administrators',   
    'License :: OSI Approved :: Apache Software License',  
    'Programming Language :: Python :: 3'  
]</pre>

…then make sure to consult the [classifiers list](https://pypi.python.org/pypi?%3Aaction=list_classifiers), as anything else will cause an error and prevent registration.

### Register your Project



![](https://cdn-images-1.medium.com/max/1600/1*ZSCeHQf08mD0hKaxMIUYCw.jpeg)



**Note:** The documentation told me to use twine for this step, but it didn’t work for me. Your mileage may vary.

Unless you have already have an account on PyPi, you’ll need to [create one](https://pypi.python.org/pypi?%3Aaction=register_form), then log in.

You can then head over to the [registration form](https://pypi.python.org/pypi?%3Aaction=submit_form) and upload your **PKG_INFO** file. This has been created in a _[prj name].egg-info/_ directory. It may take a bit of back and forth, while you try to appease the Gods of PyPi to accept your configuration choices.

In particular, coming up with a non-conflicting-yet-meaningful package name may take more attempts than you’d expect. Again, I recommend you plan, as I’ve been unable to find an easy way to list **all** package names. If you do know of one, be sure to leave a comment. You’ll note that, according to PyPi…

<pre name="1219" id="1219" class="graf graf--pre graf-after--p">There are currently 88906 packages here.</pre>

(“here” being PyPi, as of September 16, 2016).

### Upload to PyPi

Once registration succeeds, the actual upload is rather easy, using twine:

<pre name="cd1f" id="cd1f" class="graf graf--pre graf-after--p">twine upload dist/*</pre>

Provided you have a valid ~/.pypirc, it will just ask for your password. Then you just need to:

<pre name="6fdf" id="6fdf" class="graf graf--pre graf-after--p">$ cat ~/.pypirc   
[distutils]   
index-servers=pypi</pre>

<pre name="b1d5" id="b1d5" class="graf graf--pre graf-after--pre">[pypi]   
repository = [https://upload.pypi.org/legacy/](https://upload.pypi.org/legacy/)   
username = [your username]</pre>

That's it. Enjoy building and sharing your Python packages!











* * *







_I originally published this on my blog at_ [_codetrips.com_](https://codetrips.com/2016/09/19/how-to-publish-a-pyton-package-on-pypi/)_._








