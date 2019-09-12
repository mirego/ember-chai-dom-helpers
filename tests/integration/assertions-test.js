// Vendor
import {describe, it} from 'mocha';
import {render} from '@ember/test-helpers';
import {setupRenderingTest} from 'ember-mocha';
import {expect} from 'chai';
import hbs from 'htmlbars-inline-precompile';

describe('custom assertions', () => {
  setupRenderingTest();

  it('supports a `rendered` attribute', async () => {
    await render(hbs`<div class="something"></div>`);

    expect('.something').to.be.rendered;
    expect('.something-else').to.be.not.rendered;
  });

  it('supports a `textContent` attribute', async () => {
    await render(hbs`
      <div class="something">
        Some content
      </div>
    `);

    expect('.something').to.have.textContent('Some content');
    expect('.something').to.not.have.textContent('Some wrong content');
    expect('.something').to.not.have.textContent('content');
  });

  it('supports a `htmlContent` attribute', async () => {
    await render(hbs`
      <div class="something">
        <span>Some content</span>
      </div>
    `);

    expect('.something').to.have.htmlContent('<span>Some content</span>');
    expect('.something').to.not.have.textContent('<p>Some content</p>');
  });

  it('supports a `count` attribute', async () => {
    await render(hbs`
      <ul class="something">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    `);

    expect('.something li').to.have.count(3);
    expect('.something li').to.not.have.count(4);
  });

  it('supports a `class` attribute', async () => {
    await render(hbs`<div class="something active"></div>`);

    expect('.something').to.have.class('active');
    expect('.something').to.not.have.class('disabled');
  });

  it('supports a css-module `class` attribute', async () => {
    await render(hbs`<div class="something _active_q1w2e3"></div>`);

    expect('.something').to.have.localClass('active');
    expect('.something').to.not.have.localClass('disabled');
  });

  it('supports a `style` attribute', async () => {
    await render(hbs`<div class="something" style="color: hotpink;"></div>`);

    expect('.something').to.have.style('color', 'hotpink');
    expect('.something').to.not.have.style('color', 'red');
  });

  it('supports a `disabled` attribute', async () => {
    await render(hbs`
      <button class="disabled-something" disabled></button>
      <button class="something"></button>
    `);

    expect('.disabled-something').to.be.disabled;
    expect('.something').to.not.be.disabled;
  });

  it('supports a `attribute` attribute', async () => {
    await render(hbs`<div class="something" title="Foobar"></div>`);

    expect('.something').to.have.attribute('title', 'Foobar');
    expect('.something').to.not.have.attribute('title', 'Not Foobar');
  });

  it('supports a `value` attribute', async () => {
    await render(hbs`<input class="something" value="Foobar" />`);

    expect('.something').to.have.value('Foobar');
    expect('.something').to.not.have.value('Not Foobar');
  });
});
