import { AuroLockup } from './src/auro-lockup';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-lockup') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroLockup {});
  }
}

export { registerComponent }
