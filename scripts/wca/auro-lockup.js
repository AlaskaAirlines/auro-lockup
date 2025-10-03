import { AuroLockup } from "../../src/auro-lockup.js";

/**
 * The auro-lockup element is a standardized custom element for the use in headers of Alaska Airlines extended experiences.
 *
 */
class AuroLockupWCA extends AuroLockup {}

if (!customElements.get("auro-lockup")) {
  customElements.define("auro-lockup", AuroLockupWCA);
}
