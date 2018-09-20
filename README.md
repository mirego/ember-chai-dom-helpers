# ember-chai-dom-helpers

A set of chai assertions ready for your DOM.

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

`ember-chai-dom-helpers` is © 2018 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-chai-dom-helpers/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
