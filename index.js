import { AuroLockup } from './src/auro-lockup.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-lockup', AuroLockup);
