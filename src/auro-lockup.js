// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable indent, jsdoc/no-undefined-types */

// If use litElement base class
import { LitElement, html } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import logoOfficial from '@alaskaairux/icons/dist/restricted/AS-tagline-200.mjs';
import logoStandard from '@alaskaairux/icons/dist/restricted/AS-200.mjs';
import logoOneworld from '@alaskaairux/icons/dist/logos/oneworld.mjs';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.
 *
 * @attr {String} path - URL path for lockup link
 * @attr {Boolean} onDark - Toggle onDark UI
 * @slot title - Set title for lockup
 * @slot subtitle - Set sub-title for lockup
 * @attr {boolean} standard - uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute.
 * @attr {boolean} oneworld - replaces product name and tag line with Oneworld logo
 */

// build the component class
export class AuroLockup extends LitElement {
  constructor() {
    super();

    this.path = '/';
    this.standard = false;
    this.oneworld = false;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      path: {
        type: String
      },
      standard: {
        type: Boolean
      },
      oneworld: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-lockup');
  }

  /**
   * @private
   * @param {string} svgContent - The imported svg icon.
   * @returns {TemplateResult} - The html template for the icon.
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
    const classes = {
      'logoIcon': true,
      'logoDivider': !this.oneworld
    };

    return html`
      <a href=${this.path} class="headerLinkBox">
        <div class="${classMap(classes)}">
          ${ifDefined(this.standard && this.oneworld
            ? this.generateIconHtml(logoStandard.svg)
            : this.generateIconHtml(logoOfficial.svg))
          }
        </div>
        ${ifDefined(this.oneworld ? html`
          <div class="oneworldLogo">
            ${this.generateIconHtml(logoOneworld.svg)}
          </div>
        ` : html`
          <div class="headerTitle">
            <span class="headerTitle-title">
              <slot name="title"></slot>
            </span>
            <span class="headerTitle-tagline">
              <slot name="subtitle"></slot>
            </span>
          </div>
        `)}
      </a>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-lockup")) {
  customElements.define("auro-lockup", AuroLockup);
}
