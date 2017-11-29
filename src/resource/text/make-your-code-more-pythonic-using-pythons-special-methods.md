---
author: Marco Massenzio
authorTwitter: none
authorFacebook: none
title: "Make your code more “pythonic” using Python’s special methods"
subTitle: "In his excellent Fluent Python book, Luciano Ramalho talks about Python’s “data model.” He gives some excellent examples of how the langu..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*_vcMHRjT4BItOuz8LNA6FA.jpeg
url: https://medium.freecodecamp.org/make-your-code-more-pythonic-using-pythons-special-methods-b348f915852e
id: make-your-code-more-pythonic-using-pythons-special-methods-b348f915852e
date: 2016-07-22T20:15:03.000Z
tags: [
  "Python",
  "Security",
  "Tech",
  "Programming",
  "Software Development"
]
---
# Make your code more “pythonic” using Python’s special methods







![](https://cdn-images-1.medium.com/max/2000/1*_vcMHRjT4BItOuz8LNA6FA.jpeg)







In his excellent [Fluent Python](http://amzn.to/29QsgTn) book, Luciano Ramalho talks about Python’s “data model.” He gives some excellent examples of how the language achieves internal consistency through the judicious use of a well-defined API. In particular, he discusses how Python’s “[special methods](https://docs.python.org/3/reference/datamodel.html#special-method-names)” enable the construction of elegant solutions, which are concise and highly readable.

And while you can find countless examples online of how to implement the _iterative_ special methods (___iter__()_ and friends), here I wanted to present an example of how to use two of the lesser known special methods: ___del__()_ and ___call__()_.

For those familiar with C++, these implement two very familiar patterns: the _destructor_ and the _function object_ (aka, _operator()_).

### Implement a self-destructing key



![](https://cdn-images-1.medium.com/max/1600/1*NQJUmRIbVptnQO9oym9OAg.jpeg)

Credit: [ke dickinson](https://www.flickr.com/photos/ke-dickinson/7159943526/in/photolist-bUGzLb-JXhz-8MMTUA-o8fGSq-9tdgxB-)



Let’s say that we want to design an _encryption key_ which will be in turn encrypted with a _master key — _and whose “plaintext” value will only be used “in flight” to encrypt and decrypt our data — but will otherwise only be stored encrypted.

There are many reasons why you may want to do this, but the most common is when the data to be encrypted is very large and time-consuming to encrypt. Should the _master key_ be compromised, we could revoke it then re-encrypt the encryption keys with a new master key — all without incurring the time penalty associated with decrypting and re-encrypting possibly several terabytes worth of data.

In fact, re-encrypting the encryption keys may be so computationally inexpensive that this could be done on a regular basis, rotating the _master key_ at frequent intervals (perhaps weekly) to decrease the attack surface.

If we use [OpenSSL](http://openssl.org) command-line tools to do all the encryption and decryption tasks, we need to temporarily store the encryption key as “plaintext” in a file, which we will securely destroy using the shred Linux tool.

Note that we use the term “plaintext” here to signify that the contents are decrypted, not to mean plain text format. The key is still binary data, but if intercepted by an attacker, would **not** be protected with encryption.

However, just implementing the call to the shredding utility as the last step in our encryption algorithm would not be sufficient to ensure that this is executed under **all** possible code path executions. There may be errors, raised exceptions, a gracefully termination (Control-c), or an abrupt SIGKILL of the program.

Guarding against all possibilities is not only tiresome, but also error-prone. Instead we can let the Python interpreter can do the hard work for us, and ensure that certain actions are **always** undertaken when the object is garbage collected.

Note that the technique shown here will not work for the SIGKILL case (aka kill -9), for which you’d need to employ a more advanced technique (signal handlers).

The idea is to create a class which implements the ___del__()_ special method, which is guaranteed to be **always** invoked when the there are no further references to the object, and it is being garbage-collected. The exact timing of that happening is implementation dependent, but in common Python interpreters, it seems to be almost instantaneous.

Here’s what happens on a MacOS laptop, running El Capitan and Python 2.7:

<pre name="cb09" id="cb09" class="graf graf--pre graf-after--p">$ python  
Python 2.7.10 (default, Oct 23 2015, 19:19:21)  
[GCC 4.2.1 Compatible Apple LLVM 7.0.0 (clang-700.0.59.5)] on darwin  
>>> class Foo():  
...     def __del__(self):  
...         print("I'm gone, goodbye!")  
...  
>>> foo = Foo()  
>>> bar = foo  
>>> foo = None  
>>> bar = 99  
I'm gone, goodbye!  
>>> another = Foo()  
>>> ^D  
I'm gone, goodbye!  
$</pre>

As you can see, the “destructor” method will be invoked either when there are no longer references to it (_foo_) or when the interpreter exits (_bar_).

The following code fragment shows how we ended up implementing our “self-encrypting” key. I called it _SelfDestructKey_ because the real feature is that it _destructs_ the plaintext version of the encryption key upon exit.

<pre name="d035" id="d035" class="graf graf--pre graf-after--p">class SelfDestructKey(object):  
    """A self-destructing key: it will shred its contents when it gets deleted.  

       This key also encrypts itself with the given key before writing itself out to a file.  
    """  

    def __init__(self, encrypted_key, keypair):  
        """Creates an encryption key, using the given keypair to encrypt/decrypt it.  

        The plaintext version of this key is kept in a temporary file that will be securely  
        destroyed upon this object becoming garbage collected.  

        :param encrypted_key the encrypted version of this key is kept in this file: if it  
            does not exist, it will be created when this key is saved  
        :param keypair a tuple containing the (private, public) key pair that will be used to  
            decrypt and encrypt (respectively) this key.  
        :type keypair collections.namedtuple (Keypair)  
        """  
        self._plaintext = mkstemp()[1]  
        self.encrypted = encrypted_key  
        self.key_pair = keypair  
        if not os.path.exists(encrypted_key):  
            openssl('rand', '32', '-out', self._plaintext)  
        else:  
            with open(self._plaintext, 'w') as self_decrypted:  
                openssl('rsautl', '-decrypt', '-inkey', keypair.private, _in=encrypted_key,  
                        _out=self_decrypted)  

    def __str__(self):  
        return self._plaintext  

    def __del__(self):  
        try:  
            if not os.path.exists(self.encrypted):  
                self._save()  
            shred(self._plaintext)  
        except ErrorReturnCode as rcode:  
            raise RuntimeError(  
                "Either we could not save encrypted or not shred the plaintext passphrase "  
                "in file {plain} to file {enc}.  You will have to securely delete the plaintext "  
                "version using something like `shred -uz {plain}".format(  
                    plain=self._plaintext, enc=self.encrypted))  

    def _save(self):  
        """ Encrypts the contents of the key and writes it out to disk.  

        :param dest: the full path of the file that will hold the encrypted contents of this key.  
        :param key: the name of the file that holds an encryption key (the PUBLIC part of a key pair).  
        :return: None  
        """  
        if not os.path.exists(self.key_pair.public):  
            raise RuntimeError("Encryption key file '%s' not found" % self.key_pair.public)  
        with open(self._plaintext, 'rb') as selfkey:  
            openssl('rsautl', '-encrypt', '-pubin', '-inkey', self.key_pair.public,  
                    _in=selfkey, _out=self.encrypted)</pre>

Also, note how I have implemented the ___str__()_ method, so that I can get the name of the file containing the plaintext key by just invoking:

<pre name="e241" id="e241" class="graf graf--pre graf-after--p">passphrase = SelfDestructKey(secret_file, keypair=keys)   
encryptor = FileEncryptor(  
    secret_keyfile=str(passphrase),  
    plain_file=plaintext,  
    dest_dir=enc_cfg.out)</pre>

Note that this is a simplified version of the code. The full code is available at the [filecrypt](https://github.com/massenz/filecrypt) Github repository, and it has been more fully explained in this [blog entry](https://codetrips.com/2016/07/13/filecrypt-openssl-file-encryption).

We could have just as easily implemented the ___str__()_ method to return the actual contents of the encryption key.

Be that as it may, if you look in the code that uses the encryption key, at no point we need to invoke the __save()_ method or directly invoke the shred utility. This will all be taken care of by the interpreter when either the passphrase goes out of scope, or the script terminates (normally or abnormally).

### Implement the Command Pattern with a Callable object



![](https://cdn-images-1.medium.com/max/1600/1*aNEqI9__cmuYdVwBXv0FlA.jpeg)

Credit: [Defence-Imagery via Pixabay](https://pixabay.com/en/users/Defence-Imagery-11/)



Python has the concept called a _callable,_ which is essentially “something that can be invoked as if it were a function.” This follows the _Duck Typing_ approach: “if it looks like a duck, and quacks like a duck, then it is a duck.” Well in the case of _callable_, “if it looks like a function, and can be called like a function, then it **is** a function.”

To make a class object behave as a _callable,_ all we need to do is to define a ___call__()_ method and then implement it as any other “ordinary” class method.

Say that we want to implement a “command runner” script that (similarly to, for example, git) can take a set of sub-commands and execute them. One approach could be to use the [Command Pattern](http://amzn.to/29QSxB5) in our CommandRunner class:

<pre name="a54d" id="a54d" class="graf graf--pre graf-after--p">class CommandRunner(object):  
    """Implements the Command pattern, with the help of the  
       __call__() special method."""  

    def __init__(self, config):  
        """Initiailize the Runner with the configuration   
           from parsing the command line.  

           :param config the command-line arguments, as parsed   
                by ``argparse``  
           :type config Namespace  
        """  
        self._config = config  

    def __call__(self):  
        method = self._config.cmd  
        if hasattr(self, method):  
            callable_meth = self.__getattribute__(method)  
            if callable_meth:  
                callable_meth()  
        else:  
            raise RuntimeError('Unexpected command "{}"; not found'.format(method))  

    def run(self):  
        # Do something with the files  
        pass  

    def build(self):  
        # Call an external method that takes a list of files  
        build(self._config.files)  

    def diff(self):  
        """Will compute the diff between the two files passed in"""  
        if self._config.files and len(self._config.files) == 2:  
            file_a, file_b = tuple(self._config.files)  
            diff_files(file_a, file_b)  
        else:  
            raise RuntimeError("Not enough arguments for diff: "  
                               "2 expected, {} found".format(  
                len(self._config.files) if self._config.files   
                                        else 'none'))  

    def diff_all(self):  
        # This will take a variable number of files and   
        # will diff them all  
        pass</pre>

Here’s the config initialization argument is a Namespace object as returned by the [argparse](https://docs.python.org/3/library/argparse.html) library:

<pre name="92c8" id="92c8" class="graf graf--pre graf-after--p">def parse_command():  
    """ Parse command line arguments and returns a config object</pre>

<pre name="2485" id="2485" class="graf graf--pre graf-after--pre">    :return: the configured options  
    :rtype: Namespace or None  
    """  
    parser = argparse.ArgumentParser()  

    # Removed the `help` argument for better readability;  
    # always include that to help your user, when they invoke your   
    # script with the `--help` flag.  
    parser.add_argument('--host', default='localhost')  
    parser.add_argument('-p', '--port', type=int, default=8080,)  
    parser.add_argument('--workdir', default=default_wkdir)  

    parser.add_argument('cmd', default='run', choices=[  
        'run', 'build', 'diff', 'diff_all'])  
    parser.add_argument('files', nargs=argparse.REMAINDER")  
    return parser.parse_args()</pre>

To invoke this script we would use something like:

<pre name="f46b" id="f46b" class="graf graf--pre graf-after--p">$ ./main.py run my_file.py</pre>

or:

<pre name="42f0" id="42f0" class="graf graf--pre graf-after--p">$ ./main.py diff file_1.md another_file.md</pre>

It’s worth pointing out how we also protect against errors using another special method (___getattribute__()_) and the _hasattr()_ method that is part of the above-mentioned Python’s _data model_:

<pre name="cf1c" id="cf1c" class="graf graf--pre graf-after--p">if hasattr(self, method):  
    callable_meth = self.__getattribute__(method)</pre>

Note that we could have used the ___getattr__()_ special method to define the behavior of the class when attempting to access non-existing attributes, but in this case it was probably easier to do that at the point of call.

Given the fact that we are telling _argparse_ to limit the possible value to the _choices_ when parsing the _cmd_ argument, we are guaranteed that we will never get an “unknown” command. However, the _CommandRunner_ class does not need to know this, and it can be used in other instances where we do not have such a guarantee. Not to mention that we are only one typo away from some very puzzling bug, if we didn’t do our homework in ___call__()_.

To make all this work, then we only need to implement a trivial ___main___ snippet:

<pre name="6baf" id="6baf" class="graf graf--pre graf-after--p">if __name__ == '__main__':   
    cfg = parse_command()   
    try: runner = CommandRunner(cfg)   
        runner() # Looks like a function, let's use it like one.   
    except Exception as ex:   
        logging.error("Could not execute command `{}`: {}".format(  
            cfg.cmd, ex))   
        exit(1)</pre>

Note how we invoke the runner as if it were a method. This will in turn execute the ___call__()_ method and run the desired command.

We truly hope everyone agrees that this is a way more pleasant code to look at than monstrosities such as:

<pre name="f4ab" id="f4ab" class="graf graf--pre graf-after--p"># DON'T DO THIS AT HOME  
# Please avoid castle-of-ifs, they are just plain ugly.  
if cfg.cmd == "build":  
    # do something to build  
elif cfg.cmd == "run":  
    # do something to run  
elif cfg.cmd == "diff":  
    # do something to diff  
elif cfg.cmd == "diff_all":  
    # do something to diff_all  
else:  
    print("Unknown command", cfg.cmd)</pre>

Learning about Python’s “special methods” will make your code easier to read and re-use in different situations. It will also make your code more “pythonic” and immediately recognizable to other fellow pythonistas, thus making your intent clearer to understand and reason about.











* * *







_Originally published at_ [_codetrips.com_](https://codetrips.com/2016/07/22/python-magic-methods/) _on July 22, 2016._








