---
title: "Pipfile and Pipenv : the future of Python dependencies management"
date: 2017-11-07
summary: How I learn to stop worrying and love pip (again)
tags: [Python, Pip, Pipenv, Packages Management]
---

Yes, I heared you. pip *is* a great tool and has been around for quite a long time. But for 3 years or so, people (contributors) have been looking for a way to enhance our packages management experience. Think about the superpowers of *composer*, *npm* (or better, *yarn*) in your favorite tool.

What they offer is (more or less) a replacement for the age-old requirements.txt file : the **Pipfile**.

## How I learn to stop worrying and love pip (again)

The new [Pipfile](https://github.com/pypa/pipfile) differs from the old-style requirements file in several ways :

* It uses *TOML* syntax to allow more configuration;

* It declares dependencies groups (i.e. a default one plus a development one for... development packages) so you don't have to split your requirements into several files.

* It comes with a Pipfile.lock file which pins the versions of your packages, in addition to some security bonus.

Let’s have a look at a minimal, simple Pipfile:

```ini
    [[source]]
    url = 'https://pypi.python.org/simple'
    verify_ssl = true
    name = 'pypi'

    [requires]
    python_version = '3.6'

    [packages]
    flask = '*'

    [dev-packages]
    pytest = '*'
```

What do we have here :

* First we declare the source that pip is going to use. Typically, it will be *pypi*.

* Then we declare our Python version requirement.

* Finally, we declare our packages and development packages.

You got it ? Now here is the example Pipfile from the official repository on GitHub :

```ini
[[source]]
url = 'https://pypi.python.org/simple'
verify_ssl = true
name = 'pypi'

[requires]
python_version = '2.7'

[packages]
requests = { extras = ['socks'] }
records = '>0.5.0'
django = { git = 'https://github.com/django/django.git', ref = '1.11.4', editable = true }
"e682b37" = {file = "https://github.com/divio/django-cms/archive/release/3.4.x.zip"}
"e1839a8" = {path = ".", editable = true}
pywinusb = { version = "*", os_name = "=='nt'", index="pypi"}

[dev-packages]
nose = '*'
unittest2 = {version = ">=1.0,<3.0", markers="python_version < '2.7.9' or (python_version >= '3.0' and python_version < '3.4')"}
```

See ? With the TOML syntax, you can be very specific about the version, source or os-variant you want to use. Note that all packages versions are not pinned, even if it *was* [the preferred way of declaring dependencies](http://nvie.com/posts/pin-your-packages/).

Pip is going to support this specification in the future with a syntax like pip install -p Pipfile. Let's see how we can use all this magical stuff today.

## Back to the Future

Meet [Pipenv](https://docs.pipenv.org/) (yep, that’s another project from [Kenneth Reitz](https://twitter.com/kennethreitz), the guy behind [httpbin](http://httpbin.org/), [pep8.org](https://gist.github.com/pep8.org), and, yes, [request](http://docs.python-requests.org/en/master/#)).

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">the fuck when you realize <a href="https://twitter.com/kennethreitz?ref_src=twsrc%5Etfw">@kennethreitz</a> &#39;s pipenv just dropped a 🎃 in your shell. Made my day.</p>&mdash; Julien Tanay (@Djiit) <a href="https://twitter.com/Djiit/status/925350303863656448?ref_src=twsrc%5Etfw">October 31, 2017</a></blockquote>

Pipenv is the current preferred implementation of Pipfile and allows you to manage your virtualenvs like a boss. It aims to ease and enhance how we manage our python environments (a la *virtualenvwrapper* or *pyenv*, but with *pip* skills).

Here is a simple workflow :

1- In your project directory, create your *virtualenv*. Pipenv will store it in a centralized place instead of your project root directory :

```sh
pipenv --three # Yeah, 3 is the way to go
```

2- Install some dependencies :

```sh
pipenv install flask
pipenv install --dev pytest # Notice the --dev flag
```

3- Use your *virtualenv*. It will open a new shell :

```sh
pipenv shell
```

Note that we were not *in* our virtualenv before this command. Everything is handled for us by *Pipenv*.

From this point, you are good to go. Pipenv will help you manage your environment throughout your development process.

Finally, you shouldn’t be worried about compatibility issues with your deployment server (which is surely still using *pip* as you are reading this) : you can generate a good old requirements.txt by running :

```sh
pipenv lock -r > requirements.txt
```

Pipenv handles saving your dependencies and it even adds some security reinforcements by specifying each package’s hash.

That’s it. Go test Pipenv and tell me what you think !

Cheers
