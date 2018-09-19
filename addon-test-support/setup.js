// Vendors
import {findAll, find} from 'ember-native-dom-helpers';
import chai from 'chai';

// Utilities
const elementFrom = target => {
  if (typeof target === 'object') return target;
  return find(target);
};

export default () => {
  chai.Assertion.addProperty('rendered', function() {
    this.assert(
      elementFrom(this._obj),
      'expected #{this} to be rendered',
      'expected #{this} to be not rendered'
    );
  });

  chai.Assertion.addMethod('textContent', function(expectedContent) {
    const element = elementFrom(this._obj);
    const actualContent = element.textContent.trim().replace(/[ \n]+/g, ' ');

    this.assert(
      actualContent === expectedContent,
      'expected #{this} to have the content #{exp} but got #{act}',
      'expected #{this} to not have the content #{act}',
      expectedContent,
      actualContent
    );
  });

  chai.Assertion.addMethod('count', function(expectedCount) {
    const actualCount = findAll(this._obj).length;

    this.assert(
      actualCount === expectedCount,
      'expected #{this} to be there #{exp} times, but got #{act}',
      'expected #{this} to not be there #{act} times',
      expectedCount,
      actualCount
    );
  });

  chai.Assertion.addMethod('class', function(expectedClass) {
    this.assert(
      elementFrom(this._obj).classList.contains(expectedClass),
      'expected #{this} to have the class #{exp}',
      'expected #{this} to not have the class #{exp}',
      expectedClass
    );
  });

  chai.Assertion.addMethod('localClass', function(expectedClass) {
    const hasClass = Array.from(elementFrom(this._obj).classList).some(
      className => className.indexOf(`_${expectedClass}_`) === 0
    );

    this.assert(
      hasClass,
      'expected #{this} to have the local-class #{exp}',
      'expected #{this} to not have the local-class #{exp}',
      expectedClass
    );
  });

  chai.Assertion.addMethod('style', function(styleAttribute, expectedStyle) {
    const actualStyle = elementFrom(this._obj).style[styleAttribute];

    this.assert(
      actualStyle === expectedStyle,
      `expected #{this} to have ${styleAttribute} to #{exp}, but got #{act}`,
      `expected #{this} to not have ${styleAttribute} to #{act}`,
      expectedStyle,
      actualStyle
    );
  });

  chai.Assertion.addMethod('htmlContent', function(expectedHtml) {
    const actualHtml = elementFrom(this._obj).innerHTML;

    this.assert(
      actualHtml === expectedHtml,
      'expected #{this} to have the html #{exp} but got #{act}',
      'expected #{this} to not have the html #{act}',
      expectedHtml,
      actualHtml
    );
  });

  chai.Assertion.addProperty('disabled', function() {
    this.assert(
      elementFrom(this._obj).disabled,
      'expected #{this} to be disabled',
      'expected #{this} to be not disabled'
    );
  });

  chai.Assertion.addMethod('id', function(expectedId) {
    const actualId = elementFrom(this._obj).id;

    this.assert(
      actualId === expectedId,
      `expected #{this} to have the ID #{exp}, but got #{act}`,
      `expected #{this} to not have the ID #{act}`,
      expectedId,
      actualId
    );
  });

  chai.Assertion.addMethod('attribute', function(attribute, expectedAttribute) {
    const actualAttribute = elementFrom(this._obj).getAttribute(attribute);

    this.assert(
      actualAttribute === expectedAttribute,
      `expected #{this} to have ${attribute} to #{exp}, but got #{act}`,
      `expected #{this} to not have ${attribute} to #{act}`,
      expectedAttribute,
      actualAttribute
    );
  });

  chai.Assertion.addMethod('value', function(expectedValue) {
    const actualValue = elementFrom(this._obj).value;

    this.assert(
      actualValue === expectedValue,
      `expected #{this} to have to have value #{exp}, but got #{act}`,
      `expected #{this} to not have value #{act}`,
      expectedValue,
      actualValue
    );
  });
};
