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
 * The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.
 *
 * @slot title - Set title for lockup
 * @slot subtitle - Set sub-title for lockup
 * @attr {Boolean} onDark - DEPRECATED - Use `appearance="inverse"` instead.
 */
export class AuroLockup extends LitElement {
  constructor() {
    super();

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
       * Defines whether the component will be on lighter or darker backgrounds.
       * @property {'default', 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * (DEPRECATED) Replaces product name and tag line with Oneworld logo.
       */
      oneworld: {
        type: Boolean,
        reflect: true,
      },

      /**
       * URL path for lockup link.
       */
      path: {
        type: String,
      },

      /**
       * Uses the standard Alaska logo in place of the official logo, requires use of `oneWorld` attribute.
       */
      standard: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets lockup variant option. Only possible value is `oneworld`.
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
   * This will register this element with the browser.
   * @param {string} [name="auro-lockup"] - The name of element that you want to register to.
   *
   * @example
   * AuroLockup.register("custom-lockup") // this will register this element to <custom-lockup/>
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
