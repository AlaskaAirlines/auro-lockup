import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-lockup.js';

describe('auro-lockup', () => {

  it('auro-lockup is accessible', async () => {
    const el = await fixture(html`
      <auro-lockup>
        <span slot="title">Product Name</span>
        <span slot="subtitle">Powered by Partner Name</span>
      </auro-lockup>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-lockup custom element is defined', async () => {
    const el = await !!customElements.get("auro-lockup");

    await expect(el).to.be.true;
  });
});
