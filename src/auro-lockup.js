// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import logo from '@alaskaairux/icons/dist/restricted/AS-tagline-200_es6.js';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-lockup is a standardized custom element for the use in headers of Alaska Airlines extended experiences
 *
 * @attr {String} path - URL path for lockup link
 * @attr {Boolean} onDark - Toggle onDark UI
 * @slot title - Set title for lockup
 * @slot subtitle - Set sub-title for lockup
 */

// build the component class
class AuroLockup extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.path = '/';
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      path:   { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private Internal function to generate the HTML for the icon to use
   * @param {string} svgContent - The imported svg icon
   * @returns {TemplateResult} - The html template for the icon
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
    svg = dom.body.firstChild;

   return html`${svg}`;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <a href=${this.path} class="headerLinkBox">
        <div class="logoIcon">
          ${this.generateIconHtml(logo.svg)}
        </div>
        <div class="headerTitle">
          <span class="headerTitle-title">
            <slot name="title"></slot>
          </span>
          <span class="headerTitle-tagline">
            <slot name="subtitle"></slot>
          </span>
        </div>
      </a>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-lockup")) {
  customElements.define("auro-lockup", AuroLockup);
}
