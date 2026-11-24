// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable indent, jsdoc/no-undefined-types */

import logoOneworld from "@alaskaairux/icons/dist/logos/oneworld.mjs";
import logoStandard from "@alaskaairux/icons/dist/restricted/AS-200.mjs";
import logoOfficial from "@alaskaairux/icons/dist/restricted/AS-tagline-200.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * Pairs the Alaska Airlines logo with a product title and subtitle for the header of an Alaska Airlines extended experience, such as a partner service.
 *
 * **Key capabilities**
 * - **Product title and subtitle**: The `title` and `subtitle` slots show the product name and a short line under it.
 * - **Dark backgrounds**: `appearance="inverse"` switches to colors that read on dark backgrounds.
 * - **oneworld logo**: `variant="oneworld"` shows the oneworld logo in place of the title and subtitle.
 * - **Links to your site**: `path` sets where the lockup links, `/` by default.
 *
 * @example
 * <auro-lockup>
 *   <span slot="title">Product name</span>
 *   <span slot="subtitle">Powered by partner name</span>
 * </auro-lockup>
 *
 * @summary A header logo lockup that pairs the Alaska Airlines logo with a product title and subtitle.
 * @customElement auro-lockup
 *
 * @slot title - The product or site name shown next to the logo. The slot isn't shown when `variant="oneworld"`.
 * @slot subtitle - A short line shown under the title, such as the name of a partner. The slot isn't shown when `variant="oneworld"`.
 * @attr {Boolean} onDark - Deprecated: Use `appearance="inverse"` instead.
 */
export class AuroLockup extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.path = "/";
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

      /**
       * Sets the lockup's colors to match its background. Use `inverse` on dark backgrounds, and leave it unset or use `default` on light backgrounds.
       * @property {'default', 'inverse'}
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * Deprecated: Use `appearance="inverse"` instead.
       * Switches the lockup to colors for dark backgrounds.
       * @deprecated Use `appearance="inverse"` instead.
       */
      onDark: {
        type: Boolean,
        reflect: true
      },

      /**
       * Deprecated: Use `variant="oneworld"` instead.
       * Shows the oneworld logo in place of the title and subtitle.
       * @deprecated Use `variant="oneworld"` instead.
       */
      oneworld: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets the page the lockup links to, such as your product's home page (the link's `href`).
       * @default '/'
       */
      path: {
        type: String,
      },

      /**
       * Shows the Alaska Airlines logo without its tagline in place of the logo with the tagline.
       * Applies only when `variant="oneworld"`.
       * @relevantWhen variant === 'oneworld'
       */
      standard: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets the lockup's layout. Use `oneworld` to show the oneworld logo in place of the divider, title, and subtitle. Leave it unset to show the title and subtitle.
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-lockup"] - The tag name to register the element under.
   *
   * @example
   * AuroLockup.register("custom-lockup") // registers the element as <custom-lockup>
   *
   */
  static register(name = "auro-lockup") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroLockup);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-lockup");
  }

  updated() {
    // Support deprecated oneworld attribute
    if (this.oneworld) {
      this.setAttribute("variant", "oneworld");
    }
  }

  /**
   * @private
   * @param {string} svgContent - The imported svg icon.
   * @returns {TemplateResult} - The html template for the icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, "text/html");
    const svg = dom.body.firstChild;

    return html`${svg}`;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      logoIcon: true,
      logoDivider: !this.variant,
    };

    return html`
      <a href=${this.path} class="headerLinkBox">
        <div class="${classMap(classes)}">
          ${ifDefined(
            this.standard && this.variant === "oneworld"
              ? this.generateIconHtml(logoStandard.svg)
              : this.generateIconHtml(logoOfficial.svg),
          )}
        </div>
        ${ifDefined(
          this.variant === "oneworld"
            ? html`
          <div class="oneworldLogo">
            ${this.generateIconHtml(logoOneworld.svg)}
          </div>
        `
            : html`
          <div class="headerTitle">
            <span class="headerTitle-title heading-lg">
              <slot name="title"></slot>
            </span>
            <span class="headerTitle-tagline accent-xs">
              <slot name="subtitle"></slot>
            </span>
          </div>
        `,
        )}
      </a>
    `;
  }
}
