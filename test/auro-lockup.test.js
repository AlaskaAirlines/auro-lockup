import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-lockup", () => {
  it("auro-lockup is accessible", async () => {
    const el = await fixture(html`
      <auro-lockup>
        <span slot="title">Product Name</span>
        <span slot="subtitle">Powered by Partner Name</span>
      </auro-lockup>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-lockup custom element is defined", async () => {
    const el = await !!customElements.get("auro-lockup");

    await expect(el).to.be.true;
  });

  it('auro-lockup variant="oneworld" attribute replaces product and tagline with oneworld logo', async () => {
    const el = await fixture(html`
      <auro-lockup variant="oneworld"></auro-lockup>
    `);

    const logo = el.shadowRoot.querySelector(".oneworldLogo");
    const headerTitle = el.shadowRoot.querySelector(".headerTitle");

    await expect(logo).to.be.visible;
    await expect(headerTitle).to.not.exist;
  });

  it("auro-lockup oneworld logo with standard Alaska logo sans tagline", async () => {
    const el = await fixture(html`
      <auro-lockup variant="oneworld" standard></auro-lockup>
    `);

    const logo = el.shadowRoot.querySelector(".oneworldLogo");
    const headerTitle = el.shadowRoot.querySelector(".headerTitle");

    await expect(logo).to.be.visible;
    await expect(headerTitle).to.not.exist;
  });
});
