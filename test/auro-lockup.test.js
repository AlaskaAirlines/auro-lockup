import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-lockup.js';

describe('auro-lockup', () => {
  it('sets the CSS class on auro-lockup > div element', async () => {
    const el = await fixture(html`
      <auro-lockup cssclass="testClass"></auro-lockup>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-lockup is accessible', async () => {
    const el = await fixture(html`
      <auro-lockup cssclass="testClass"></auro-lockup>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-lockup custom element is defined', async () => {
    const el = await !!customElements.get("auro-lockup");

    await expect(el).to.be.true;
  });
});
