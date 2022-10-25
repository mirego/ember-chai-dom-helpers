**⚠️ This project is deprecated and no longer maintained by Mirego. It’s only available as a read-only repository.**

<div align="center">
  <img src="https://user-images.githubusercontent.com/11348/55554933-09cb5a00-56b2-11e9-828d-e3cd6104f596.png" width="600" />
  <p><br />A set of <a href="https://www.chaijs.com">Chai</a> assertions ready for your DOM.</p>
  <p>
    <a href="https://travis-ci.com/mirego/ember-chai-dom-helpers"><img src="https://travis-ci.com/mirego/ember-chai-dom-helpers.svg?branch=master" /></a>
    <a href="https://www.npmjs.com/package/ember-chai-dom-helpers"><img src="https://img.shields.io/npm/v/ember-chai-dom-helpers.svg" /></a>
  </p>
</div>

## Installation

```shell
$ ember install ember-chai-dom-helpers
```

In your `/tests/test-helper.js` file, simply add :

```js
import setupChaiDomHelpers from 'ember-chai-dom-helpers/test-support/setup';

setupChaiDomHelpers();
```

## Usage

The assertion subject have to be one of the following:
- A DOM element
- A selector

Here's the helpers availables:

#### Rendered

Test if the specified subject exists.

```js
expect('.something').to.be.rendered;
expect('.something').to.be.not.rendered;
```

#### Text content

Test the plain text content of the subject.

```js
expect('.something').to.have.textContent('foobar');
expect('.something').to.not.have.textContent('foobar');
```


#### Html content

Test the html content of the subject.

```js
expect('.something').to.have.htmlContent('<div>foobar</div>');
expect('.something').to.not.have.htmlContent('<div>foobar</div>');
```

#### Count

Test the number of elements that matches the subject.

```js
expect('.something').to.have.count(1);
expect('.something').to.not.have.count(1);
```

#### Class

Test if the subject have a given class.

```js
expect('.something').to.have.class('active');
expect('.something').to.not.have.class('active');
```

It is also possible to test [ember-css-module](https://github.com/salsify/ember-css-modules) local classes.

```js
expect('.something').to.have.localClass('active'); // would match the class '_active_q1w2e3'
expect('.something').to.not.have.localClass('active');
```

#### Style

Test if the subject have a specific style value.

```js
expect('.something').to.have.style('color', 'hotpink');
expect('.something').to.not.have.style('color', 'hotpink');
```

#### Disabled

```js
expect('.something').to.be.disabled;
expect('.something').to.be.not.disabled;
```

#### Attribute

Test if the subject have a specific attribute value.

```js
expect('.something').to.have.attribute('alt', 'foobar');
expect('.something').to.not.have.attribute('alt', 'foobar');
```

#### Value (input)

Test the subject's value.

```js
expect('.something').to.have.value('foobar');
expect('.something').to.not.have.value('foobar');
```


## License

`ember-chai-dom-helpers` is © 2019 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-chai-dom-helpers/blob/master/LICENSE.md) file.

The cup logo is based on [this lovely icon by MHD AZMI DWIPRANATA](https://thenounproject.com/term/tea-cup/2158540), from The Noun Project. Used under a [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/) license.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
